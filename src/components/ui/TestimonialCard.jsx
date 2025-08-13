import React from "react";

import { Icon } from "@iconify/react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="rounded-3xl shadow-lg border max-w-5xl mx-auto border-black/20 p-4 sm:p-6 lg:p-8 bg-white">
      {testimonial?.tag && (
        <span className="ml-auto border text-sm border-black-500 rounded-[5px] py-0.5 bg-gradient-to-r bg-clip-text text-transparent from-[#5254CB] to-[#FF942F] px-1 block w-fit mb-4">
          {testimonial.tag}
        </span>
      )}

      <h4 className="mb-8 lg:mb-12 text-2xl ">{testimonial?.title}</h4>

      <div className="grid grid-cols-1 lg:flex lg:justify-between lg:flex-wrap gap-4 lg:gap-6 mb-8 lg:mb-12">
        {testimonial?.metrics?.map((metric, statsIndex) => (
          <div
            key={statsIndex}
            className="flex border-l-2 border-black pl-4 items-center gap-4">
            <div>
              <p className="font-sans font-semibold text-2xl md:text-5xl mb-2">
                {metric.value}
              </p>
              <p className="text-black text-sm">{metric.label}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-black/70 mb-6">{testimonial?.description}</p>

      <div className="flex items-center gap-2 text-lg font-normal justify-end tracking-wide cursor-pointer hover:text-indigo-600 transition-colors group">
        <span>{testimonial?.link || "Read Full CaseStudy"}</span>
        <Icon
          icon="lucide:arrow-up-right"
          className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
