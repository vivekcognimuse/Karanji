// JourneySection.jsx
import React from "react";
import { P2, P3, P4 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import Image from "next/image";
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
    >
      {/* Header Row - Title 40%, Subtitle 60% (stacks on mobile) */}
      <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 mb-6 md:mb-4">
        <div className="md:w-[40%] md:pr-6">
          <h3 className="text-left">{title}</h3>
        </div>
        <div className="md:w-[60%] md:flex md:justify-end">
          <P3 className="text-black-800 text-base sm:text-lg md:text-xl text-left md:text-right">
            {subTitle}
          </P3>
        </div>
      </div>

      {/* Current Year (Centered) with Next Year (Right aligned) */}
      <div className="relative text-center mb-3 md:mb-2">
        <div
          className="inline-block bg-gradient-to-r from-[#9E87FF] via-[#6DBFFE] to-[#FF8F8F]
                     bg-clip-text text-transparent leading-none"
          style={{
            fontFamily: "Inria Serif",
            fontWeight: 700,
            fontSize: "clamp(48px, 12vw, 128px)", // smaller min on phones
            lineHeight: "1",
            letterSpacing: "-0.05em",
          }}
        >
          {currentYear}
        </div>
      </div>

      {/* Current Year Description (Centered) */}
      <div className="text-center mb-8">
        <P4 className="text-black-500 max-w-2xl mx-auto text-sm sm:text-base">
          “{currentYearDescription}”
        </P4>
      </div>

      {/* Timeline Visual */}
      <div className="relative mb-8">
        {/* Horizontal Line - Starting from center icon to right */}
        <div
          className="
            absolute left-1/2 top-1/2 h-px bg-black-300 transform -translate-y-1/2
            w-2/3 sm:w-3/4 md:w-1/2
          "
        >
          {/* Right End Highlight Circle */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full border border-black-300 bg-black-100 z-20" />
        </div>

        {/* Center Icon */}
        <div className="flex justify-center">
          <div
            className="flex items-center justify-center rounded-full relative bg-black-50
                       w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          >
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
      <div className="text-center mb-8">
        <div className="max-w-4xl mx-auto">
          <P3 className="text-black-500 text-base sm:text-lg md:text-xl leading-relaxed">
            {yearDescription}
          </P3>
        </div>
      </div>

      {/* Button (Centered) */}
      <div className="text-center">
        <Button
          variant="secondary"
          size="md"
          onClick={onContinueJourney}
          className="w-full sm:w-auto"
          aria-label={buttonText}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default JourneySection;
