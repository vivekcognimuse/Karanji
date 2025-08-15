"use client";
import React from "react";
import NextUpCard from "./NextUpCard";
import { P1 } from "@/components/CustomTags";

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
        <h3 className="text-black">{heading}</h3>

        {/* Title & Description */}
        <div className="text-center mx-auto mb-10">
          <h2 className="mb-4">{title}</h2>
          <P1 className="text-black-950">{description}</P1>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <NextUpCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              href={card.href} // Pass href prop for Link navigation
              onClick={() => handleCardClick(card)} // Keep onClick for backward compatibility
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextUpSection;
