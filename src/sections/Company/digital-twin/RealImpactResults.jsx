"use client";
import React from "react";
import { P2, P3 } from "@/components/CustomTags";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

export default function RealImpactResults({ sectionData }) {
  return (
    <section
      className="py-16 px-6 max-w-7xl mx-auto"
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      {/* Header */}
      <div className="text-left mb-16" data-reveal data-reveal-dir="up">
        <h3 className="mb-4">{sectionData.heading}</h3>
        <P2 className="text-left mx-auto">{sectionData.description}</P2>
      </div>

      {/* Impact Cards */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {sectionData.impactItems.map((item, index) => (
          <div
            key={index}
            className="text-center max-w-xs"
            data-reveal
            data-reveal-dir="up" // Added reveal animation for impact cards
          >
            <P2 className="mb-3">{item.title}</P2>
            <P3 className="mb-6">{item.subTitle}</P3>
            {/* Divider line */}
            <div className="w-full h-px bg-gray-200"></div>
          </div>
        ))}
      </div>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </section>
  );
}
