import CarouselContainer from "@/components/animations/Carousal";
import MultiCardCarousel from "@/components/animations/MultiCardCarousal";

import { P1, P2, P3 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * Reusable Card Component
 */
const ELearningCard = ({ card, index }) => {
  const { tag, description, videoSrc, imageSrc, alt } = card;

  return (
    <div key={index} className="flex flex-wrap gap-4 justify-center">
      <div className="relative group">
        <a
          href={videoSrc}
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-white max-w-[32rem] w-full aspect-auto rounded-2xl border border-black-300 p-4 flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer">
          <P1 className="w-fit rounded-full py-2 border border-black-200 mb-4 px-6 group-hover:border-black-400 transition-colors duration-300">
            {tag}
          </P1>
          <P3 className="mb-8 flex-grow">{description}</P3>
          <div className="relative mt-auto aspect-auto border rounded-2xl overflow-hidden flex items-end w-auto flex-grow">
            <Image
              src={imageSrc}
              alt={alt || description}
              width={500}
              height={310}
              className="w-full  transition-transform duration-300"
            />

            {/* Play icon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="size-12 flex justify-center rounded-full items-center bg-black group-hover:bg-black/80 transition-colors duration-300">
                <Icon
                  icon="f7:play-fill"
                  className="size-6 text-[#F7D9D9] group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </a>

        {/* Gradient overlay on hover - covers entire card */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#ecbbbb9a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none z-10"></div>
      </div>
    </div>
  );
};

export default function ELearningSolutions({ data, setActiveTab }) {
  const { title, subTitle, level1, level2, ctaText, ctaButtonText, cards } =
    data;

  // Render cards function to avoid duplication
  const renderCards = () =>
    cards.map((card, index) => (
      <ELearningCard key={index} card={card} index={index} />
    ));

  return (
    <section className="relative isolate">
      {/* Header */}
      <div className="mb-16">
        <h3 className="mb-4">{title}</h3>
        <P2 className="">{subTitle}</P2>
      </div>

      {/* Cards - Desktop */}
      <div className="w-full hidden md:block md:min-w-lg gap-8 mx-auto px-6">
        <MultiCardCarousel showButtons>{renderCards()}</MultiCardCarousel>
      </div>

      {/* Cards - Mobile */}
      <div className="w-full md:hidden md:min-w-lg gap-8 mx-auto px-6">
        <CarouselContainer>{renderCards()}</CarouselContainer>
      </div>

      {/* CTA */}
      <div className="mt-16 flex-col md:flex-row text-center md:text-start flex justify-end items-center gap-4 ">
        <P2 className=" ">
          {ctaText || "Need something totally ready to deploy?"}
        </P2>
        <Link href="?tab=ready#solutions-and-resources">
          <Button size="sm" variant="secondary" className="">
            {ctaButtonText || "View Ready Solutions and Resources"}
          </Button>
        </Link>
      </div>
    </section>
  );
}
