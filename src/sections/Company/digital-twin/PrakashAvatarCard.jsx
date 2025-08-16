"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { P3 } from "@/components/CustomTags";

// Global agent manager to handle multiple agents sequentially
class AgentManagerSingleton {
  constructor() {
    this.currentAgent = null;
    this.agentQueue = new Map();
    this.isInitializing = false;
  }

  async initializeAgent(agentData, callbacks) {
    // If an agent is already active, disconnect it first
    if (this.currentAgent) {
      try {
        await this.currentAgent.disconnect();
        console.log("Previous agent disconnected");
      } catch (e) {
        console.warn("Error disconnecting previous agent:", e);
      }
      this.currentAgent = null;
    }

    // Prevent multiple simultaneous initializations
    if (this.isInitializing) {
      console.log("Agent initialization already in progress, queuing...");
      return null;
    }

    this.isInitializing = true;

    try {
      if (!window.DID) {
        throw new Error("D-ID SDK not loaded");
      }

      const streamOptions = {
        compatibilityMode: "auto",
        streamWarmup: true,
        outputResolution: 512,
      };

      const agentManager = await window.DID.createAgentManager(
        agentData.agentId,
        {
          auth: {
            type: "key",
            clientKey: agentData.clientKey,
          },
          callbacks,
          streamOptions,
        }
      );

      this.currentAgent = agentManager;
      await agentManager.connect();

      console.log(`Agent ${agentData.name} initialized successfully`);
      return agentManager;
    } catch (error) {
      console.error(`Failed to initialize agent ${agentData.name}:`, error);
      throw error;
    } finally {
      this.isInitializing = false;
    }
  }

  async switchToAgent(agentData, callbacks) {
    return this.initializeAgent(agentData, callbacks);
  }

  getCurrentAgent() {
    return this.currentAgent;
  }

  async cleanup() {
    if (this.currentAgent) {
      try {
        await this.currentAgent.disconnect();
      } catch (e) {
        console.warn("Error during cleanup:", e);
      }
      this.currentAgent = null;
    }
  }
}

// Global singleton instance
const globalAgentManager = new AgentManagerSingleton();

