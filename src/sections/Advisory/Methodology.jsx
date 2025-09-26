import { P2 } from "@/components/CustomTags";
import { MethodologyStep } from "@/components/ui/advisory";
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

export default function Methodology({ column, data }) {
  const { title, subTitle, list, isStepHidden } = data || {};
  console.log("methodology data:", data);
  // Chunk the list into pairs for mobile carousel
  const chunkedList = chunkArray(list, 2);

  return (
    <section
      className=" "
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className=" mx-auto">
        <div className="mb-16">
          <h3 className="" data-reveal data-reveal-dir="up">
            {title}
          </h3>
          <P2 className="" data-reveal data-reveal-dir="up">
            {subTitle}
          </P2>
        </div>

        {/* Desktop View - Original Implementation */}
        <div className="hidden max-w-6xl mx-auto lg:block lg:px-32 -z-1 rounded-2xl space-y-8">
          {list.map((item, index) => (
            <div key={index} data-reveal data-reveal-dir="up">
              <MethodologyStep
                column={column}
                isStepHidden={isStepHidden}
                step={index + 1}
                title={item.title}
                tags={item.tags}
                description={item.description}
              />
            </div>
          ))}
        </div>

        {/* Mobile View - Chunked Carousel */}
        <div className="lg:hidden lg:px-32 -z-1 rounded-2xl space-y-8">
          <CarouselContainer>
            {chunkedList.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className="w-full space-y-6 px-4"
                data-reveal
                data-reveal-dir="up">
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
        </div>
      </div>

      <SectionReveal />
    </section>
  );
}
