// Updated Methodology.jsx
import { P2 } from "@/components/CustomTags";
import { MethodologyStep } from "@/components/ui/advisory";
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

export default function Methodology({ column, data }) {
  const { title, subTitle, list, isStepHidden } = data || {};

  // Chunk the list into pairs for mobile carousel
  const chunkedList = chunkArray(list, 2);

  return (
    <section className="">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
            <h3 className="">{title}</h3>
          </RevealWrapper>

          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.1}
            threshold={0.2}>
            <P2 className="">{subTitle}</P2>
          </RevealWrapper>
        </div>

        {/* Desktop View - Individual step animations */}
        <div className="hidden max-w-6xl mx-auto lg:block lg:px-32 -z-1 rounded-2xl space-y-8">
          {list.map((item, index) => (
            <RevealWrapper
              key={index}
              direction="up"
              duration={0.5}
              delay={0.2 + index * 0.12} // Staggered steps
              distance={30}
              threshold={0.15}>
              <MethodologyStep
                column={column}
                isStepHidden={isStepHidden}
                step={index + 1}
                title={item.title}
                tags={item.tags}
                description={item.description}
              />
            </RevealWrapper>
          ))}
        </div>

        {/* Mobile View - Carousel with chunked items */}
        <RevealWrapper
          direction="up"
          duration={0.7}
          delay={0.2}
          distance={30}
          threshold={0.2}
          className="lg:hidden lg:px-32 -z-1 rounded-2xl space-y-8">
          <CarouselContainer>
            {chunkedList.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="w-full space-y-6 px-4">
                {chunk.map((item, itemIndex) => {
                  // Calculate the original step number
                  const originalIndex = chunkIndex * 2 + itemIndex;
                  return (
                    <div key={originalIndex}>
                      <MethodologyStep
                        column={column}
                        isStepHidden={isStepHidden}
                        step={originalIndex + 1}
                        title={item.title}
                        tags={item.tags}
                        description={item.description}
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
}
