"use client";
import React from "react";
import NextUpCard from "./NextUpCard";

const NextUpSection = ({ heading, cards }) => {
  const handleCardClick = (card) => {
    if (card.onClick) {
      card.onClick();
    }
    // Default behavior could be navigation
    console.log(`Clicked on ${card.title}`);
  };

  return (
    <div className="w-full">
      <div className=" mx-auto">
        {/* Section Heading */}
        <h3 className=" text-black">{heading}</h3>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <NextUpCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextUpSection;
