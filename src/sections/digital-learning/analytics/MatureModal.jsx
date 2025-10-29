import { P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const AnalyticsMaturityModel = ({ data, stairImage }) => {
  const { title, subTitle, cards } = data;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title Section */}
      <div className="mb-8">
        <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </RevealWrapper>

        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.1}
          threshold={0.2}>
          <p className="text-base sm:text-lg text-gray-600 max-w-6xl">
            {subTitle}
          </p>
        </RevealWrapper>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row gap-y-8 gap-x-16">
        {/* Left Side - Stair Step Image */}
        <RevealWrapper
          direction="left"
          duration={0.6}
          delay={0.2}
          threshold={0.2}
          className="flex  items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-md">
            <Image
              src={stairImage}
              alt="Analytics Maturity Stair Steps"
              className="w-full h-auto"
              layout="responsive"
              width={567}
              height={484}
            />
          </div>
        </RevealWrapper>

        {/* Right Side - Stage Details */}
        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.3}
          stagger={0.15}
          threshold={0.15}
          className=" grid  lg:grid-cols-2 gap-16 ">
          {cards.map((stage, index) => (
            <div key={index} className="space-y-3">
              {/* Stage Title */}
              <h5 className="mb-2">{stage.title}</h5>

              {/* Stage Question */}
              <P3 className="">{stage.subTitle}</P3>
              <hr className="text-black-200 mt-6 mb-8" />
              {/* Stage Points */}
              <ul className="text-black-500 list-disc list-inside space-y-2 mt-4">
                {stage.list.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="pl-2 [text-indent:-1.5rem] leading-relaxed">
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </div>
  );
};

// Example usage with sample data

export default AnalyticsMaturityModel;
