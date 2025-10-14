import { P2, P3 } from "@/components/CustomTags";
import React from "react";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const HowItWorks = ({ data }) => {
  const { title, subTitle, entry, steps, cards, completion } = data || {};

  return (
    <div className="">
      {/* Header */}
      <div className="mb-8 md:mb-16">
        <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
          <h3 className="mb-4">{title}</h3>
        </RevealWrapper>

        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.1}
          threshold={0.2}>
          <P2 className="">{subTitle}</P2>
        </RevealWrapper>
      </div>

      {/* Process Flow Container */}
      <div className="relative">
        {/* Main Grid - Responsive */}
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Entry Column */}
          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.2}
            threshold={0.2}
            className="relative md:my-auto w-full md:max-w-[15rem]">
            <h4 className="mb-3">{cards[0].title}</h4>
            <div className="flex-1">
              <div className="h-px bg-black-300 relative w-full md:w-full max-w-[200px] md:max-w-full">
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-black-300 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></div>
              </div>
            </div>
            <P3 className="mt-8">{cards[0].description}</P3>
          </RevealWrapper>

          {/* Process Steps */}
          {cards.slice(1, -1).map((step, index) => (
            <RevealWrapper
              key={index}
              direction="up"
              duration={0.6}
              delay={0.3 + index * 0.15}
              threshold={0.15}
              className="relative lg:border-t-6 border-t-3 lg:mb-0 mb-6 border-[#B15252] pt-4 w-full md:max-w-[15rem]">
              {/* Large step number */}
              <div className=" text-3xl lg:text-5xl font-thin text-black leading-none mb-4">
                {step.number}
              </div>

              {/* Step title */}
              <h4 className="mb-8">{step.title}</h4>
              <hr className="border-black-200" />

              {/* Step description */}
              <P3 className="text-black-500">{step.description}</P3>
            </RevealWrapper>
          ))}

          {/* Completion Section */}
          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.5}
            threshold={0.2}
            className="relative md:my-auto w-full md:max-w-[15rem]">
            <h4 className="mb-3">{cards[cards.length - 1].title}</h4>
            <div className="flex-1">
              <div className="h-px bg-black-300 relative w-full md:w-full max-w-[200px] md:max-w-full">
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-black-300 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></div>
              </div>
            </div>
            <P3 className="mt-8">{cards[cards.length - 1].description}</P3>
          </RevealWrapper>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
