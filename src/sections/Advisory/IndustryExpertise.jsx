// components/IndustryExpertise.js

import { P3 } from "@/components/CustomTags";
import { IndustryCard } from "@/components/ui/advisory";
import SectionReveal from "@/components/animations/sectionReveal";
import CarouselContainer from "@/components/animations/Carousal";

// Utility function to chunk array into groups of specified size
const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const IndustryExpertise = ({ data, icon }) => {
  const { title, subTitle, cards } = data || {};

  // Chunk the cards into pairs for mobile carousel
  const chunkedCards = chunkArray(cards, 2);

  return (
    <section
      className=""
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className="max-w-[1580px] mx-auto">
        <div className="mb-12">
          <h3
            className="text-3xl lg:text-4xl lg:text-5xl font-medium font-['Albert_Sans'] text-black mb-4"
            data-reveal
            data-reveal-dir="up">
            {title}
          </h3>
          <P3
            className="text-lg lg:text-xl font-normal font-['Outfit'] text-black leading-relaxed tracking-wide"
            data-reveal
            data-reveal-dir="up">
            {subTitle}
          </P3>
        </div>

        {/* Desktop/Tablet View - Original Grid Implementation */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((industry, index) => (
            <div key={index} data-reveal data-reveal-dir="up">
              <IndustryCard
                title={industry.title}
                description={industry.description}
                icon={`${icon}/${index + 1}.svg`}
                altTag={industry.altTag}
              />
            </div>
          ))}
        </div>

        {/* Mobile View - Chunked Carousel */}
        <div className="lg:hidden">
          <CarouselContainer>
            {chunkedCards.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className="w-full space-y-6 p-4"
                data-reveal
                data-reveal-dir="up">
                {chunk.map((industry, itemIndex) => {
                  const originalIndex = chunkIndex * 2 + itemIndex;
                  return (
                    <div key={originalIndex}>
                      <IndustryCard
                        title={industry.title}
                        description={industry.description}
                        icon={`${icon}/${originalIndex + 1}.svg`}
                        altTag={industry.altTag}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </CarouselContainer>
        </div>
      </div>

      <SectionReveal />
    </section>
  );
};

export default IndustryExpertise;
