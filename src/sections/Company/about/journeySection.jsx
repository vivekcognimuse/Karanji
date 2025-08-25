"use client";
import React from "react";
import { P2, P3, P4 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import Image from "next/image";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const JourneySection = ({ data = {} }) => {
  const {
    title = "",
    subTitle = "",
    currentYear = "",
    currentYearDescription = "",
    yearDescription = "",
    buttonText = "Continue",
    iconSrc = "",
    onContinueJourney = () => {},
    iconAlt = "Timeline icon",
  } = data;

  return (
    <section
      className="w-full mx-auto flex flex-col justify-center max-w-[1580px] px-4 sm:px-6 lg:px-8 py-8
                 min-h-[calc(100vh-80px)]"
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className="mx-auto">
        {/* Section Heading */}
        <h3 className="text-black" data-reveal data-reveal-dir="up">
          {title}
        </h3>

        {/* Title & Description */}
        <div
          className="text-center mx-auto mb-10"
          data-reveal
          data-reveal-dir="up">
          <h2 className="mb-4" data-reveal data-reveal-dir="up">
            {title}
          </h2>
          <P3
            className="text-black-800 text-base sm:text-lg md:text-xl text-left md:text-right"
            data-reveal
            data-reveal-dir="up">
            {subTitle}
          </P3>
        </div>

        {/* Current Year (Centered) */}
        <div
          className="relative text-center mb-3 md:mb-2"
          data-reveal
          data-reveal-dir="up">
          <div
            className="inline-block bg-gradient-to-r from-[#9E87FF] via-[#6DBFFE] to-[#FF8F8F]
                       bg-clip-text text-transparent leading-none"
            style={{
              fontFamily: "Inria Serif",
              fontWeight: 700,
              fontSize: "clamp(48px, 12vw, 128px)", // smaller min on phones
              lineHeight: "1",
              letterSpacing: "-0.05em",
            }}>
            {currentYear}
          </div>
        </div>

        {/* Current Year Description (Centered) */}
        <div className="text-center mb-8" data-reveal data-reveal-dir="up">
          <P4 className="text-black-500 max-w-2xl mx-auto text-sm sm:text-base">
            “{currentYearDescription}”
          </P4>
        </div>

        {/* Timeline Visual */}
        <div className="relative mb-8">
          {/* Horizontal Line - Starting from center icon to right */}
          <div
            className="absolute left-1/2 top-1/2 h-px bg-black-300 transform -translate-y-1/2
                      w-2/3 sm:w-3/4 md:w-1/2">
            {/* Right End Highlight Circle */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full border border-black-300 bg-black-100 z-20" />
          </div>

          {/* Center Icon */}
          <div className="flex justify-center">
            <div
              className="flex items-center justify-center rounded-full relative bg-black-50
                         w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              data-reveal
              data-reveal-dir="up">
              {iconSrc ? (
                <Image
                  height={40}
                  width={40}
                  unoptimized
                  src={iconSrc}
                  alt={iconAlt}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
            </div>
          </div>
        </div>

        {/* Year Description (Centered) */}
        <div className="text-center mb-8" data-reveal data-reveal-dir="up">
          <div className="max-w-4xl mx-auto">
            <P3 className="text-black-500 text-base sm:text-lg md:text-xl leading-relaxed">
              {yearDescription}
            </P3>
          </div>
        </div>

        {/* Button (Centered) */}
        <div className="text-center" data-reveal data-reveal-dir="up">
          <Button
            variant="secondary"
            size="md"
            onClick={onContinueJourney}
            className="w-full sm:w-auto"
            aria-label={buttonText}>
            {buttonText}
          </Button>
        </div>
      </div>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </section>
  );
};

export default JourneySection;
