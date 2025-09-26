"use client";
import React, { useState } from "react";
import { P3 } from "@/components/CustomTags";
import MemberCard from "./MemberCard";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const TeamSection = ({ data = [] }) => {
  const [expandedSection, setExpandedSection] = useState(0); // First accordion expanded by default

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const handleConnect = (memberName) => {
    console.log(`Connecting with ${memberName}`);
    // Add your connect logic here
  };

  const handleTalkToDigitalTwin = (memberName) => {
    console.log(`Talking to ${memberName}'s digital twin`);
    // Add your digital twin logic here
  };

  return (
    <div className="w-full">
      {/* Desktop view - separate boxes */}
      <div className="hidden md:block space-y-4">
        {(data || []).map((section, index) => (
          <div
            key={index}
            className="rounded-2xl px-4"
            style={{
              background:
                "linear-gradient(93.27deg, rgba(158, 135, 255, 0.1) 8.1%, rgba(109, 191, 254, 0.1) 41.6%, rgba(255, 143, 143, 0.1) 95.33%, rgba(255, 255, 255, 0.1) 127.34%)",
            }}
            data-reveal
            data-reveal-dir="up"
          >
            <button
              className="w-full py-12 text-left focus:outline-none cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <div className="flex items-start pr-4 ">
                <div className="flex-1">
                  <h3 className="font-normal text-black mb-4 leading-tight">
                    {section.title}
                  </h3>
                </div>

                <div className="flex-1 pl-4">
                  <P3 className="text-gray-600 leading-relaxed pr-4">
                    {section.description}
                  </P3>
                </div>

                <div className="flex items-center">
                  <svg
                    className={`w-8 h-8 text-black-950 transform transition-transform duration-200 ${
                      expandedSection === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </button>

            {expandedSection === index && section.members && (
              <div className="pb-12 animate-slideDown">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                  {section.members.map((member, memberIndex) => (
                    <MemberCard
                      key={memberIndex}
                      name={member.name}
                      role={member.role}
                      company={member.company}
                      brief={member.brief}
                      image={member.image.url}
                      linkedin={member.linkedin}
                      twinlink={member.twinlink}
                      showTalkButton={member.showTalkButton} // Directly pass showTalkButton from data
                      onConnect={() => handleConnect(member.name)}
                      onTalkToDigitalTwin={() =>
                        handleTalkToDigitalTwin(member.name)
                      }
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile view - separate boxes with spacing */}
      <div className="block md:hidden space-y-4">
        {(data || []).map((section, index) => (
          <div key={index} className="border border-gray-200 rounded-lg mx-4">
            <button
              className="w-full py-6 px-4 text-left focus:outline-none"
              onClick={() => toggleSection(index)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-normal text-black leading-tight pr-4 text-xl">
                    {section.title}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-black-950 transform transition-transform duration-200 flex-shrink-0 ${
                      expandedSection === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <P3 className="text-gray-600 leading-relaxed">
                  {section.description}
                </P3>
              </div>
            </button>

            {expandedSection === index && section.members && (
              <div className="px-4 pb-6 animate-slideDown">
                <div className="space-y-4 mt-6">
                  {section.members.map((member, memberIndex) => (
                    <MemberCard
                      key={memberIndex}
                      name={member.name}
                      role={member.role}
                      company={member.company}
                      brief={member.brief}
                      image={member.image}
                      linkedin={member.linkedin}
                      showTalkButton={member.showTalkButton} // Directly pass showTalkButton from data
                      onConnect={() => handleConnect(member.name)}
                      onTalkToDigitalTwin={() =>
                        handleTalkToDigitalTwin(member.name)
                      }
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </div>
  );
};

export default TeamSection;
