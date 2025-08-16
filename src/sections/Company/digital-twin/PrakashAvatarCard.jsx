// Alternative approach: Load D-ID from CDN with proper error handling

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { P3 } from "@/components/CustomTags";

// Single AvatarCard component
function AvatarCard({ avatar, delay = 0, sdkReady = false }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);
  const agentManagerRef = useRef(null);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  useEffect(() => {
    if (!avatar.agentId || !sdkReady) {
      if (!avatar.agentId) setIsLoading(false);
      return;
    }

    let timeoutId;

    const initializeAgent = async () => {
      try {
        await new Promise((resolve) => {
          timeoutId = setTimeout(resolve, delay);
        });

        // Check if D-ID SDK is loaded and available
        if (
          typeof window === "undefined" ||
          !window.DID ||
          !window.DID.createAgentManager
        ) {
          throw new Error("D-ID SDK not properly loaded");
        }

        console.log(`Initializing D-ID agent for ${avatar.name}...`);

        const agentManager = await window.DID.createAgentManager(
          avatar.agentId,
          {
            auth: {
              type: "key",
              clientKey: avatar.clientKey,
            },
            callbacks: {
              onAgentReady: () => {
                console.log(`Agent ${avatar.name} is ready`);
                setIsLoading(false);
              },
              onError: (error) => {
                console.error(`Agent ${avatar.name} error:`, error);
                setError(error.message || "Agent initialization failed");
                setIsLoading(false);
              },
              onConnectionStateChange: (state) => {
                console.log(`Agent ${avatar.name} connection state:`, state);
              },
            },
            streamOptions: {
              compatibilityMode: "auto",
              streamWarmup: true,
            },
          }
        );

        agentManagerRef.current = agentManager;

        // Connect the agent
        await agentManager.connect();

        // If there's a video element from the agent, append it to container
        if (containerRef.current && agentManager.videoElement) {
          containerRef.current.innerHTML = "";
          containerRef.current.appendChild(agentManager.videoElement);
          agentManager.videoElement.style.width = "100%";
          agentManager.videoElement.style.height = "100%";
          agentManager.videoElement.style.objectFit = "cover";
          agentManager.videoElement.style.borderRadius = "1rem";
        }

        console.log(`D-ID agent successfully initialized for ${avatar.name}`);
      } catch (err) {
        console.error(
          `Failed to initialize D-ID agent for ${avatar.name}:`,
          err
        );
        setError(err.message || "Failed to initialize agent");
        setIsLoading(false);
      }
    };

    initializeAgent();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (agentManagerRef.current) {
        try {
          agentManagerRef.current.disconnect?.();
          agentManagerRef.current.destroy?.();
        } catch (e) {
          console.warn("Error during cleanup:", e);
        }
      }
    };
  }, [avatar.agentId, avatar.clientKey, avatar.name, delay, sdkReady]);

  return (
    <div
      className="relative w-[318px] h-[482px] cursor-pointer flex-shrink-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}>
        {/* Front Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl p-3 border border-black-100 bg-white shadow-sm overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}>
          {/* Online Status */}
          <div className="absolute top-6 right-6 flex items-center gap-2 text-sm text-green-500 font-medium z-10">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Online</span>
          </div>

          {/* Avatar Container */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden bg-gray-50">
            {avatar.iframeUrl ? (
              <iframe
                src={avatar.iframeUrl}
                className="w-full h-full rounded-2xl border border-black-200 shadow-lg"
                frameBorder="0"
                allow="microphone; camera"
                allowFullScreen
                title={`${avatar.name} Digital Avatar`}
              />
            ) : avatar.agentId ? (
              <div
                ref={containerRef}
                className="w-full h-full rounded-2xl border border-black-200 shadow-lg bg-white flex items-center justify-center"
                style={{ minHeight: "350px" }}>
                {isLoading && (
                  <div className="text-gray-400 text-sm animate-pulse">
                    Loading {avatar.name}...
                  </div>
                )}
                {error && (
                  <div className="text-red-400 text-sm text-center p-4">
                    <div>Failed to load {avatar.name}</div>
                    <div className="text-xs mt-1">{error}</div>
                  </div>
                )}
              </div>
            ) : (
              <Image
                src={avatar.image}
                alt={avatar.name}
                width={280}
                height={350}
                className="w-full h-full object-cover rounded-2xl border border-black-200 shadow-lg object-center"
                style={{ objectPosition: "center 20%" }}
              />
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
            <a target="_blank" href={avatar.ctaLink}>
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

// Container component
export default function AvatarCardsContainer() {
  const [sdkReady, setSdkReady] = useState(false);
  const [sdkError, setSdkError] = useState(null);

  useEffect(() => {
    const loadDIDSDK = async () => {
      try {
        // Check if already loaded
        if (window.DID && window.DID.createAgentManager) {
          setSdkReady(true);
          return;
        }

        console.log("Loading D-ID SDK...");

        // Try multiple CDN sources
        const cdnUrls = [
          "https://unpkg.com/@d-id/client-sdk@latest/dist/index.umd.js",
          "https://cdn.jsdelivr.net/npm/@d-id/client-sdk@latest/dist/index.umd.js",
        ];

        let loaded = false;

        for (const url of cdnUrls) {
          if (loaded) break;

          try {
            await new Promise((resolve, reject) => {
              const script = document.createElement("script");
              script.src = url;
              script.async = true;

              script.onload = () => {
                console.log(`D-ID SDK loaded from: ${url}`);

                // Check if SDK is properly available
                if (window.DID && window.DID.createAgentManager) {
                  setSdkReady(true);
                  loaded = true;
                  resolve();
                } else {
                  reject(new Error("SDK loaded but not available"));
                }
              };

              script.onerror = () => {
                reject(new Error(`Failed to load from ${url}`));
              };

              document.head.appendChild(script);
            });
          } catch (error) {
            console.warn(`Failed to load SDK from ${url}:`, error);
            if (url === cdnUrls[cdnUrls.length - 1]) {
              throw error;
            }
          }
        }
      } catch (error) {
        console.error("Failed to load D-ID SDK from all sources:", error);
        setSdkError(
          "Failed to load D-ID SDK. Please check your internet connection."
        );
      }
    };

    loadDIDSDK();
  }, []);

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

  if (sdkError) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-red-500 text-center">
          <div>Failed to load D-ID SDK</div>
          <div className="text-sm mt-1">{sdkError}</div>
          <div className="text-xs mt-2 text-gray-500">
            Falling back to static images...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-4 sm:gap-6 md:gap-8">
      {avatarsData.map((avatar, index) => (
        <AvatarCard
          key={avatar.agentId}
          avatar={avatar}
          delay={index * 2000}
          sdkReady={sdkReady}
        />
      ))}
    </div>
  );
}
