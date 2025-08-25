"use client";
import React from "react";
import NextUpCard from "./NextUpCard";
import { P1 } from "@/components/CustomTags";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const NextUpSection = ({ heading, title, description, cards }) => {
  const handleCardClick = (card) => {
    if (card.onClick) {
      card.onClick();
    }
  };

  return (
    <div
      className="w-full"
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className="mx-auto">
        {/* Section Heading */}
        <h3 className="text-black" data-reveal data-reveal-dir="up">
          {heading}
        </h3>

        {/* Title & Description */}
        <div
          className="text-center mx-auto mb-10"
          data-reveal
          data-reveal-dir="up">
          <h2 className="mb-4" data-reveal data-reveal-dir="up">
            {title}
          </h2>
          <P1 className="text-black-950" data-reveal data-reveal-dir="up">
            {description}
          </P1>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => {
            // Static image selection or logic to determine the image
            const cardImage =
              index === 0
                ? "/Company/Landing page/About us.webp"
                : index === 1
                ? "/Company/Landing page/Our Team.webp"
                : "/Company/Landing page/Career.webp";

            return (
              <NextUpCard
                key={index}
                title={card.title}
                description={card.description}
                image={cardImage} // Pass the image from the public folder
                href={card.href}
                onClick={() => handleCardClick(card)}
                data-reveal
                data-reveal-dir="up" // Apply the animation to each card
              />
            );
          })}
        </div>
      </div>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </div>
  );
};

export default NextUpSection;
