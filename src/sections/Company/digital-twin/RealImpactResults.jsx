"use client";
import React from "react";
import { P2, P3 } from "@/components/CustomTags";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

export default function RealImpactResults({ data }) {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-left mb-16">
        <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
          <h3 className="mb-4">{data.heading}</h3>
        </RevealWrapper>

        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.1}
          threshold={0.2}
        >
          <P2 className="text-left mx-auto">{data.description}</P2>
        </RevealWrapper>
      </div>

      {/* Impact Cards */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {data.impactItems.map((item, index) => (
          <RevealWrapper
            key={index}
            direction="up"
            duration={0.5}
            delay={0.2 + index * 0.12} // Staggered animation matching original timing
            distance={30}
            threshold={0.3}
          >
            <div className="text-center max-w-xs">
              <P2 className="mb-3">{item.title}</P2>
              <P3 className="mb-6">{item.subTitle}</P3>
              {/* Divider line */}
              <div className="w-full h-px bg-gray-200"></div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
