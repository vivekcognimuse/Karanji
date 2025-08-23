import CarouselContainer from "@/components/animations/Carousal";
import { P2 } from "@/components/CustomTags";
import { Car } from "lucide-react";
import Image from "next/image";
import React from "react";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const ContentFormats = ({ data }) => {
  const { title, description, content, image } = data || {};

  return (
    <section
      data-reveal-amount="0.25"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
      className="py-8">
      {/* Title and Description */}
      <div
        className="opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        <h3>{title}</h3>
        <P2>{description}</P2>
      </div>

      {/* Image Section */}
      {image && (
        <div
          className="mt-8 rounded-2xl h-auto max-h-96 bg-purple-200 object-bottom overflow-hidden opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up">
          <Image
            src={image}
            alt="Content Formats"
            width={600}
            unoptimized
            height={400}
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}

      {/* Desktop Grid */}
      <div className="mt-16 hidden lg:grid gap-4 grid-cols-1 lg:grid-cols-3">
        {content.map((item, index) => (
          <div
            key={index}
            className="mb-8 border border-black-200 shadow-md px-4 py-2 gap-4 rounded-2xl flex items-center opacity-0 will-change-transform"
            data-reveal
            data-reveal-dir="up">
            {item.src && (
              <Image
                src={item.src}
                alt={item.alt || item.description}
                width={40}
                height={40}
                className="size-10"
              />
            )}
            <h5 className="mb-0">{item.description}</h5>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="mt-16 lg:hidden">
        <CarouselContainer>
          {content.map((item, index) => (
            <div
              key={index}
              className="mb-8 w-full border border-black-200 shadow-md px-4 py-2 gap-4 rounded-2xl flex items-center opacity-0 will-change-transform"
              data-reveal
              data-reveal-dir="up">
              {item.src && (
                <Image
                  src={item.src}
                  alt={item.alt || item.description}
                  width={40}
                  height={40}
                  className="size-9"
                />
              )}
              <h5 className="mb-0">{item.description}</h5>
            </div>
          ))}
        </CarouselContainer>
      </div>

      {/* Run the animation for this section only */}
      <SectionReveal />
    </section>
  );
};

export default ContentFormats;
