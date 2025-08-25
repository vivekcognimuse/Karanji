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
          {/* {cards.map((card, index) => (
            <NextUpCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              href={card.href} // Pass href prop for Link navigation
              onClick={() => handleCardClick(card)} // Keep onClick for backward compatibility
            />

          ))} */}
          {cards.map((card, index) => {
            // You can statically define images or use some logic to decide which image to display
            const cardImage =
              index === 0
                ? "/Company/Landing page/About us.webp"
                : index === 1
                ? "/Company/Landing page/Our Team.webp"
                : "/Company/Landing page/Career.webp"; // Fallback to card3.jpg for other cards

            return (
              <NextUpCard
                key={index}
                title={card.title}
                description={card.description}
                image={cardImage} // Pass the image from the public folder
                href={card.href}
                onClick={() => handleCardClick(card)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NextUpSection;
