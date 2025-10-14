// Updated IndustryExpertise.jsx
import { P3 } from "@/components/CustomTags";
import { IndustryCard } from "@/components/ui/advisory";
import { RevealWrapper } from "@/components/animations/RevealWrapper";
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
    <section className="">
      <div className="max-w-[1580px] mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
            <h3 className="">{title}</h3>
          </RevealWrapper>

          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.1}
            threshold={0.2}>
            <P3 className="text-lg lg:text-xl font-normal font-['Outfit'] text-black leading-relaxed tracking-wide">
              {subTitle}
            </P3>
          </RevealWrapper>
        </div>

        {/* Desktop/Tablet View - Grid with staggered cards */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((industry, index) => (
            <RevealWrapper
              key={index}
              direction="up"
              duration={0.5}
              delay={0.2 + index * 0.12} // Staggered grid items
              distance={30}
              threshold={0.15}>
              <IndustryCard
                title={industry.title}
                description={industry.description}
                icon={`${icon}/${index + 1}.svg`}
                altTag={industry.altTag}
              />
            </RevealWrapper>
          ))}
        </div>

        {/* Mobile View - Carousel animation */}
        <RevealWrapper
          direction="up"
          duration={0.7}
          delay={0.2}
          distance={30}
          threshold={0.2}
          className="lg:hidden">
          <CarouselContainer>
            {chunkedCards.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="w-full space-y-6 p-4">
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
        </RevealWrapper>
      </div>
    </section>
  );
};

export default IndustryExpertise;
