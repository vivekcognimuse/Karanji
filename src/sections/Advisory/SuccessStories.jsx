import CarouselContainer from "@/components/animations/Carousal";
import { P2 } from "@/components/CustomTags";
import TestimonialCard from "@/components/ui/TestimonialCard";

// Main Component - Usage Example
export default function SuccessStories({ data }) {
  const { title, description, cards } = data;
  return (
    <div className="container mx-auto px-4 py-12">
      <div className=" mb-20">
        <h3 className=" mb-4">{title}</h3>
        <P2 className="">{description}</P2>
      </div>

      <CarouselContainer
        autoPlay={true}
        autoPlayInterval={7000}
        showDots={true}
        showArrows={true}
        className=" mx-auto">
        {cards.map((card, index) => (
          <TestimonialCard key={index} testimonial={card} />
        ))}
      </CarouselContainer>
    </div>
  );
}
