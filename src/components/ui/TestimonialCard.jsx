import React from "react";

import { Icon } from "@iconify/react";
import Button from "./Button";
import { P2 } from "../CustomTags";
import Link from "next/link";

const TestimonialCard = ({ testimonial }) => {
  console.log("Testimonial Data:", testimonial);
  return (
    <div className="rounded-3xl shadow-lg border max-w-5xl mx-auto border-black/20 p-4 mb-4 sm:p-6 lg:p-8 bg-white cursor-default">
      {testimonial?.tag && (
        <span className="ml-auto border text-sm border-black-500 rounded-[5px] py-0.5 bg-gradient-to-r bg-clip-text text-transparent from-[#5254CB] to-[#FF942F] px-1 block w-fit mb-4">
          {testimonial.tag}
        </span>
      )}

      <h4 className="mb-8 lg:mb-12 text-xl lg:text-2xl ">
        {testimonial?.title}
      </h4>

      <div className="flex  flex-col lg:flex-row gap-8  mb-8 lg:mb-12">
        {testimonial?.stats?.map((metric, statsIndex) => (
          <div
            key={statsIndex}
            className="flex w-full lg:items-start   justify-start  space-y-2 flex-row lg:flex-col  border-l-2 border-black pl-4 items-center gap-4">
            <p className="font-sans my-auto  font-semibold text-xl md:text-5xl">
              {metric.title}
            </p>
            <p className="text-black  text-xl sm:text-[1.375rem]">
              {metric.subTitle || metric.subTitle}
            </p>
          </div>
        ))}
      </div>

      <p className="text-black-500  sm:text-[1.375rem] mb-6">
        {testimonial?.description}
      </p>
      <div className="flex justify-end">
        <Link href={"/case-studies/" + (testimonial?.ctaLink || "")}>
          <Button
            rightIcon={
              <Icon icon="tabler:arrow-up-right" size={20} className="size-5" />
            }
            className=""
            variant="text">
            {testimonial?.ctaText || "Read Full CaseStudy"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TestimonialCard;
