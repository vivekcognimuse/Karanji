// JourneySection.jsx
import React from "react";
import { P2, P3, P4 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";

const JourneySection = ({ data }) => {
  const {
    title,
    subtitle,
    currentYear,
    currentYearDescription,
    nextYear,
    yearDescription,
    buttonText,
    iconSrc,
    onContinueJourney,
  } = data;

  return (
    <section
      className="h-screen w-full max-w-7xl mx-auto flex flex-col justify-center"
      style={{ height: "calc(100vh - 80px)" }}
    >
      {/* Header Row - Title 30%, Subtitle 70% */}
      <div className="flex items-start mb-4">
        <div className="w-[30%] pr-6">
          <h3>{title}</h3>
        </div>
        <div className="w-[70%] flex justify-end">
          <P3 className="text-black-800 text-lg">{subtitle}</P3>
        </div>
      </div>

      {/* Current Year (Centered) with Next Year (Right aligned) */}
      <div className="relative text-center mb-2">
        <div
          className="inline-block bg-gradient-to-r from-[#9E87FF] via-[#6DBFFE] to-[#FF8F8F] bg-clip-text text-transparent leading-none"
          style={{
            fontFamily: "Inria Serif",
            fontWeight: 700,
            fontSize: "clamp(80px, 12vw, 128px)",
            lineHeight: "1",
            letterSpacing: "-5%",
          }}
        >
          {currentYear}
        </div>

        {/* Next Year positioned at right edge, same baseline */}
        <div
          className="absolute right-0 top-0 text-gray-400 leading-none"
          style={{
            fontFamily: "Inria Serif",
            fontWeight: 700,
            fontSize: "clamp(40px, 6vw, 64px)",
            lineHeight: "1",
            letterSpacing: "-5%",
          }}
        >
          {nextYear}
        </div>
      </div>

      {/* Current Year Description (Centered) */}
      <div className="text-center mb-8">
        <P4 className="text-black-500 max-w-2xl mx-auto">
          "{currentYearDescription}"
        </P4>
      </div>

      {/* Timeline Visual */}
      <div className="relative mb-8">
        {/* Horizontal Line - Starting from center icon to right */}
        <div className="absolute left-1/2 top-1/2 w-1/2 h-px bg-black-300 transform -translate-y-1/2">
          {/* Right End Highlight Circle */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border border-black-300 bg-black-100 z-20"></div>
        </div>

        {/* Center Icon */}
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full relative bg-black-50">
            {iconSrc && (
              <img src={iconSrc} alt="Timeline icon" className="w-16 h-16" />
            )}
          </div>
        </div>
      </div>

      {/* Year Description (Centered) */}
      <div className="text-center mb-8">
        <div className="max-w-4xl mx-auto">
          <P3 className="text-black-500">{yearDescription}</P3>
        </div>
      </div>

      {/* Button (Centered) */}
      <div className="text-center">
        <Button variant="secondary" size="sm" onClick={onContinueJourney}>
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default JourneySection;
