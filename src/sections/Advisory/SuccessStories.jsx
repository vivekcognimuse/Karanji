import CarouselContainer from "@/components/animations/Carousal";
import { P2 } from "@/components/CustomTags";
import TestimonialCard from "@/components/ui/TestimonialCard";

// Main Component - Usage Example
export default function SuccessStories({ data }) {
  const { title, description, cards } = data;
  const isSingleCard = cards.length === 1;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className=" mb-20">
        <h3 className=" mb-4">{title}</h3>
        <P2 className="">{description}</P2>
      </div>

      {isSingleCard ? (
        // Render without carousel when there's only one card
        <div className="mx-auto">
          <TestimonialCard key={0} testimonial={cards[0]} />
        </div>
      ) : (
        // Render carousel when there are multiple cards
        <CarouselContainer
          autoPlay={true}
          autoPlayInterval={7000}
          showDots={true}
          showArrows={true}
          className=" mx-auto  "
        >
          {cards.map((card, index) => (
            <TestimonialCard key={index} testimonial={card} />
          ))}
        </CarouselContainer>
      )}
    </div>
  );
}
