import React from "react";
import { P2, P3 } from "@/components/CustomTags";

export default function RealImpactResults({ sectionData }) {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-left mb-16">
        <h3 className=" mb-4">{sectionData.heading}</h3>
        <P2 className="text-left  mx-auto">{sectionData.description}</P2>
      </div>

      {/* Impact Cards */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {sectionData.impactItems.map((item, index) => (
          <div key={index} className="text-center max-w-xs">
            <P2 className=" mb-3">{item.title}</P2>
            <P3 className="mb-6">{item.subtitle}</P3>
            {/* Divider line */}
            <div className="w-full h-px bg-gray-200"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
