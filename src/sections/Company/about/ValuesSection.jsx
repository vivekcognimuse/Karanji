"use client";
import React from "react";
import ValueCard from "./ValueCard";
import Image from "next/image";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const ValuesSection = ({ data }) => {
  const valuesData = data ?? [
    // optional fallback (can remove if you want it strict)
    {
      icon: "/Company/about/hugeicons_ai-innovation-03.svg",
      title: "Continuous innovation",
      description: "Leading with new ideas in design, AI, and XR.",
    },
  ];

  return (
    <section
      className="values-section py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-xl"
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="mb-4" data-reveal data-reveal-dir="up">
            <Image
              src="/Company/about/values_16257068 1.svg"
              alt="Values Icon"
              width="48"
              height="48"
              unoptimized
              className="w-10 h-10 sm:w-12 sm:h-12 mx-auto"
            />
          </div>
          <h4
            className="text-black-950 text-xl sm:text-2xl lg:text-3xl mb-3 font-semibold"
            data-reveal
            data-reveal-dir="up">
            Values
          </h4>
          <div
            className="w-full h-px bg-gray-300 mx-auto"
            data-reveal
            data-reveal-dir="up"></div>
        </div>

        {/* Values Grid */}
        <div className="space-y-4 sm:space-y-0">
          {/* Mobile */}
          <div className="block sm:hidden space-y-4">
            {valuesData.map((value, index) => (
              <ValueCard
                key={index}
                {...value}
                data-reveal
                data-reveal-dir="up"
              />
            ))}
          </div>

          {/* Tablet/Desktop */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* First Row */}
              <ValueCard {...valuesData[0]} data-reveal data-reveal-dir="up" />
              <ValueCard {...valuesData[1]} data-reveal data-reveal-dir="up" />

              {/* Full-width card */}
              <div className="sm:col-span-2">
                <ValueCard
                  {...valuesData[2]}
                  data-reveal
                  data-reveal-dir="up"
                />
              </div>

              {/* Third Row */}
              <ValueCard {...valuesData[3]} data-reveal data-reveal-dir="up" />
              <ValueCard {...valuesData[4]} data-reveal data-reveal-dir="up" />
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
        @media (max-width: 320px) {
          .values-section {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </section>
  );
};

export default ValuesSection;
