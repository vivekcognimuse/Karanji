"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { P3, P4 } from "@/components/CustomTags";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

// Single AvatarCard component with iFrame isolation
function AvatarCard({ avatar, description }) {
  const [agentLoaded, setAgentLoaded] = useState(false);
  const [showAgent, setShowAgent] = useState(false);

  // Listen for messages from iframe
  useEffect(() => {
    const handleMessage = (event) => {
      if (
        event.data.type === "agent-loaded" &&
        event.data.agent === avatar.name.toLowerCase()
      ) {
        setAgentLoaded(true);
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
    <div className="relative w-full">
      <div className="relative flex flex-col w-full h-full rounded-2xl p-3 border border-black-100  shadow-sm overflow-hidden">
        {/* Online Status */}
        <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
          <Image
            src="/logo.svg"
            alt="karanji Logo"
            width={40}
            height={10}
            className="h-6 w-fit"
          />
        </div>

        {/* Avatar Container */}
        <div className="w-full h-[350px] rounded-xl overflow-hidden ">
          {showAgent && avatar.iframeFile ? (
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
            <div className="relative w-full h-full">
              <Image
                src={avatar.image}
                alt={avatar.name}
                width={280}
                height={350}
                className="w-full h-full object-contain rounded-2xl border border-black-200 shadow-lg object-center"
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
        <div className="px-6 py-5 flex items-start justify-between ">
          <div className="flex-1">
            <h4 className="">{avatar.name}</h4>
            <p className="text-black-600  font-normal mb-3">{avatar.role}</p>
            <P4 className="">{description}</P4>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main container component
export default function ChooseAvatarSection({ data }) {
  const avatarsData = [
    {
      name: "Prakash",
      role: "CEO, Karanji",
      description:
        "Our CEO Prakash's clone handles company introductions, explains our services, and discusses how Karanji can solve business challenges—all while keeping Prakash's unique conversational style. This innovation helped Prakash reclaim 30% of his weekly calendar and boosted engagement with potential partners.",
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
    // {
    //   name: "Srikant",
    //   description: `At Karanji, we created Srikant's (our Solution Architect) clone to help our team tackle AI implementation challenges for clients in Aviation, Healthcare, Oil & Gas, Logistics, and Education. You can ask Srikant real-world questions like, "How can a mid-sized healthcare provider automate customer service while ensuring compliance?" and get customized frameworks, templates, and examples. Srikant's clone cut our solutioning TAT by 50%.`,
    //   role: "Solution Architect, Karanji",
    //   image: "/Company/Digital Twins/Srikant Digital Twin.webp",
    //   iframeFile: "/avatars/srikant-avatar.html", // Path to isolated HTML file
    //   expertise: [
    //     "Solves AI Implementation Challenges",
    //     "Explore Industry Use Cases",
    //     "Get Tailored Frameworks",
    //     "Get Actionable Templates",
    //   ],
    //   ctaText: "Talk to Our Solution Architect",
    //   ctaLink: "https://2ly.link/28kzS",
    // },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center sm:items-stretch gap-4 sm:gap-6 md:gap-8">
      {avatarsData.map((avatar, index) => (
        <RevealWrapper
          key={avatar.name}
          direction="up"
          duration={0.6}
          delay={0.2 + index * 0.15}
          distance={30}
          threshold={0.2}
          className="w-full mx-auto md:mx-0  lg:w-1/2 flex-shrink-0"
        >
          <AvatarCard description={avatar.description} avatar={avatar} />
        </RevealWrapper>
      ))}
    </div>
  );
}
