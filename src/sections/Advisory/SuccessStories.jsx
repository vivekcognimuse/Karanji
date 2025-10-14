// Updated SuccessStories.jsx
import CarouselContainer from "@/components/animations/Carousal";
import { P2 } from "@/components/CustomTags";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

// Main Component - Usage Example
export default function SuccessStories({ data }) {
  const { title, description, cards } = data;
  const isSingleCard = cards.length === 1;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title with specific animation */}
      <div className="mb-20">
        <RevealWrapper
          direction="up"
          duration={0.6}
          distance={30}
          threshold={0.2}>
          <h3 className="mb-4">{title}</h3>
        </RevealWrapper>

        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.15}
          distance={25}
          threshold={0.2}>
          <P2>{description}</P2>
        </RevealWrapper>
      </div>

      {isSingleCard ? (
        <RevealWrapper
          direction="fade"
          duration={0.8}
          distance={30}
          threshold={0.2}
          className="mx-auto">
          <TestimonialCard testimonial={cards[0]} />
        </RevealWrapper>
      ) : (
        <RevealWrapper
          direction="up"
          duration={0.9}
          distance={40}
          delay={0.3}
          threshold={0.1}
          ease="power3.out"
          className="mx-auto">
          <CarouselContainer
            autoPlay={true}
            autoPlayInterval={7000}
            showDots={true}
            showArrows={true}>
            {cards.map((card, index) => (
              <TestimonialCard key={index} testimonial={card} />
            ))}
          </CarouselContainer>
        </RevealWrapper>
      )}
    </div>
  );
}
