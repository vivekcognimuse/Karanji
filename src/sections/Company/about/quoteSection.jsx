"use client";
import React from "react";
import Image from "next/image";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const QuoteSection = ({ title }) => {
  return (
    <div className="w-full pb-16 md:pb-24 lg:pb-28">
      <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* Quote Icon */}
        <RevealWrapper
          direction="up"
          duration={0.5}
          delay={0.2}
          threshold={0.3}
        >
          <div className="mb-6 md:mb-8">
            <Image
              height={40}
              width={40}
              src="/Icons/ph_quotes.svg"
              alt="Quote"
              unoptimized
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            />
          </div>
        </RevealWrapper>

        {/* Main Heading */}
        <RevealWrapper
          direction="up"
          duration={0.5}
          delay={0.32} // 0.2 + 0.12 stagger
          threshold={0.3}
        >
          <div className="text-center">
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-tight px-2 sm:px-4">
              {title}
            </h2>
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
};

export default QuoteSection;
