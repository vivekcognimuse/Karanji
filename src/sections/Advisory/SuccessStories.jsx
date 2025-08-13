import CarouselContainer from "@/components/animations/Carousal";
import TestimonialCard from "@/components/ui/TestimonialCard";

// Main Component - Usage Example
export default function SuccessStories({ data }) {
  const { title, description, cards } = data;
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
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
