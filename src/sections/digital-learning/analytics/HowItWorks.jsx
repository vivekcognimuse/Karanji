import { P2, P3 } from "@/components/CustomTags";
import React from "react";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const HowItWorks = ({ data }) => {
  const { title, subTitle, entry, steps, completion } = data || {};

  return (
    <section
      data-reveal-amount="0.25"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div
        className="mb-8 md:mb-16 opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        <h3 className="mb-4">{title}</h3>
        <P2>{subTitle}</P2>
      </div>

      {/* Process Flow Container */}
      <div className="relative">
        {/* Main Grid - Responsive */}
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Entry Column */}
          <div
            className="relative md:my-auto w-full md:max-w-[15rem] opacity-0 will-change-transform"
            data-reveal
            data-reveal-dir="up">
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
              className="relative border-t-6 border-[#B15252] pt-4 w-full md:max-w-[15rem] opacity-0 will-change-transform"
              data-reveal
              data-reveal-dir="up">
              {/* Large step number */}
              <div className="text-5xl font-thin text-black leading-none mb-4">
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
          <div
            className="relative md:my-auto w-full md:max-w-[15rem] opacity-0 will-change-transform"
            data-reveal
            data-reveal-dir="up">
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

      {/* Run the animation for this section only */}
      <SectionReveal />
    </section>
  );
};

export default HowItWorks;
