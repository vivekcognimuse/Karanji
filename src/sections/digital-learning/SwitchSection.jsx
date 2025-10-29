"use client";
import React, { useState } from "react";
import Image from "next/image";
import { P3 } from "@/components/CustomTags";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

// Combined data + tabs into one object

const SwitchSection = ({ data }) => {
  const { tabs, content } = data;
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      {/* Tabs */}
      <RevealWrapper
        direction="up"
        duration={0.6}
        stagger={0.1}
        threshold={0.2}
        className="flex flex-wrap justify-center gap-3 mb-16">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setActiveAccordion(0);
            }}
            className={`px-6 py-2 rounded-full p2 shadow-lg duration-300 cursor-pointer transition-colors ${
              activeTab === tab
                ? "bg-[#F0B8B8] text-gray-800"
                : "bg-white text-gray-600 hover:bg-pink-100"
            }`}>
            {tab}
          </button>
        ))}
      </RevealWrapper>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Image Column */}
        <RevealWrapper
          direction="left"
          duration={0.6}
          delay={0.2}
          threshold={0.2}>
          <Image
            src={content[activeTab].sections[activeAccordion].image}
            alt={activeTab}
            width={500}
            height={400}
            className="rounded-lg mb-4 w-full h-auto object-cover"
          />
        </RevealWrapper>

        {/* Text Column */}
        <div>
          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.3}
            stagger={0.1}
            threshold={0.15}>
            {content[activeTab].sections.map((section, idx) => (
              <div
                key={idx}
                className={`cursor-pointer border-l-4 pl-4 py-3 mb-4 transition ${
                  activeAccordion === idx
                    ? "border-pink-400"
                    : "border-black-200"
                }`}
                onClick={() => setActiveAccordion(idx)}>
                <h5>{section.title}</h5>
                {activeAccordion === idx && (
                  <>
                    <P3 className="mt-2">{section.content}</P3>
                    {section.tags.length > 0 && (
                      <div className="flex flex-wrap max-w-sm gap-2 mt-3">
                        {section.tags.map((tag, i) => (
                          <P3
                            key={i}
                            className="bg-white/50 w-fit border border-black-200 px-6 py-2 rounded-full  text-black-500 cursor-default">
                            {tag}
                          </P3>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </RevealWrapper>
        </div>
      </div>
    </div>
  );
};

export default SwitchSection;
