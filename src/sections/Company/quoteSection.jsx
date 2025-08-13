"use client";
import React from "react";

const QuoteSection = ({ title }) => {
  return (
    <div className="w-full py-16 md:py-24">
      <div className="mx-auto px-4 md:px-8">
        {/* Quote Icon */}
        <div className="mb-8">
          <img src="/Icons/ph_quotes.svg" alt="Quote" className="w-14 h-14" />
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
