"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { Icon } from "@iconify/react";
import TestimonialCard from "@/components/ui/TestimonialCard";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

const CarouselContainer = ({
  children,
  autoPlay = true,
  autoPlayInterval = 7000,
  showDots = true,
  showArrows = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const [containerHeight, setContainerHeight] = useState("auto");
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);
  const autoPlayRef = useRef(null);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);

  const totalSlides = React.Children.count(children);

  // Initialize slides and calculate height
  useEffect(() => {
    if (!carouselRef.current) return;

    slideRefs.current = Array.from(
      carouselRef.current.querySelectorAll(".carousel-slide")
    );

    // Calculate max height of all slides
    let maxHeight = 0;
    slideRefs.current.forEach((slide, index) => {
      // Temporarily show slide to measure height
      gsap.set(slide, {
        opacity: 1,
        visibility: "visible",
        position: "relative",
      });
      const height = slide.offsetHeight;
      if (height > maxHeight) maxHeight = height;

      // Then set proper initial position
      if (index === 0) {
        gsap.set(slide, {
          x: "0%",
          opacity: 1,
          zIndex: 2,
          position: "absolute",
          visibility: "visible",
        });
      } else {
        gsap.set(slide, {
          x: "100%",
          opacity: 0,
          zIndex: 1,
          position: "absolute",
          visibility: "visible",
        });
      }
    });

    // Set container height to accommodate tallest slide
    if (maxHeight > 0) {
      setContainerHeight(maxHeight);
    }
  }, [children]);

  // Recalculate height on window resize
  useEffect(() => {
    const handleResize = () => {
      if (!carouselRef.current) return;

      let maxHeight = 0;
      slideRefs.current.forEach((slide) => {
        const currentDisplay = slide.style.display;
        const currentPosition = slide.style.position;

        slide.style.display = "block";
        slide.style.position = "relative";
        const height = slide.offsetHeight;
        if (height > maxHeight) maxHeight = height;

        slide.style.display = currentDisplay;
        slide.style.position = currentPosition;
      });

      if (maxHeight > 0) {
        setContainerHeight(maxHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation function
  const animateSlide = useCallback(
    (fromIndex, toIndex, direction) => {
      if (isAnimating || fromIndex === toIndex) return;
      setIsAnimating(true);

      const fromSlide = slideRefs.current[fromIndex];
      const toSlide = slideRefs.current[toIndex];

      if (!fromSlide || !toSlide) return;

      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
        },
      });

      // Set initial position for incoming slide
      gsap.set(toSlide, {
        x: direction === "next" ? "100%" : "-100%",
        opacity: 0,
        zIndex: 2,
      });

      // Animate both slides
      tl.to(fromSlide, {
        x: direction === "next" ? "-100%" : "100%",
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      })
        .to(
          toSlide,
          {
            x: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "<"
        )
        .set(fromSlide, { zIndex: 1 })
        .set(toSlide, { zIndex: 2 });
    },
    [isAnimating]
  );

  // Navigation functions
  const goToNext = useCallback(() => {
    if (isAnimating) return;
    const nextIndex = (currentIndex + 1) % totalSlides;
    animateSlide(currentIndex, nextIndex, "next");
    setCurrentIndex(nextIndex);
    setLastInteraction(Date.now()); // Reset timer on manual navigation
  }, [currentIndex, totalSlides, isAnimating, animateSlide]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    animateSlide(currentIndex, prevIndex, "prev");
    setCurrentIndex(prevIndex);
    setLastInteraction(Date.now()); // Reset timer on manual navigation
  }, [currentIndex, totalSlides, isAnimating, animateSlide]);

  const goToSlide = useCallback(
    (index) => {
      if (isAnimating || index === currentIndex) return;
      const direction = index > currentIndex ? "next" : "prev";
      animateSlide(currentIndex, index, direction);
      setCurrentIndex(index);
      setLastInteraction(Date.now()); // Reset timer on manual navigation
    },
    [currentIndex, isAnimating, animateSlide]
  );

  // Touch and Mouse event handlers
  const handleDragStart = useCallback(
    (e) => {
      if (isAnimating) return;
      setIsDragging(true);

      const clientX = e.type.includes("mouse")
        ? e.clientX
        : e.touches[0].clientX;
      dragStartX.current = clientX;
      dragCurrentX.current = clientX;

      // Pause autoplay and reset timer
      setLastInteraction(Date.now());
    },
    [isAnimating]
  );

  const handleDragMove = useCallback(
    (e) => {
      if (!isDragging || isAnimating) return;

      const clientX = e.type.includes("mouse")
        ? e.clientX
        : e.touches[0].clientX;
      dragCurrentX.current = clientX;

      const dragDistance = dragCurrentX.current - dragStartX.current;
      const dragPercent = dragDistance / window.innerWidth;
      const currentSlide = slideRefs.current[currentIndex];

      if (currentSlide) {
        gsap.set(currentSlide, { x: dragDistance });

        // Show preview of next/prev slide with proper positioning
        if (dragDistance < 0) {
          // Dragging left - show next slide
          const nextIndex = (currentIndex + 1) % totalSlides;
          const nextSlide = slideRefs.current[nextIndex];
          if (nextSlide) {
            const nextSlideX = window.innerWidth + dragDistance;
            gsap.set(nextSlide, {
              x: nextSlideX,
              opacity: 1,
              zIndex: 1,
            });
          }
          // Hide previous slide
          const prevIndex =
            currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
          const prevSlide = slideRefs.current[prevIndex];
          if (prevSlide && prevSlide !== nextSlide) {
            gsap.set(prevSlide, {
              x: "-100%",
              opacity: 0,
              zIndex: 1,
            });
          }
        } else if (dragDistance > 0) {
          // Dragging right - show previous slide
          const prevIndex =
            currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
          const prevSlide = slideRefs.current[prevIndex];
          if (prevSlide) {
            const prevSlideX = -window.innerWidth + dragDistance;
            gsap.set(prevSlide, {
              x: prevSlideX,
              opacity: 1,
              zIndex: 1,
            });
          }
          // Hide next slide
          const nextIndex = (currentIndex + 1) % totalSlides;
          const nextSlide = slideRefs.current[nextIndex];
          if (nextSlide && nextSlide !== prevSlide) {
            gsap.set(nextSlide, {
              x: "100%",
              opacity: 0,
              zIndex: 1,
            });
          }
        }
      }
    },
    [isDragging, isAnimating, currentIndex, totalSlides]
  );

  const handleDragEnd = useCallback(
    (e) => {
      if (!isDragging) return;
      setIsDragging(false);

      const dragDistance = dragCurrentX.current - dragStartX.current;
      const threshold = window.innerWidth * 0.15; // 15% threshold

      if (Math.abs(dragDistance) > threshold) {
        if (dragDistance < 0) {
          // Complete the transition to next slide
          const nextIndex = (currentIndex + 1) % totalSlides;
          const currentSlide = slideRefs.current[currentIndex];
          const nextSlide = slideRefs.current[nextIndex];

          if (currentSlide && nextSlide) {
            gsap.to(currentSlide, {
              x: "-100%",
              opacity: 0,
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(nextSlide, {
              x: "0%",
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
              onComplete: () => {
                setCurrentIndex(nextIndex);
                setLastInteraction(Date.now()); // Reset timer after drag
                // Reset all slides positions after animation
                slideRefs.current.forEach((slide, idx) => {
                  if (idx === nextIndex) {
                    gsap.set(slide, { x: "0%", opacity: 1, zIndex: 2 });
                  } else {
                    gsap.set(slide, {
                      x: idx > nextIndex ? "100%" : "-100%",
                      opacity: 0,
                      zIndex: 1,
                    });
                  }
                });
              },
            });
          }
        } else {
          // Complete the transition to previous slide
          const prevIndex =
            currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
          const currentSlide = slideRefs.current[currentIndex];
          const prevSlide = slideRefs.current[prevIndex];

          if (currentSlide && prevSlide) {
            gsap.to(currentSlide, {
              x: "100%",
              opacity: 0,
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(prevSlide, {
              x: "0%",
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
              onComplete: () => {
                setCurrentIndex(prevIndex);
                setLastInteraction(Date.now()); // Reset timer after drag
                // Reset all slides positions after animation
                slideRefs.current.forEach((slide, idx) => {
                  if (idx === prevIndex) {
                    gsap.set(slide, { x: "0%", opacity: 1, zIndex: 2 });
                  } else {
                    gsap.set(slide, {
                      x: idx > prevIndex ? "100%" : "-100%",
                      opacity: 0,
                      zIndex: 1,
                    });
                  }
                });
              },
            });
          }
        }
      } else {
        // Snap back to center
        const currentSlide = slideRefs.current[currentIndex];
        if (currentSlide) {
          gsap.to(currentSlide, {
            x: "0%",
            duration: 0.3,
            ease: "power2.out",
          });
        }

        // Reset all other slides to their proper positions
        const nextIndex = (currentIndex + 1) % totalSlides;
        const prevIndex =
          currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;

        const nextSlide = slideRefs.current[nextIndex];
        const prevSlide = slideRefs.current[prevIndex];

        if (nextSlide) {
          gsap.to(nextSlide, {
            x: "100%",
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }

        if (prevSlide) {
          gsap.to(prevSlide, {
            x: "-100%",
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }

        setLastInteraction(Date.now()); // Reset timer even if drag doesn't change slide
      }
    },
    [isDragging, currentIndex, totalSlides]
  );

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || totalSlides <= 1) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const timeSinceLastInteraction = now - lastInteraction;

      // Only auto-advance if enough time has passed since last interaction
      if (
        timeSinceLastInteraction >= autoPlayInterval &&
        !isDragging &&
        !isAnimating
      ) {
        setLastInteraction(now); // Reset the timer immediately after auto-advance
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % totalSlides;
          animateSlide(prev, nextIndex, "next");
          return nextIndex;
        });
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, [
    autoPlay,
    autoPlayInterval,
    totalSlides,
    lastInteraction,
    isDragging,
    isAnimating,
    animateSlide,
  ]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setLastInteraction(Date.now()); // Reset timer on hover
  };

  const handleMouseLeave = () => {
    setLastInteraction(Date.now()); // Reset timer when mouse leaves
  };

  return (
    <div
      className={`relative  w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="relative w-full touch-pan-y"
          style={{
            height:
              containerHeight === "auto" ? "auto" : `${containerHeight}px`,
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}>
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="carousel-slide  flex justify-center absolute top-0 left-0 w-full select-none"
              style={{ cursor: isDragging ? "grabbing" : "grab" }}>
              {child}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && totalSlides > 1 && (
          <div className="hidden md:block">
            <button
              onClick={goToPrevious}
              className="absolute -left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient from-[#D3C9FF] via-[#DCF0FF] to-[#FFCFCF]  rounded-full p-3 shadow-lg cursor-pointer transition-colors"
              aria-label="Previous slide"
              disabled={isAnimating}>
              <Icon icon="lucide:chevron-left" className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gradient from-[#D3C9FF] via-[#DCF0FF] to-[#FFCFCF]  rounded-full p-3 shadow-lg cursor-pointer transition-colors"
              aria-label="Next slide"
              disabled={isAnimating}>
              <Icon icon="lucide:chevron-right" className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

      {/* Progress Dots */}
      {showDots && totalSlides > 1 && (
        <div className="flex mt-8 justify-center items-center gap-2 ">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all  duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-gradient from-[#D3C9FF] via-[#DCF0FF] to-[#FFCFCF]"
                  : "w-2 h-2 bg-black/30 cursor-pointer hover:bg-black/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselContainer;
