import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";
import SectionReveal from "@/components/animations/sectionReveal"; // Added animation import

const Industrychallenge = ({ data }) => {
  const {
    sectionTitle,
    overviewTitle,
    overviewDescription,
    challengesTitle,
    challenges,
    image,
    imageAlt,
  } = data;

  return (
    <section
      className="space-y-8 md:space-y-16"
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
    >
      <div className="mx-auto space-y-4">
        {/* Heading */}
        <h3
          className="text-3xl font-bold text-gray-900 pb-8 opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up"
        >
          {sectionTitle}
        </h3>
        <h4
          className="text-xl text-gray-800 mb-4 opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up"
        >
          {overviewTitle}
        </h4>
        <P2
          className="text-gray-700 pb-8 opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up"
        >
          {overviewDescription}
        </P2>
      </div>

      {/* Critical Challenges Section */}
      <div className="flex justify-between items-stretch gap-8 flex-col lg:flex-row">
        {/* Wrapper to hold image and challenges with equal height */}
        <div className="w-full flex gap-8 overflow-hidden">
          {/* Image Section */}
          <div className="w-full lg:w-3/5 flex">
            <div className="relative py-4 w-full aspect-[2/1] h-full">
              <Image
                width={600}
                height={400}
                src={image}
                unoptimized
                alt={imageAlt || "Industry challenges"}
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Challenges Section */}
          <div className="w-full lg:w-2/5 flex flex-col justify-between">
            {/* Heading */}
            <h4
              className="text-2xl mb-6 opacity-0 will-change-transform"
              data-reveal
              data-reveal-dir="up"
            >
              {challengesTitle}
            </h4>

            {/* Card Grid */}
            <div className="grid grid-cols-2 gap-6 flex-grow">
              {challenges.map(({ id, icon, title, description }, index) => (
                <div key={id} className="space-y-6">
                  <div
                    className="p-2 rounded-full inline-block opacity-0 will-change-transform"
                    data-reveal
                    data-reveal-dir={index % 2 === 0 ? "up" : "left"}
                  >
                    <Image
                      src={icon}
                      alt={title}
                      width={20}
                      height={20}
                      className="text-xl text-white w-12 h-12"
                    />
                  </div>
                  <h5 className="text-lg font-semibold text-black-800">
                    {title}
                  </h5>
                  <P3 className="text-sm text-black-500">{description}</P3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Client-side animator; SSR stays intact */}
      <SectionReveal />
    </section>
  );
};

export default Industrychallenge;
