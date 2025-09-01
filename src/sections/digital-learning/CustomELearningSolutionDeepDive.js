"use client";
import CarouselContainer from "@/components/animations/Carousal";
import MultiCardCarousel from "@/components/animations/MultiCardCarousal";
import { P1, P2, P3 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * Card Component with hover effect
 */
const ELearningCard = ({ card, index }) => {
  const { subTitle, description, videoSrc, imageSrc, alt } = card;

  return (
    <div
      key={index}
      className="bg-white max-w-[32rem] w-full aspect-auto rounded-2xl border border-black-300 p-4 flex flex-col group relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Red gradient overlay for hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

      <P1 className="w-fit rounded-full py-2 border border-black-200 mb-4 px-6 relative z-10">
        {subTitle}
      </P1>
      <P3 className="mb-8 flex-grow relative z-10">{description}</P3>
      <div className="relative mt-auto aspect-auto border rounded-2xl overflow-hidden flex items-end w-auto flex-grow">
        <Image
          src={imageSrc}
          alt={alt || description}
          width={500}
          height={310}
          className="w-full"
        />

        <a href={videoSrc} target="_blank" rel="noopener noreferrer">
          <button className="size-12 cursor-pointer flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 justify-center rounded-full items-center bg-black hover:bg-black/80 transition-colors duration-200">
            <Icon icon="f7:play-fill" className="size-6 text-[#F7D9D9]" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default function ELearningSolutions({ data, setActiveTab }) {
  const { title, subTitle, level1, level2, cta, cards } = data;

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - 80; // Subtract 80px to scroll 80px above the section

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scroll
      });
    }

    setActiveTab("ready");
  };

  return (
    <section className="relative isolate">
      {/* Header */}
      <div className="mb-16">
        <h3 className="mb-4">{title}</h3>
        <P2 className="">{subTitle}</P2>
      </div>

      {/* Cards - Desktop: MultiCardCarousel, Mobile: CarouselContainer */}
      <div className="w-full md:min-w-lg gap-8 mx-auto px-6">
        {/* Desktop Carousel - Hidden on mobile */}
        <div className="hidden md:block">
          <MultiCardCarousel>
            {cards.map((card, index) => (
              <div key={index} className="flex flex-wrap gap-4 justify-center">
                <ELearningCard card={card} index={index} />
              </div>
            ))}
          </MultiCardCarousel>
        </div>

        {/* Mobile Carousel - Hidden on desktop */}
        <div className="block md:hidden">
          <CarouselContainer>
            {cards.map((card, index) => (
              <ELearningCard key={index} card={card} index={index} />
            ))}
          </CarouselContainer>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 flex-col md:flex-row text-center md:text-start flex justify-end items-center gap-4">
        <P2 className="">{cta.text}</P2>

        <Button
          onClick={() => handleScrollToSection(event, cta.buttonLink)}
          size="sm"
          variant="secondary"
          className="">
          {cta.buttonText}
        </Button>
      </div>
    </section>
  );
}
