"use client";
import React, { useState } from "react";
import { P2 } from "@/components/CustomTags";

const TeamSection = ({ sections }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {sections.map((section, index) => (
          <div key={index} className="border-b border-gray-100 last:border-b-0">
            <button
              className="w-full py-12 text-left focus:outline-none"
              onClick={() => toggleSection(index)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-8">
                  <h3 className="font-normal text-black mb-0 leading-tight">
                    {section.title}
                  </h3>
                </div>

                <div className="flex items-center">
                  <svg
                    className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
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

            {expandedSection === index && (
              <div className="pb-12 animate-slideDown">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-8"></div>
                  <div className="flex-1">
                    <P2 className="text-black-800 leading-relaxed pr-8">
                      {section.description}
                    </P2>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Layout - Dropdown */}
      <div className="block md:hidden">
        {sections.map((section, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <button
              className="w-full py-6 px-4 text-left focus:outline-none"
              onClick={() => toggleSection(index)}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-normal text-black leading-tight pr-4">
                  {section.title}
                </h2>
                <svg
                  className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 flex-shrink-0 ${
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
            </button>

            {expandedSection === index && (
              <div className="px-4 pb-6 animate-slideDown">
                <P2 className="text-black-800 leading-relaxed">
                  {section.description}
                </P2>
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 200px;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TeamSection;
