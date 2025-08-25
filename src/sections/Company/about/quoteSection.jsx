"use client";
import React from "react";
import Image from "next/image";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const QuoteSection = ({ title }) => {
  return (
    <div
      className="w-full pb-24 md:pb-28"
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className="mx-auto px-4 md:px-8">
        {/* Quote Icon */}
        <div className="mb-8" data-reveal data-reveal-dir="up">
          <Image
            height={40}
            width={40}
            src="/Icons/ph_quotes.svg"
            alt="Quote"
            unoptimized
            className="w-14 h-14"
          />
        </div>

        {/* Main Heading */}
        <div className="text-center" data-reveal data-reveal-dir="up">
          <h2 className="text-black">{title}</h2>
        </div>
      </div>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </div>
  );
};

export default QuoteSection;
