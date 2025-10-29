// Updated LearningChallenges.jsx
import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

export default function LearningChallenges({ data, icons }) {
  const { title, subTitle, cards = [], description = "" } = data;

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1580px] space-y-16 mx-auto">
        {/* Header */}
        <div>
          <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
            <h3 className="mb-4">{title}</h3>
          </RevealWrapper>

          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.1}
            threshold={0.2}>
            <P2>{subTitle}</P2>
          </RevealWrapper>
        </div>

        {/* Challenge Cards */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <RevealWrapper
              key={index}
              direction="up"
              duration={0.6}
              delay={0.2 + index * 0.15} // Staggered cards
              distance={30}
              threshold={0.15}
              className="border-b border-black-200 pb-8">
              {/* Icon */}
              {icons && (
                <Image
                  src={`${icons}/${index + 1}.svg`}
                  alt={card.title}
                  width={64}
                  height={64}
                  className="size-10 mb-8"
                />
              )}

              {/* Title */}
              <h5 className="mb-4">{card.title}</h5>

              {/* Description */}
              <P3 className="text-black-500">
                {card.description || card.subTitle}
              </P3>
            </RevealWrapper>
          ))}
        </div>

        {/* Bottom Description */}
        {description && (
          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.4}
            distance={20}
            threshold={0.2}>
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
          </RevealWrapper>
        )}
      </div>
    </section>
  );
}
