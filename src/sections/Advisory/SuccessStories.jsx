"use client";
import { P2, P3 } from "@/components/CustomTags";
import { TestimonialCarousel } from "@/components/ui/advisory";

import { useState } from "react";

export default function SuccessStories({ data }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { cards: testimonialsData, title, description } = data || {};
  console.log("SuccessStories Data:", data);

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
    <section className="">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="">{title}</h3>
          <P2 className=" text-black  mb-8">{description}</P2>
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
