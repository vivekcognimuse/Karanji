"use client";
import { TestimonialCarousel } from "@/components/ui/advisory";
import { testimonialsData } from "@/constant/advisory";
import { useState } from "react";

export default function SuccessStories() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Albert_Sans'] text-black mb-4">
            Use Cases & Success Stories
          </h2>
          <p className="text-lg md:text-xl font-normal font-['Outfit'] text-black leading-relaxed tracking-wide mb-8">
            Discover real-world impact as our immersive solutions transform
            operations across industries
          </p>
        </div>

        <TestimonialCarousel
          testimonials={testimonialsData}
          currentIndex={currentTestimonial}
          onNext={nextTestimonial}
          onPrev={prevTestimonial}
          onDotClick={handleDotClick}
        />
      </div>
    </section>
  );
}
