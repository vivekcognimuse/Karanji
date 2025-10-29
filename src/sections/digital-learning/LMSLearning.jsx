import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const LMSLearning = ({ data }) => {
  const { title, description, cards } = data || {};

  return (
    <div>
      <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
        <h3>{title}</h3>
      </RevealWrapper>
      
      <RevealWrapper
        direction="up"
        duration={0.6}
        delay={0.1}
        threshold={0.2}>
        <P2>{description}</P2>
      </RevealWrapper>

      <RevealWrapper
        direction="up"
        duration={0.6}
        delay={0.2}
        stagger={0.15}
        threshold={0.15}
        className="justify-center lg:items-start flex flex-col w-full   lg:flex-row gap-4  md:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#FFE5E5] flex-1 max-w-lg mt-8 space-y-8 p-5 rounded-2xl">
            {card.image && (
              <Image
                src={card.image}
                alt={card.title}
                width={40}
                height={40}
                className="size-10"
              />
            )}
            <h5>{card.title}</h5>
            <hr className="h-px opacity-20 bg-black-100" />
            <div className="space-y-8">
              {card.list.map((item, idx) => (
                <P3 key={idx} className="mt-2">
                  {item.text}
                </P3>
              ))}
            </div>
          </div>
        ))}
      </RevealWrapper>
    </div>
  );
};

export default LMSLearning;
