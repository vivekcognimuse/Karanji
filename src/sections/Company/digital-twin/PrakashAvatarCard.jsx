import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { P3 } from "@/components/CustomTags";

// Single AvatarCard component that takes props
function AvatarCard({ avatar, delay = 0 }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [agent, setAgent] = useState(null);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  // Load D-ID SDK and initialize agent
  useEffect(() => {
    if (!avatar.agentId || !avatar.clientKey) {
      return;
    }

    let timeoutId;
    let currentAgent = null;

    const initializeAgent = async () => {
      try {
        // Check if SDK is already loaded
        if (typeof window.DID === "undefined") {
          // Load the SDK script
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://agent.d-id.com/v2/index.js";
            script.type = "module";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        // Wait for SDK to be available
        let attempts = 0;
        while (typeof window.DID === "undefined" && attempts < 50) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          attempts++;
        }

        if (typeof window.DID === "undefined") {
          throw new Error("D-ID SDK failed to load");
        }

        setSdkLoaded(true);

        // Initialize the agent with SDK
        if (containerRef.current) {
          const agentConfig = {
            agentId: avatar.agentId,
            clientKey: avatar.clientKey,
            target: containerRef.current,
            mode: "full",
            monitor: true,
            // Additional configuration options
            ui: {
              components: {
                // Customize UI components if needed
              },
            },
            // Event handlers
            onReady: () => {
              console.log(`D-ID agent ready for ${avatar.name}`);
            },
            onError: (error) => {
              console.error(`D-ID agent error for ${avatar.name}:`, error);
              setError(error);
            },
            onStatusChange: (status) => {
              console.log(
                `D-ID agent status changed for ${avatar.name}:`,
                status
              );
            },
          };

          // Create the agent instance
          currentAgent = window.DID.createAgent(agentConfig);
          setAgent(currentAgent);

          console.log(`D-ID agent initialized for ${avatar.name}`);
        }
      } catch (error) {
        console.error(
          `Failed to initialize D-ID agent for ${avatar.name}:`,
          error
        );
        setError(error);
      }
    };

    // Initialize with delay
    timeoutId = setTimeout(initializeAgent, delay);

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (currentAgent) {
        try {
          currentAgent.destroy();
        } catch (e) {
          console.warn("Error destroying agent:", e);
        }
      }
    };
  }, [avatar.agentId, avatar.clientKey, avatar.name, delay]);

  return (
    <div
      className="relative w-[318px] h-[482px] cursor-pointer flex-shrink-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}>
        {/* Front Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl p-3 border border-black-100 bg-white shadow-sm overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}>
          {/* Online Status */}
          <div className="absolute top-6 right-6 flex items-center gap-2 text-sm text-green-500 font-medium z-10">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Online</span>
          </div>

          {/* Avatar Container - Takes most of the card space */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden bg-gray-50">
            {avatar.iframeUrl ? (
              // Use direct iframe if URL is provided
              <iframe
                src={avatar.iframeUrl}
                className="w-full h-full rounded-2xl border border-black-200 shadow-lg"
                frameBorder="0"
                allow="microphone; camera"
                allowFullScreen
                title={`${avatar.name} Digital Avatar`}
              />
            ) : avatar.agentId ? (
              // Use D-ID SDK container if agentId is provided
              <div
                ref={containerRef}
                className="w-full h-full rounded-2xl border border-black-200 shadow-lg bg-white flex items-center justify-center"
                style={{ minHeight: "350px" }}>
                {/* This content will be replaced by D-ID SDK */}
                {!sdkLoaded && !error && (
                  <div className="text-gray-400 text-sm animate-pulse">
                    Loading {avatar.name}...
                  </div>
                )}
                {error && (
                  <div className="text-red-400 text-sm text-center p-4">
                    Failed to load {avatar.name}
                    <br />
                    <span className="text-xs">{error.message}</span>
                  </div>
                )}
              </div>
            ) : (
              // Fallback to image if neither iframe URL nor agentId is provided
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

          {/* Avatar Info - Compact bottom section */}
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
          {/* Content on top of background */}
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
              <Button variant="secondary" size="sm" className="">
                {avatar.ctaText || `Talk to ${avatar.name}`}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Container component that manages both avatars
export default function AvatarCardsContainer() {
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

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-4 sm:gap-6 md:gap-8">
      {avatarsData.map((avatar, index) => (
        <AvatarCard
          key={avatar.agentId}
          avatar={avatar}
          delay={index * 2000} // Add 2 second delay for each subsequent avatar
        />
      ))}
    </div>
  );
}
