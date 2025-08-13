import { memo } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { P2, P3, P4 } from "../CustomTags";

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
    <div className="max-w-6xl mx-auto mt-16 px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-left">
            <div className="text-3xl md:text-4xl lg:text-5xl font-semibold font-sans  text-black">
              {stat.value}
            </div>
            <div className="text-sm md:text-lg font-light text-black/70 uppercase leading-relaxed tracking-wide">
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
  description = "...",
  featured,
  index,
  currentIndex,
  heightDifference = false,
  icon,
  className = "",
  ...props
}) {
  const isActive = index === currentIndex;

  // Calculate the height based on index when heightDifference is true
  const dynamicHeight = heightDifference
    ? `calc(420px + ${index * 70}px)`
    : "450px";

  return (
    <div
      {...props}
      className={`w-full max-w-[20rem] border border-black/10 bg-[url('/gradients/offering-card-gradient.svg')] bg-contain bg-bottom bg-no-repeat rounded-2xl shadow-lg p-4  z-0 relative ${className}`}
      style={{
        height: heightDifference ? dynamicHeight : "auto",
        minHeight: heightDifference ? dynamicHeight : "350px",
        flexShrink: 0, // Prevent flex container from shrinking this item
      }}>
      <div
        className={`relative z-10 flex flex-col h-full ${
          featured || isActive ? "lg:scale-105 z-10" : "lg:hover:blur-none"
        } transition-all duration-300 hover:scale-105`}>
        {/* Top Section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-start items-center">
            {icon ? (
              <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                <Image
                  src={icon}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10"
                />
              </div>
            ) : (
              <div className="w-10 h-10 relative overflow-hidden">
                <div className="w-8 h-8 left-[2px] top-[7.13px] absolute bg-indigo-400" />
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <h4 className="mb-2">{title}</h4>
            {subtitle && <P3 className="text-black-500 mb-8">{subtitle}</P3>}
          </div>
        </div>

        <div className="mt-auto" />

        <div>
          <P3 className="text-black/50 font-light">{description}</P3>
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
  tags,
  column = false,
}) {
  if (column) {
    return (
      <div className={`${"border-b border-black/50 pb-8"}`}>
        <div className="flex flex-col  space-y-6">
          <div className="text-4xl  font-extralight font-sans italic text-black/80">
            {"#"} {step}
          </div>
          <h4 className="">{title}</h4>
          <P2 className="text-black-500">{description}</P2>

          {tags && (
            <div className="flex gap-4 flex-wrap">
              {tags.map((tag, index) => (
                <P3
                  key={index}
                  className="rounded-full text-nowrap font-light shadow-md border text-black-500 border-black-300 py-1 px-4">
                  {tag}
                </P3>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="border-b -z-1 border-black/50 pb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="flex flex-row items-start sm:items-center gap-4 sm:gap-8">
          <p className="text-3xl w-fit  md:text-4xl lg:text-5xl font-extralight font-sans italic text-black/80 sm:w-32">
            #{step}
          </p>
          <div className="text-2xl md:text-3xl font-normal font-sans text-black w-full sm:w-32 md:w-56">
            {title}
          </div>
        </div>
        <div className="flex-1 text-lg md:text-xl font-light text-black/50 tracking-wide">
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
  altTag,
}) {
  return (
    <div className="p-4 sm:p-6 rounded-2xl -z-1 shadow-lg border border-black-200  flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-3" data-reveal data-reveal-dir="up">
        {icon && (
          <div className="w-12 h-12  rounded-lg flex items-center justify-center">
            <Image
              src={icon}
              width={40}
              alt={altTag || { title }}
              height={40}
              className="w-11 h-11 text-white"
            />
          </div>
        )}
      </div>
      <div className="flex-1">
        <h5 className="mb-2" data-reveal data-reveal-dir="up">
          {title}
        </h5>
        <P3 className="text-black-500" data-reveal data-reveal-dir="up">
          {description}
        </P3>
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
