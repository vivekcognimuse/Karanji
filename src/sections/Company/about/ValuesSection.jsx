"use client";
import React from "react";
import ValueCard from "./ValueCard";
const ValuesSection = () => {
  const valuesData = [
    {
      icon: "/Icons/visionicon.svg",
      title: "Continuous innovation",
      description: "Leading with new ideas in design, AI, and XR.",
    },
    {
      icon: "/Icons/visionicon.svg",
      title: "Empowerment",
      description: "Helping people grow through immersive tech.",
    },
    {
      icon: "/Icons/visionicon.svg",
      title: "Impact",
      description: "Transforming how the world learns and works.",
      isFullWidth: true,
    },
    {
      icon: "/Icons/visionicon.svg",
      title: "Agility",
      description: "Adapting fast to emerging trends and needs.",
    },
    {
      icon: "/Icons/visionicon.svg",
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
              src="/Icons/visionicon.svg"
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
