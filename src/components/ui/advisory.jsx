import { memo } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

// Loading Spinner Component
export const LoadingSpinner = memo(function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
    </div>
  );
});

// Stats Display Component
export const StatsDisplay = memo(function StatsDisplay({ stats }) {
  return (
    <div className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="text-3xl md:text-4xl lg:text-5xl font-semibold font-sans  text-black">
              {stat.value}
            </div>
            <div className="text-sm md:text-lg font-light font-['Outfit'] text-black/70 uppercase leading-relaxed tracking-wide">
              {stat.label}
            </div>
          </div>
          {index < stats.length - 1 && (
            <div className="hidden md:block w-px h-11 bg-black/30 ml-8 md:ml-16"></div>
          )}
        </div>
      ))}
    </div>
  );
});

export const ServiceCard = memo(function ServiceCard({
  title = "Strategy",
  subtitle = "Strong Foundation",
  description = "Our intelligence consulting experts start with readiness assessments, opportunity identification, and a strategic AI roadmap tailored to your business goals.",
  featured,
  index,
  currentIndex,
  icon,
}) {
  const isActive = index === currentIndex;

  return (
    <div className="w-full  h-[420px] p-8 -z-1 relative">
      {/* Border using pseudo-element */}
      <div
        className="absolute inset-0 rounded-2xl -z-10"
        style={{
          clipPath:
            "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0% 60%, 0 10%)",
          background: "oklch(58.5% 0.233 277.117)",
          transform: "scale(1.005)",
        }}
      />

      {/* Background card with gradient and clip-path */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-white via-50% to-indigo-100 rounded-2xl shadow-lg overflow-hidden"
        style={{
          clipPath:
            "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0% 60%, 0 10%)",
        }}
      />

      {/* Content container */}
      <div
        className={`relative z-10 h-full flex flex-col justify-between ${
          featured || isActive ? "lg:scale-105 z-10" : "lg:hover:blur-none"
        } transition-all duration-300 hover:scale-105`}>
        {/* Top section with icon and titles */}
        <div className="flex flex-col gap-4">
          {/* Icon section */}
          <div className="flex justify-start items-center">
            {Icon ? (
              <div className="w-10 h-10 flex items-center justify-center  rounded-lg">
                <Icon icon={icon} className="w-6 h-6 text-indigo-600" />
              </div>
            ) : (
              // Custom icon placeholder (your original design)
              <div className="w-10 h-10 relative overflow-hidden">
                <div className="w-8 h-8 left-[2px] top-[7.13px] absolute bg-indigo-400  outline-indigo-400" />
                <div className="w-6 h-6 left-[7.60px] top-[12.73px] absolute bg-indigo-400  outline-indigo-400" />
                <div className="w-3 h-3 left-[13.20px] top-[18.32px] absolute bg-indigo-400  outline-indigo-400" />
                <div className="w-1 h-1 left-[37.11px] top-[2.20px] absolute bg-indigo-400  outline-indigo-400" />
                <div className="w-4 h-4 left-[18.36px] top-[8.64px] absolute bg-indigo-400  outline-indigo-400" />
                <div className="w-2 h-2 left-[32.79px] top-[2px] absolute bg-indigo-400  outline-indigo-400" />
              </div>
            )}
          </div>

          {/* Title and subtitle */}
          <div className="flex flex-col gap-1">
            <h3
              className={`text-black font-normal font-sans  ${
                featured || isActive ? "text-3xl" : "text-2xl"
              }`}>
              {title}
            </h3>
            <p className="text-black/50 text-xl font-light font-['Outfit'] tracking-wide">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Description at bottom */}
        <div className="mt-auto">
          <p className="text-black/50 text-lg font-light font-['Outfit'] tracking-wide leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
});
// Methodology Step Component
export const MethodologyStep = memo(function MethodologyStep({
  step,
  title,
  description,
  isLast,
}) {
  return (
    <div className={`${!isLast ? "border-b -z-1 border-black/50 pb-6" : ""}`}>
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="flex items-center gap-8">
          <div className="text-3xl md:text-4xl lg:text-5xl font-extralight font-sans italic  text-black/80 w-32">
            {step}
          </div>
          <div className="text-2xl md:text-3xl font-normal font-sans  text-black w-32 md:w-56">
            {title}
          </div>
        </div>
        <div className="flex-1 text-lg md:text-xl font-light font-['Outfit'] text-black/50 tracking-wide">
          {description}
        </div>
      </div>
    </div>
  );
});

// Industry Card Component
export const IndustryCard = memo(function IndustryCard({
  title,
  description,
  icon,
}) {
  return (
    <div className="p-6 bg-white rounded-2x -z-1 shadow-lg border border-black/20  flex items-center gap-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12  rounded-lg flex items-center justify-center">
          <Image
            src={icon}
            width={40}
            alt=""
            height={40}
            className="w-11 h-11 text-white"
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-medium font-sans  text-black tracking-wide mb-2">
          {title}
        </h3>
        <p className="text-lg md:text-xl font-light font-['Outfit'] text-black/50 tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
});

// Testimonial Carousel Component
export const TestimonialCarousel = memo(function TestimonialCarousel({
  testimonials,
  currentIndex,
  onNext,
  onPrev,
  onDotClick,
}) {
  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <button
          onClick={onPrev}
          className="w-12 h-12 bg-gradient-to-br from-indigo-200 via-sky-100 to-rose-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Previous testimonial">
          <Icon icon="lucide:chevron-left" className="w-6 h-6 text-black" />
        </button>

        <div className="flex-1 bg-white rounded-3xl shadow-lg border border-black/20 p-6 md:p-8">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-normal font-sans  text-black mb-6">
              {currentTestimonial.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {currentTestimonial.metrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-px h-24 bg-black"></div>
                  <div>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-semibold font-sans  text-black">
                      {metric.value}
                    </div>
                    <div className="text-lg md:text-xl font-normal font-['Outfit'] text-black leading-relaxed tracking-wide">
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg md:text-xl font-normal font-['Outfit'] text-black/50 leading-relaxed tracking-wide mb-6">
              {currentTestimonial.description}
            </p>

            <div className="flex items-center gap-2 text-lg font-normal font-['Outfit'] tracking-wide cursor-pointer hover:text-indigo-600 transition-colors">
              <span>Read Full CaseStudy</span>
              <Icon icon="lucide:arrow-up-right" className="w-6 h-6" />
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-12 h-12 bg-gradient-to-br from-indigo-200 via-sky-100 to-rose-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Next testimonial">
          <Icon icon="lucide:chevron-right" className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              index === currentIndex
                ? "bg-gradient-to-br from-indigo-200 via-sky-100 to-rose-200"
                : "bg-black/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
});
