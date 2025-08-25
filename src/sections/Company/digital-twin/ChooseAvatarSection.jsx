"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { P3 } from "@/components/CustomTags";

// Single AvatarCard component with iFrame isolation
function AvatarCard({ avatar }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [agentLoaded, setAgentLoaded] = useState(false);
  const [showAgent, setShowAgent] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(false);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  // Listen for messages from iframe
  useEffect(() => {
    const handleMessage = (event) => {
      // Verify origin if needed for security
      // if (event.origin !== window.location.origin) return;

      if (
        event.data.type === "agent-loaded" &&
        event.data.agent === avatar.name.toLowerCase()
      ) {
        setAgentLoaded(true);
        console.log(`${avatar.name} agent loaded via iframe`);
      }

      if (
        event.data.type === "agent-error" &&
        event.data.agent === avatar.name.toLowerCase()
      ) {
        console.error(`${avatar.name} agent failed to load`);
        setAgentLoaded(false);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [avatar.name]);

  // Auto-show agent after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAgent(true);
    }, 1000); // 1 second delay before showing iframe

    return () => clearTimeout(timer);
  }, []);

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
            <span>{agentLoaded ? "Online" : "Loading..."}</span>
          </div>

          {/* Avatar Container */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden bg-gray-50">
            {showAgent && avatar.iframeFile ? (
              // Use iframe with isolated HTML file
              <iframe
                src={avatar.iframeFile}
                className="w-full h-full rounded-2xl border border-black-200 shadow-lg"
                frameBorder="0"
                allow="microphone; camera"
                allowFullScreen
                title={`${avatar.name} Digital Avatar`}
                sandbox="allow-same-origin allow-scripts allow-forms allow-modals allow-popups"
              />
            ) : (
              // Fallback to image while loading
              <div className="relative w-full h-full">
                <Image
                  src={avatar.image}
                  alt={avatar.name}
                  width={280}
                  height={350}
                  className="w-full h-full object-cover rounded-2xl border border-black-200 shadow-lg object-center"
                  style={{ objectPosition: "center 20%" }}
                />
                {!showAgent && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-white text-sm animate-pulse">
                      Initializing {avatar.name}...
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

// Main container component
export default function ChooseAvatarSection() {
  const avatarsData = [
    {
      name: "Prakash",
      role: "CEO, Karanji",
      image: "/Company/Digital Twins/Prakash digital twin.webp",
      iframeFile: "/avatars/prakash-avatar.html", // Path to isolated HTML file
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
      iframeFile: "/avatars/srikant-avatar.html", // Path to isolated HTML file
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
        <AvatarCard key={avatar.name} avatar={avatar} />
      ))}
    </div>
  );
}
