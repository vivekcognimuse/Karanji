"use client";
import React from "react";
import ValueCard from "./ValueCard";
import Image from "next/image";
import { RevealWrapper } from "@/components/animations/RevealWrapper";
import CarouselContainer from "@/components/animations/Carousal";

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
    <section className="values-section py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-xl">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <RevealWrapper direction="up" duration={0.5} threshold={0.3}>
            <div className="mb-4">
              <Image
                src="/Company/about/values_16257068 1.svg"
                alt="Values Icon"
                width="48"
                height="48"
                unoptimized
                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto"
              />
            </div>
          </RevealWrapper>

          <RevealWrapper
            direction="up"
            duration={0.5}
            delay={0.1}
            threshold={0.3}
          >
            <h4 className="text-black-950 text-xl sm:text-2xl lg:text-3xl mb-3 font-semibold">
              Values
            </h4>
          </RevealWrapper>

          <RevealWrapper
            direction="up"
            duration={0.5}
            delay={0.15}
            threshold={0.3}
          >
            <div className="w-full h-px bg-gray-300 mx-auto"></div>
          </RevealWrapper>
        </div>

        {/* Values Content */}
        <div className="space-y-4 sm:space-y-0">
          {/* Mobile */}
          <div className="block sm:hidden">
            {/* Carousel for all cards - wrapped once since carousel handles internal animations */}
            <RevealWrapper
              direction="up"
              duration={0.5}
              delay={0.2}
              distance={30}
              threshold={0.3}
            >
              <CarouselContainer
                autoPlay={true}
                autoPlayInterval={5000}
                showDots={true}
                showArrows={false}
              >
                {valuesData.map((value, index) => (
                  <ValueCard key={index} {...value} isFullWidth={false} />
                ))}
              </CarouselContainer>
            </RevealWrapper>
          </div>

          {/* Tablet/Desktop */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* First Row */}
              <RevealWrapper
                direction="up"
                duration={0.5}
                delay={0.2}
                distance={30}
                threshold={0.3}
              >
                <ValueCard {...valuesData[0]} />
              </RevealWrapper>

              <RevealWrapper
                direction="up"
                duration={0.5}
                delay={0.32} // 0.2 + 0.12 stagger
                distance={30}
                threshold={0.3}
              >
                <ValueCard {...valuesData[1]} />
              </RevealWrapper>

              {/* Full-width card */}
              <div className="sm:col-span-2">
                <RevealWrapper
                  direction="up"
                  duration={0.5}
                  delay={0.44} // 0.2 + 0.12*2 stagger
                  distance={30}
                  threshold={0.3}
                >
                  <ValueCard isFullWidth={true} {...valuesData[2]} />
                </RevealWrapper>
              </div>

              {/* Third Row */}
              <RevealWrapper
                direction="up"
                duration={0.5}
                delay={0.56} // 0.2 + 0.12*3 stagger
                distance={30}
                threshold={0.3}
              >
                <ValueCard {...valuesData[3]} />
              </RevealWrapper>

              <RevealWrapper
                direction="up"
                duration={0.5}
                delay={0.68} // 0.2 + 0.12*4 stagger
                distance={30}
                threshold={0.3}
              >
                <ValueCard {...valuesData[4]} />
              </RevealWrapper>
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
    </section>
  );
};

export default ValuesSection;
