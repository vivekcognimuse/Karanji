import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const LMSLearning = ({ data }) => {
  const { title, description, cards } = data || {};

  return (
    <section
      data-reveal-amount="0.25"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      {/* Header */}
      <div
        className="opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        <h3>{title}</h3>
        <P2>{description}</P2>
      </div>

      {/* Cards Section */}
      <div
        className="flex-center flex-col lg:flex-row gap-8 opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#FFE5E5] mt-8 space-y-8 p-5 rounded-2xl opacity-0 will-change-transform"
            data-reveal
            data-reveal-dir="up">
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

      {/* Run the animation for this section */}
      <SectionReveal />
    </section>
  );
};

export default LMSLearning;
