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
    <section className="values-section py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-xl">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="mb-4">
            <img
              src="/Company/about/values_16257068 1.svg"
              alt="Values Icon"
              width="48"
              height="48"
              className="w-10 h-10 sm:w-12 sm:h-12 mx-auto"
            />
          </div>
          <h4 className="text-black-950 text-xl sm:text-2xl lg:text-3xl mb-3 font-semibold">
            Values
          </h4>
          <div className="w-full h-px bg-gray-300 mx-auto"></div>
        </div>

        {/* Values Grid - Mobile First Approach */}
        <div className="space-y-4 sm:space-y-0">
          {/* Mobile: Stack all cards vertically */}
          <div className="block sm:hidden space-y-4">
            {valuesData.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>

          {/* Tablet and Desktop: Custom grid layout */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* First Row - Two cards */}
              <ValueCard {...valuesData[0]} />
              <ValueCard {...valuesData[1]} />

              {/* Second Row - Full-width card spans both columns */}
              <div className="sm:col-span-2">
                <ValueCard {...valuesData[2]} />
              </div>

              {/* Third Row - Two cards */}
              <ValueCard {...valuesData[3]} />
              <ValueCard {...valuesData[4]} />
            </div>
          </div>
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

        /* Ensure proper spacing on very small devices */
        @media (max-width: 320px) {
          .values-section {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ValuesSection;
