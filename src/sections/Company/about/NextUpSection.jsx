"use client";
import React from "react";
import NextUpCard from "./NextUpCard";
import { P1 } from "@/components/CustomTags";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const NextUpSection = ({ heading, title, description, cards }) => {
  const handleCardClick = (card) => {
    if (card.onClick) {
      card.onClick();
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto">
        {/* Section Heading */}
        <RevealWrapper direction="up" duration={0.5} threshold={0.3}>
          <h3 className="text-black">{heading}</h3>
        </RevealWrapper>

        {/* Title & Description */}
        <div className="text-center mx-auto mb-10">
          <RevealWrapper
            direction="up"
            duration={0.5}
            delay={0.1}
            threshold={0.3}
          >
            <h2 className="mb-4">{title}</h2>
          </RevealWrapper>

          <RevealWrapper
            direction="up"
            duration={0.5}
            delay={0.15}
            threshold={0.3}
          >
            <P1 className="text-black-950">{description}</P1>
          </RevealWrapper>
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
              <RevealWrapper
                key={index}
                direction="up"
                duration={0.5}
                delay={0.2 + index * 0.12} // Staggered animation matching original timing
                distance={30}
                threshold={0.3}
              >
                <NextUpCard
                  title={card.title}
                  description={card.description}
                  image={cardImage}
                  href={card.href}
                  onClick={() => handleCardClick(card)}
                />
              </RevealWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NextUpSection;
