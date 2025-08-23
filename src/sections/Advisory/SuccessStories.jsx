import CarouselContainer from "@/components/animations/Carousal";
import SectionReveal from "@/components/animations/sectionReveal";
import { P2 } from "@/components/CustomTags";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function SuccessStories({ data }) {
  const { title, description, cards } = data;
  const isSingleCard = cards.length === 1;

  return (
    <section
      data-reveal-amount="0.25"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
      className="container mx-auto px-4 py-12">
      <div className="mb-20">
        <h3
          className="mb-4 opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up">
          {title}
        </h3>
        <P2
          className="mb-16 opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up">
          {description}
        </P2>
      </div>

      <div
        className="opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
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
            className="mx-auto py-4">
            {cards.map((card, index) => (
              <TestimonialCard
                key={index}
                testimonial={card}
                data-reveal
                data-reveal-dir="up"
                className="opacity-0 will-change-transform"
              />
            ))}
          </CarouselContainer>
        )}
      </div>

      {/* run the animation for this section only */}
      <SectionReveal />
    </section>
  );
}
