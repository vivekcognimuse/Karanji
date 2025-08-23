import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const ImplementApproach = ({ data }) => {
  const { title, description, image, sections } = data;

  return (
    <section
      data-reveal-amount="0.25"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title Section */}
      <div
        className="opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        <h3 className="mb-4">{title}</h3>
        <P2 className="mb-16">{description}</P2>
      </div>

      {/* Image Section */}
      <div
        className="flex-center opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        <Image
          src={image.mblSrc}
          alt={image.alt}
          width={image.width}
          className="w-[50vw] h-fit md:hidden"
          height={image.height}
        />
      </div>
      <div
        className="opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        <Image
          src={image.src}
          className="hidden md:block"
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </div>

      {/* Sections */}
      <div className="flex mt-16 gap-8 flex-col md:flex-row">
        {/* Section 1 */}
        <div
          className="opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up">
          <h4 className="mb-4">{sections[0].title}</h4>
          <P3 className="text-black-500">{sections[0].content}</P3>
        </div>

        {/* Section 2 */}
        <div
          className="border-l-2 pl-4 border-[#B15252] opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up">
          <h4 className="mb-4">{sections[1].title}</h4>
          <P3 className="text-black-500">{sections[1].contentTop}</P3>
          {sections[1].divider && <hr className="mt-3 mb-8" />}
          <P3 className="text-black-500">{sections[1].contentBottom}</P3>
        </div>
      </div>

      {/* run the animation for this section only */}
      <SectionReveal />
    </section>
  );
};

export default ImplementApproach;
