import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { P3 } from "@/components/CustomTags";
import Link from "next/link";

// Single AvatarCard component that takes props
function AvatarCard({ avatar, delay = 0 }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  // Load D-ID script when component mounts with delay
  useEffect(() => {
    if (!avatar.agentId) {
      return;
    }

    const timer = setTimeout(() => {
      // Create a unique ID for this avatar's container
      const containerId = `did-agent-${avatar.agentId}`;

      // Check if script already exists for this agent
      const existingScript = document.querySelector(
        `script[data-agent-id="${avatar.agentId}"]`
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://agent.d-id.com/v2/index.js";
        script.setAttribute("data-mode", "full");
        script.setAttribute("data-client-key", avatar.clientKey);
        script.setAttribute("data-agent-id", avatar.agentId);
        script.setAttribute("data-name", "did-agent");
        script.setAttribute("data-monitor", "true");
        script.setAttribute("data-target-id", containerId);

        script.onload = () => {
          console.log(`D-ID agent loaded for ${avatar.name}`);
          setScriptLoaded(true);
        };

        script.onerror = (error) => {
          console.error(`Failed to load D-ID agent for ${avatar.name}:`, error);
        };

        document.body.appendChild(script);
        console.log(
          `Appending D-ID script for ${avatar.name} with container ID: ${containerId}`
        );
      } else {
        console.log(`Script already exists for ${avatar.name}`);
        setScriptLoaded(true);
      }
    }, delay);

    // Cleanup function
    return () => {
      clearTimeout(timer);
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
              // Use D-ID agent container if agentId is provided
              <div
                id={`did-agent-${avatar.agentId}`}
                className="w-full h-full rounded-2xl border border-black-200 shadow-lg bg-white flex items-center justify-center"
                style={{ minHeight: "350px" }}>
                {/* This content will be replaced by D-ID agent */}
                {!scriptLoaded && (
                  <div className="text-gray-400 text-sm animate-pulse">
                    Loading {avatar.name}...
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
