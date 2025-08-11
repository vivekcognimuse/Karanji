import { memo } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { P2, P3, P4 } from "../CustomTags";

export const TestimonialCarousel = memo(function TestimonialCarousel({
  testimonials,
  currentIndex,
  onNext,
  onPrev,
  onDotClick,
}) {
  const currentTestimonial = testimonials[currentIndex];
  const showButton = testimonials.length > 1;
  return (
    <div className="py-14 relative">
      <div className="block lg:hidden">
        <div className=" rounded-3xl shadow-lg border border-black/20 p-4 sm:p-6 mb-6">
          <h4 className="mb-8">{currentTestimonial.title}</h4>

          <div className="grid grid-cols-1 gap-4 mb-8">
            {currentTestimonial?.stats?.map((metric, index) => (
              <div
                key={index}
                className="flex border-l border-black pl-4 items-center gap-4">
                <div>
                  <p className="font-sans font-semibold text-2xl md:text-5xl">
                    {metric.value}
                  </p>
                  <P2 className="text-black">{metric.label}</P2>
                </div>
              </div>
            ))}
          </div>

          <P4 className="text-black-500 mb-6">
            {currentTestimonial.description}
          </P4>

          <div className="flex items-center gap-2 text-lg font-normal justify-end tracking-wide cursor-pointer hover:text-indigo-600 transition-colors">
            <span>Read Full CaseStudy</span>
            <Icon icon="lucide:arrow-up-right" className="w-6 h-6" />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-center gap-6">
          {showButton && (
            <button
              onClick={onPrev}
              className="w-8 h-8 bg-gradient-to-br from-indigo-200 via-sky-100 to-rose-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Previous testimonial">
              <Icon icon="lucide:chevron-left" className="w-6 h-6 text-black" />
            </button>
          )}

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => onDotClick(index)}
                className={`cursor-pointer rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-gradient-to-br size-3 from-indigo-200 via-sky-100 to-rose-200"
                    : "bg-black/30 size-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {showButton && (
            <button
              onClick={onNext}
              className="w-8h-8 bg-gradient-to-br from-indigo-200 via-sky-100 to-rose-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Next testimonial">
              <Icon
                icon="lucide:chevron-right"
                className="w-6 h-6 text-black"
              />
            </button>
          )}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row items-center gap-8 lg:gap-16">
        {showButton && (
          <button
            onClick={onPrev}
            className="w-8 h-8 bg-gradient-to-br from-indigo-200 via-sky-100 to-rose-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Previous testimonial">
            <Icon icon="lucide:chevron-left" className="w-6 h-6 text-black" />
          </button>
        )}

        <div className="flex-1  rounded-3xl shadow-lg border border-black/20 p-6 md:p-8">
          <h4 className="mb-12">{currentTestimonial.title}</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {currentTestimonial?.stats?.map((metric, index) => (
              <div
                key={index}
                className="flex border-l border-black pl-4 items-center gap-4">
                <div>
                  <p className="font-sans font-semibold text-5xl">
                    {metric.value}
                  </p>
                  <P2 className="text-black">{metric.label}</P2>
                </div>
              </div>
            ))}
          </div>

          <P4 className="text-black-500 mb-6">
            {currentTestimonial.description}
          </P4>

          <div className="flex items-center gap-2 text-lg font-normal justify-end tracking-wide cursor-pointer hover:text-indigo-600 transition-colors">
            <span>Read Full CaseStudy</span>
            <Icon icon="lucide:arrow-up-right" className="w-6 h-6" />
          </div>
        </div>

        {showButton && (
          <button
            onClick={onNext}
            className="w-8 h-8 bg-gradient-to-br from-indigo-200 via-sky-100 to-rose-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Next testimonial">
            <Icon icon="lucide:chevron-right" className="w-6 h-6 text-black" />
          </button>
        )}

        {/* Desktop Pagination dots */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotClick(index)}
              className={`cursor-pointer rounded-full transition-all ${
                index === currentIndex
                  ? "bg-gradient-to-br  from-indigo-200 via-sky-100 to-rose-200"
                  : "bg-black/30 size-2 md:size-3"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
