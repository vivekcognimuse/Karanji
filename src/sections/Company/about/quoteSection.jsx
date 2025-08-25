"use client";
import React from "react";
import Image from "next/image";
const QuoteSection = ({ title }) => {
  return (
    <div className="w-full pb-24 md:pb-28">
      <div className="mx-auto px-4 md:px-8">
        {/* Quote Icon */}
        <div className="mb-8">
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
        <div className="text-center">
          <h2 className="text-black">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
