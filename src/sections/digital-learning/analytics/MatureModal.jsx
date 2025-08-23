import { P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";
import SectionReveal from "@/components/animations/sectionReveal"; // Import the SectionReveal component

const AnalyticsMaturityModel = ({ data }) => {
  const { title, subTitle, stairImage, stages } = data;

  return (
    <section
      data-reveal-amount="0.25"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title Section */}
      <div
        className="mb-8 opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-6xl">
          {subTitle}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row gap-y-8 gap-x-16">
        {/* Left Side - Stair Step Image */}
        <div
          className="flex items-center justify-center lg:justify-start opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up">
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
        <div className="grid lg:grid-cols-2 gap-16">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="space-y-3 opacity-0 will-change-transform"
              data-reveal
              data-reveal-dir="up">
              {/* Stage Title */}
              <h5 className="mb-2">{stage.title}</h5>

              {/* Stage Question */}
              <P3>{stage.question}</P3>
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

      {/* run the animation for this section only */}
      <SectionReveal />
    </section>
  );
};

export default AnalyticsMaturityModel;
