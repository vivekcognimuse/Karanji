import { memo, useState, useEffect, useCallback, useRef } from "react";
import { Icon } from "@iconify/react";
import { P2, P3, P4 } from "../CustomTags";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

// Register GSAP plugins
gsap.registerPlugin(Draggable);

export const TestimonialCarousel = memo(function TestimonialCarousel({
  testimonials = [],
  autoPlayDelay = 5000,
  enableAutoPlay = true,
  className = "",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(enableAutoPlay);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const draggableInstance = useRef(null);
  const isDraggingRef = useRef(false);

  // Touch/Mouse tracking
  const [containerWidth, setContainerWidth] = useState(0);

  // Update container width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Navigate to specific slide
  const goToSlide = useCallback(
    (index, duration = 0.5) => {
      if (!containerWidth || !carouselRef.current) return;

      const newIndex = Math.max(0, Math.min(testimonials.length - 1, index));
      setCurrentIndex(newIndex);

      const targetX = -newIndex * containerWidth;

      // Kill any existing draggable instance before animating
      if (draggableInstance.current) {
        draggableInstance.current.kill();
        draggableInstance.current = null;
      }

      gsap.to(carouselRef.current, {
        x: targetX,
        duration: duration,
        ease: "power2.out",
        onComplete: () => {
          // Recreate draggable after animation completes
          createDraggable();
        },
      });
    },
    [testimonials.length, containerWidth]
  );

  // Create draggable function
  const createDraggable = useCallback(() => {
    if (!carouselRef.current || !containerWidth || testimonials.length <= 1)
      return;

    // Kill any existing instance
    if (draggableInstance.current) {
      draggableInstance.current.kill();
      draggableInstance.current = null;
    }

    const maxDrag = -((testimonials.length - 1) * containerWidth);

    draggableInstance.current = Draggable.create(carouselRef.current, {
      type: "x",
      bounds: { minX: maxDrag, maxX: 0 },
      dragResistance: 0.3,
      edgeResistance: 0.85,
      inertia: false,
      onDragStart: function () {
        isDraggingRef.current = true;
        setIsAutoPlaying(false);
        // Store the starting index
        this.startIndex = currentIndex;
      },
      onDrag: function () {
        // Optional: Add any drag feedback here
      },
      onDragEnd: function () {
        const draggedX = this.x;
        const startX = -this.startIndex * containerWidth;
        const dragDistance = draggedX - startX;

        // Calculate thresholds
        const distanceThreshold = containerWidth * 0.2; // 20% of slide width
        const velocity = this.getVelocity("x");
        const velocityThreshold = 300;

        let targetIndex = this.startIndex;

        // Determine target slide based on drag distance and velocity
        if (Math.abs(velocity) > velocityThreshold) {
          // Velocity-based navigation
          if (velocity > 0 && this.startIndex > 0) {
            targetIndex = this.startIndex - 1;
          } else if (
            velocity < 0 &&
            this.startIndex < testimonials.length - 1
          ) {
            targetIndex = this.startIndex + 1;
          }
        } else if (Math.abs(dragDistance) > distanceThreshold) {
          // Distance-based navigation
          if (dragDistance > 0 && this.startIndex > 0) {
            targetIndex = this.startIndex - 1;
          } else if (
            dragDistance < 0 &&
            this.startIndex < testimonials.length - 1
          ) {
            targetIndex = this.startIndex + 1;
          }
        }

        // Kill the draggable before animating
        if (draggableInstance.current) {
          draggableInstance.current.kill();
          draggableInstance.current = null;
        }

        // Always animate to a specific slide position
        const finalX = -targetIndex * containerWidth;
        setCurrentIndex(targetIndex);

        gsap.to(carouselRef.current, {
          x: finalX,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            isDraggingRef.current = false;
            // Recreate draggable at the new position
            createDraggable();
          },
        });
      },
    })[0];
  }, [containerWidth, testimonials.length, currentIndex]);

  // Next slide
  const nextSlide = useCallback(() => {
    if (isDraggingRef.current) return;
    goToSlide((currentIndex + 1) % testimonials.length);
  }, [currentIndex, testimonials.length, goToSlide]);

  // Previous slide
  const prevSlide = useCallback(() => {
    if (isDraggingRef.current) return;
    goToSlide(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  }, [currentIndex, testimonials.length, goToSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isDraggingRef.current && testimonials.length > 1) {
      intervalRef.current = setInterval(nextSlide, autoPlayDelay);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide, autoPlayDelay, testimonials.length]);

  // Initialize position and draggable when width changes
  useEffect(() => {
    if (containerWidth > 0 && carouselRef.current) {
      // Set initial position
      gsap.set(carouselRef.current, { x: -currentIndex * containerWidth });
      // Create draggable
      createDraggable();
    }

    return () => {
      if (draggableInstance.current) {
        draggableInstance.current.kill();
        draggableInstance.current = null;
      }
    };
  }, [containerWidth, createDraggable]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isDraggingRef.current) return;

      if (e.key === "ArrowLeft") {
        prevSlide();
        setIsAutoPlaying(false);
      } else if (e.key === "ArrowRight") {
        nextSlide();
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Pause auto-play on hover/focus
  const handleInteractionStart = () => {
    if (!isDraggingRef.current) {
      setIsAutoPlaying(false);
    }
  };

  const handleInteractionEnd = () => {
    if (enableAutoPlay && !isDraggingRef.current) {
      setTimeout(() => setIsAutoPlaying(true), 1000);
    }
  };

  // Don't render if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const renderTestimonialCard = (testimonial, index) => (
    <div
      key={testimonial.id || index}
      className="w-full flex-shrink-0 px-2 lg:px-4"
      style={{ width: containerWidth || "100%" }}
      role="tabpanel"
      aria-label={`Slide ${index + 1} of ${testimonials.length}`}
      aria-hidden={currentIndex !== index}>
      <div className="rounded-3xl shadow-lg border border-black/20 p-4 sm:p-6 lg:p-6 md:lg:p-8">
        {testimonial?.tag && (
          <span className="ml-auto border text-sm border-black-500 rounded-[5px] py-0.5 bg-gradient-to-r bg-clip-text text-transparent from-[#5254CB] to-[#FF942F] px-1 block w-fit mb-4">
            {testimonial.tag}
          </span>
        )}

        <h4 className="mb-8 lg:mb-12">{testimonial?.title}</h4>

        <div className="grid grid-cols-1 lg:flex lg:justify-between lg:flex-wrap gap-4 lg:gap-6 mb-8 lg:mb-12">
          {testimonial?.stats?.map((metric, index) => (
            <div
              key={index}
              className="flex border-l border-black pl-4 items-center gap-4">
              <div>
                <p className="font-sans font-semibold text-2xl md:text-5xl mb-2">
                  {metric.title}
                </p>
                <P2 className="text-black">{metric.subTitle}</P2>
              </div>
            </div>
          ))}
        </div>

        <P4 className="text-black-500 mb-6">{testimonial?.description}</P4>

        <div className="flex items-center gap-2 text-lg font-normal justify-end tracking-wide cursor-pointer hover:text-indigo-600 transition-colors group">
          <span>Read Full CaseStudy</span>
          <Icon
            icon="lucide:arrow-up-right"
            className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      ref={containerRef}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onFocus={handleInteractionStart}
      onBlur={handleInteractionEnd}>
      {/* Main Carousel Container */}
      <div
        ref={carouselRef}
        className={`flex ${
          isDraggingRef.current ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ touchAction: "pan-y pinch-zoom" }}>
        {testimonials.map((item, index) => renderTestimonialCard(item, index))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="opacity-70 hover:opacity-100 transition-all duration-100 cursor-pointer disabled:opacity-30"
          aria-label="Previous slide"
          disabled={isDraggingRef.current}>
          <Icon
            icon="solar:square-alt-arrow-left-linear"
            className="size-12 text-[#35514F] hover:scale-110 transition-transform"
          />
        </button>

        {/* Pagination Dots - Center */}
        <div className="flex gap-2" role="tablist">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isDraggingRef.current) {
                  goToSlide(index);
                  setIsAutoPlaying(false);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                currentIndex === index
                  ? "w-8 bg-[#35514F]"
                  : "w-2 bg-[#C3BBAE] hover:bg-[#35514F]"
              }`}
              role="tab"
              aria-selected={currentIndex === index}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isDraggingRef.current}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="opacity-70 hover:opacity-100 transition cursor-pointer disabled:opacity-30"
          aria-label="Next slide"
          disabled={isDraggingRef.current}>
          <Icon
            icon="solar:square-alt-arrow-right-linear"
            className="size-12 text-[#35514F] hover:scale-110 transition-transform"
          />
        </button>
      </div>
    </div>
  );
});
