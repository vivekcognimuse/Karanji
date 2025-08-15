"use client";
import React from "react";
import ValueCard from "./ValueCard";
const ValuesSection = () => {
  const valuesData = [
    {
      icon: "/Company/about/hugeicons_ai-innovation-03.svg",
      title: "Continuous innovation",
      description: "Leading with new ideas in design, AI, and XR.",
    },
    {
      icon: "/Company/about/carbon_collaborate.svg",
      title: "Empowerment",
      description: "Helping people grow through immersive tech.",
    },
    {
      icon: "/Company/about/arcticons_s-trust.svg",
      title: "Impact",
      description: "Transforming how the world learns and works.",
      isFullWidth: true,
    },
    {
      icon: "/Company/about/pepicons-pencil_stars.svg",
      title: "Agility",
      description: "Adapting fast to emerging trends and needs.",
    },
    {
      icon: "/Company/about/emojione-monotone_world-map.svg",
      title: "Integrity",
      description: "Building trust through vision, honesty & progress.",
    },
  ];

  return (
    <section className="values-section py-5 px-4 rounded-2xl shadow-xl">
      <div className="max-w-6xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <img
              src="/Company/about/values_16257068 1.svg"
              alt="Values Icon"
              width="48"
              height="48"
              className="w-12 h-12 mx-auto"
            />
          </div>
          <h4 className="text-black-950 text-2xl mb-3">Values</h4>
          <div className="w-full h-px bg-gray-300 mx-auto"></div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Row - Two cards */}
          <ValueCard {...valuesData[0]} />
          <ValueCard {...valuesData[1]} />

          {/* Second Row - One full-width card */}
          <ValueCard {...valuesData[2]} />

          {/* Third Row - Two cards */}
          <ValueCard {...valuesData[3]} />
          <ValueCard {...valuesData[4]} />
        </div>
      </div>

      <style jsx>{`
        .values-section {
          background: linear-gradient(
            249.38deg,
            rgba(255, 209, 193, 0.3) 3.17%,
            rgba(229, 215, 226, 0.3) 52.52%,
            rgba(206, 220, 255, 0.3) 96.87%
          );
        }
      `}</style>
    </section>
  );
};

export default ValuesSection;
