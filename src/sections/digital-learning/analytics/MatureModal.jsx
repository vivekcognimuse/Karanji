import { P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";

const AnalyticsMaturityModel = ({ data }) => {
  const { title, subtitle, stairImage, stages } = data;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-6xl">
          {subtitle}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Stair Step Image */}
        <div className="flex  items-center justify-center lg:justify-start">
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
        </div>

        {/* Right Side - Stage Details */}
        <div className=" grid  lg:grid-cols-2 gap-16 ">
          {stages.map((stage, index) => (
            <div key={index} className="space-y-3">
              {/* Stage Title */}
              <h5 className="mb-2">{stage.title}</h5>

              {/* Stage Question */}
              <P3 className="">{stage.question}</P3>
              <hr className="text-black-200 mt-6 mb-8" />
              {/* Stage Points */}
              <ul className="text-black-500 list-disc list-inside space-y-2 mt-4">
                {stage.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="pl-2 [text-indent:-1.5rem] leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage with sample data

export default AnalyticsMaturityModel;
