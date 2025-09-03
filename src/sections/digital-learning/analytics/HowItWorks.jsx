import { P2, P3 } from "@/components/CustomTags";
import React from "react";

const HowItWorks = ({ data }) => {
  const { title, subTitle, entry, steps, completion } = data || {};

  return (
    <div className="">
      {/* Header */}
      <div className="mb-8 md:mb-16">
        <h3 className="mb-4">{title}</h3>
        <P2 className="">{subTitle}</P2>
      </div>

      {/* Process Flow Container */}
      <div className="relative">
        {/* Main Grid - Responsive */}
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Entry Column */}
          <div className="relative md:my-auto w-full md:max-w-[15rem]">
            <h4 className="mb-3">{entry.title}</h4>
            <div className="flex-1">
              <div className="h-px bg-black-300 relative w-full md:w-full max-w-[200px] md:max-w-full">
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-black-300 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></div>
              </div>
            </div>
            <P3 className="mt-8">{entry.description}</P3>
          </div>

          {/* Process Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative  lg:border-t-6 border-t-3 lg:mb-0 mb-6 border-[#B15252] pt-4 w-full md:max-w-[15rem]">
              {/* Large step number */}
              <div className=" text-3xl lg:text-5xl font-thin text-black leading-none mb-4">
                {step.number}
              </div>

              {/* Step title */}
              <h4 className="mb-8">{step.title}</h4>
              <hr className="border-black-200" />

              {/* Step description */}
              <P3 className="text-black-500">{step.description}</P3>
            </div>
          ))}

          {/* Completion Section */}
          <div className="relative md:my-auto w-full md:max-w-[15rem]">
            <h4 className="mb-3">{completion.title}</h4>
            <div className="flex-1">
              <div className="h-px bg-black-300 relative w-full md:w-full max-w-[200px] md:max-w-full">
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-black-300 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></div>
              </div>
            </div>
            <P3 className="mt-8">{completion.description}</P3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