// Individual Avatar Card Component
function AvatarCard({ avatar, isActive, onActivate }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [agentManager, setAgentManager] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const srcObjectRef = useRef(null);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  // Initialize agent when this card becomes active
  useEffect(() => {
    if (isActive && !agentManager && avatar.agentId) {
      initializeThisAgent();
    } else if (!isActive && agentManager) {
      // Clean up when no longer active
      setAgentManager(null);
      setIsConnected(false);
      setIsLoading(false);
    }
  }, [isActive, avatar.agentId]);

  const initializeThisAgent = async () => {
    if (!avatar.agentId) return;

    setIsLoading(true);
    setError(null);

    try {
      const callbacks = {
        onSrcObjectReady: (srcObject) => {
          console.log(`onSrcObjectReady for ${avatar.name}:`, srcObject);
          if (videoRef.current && srcObject) {
            videoRef.current.srcObject = srcObject;
            srcObjectRef.current = srcObject;
          }
          return srcObject;
        },

        onVideoStateChange: (state) => {
          console.log(`${avatar.name} video state:`, state);
          if (videoRef.current) {
            if (state === "STOP") {
              videoRef.current.srcObject = undefined;
              if (agentManager?.agent?.presenter?.idle_video) {
                videoRef.current.src = agentManager.agent.presenter.idle_video;
              }
            } else {
              videoRef.current.src = "";
              videoRef.current.srcObject = srcObjectRef.current;
            }
          }
        },

        onConnectionStateChange: (state) => {
          console.log(`${avatar.name} connection state:`, state);
          if (state === "connected") {
            setIsConnected(true);
            setIsLoading(false);
          } else if (state === "disconnected" || state === "closed") {
            setIsConnected(false);
          } else if (state === "fail") {
            setError(`Connection failed for ${avatar.name}`);
            setIsLoading(false);
          }
        },

        onNewMessage: (messages, type) => {
          console.log(`${avatar.name} new message:`, messages, type);
        },

        onError: (error, errorData) => {
          console.error(`${avatar.name} error:`, error, errorData);
          setError(error.message || error);
          setIsLoading(false);
        },
      };

      const manager = await globalAgentManager.initializeAgent(
        avatar,
        callbacks
      );
      setAgentManager(manager);
    } catch (err) {
      console.error(`Failed to initialize ${avatar.name}:`, err);
      setError(err.message || "Failed to initialize agent");
      setIsLoading(false);
    }
  };

  const handleCardClick = () => {
    if (!isActive) {
      onActivate(avatar.agentId);
    }
  };

  const handleStartChat = () => {
    if (agentManager && isConnected) {
      agentManager.chat("Hello! How can you help me today?");
    }
  };

  return (
    <div
      className={`relative w-[318px] h-[482px] cursor-pointer flex-shrink-0 transition-all duration-300 ${
        isActive ? "ring-2 ring-blue-500 ring-opacity-50" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}>
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}>
        {/* Front Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl p-3 border border-black-100 bg-white shadow-sm overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}>
          {/* Status Indicator */}
          <div className="absolute top-6 right-6 flex items-center gap-2 text-sm font-medium z-10">
            <div
              className={`w-2 h-2 rounded-full ${
                isActive && isConnected
                  ? "bg-green-500"
                  : isActive && isLoading
                  ? "bg-yellow-500 animate-pulse"
                  : "bg-gray-400"
              }`}></div>
            <span
              className={
                isActive && isConnected
                  ? "text-green-500"
                  : isActive && isLoading
                  ? "text-yellow-500"
                  : "text-gray-500"
              }>
              {isActive && isConnected
                ? "Online"
                : isActive && isLoading
                ? "Loading..."
                : "Click to Activate"}
            </span>
          </div>

          {/* Avatar Container */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden bg-gray-50 relative">
            {isActive && avatar.agentId ? (
              <>
                {/* Video element for active agent */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-xl"
                  autoPlay
                  muted
                  playsInline
                  style={{ display: !isLoading && !error ? "block" : "none" }}
                />

                {/* Loading/Error overlay */}
                {(isLoading || error) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-xl">
                    {isLoading && (
                      <div className="text-gray-400 text-sm animate-pulse">
                        Activating {avatar.name}...
                      </div>
                    )}
                    {error && (
                      <div className="text-red-400 text-sm text-center p-4">
                        <div>Failed to load {avatar.name}</div>
                        <div className="text-xs mt-1">{error}</div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(avatar.ctaLink, "_blank");
                          }}
                          className="mt-2 text-blue-500 underline text-xs">
                          Chat directly instead
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Chat button for active connected agent */}
                {isConnected && !isLoading && !error && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStartChat();
                      }}
                      className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                      Start Chat
                    </button>
                  </div>
                )}
              </>
            ) : (
              // Static image for inactive agents
              <div className="relative w-full h-full">
                <Image
                  src={avatar.image}
                  alt={avatar.name}
                  width={280}
                  height={350}
                  className="w-full h-full object-cover rounded-xl object-center"
                  style={{ objectPosition: "center 20%" }}
                />
                {/* Overlay for non-active cards */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-xl">
                    <div className="bg-white bg-opacity-90 px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium">
                        Click to Activate
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Avatar Info */}
          <div className="px-6 py-5 flex items-center justify-between bg-white">
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-1 leading-tight">
                {avatar.name}
              </h4>
              <p className="text-gray-600 text-sm font-normal">{avatar.role}</p>
            </div>
            <div className="w-6 h-6 flex-shrink-0 ml-4">
              <Image
                src="/Icons/clarity_arrow-line.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="w-full h-full opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}>
          <div className="relative z-10 flex-1 flex flex-col justify-start space-y-4 pt-4">
            {avatar.expertise?.map((item, index) => (
              <React.Fragment key={index}>
                <P3 className="text-black-500">{item}</P3>
                {index < avatar.expertise.length - 1 && (
                  <div className="border-t border-gray-400/30" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="relative z-10 mt-8 mx-auto">
            <a target="_blank" href={avatar.ctaLink} rel="noopener noreferrer">
              <Button variant="secondary" size="sm">
                {avatar.ctaText || `Talk to ${avatar.name}`}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Container Component
export default function AvatarCardsContainer() {
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [activeAgentId, setActiveAgentId] = useState(null);

  // Load D-ID SDK
  useEffect(() => {
    const loadSDK = async () => {
      try {
        if (window.DID) {
          setSdkLoaded(true);
          return;
        }

        const DID = await import("@d-id/client-sdk");
        window.DID = DID;
        setSdkLoaded(true);
        console.log("D-ID SDK loaded successfully");
      } catch (error) {
        console.error("Failed to load D-ID SDK:", error);
      }
    };

    loadSDK();
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      globalAgentManager.cleanup();
    };
  }, []);

  const handleActivateAgent = (agentId) => {
    setActiveAgentId(agentId);
  };

  const avatarsData = [
    {
      name: "Prakash",
      role: "CEO, Karanji",
      image: "/Company/Digital Twins/Prakash digital twin.webp",
      agentId: "v2_agt_BlxDCvda",
      clientKey:
        "YXV0aDB8NjgyYzc1ZGU4M2Y5YWU0YjM3YWJiNGNkOlVOWDF5UnZ3Mk9hZVg2bjJBbDViZw==",
      expertise: [
        "Know About the Company",
        "Explore Our Services",
        "How Karanji solves your problem",
      ],
      ctaText: "Talk to Our CEO",
      ctaLink: "https://linkly.link/2BKPj",
    },
    {
      name: "Srikant",
      role: "Solution Architect, Karanji",
      image: "/Company/Digital Twins/Srikant Digital Twin.webp",
      agentId: "v2_agt_e98VhldA",
      clientKey:
        "Z29vZ2xlLW9hdXRoMnwxMTI5OTgwMjkzOTg4OTUzMjg4MzA6RGdndlE0ZHJIUzB6SC1hLVZfckp6",
      expertise: [
        "Solves AI Implementation Challenges",
        "Explore Industry Use Cases",
        "Get Tailored Frameworks",
        "Get Actionable Templates",
      ],
      ctaText: "Talk to Our Solution Architect",
      ctaLink: "https://2ly.link/28kzS",
    },
  ];

  if (!sdkLoaded) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-gray-500 text-sm animate-pulse">
          Loading D-ID SDK...
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Instructions */}
      <div className="text-center text-sm text-gray-600">
        Click on an avatar to activate and interact with the agent
      </div>

      {/* Avatar Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-4 sm:gap-6 md:gap-8">
        {avatarsData.map((avatar) => (
          <AvatarCard
            key={avatar.agentId}
            avatar={avatar}
            isActive={activeAgentId === avatar.agentId}
            onActivate={handleActivateAgent}
          />
        ))}
      </div>
    </div>
  );
}
