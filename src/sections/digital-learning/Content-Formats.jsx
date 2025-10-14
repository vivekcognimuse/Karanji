import CarouselContainer from "@/components/animations/Carousal";
import { P2 } from "@/components/CustomTags";

import Image from "next/image";
import React from "react";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

// Utility function to chunk array into groups of specified size
const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const ContentFormats = ({ data, cardImage }) => {
  const { title, subTitle, cards, image } = data || {};

  // Chunk the content into pairs for mobile carousel
  const chunkedContent = chunkArray(cards, 3);

  return (
    <div>
      <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
        <h3>{title}</h3>
      </RevealWrapper>

      <RevealWrapper direction="up" duration={0.6} delay={0.1} threshold={0.2}>
        <P2>{subTitle}</P2>
      </RevealWrapper>

      {image && (
        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.2}
          threshold={0.2}
          className="mt-8 rounded-2xl h-auto max-h-96 bg-purple-200 object-bottom overflow-hidden">
          <Image
            src={image}
            alt="Content Formats"
            width={600}
            unoptimized
            height={400}
            className="w-full h-full object-cover object-center"
          />
        </RevealWrapper>
      )}

      {/* Desktop View - Original Grid Implementation */}
      <RevealWrapper
        direction="up"
        duration={0.6}
        delay={0.3}
        stagger={0.1}
        threshold={0.15}
        className="mt-16 hidden lg:grid gap-4 grid-cols-1 lg:grid-cols-3">
        {cards.map((item, index) => (
          <div
            key={index}
            className="mb-8 border border-black-200 shadow-md px-4 py-2 gap-4 rounded-2xl flex items-center">
            {(item.src || cardImage) && (
              <Image
                src={`${cardImage}/${index + 1}.svg` || item.src}
                alt={item.alt || item.title}
                width={40}
                height={40}
                className="size-10"
              />
            )}
            <h5 className="mb-0">{item.title}</h5>
          </div>
        ))}
      </RevealWrapper>

      {/* Mobile View - Chunked Carousel */}
      <RevealWrapper
        direction="up"
        duration={0.6}
        delay={0.3}
        threshold={0.15}
        className="mt-16 lg:hidden">
        <CarouselContainer>
          {chunkedContent.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="w-full space-y-4 px-4">
              {chunk.map((item, itemIndex) => {
                const originalIndex = chunkIndex * 2 + itemIndex;
                console.log("imgsrc", `${cardImage}/${originalIndex + 1}.svg`);
                return (
                  <div
                    key={originalIndex}
                    className="mb-8 w-full border border-black-200 shadow-md px-4 py-2 gap-4 rounded-2xl flex items-center">
                    {item.src && (
                      <Image
                        src={`${cardImage}/${index + 1}.svg`}
                        alt={item.alt || item.title}
                        width={40}
                        height={40}
                        className="size-9"
                      />
                    )}
                    <h5 className="mb-0">{item.title}</h5>
                  </div>
                );
              })}
            </div>
          ))}
        </CarouselContainer>
      </RevealWrapper>
    </div>
  );
};

export default ContentFormats;
