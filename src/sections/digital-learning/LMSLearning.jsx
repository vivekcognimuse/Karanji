import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";

const LMSLearning = ({ data }) => {
  const { title, description, cards } = data || {};

  return (
    <div>
      <h3>{title}</h3>
      <P2>{description}</P2>

      <div className="flex-center flex-col lg:flex-row gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#FFE5E5] mt-8 space-y-8 p-5 rounded-2xl">
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
              {card.description.map((desc, idx) => (
                <P3 key={idx} className="mt-2">
                  {desc}
                </P3>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LMSLearning;
