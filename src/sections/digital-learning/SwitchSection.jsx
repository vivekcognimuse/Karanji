"use client";
import React, { useState } from "react";
import Image from "next/image";
import { P3 } from "@/components/CustomTags";

// Combined data + tabs into one object

const SwitchSection = ({ data }) => {
  const { tabs, content } = data;
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setActiveAccordion(0);
            }}
            className={`px-4 py-2 rounded-full border text-sm md:text-base transition ${
              activeTab === tab
                ? "bg-pink-200 text-black"
                : "bg-white border-gray-300"
            }`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Image Column */}
        <div>
          <Image
            src={content[activeTab].sections[activeAccordion].image}
            alt={activeTab}
            width={500}
            height={400}
            className="rounded-lg mb-4 w-full h-auto object-cover"
          />
        </div>

        {/* Text Column */}
        <div>
          {content[activeTab].sections.map((section, idx) => (
            <div
              key={idx}
              className={`cursor-pointer border-l-4 pl-4 py-3 mb-4 transition ${
                activeAccordion === idx ? "border-pink-400" : "border-black-200"
              }`}
              onClick={() => setActiveAccordion(idx)}>
              <h5>{section.title}</h5>
              {activeAccordion === idx && (
                <>
                  <P3 className="mt-2">{section.content}</P3>
                  {section.tags.length > 0 && (
                    <div className="flex flex-wrap max-w-sm gap-2 mt-3">
                      {section.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-black-100 w-fit px-6 py-2 rounded-full text-sm text-black-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwitchSection;
