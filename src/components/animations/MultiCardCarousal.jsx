"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";

const MultiCardCarousel = ({
  children,
  autoPlay = false,
  autoPlayInterval = 5000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  const carouselRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const totalCards = React.Children.count(children);

  // Calculate visible cards based on screen width
  const calculateVisibleCards = useCallback(() => {
    if (!carouselRef.current) return;

    const containerWidth = carouselRef.current.offsetWidth;

    if (containerWidth >= 1024) {
      // Desktop - 4 cards
      setVisibleCards(4);
    } else if (containerWidth >= 768) {
      // Tablet - 3 cards
      setVisibleCards(3);
    } else if (containerWidth >= 640) {
      // Small tablet - 2 cards
      setVisibleCards(2);
    } else {
      // Mobile - 1 card
      setVisibleCards(1);
    }
  }, []);

  // Update navigation button states
  const updateNavigationState = useCallback(() => {
    const maxIndex = Math.max(0, totalCards - visibleCards);
    setCanScrollLeft(currentIndex > 0);
    setCanScrollRight(currentIndex < maxIndex);
  }, [currentIndex, totalCards, visibleCards]);

  // Initialize and handle resize
  useEffect(() => {
    calculateVisibleCards();
    updateNavigationState();

    const handleResize = () => {
      calculateVisibleCards();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateVisibleCards, updateNavigationState]);

  // Update navigation state when dependencies change
  useEffect(() => {
    updateNavigationState();
  }, [updateNavigationState]);

  // Scroll animation function
  const scrollToIndex = useCallback(
    (targetIndex) => {
      if (!scrollContainerRef.current || isAnimating) return;

      setIsAnimating(true);

      // Calculate scroll position
      // Each card width + gap, but we need to account for the actual card width
      const firstCard =
        scrollContainerRef.current.querySelector(".carousel-card");
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const gap = 32; // 32px gap
      const scrollDistance = targetIndex * (cardWidth + gap);

      gsap.to(scrollContainerRef.current, {
        x: -scrollDistance,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setIsAnimating(false);
          setCurrentIndex(targetIndex);
        },
      });
    },
    [isAnimating]
  );

  // Navigation functions
  const goToNext = useCallback(() => {
    if (isAnimating || !canScrollRight) return;

    // Scroll by (visible cards - 1) or remaining cards, whichever is smaller
    const scrollAmount = Math.min(
      visibleCards - 1,
      totalCards - currentIndex - visibleCards
    );
    const nextIndex = Math.min(
      currentIndex + scrollAmount,
      totalCards - visibleCards
    );

    scrollToIndex(nextIndex);
    setLastInteraction(Date.now());
  }, [
    currentIndex,
    totalCards,
    visibleCards,
    canScrollRight,
    scrollToIndex,
    isAnimating,
  ]);

  const goToPrevious = useCallback(() => {
    if (isAnimating || !canScrollLeft) return;

    // Scroll by (visible cards - 1) or to beginning, whichever is appropriate
    const scrollAmount = Math.min(visibleCards - 1, currentIndex);
    const prevIndex = Math.max(currentIndex - scrollAmount, 0);

    scrollToIndex(prevIndex);
    setLastInteraction(Date.now());
  }, [currentIndex, visibleCards, canScrollLeft, scrollToIndex, isAnimating]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || totalCards <= visibleCards) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const timeSinceLastInteraction = now - lastInteraction;

      if (timeSinceLastInteraction >= autoPlayInterval && !isAnimating) {
        if (canScrollRight) {
          setLastInteraction(now);
          const scrollAmount = Math.min(
            visibleCards - 1,
            totalCards - currentIndex - visibleCards
          );
          const nextIndex = Math.min(
            currentIndex + scrollAmount,
            totalCards - visibleCards
          );
          scrollToIndex(nextIndex);
        } else {
          // Reset to beginning when reached the end
          setLastInteraction(now);
          scrollToIndex(0);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    autoPlay,
    autoPlayInterval,
    totalCards,
    visibleCards,
    currentIndex,
    lastInteraction,
    isAnimating,
    canScrollRight,
    scrollToIndex,
  ]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setLastInteraction(Date.now());
  };

  const handleMouseLeave = () => {
    setLastInteraction(Date.now());
  };

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {/* Carousel Container */}
      <div ref={carouselRef} className="relative overflow-hidden w-full">
        <div
          ref={scrollContainerRef}
          className="flex w-fit"
          style={{ gap: "32px" }}>
          {React.Children.map(children, (child, index) => (
            <div key={index} className="carousel-card flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Bottom Right */}
      {totalCards > visibleCards && (
        <div className="flex justify-end items-center gap-2 mt-6">
          <button
            onClick={goToPrevious}
            className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 ${
              canScrollLeft
                ? "border-gray-300 hover:border-gray-400 hover:bg-gray-50 cursor-pointer"
                : "border-gray-200 bg-gray-100 cursor-not-allowed opacity-50"
            }`}
            aria-label="Previous cards"
            disabled={!canScrollLeft || isAnimating}>
            <Icon
              icon="lucide:chevron-left"
              className={`w-5 h-5 ${
                canScrollLeft ? "text-gray-600" : "text-gray-400"
              }`}
            />
          </button>
          <button
            onClick={goToNext}
            className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 ${
              canScrollRight
                ? "border-gray-300 hover:border-gray-400 hover:bg-gray-50 cursor-pointer"
                : "border-gray-200 bg-gray-100 cursor-not-allowed opacity-50"
            }`}
            aria-label="Next cards"
            disabled={!canScrollRight || isAnimating}>
            <Icon
              icon="lucide:chevron-right"
              className={`w-5 h-5 ${
                canScrollRight ? "text-gray-600" : "text-gray-400"
              }`}
            />
          </button>
        </div>
      )}

      {/* Optional: Progress Indicator */}
      {totalCards > visibleCards && (
        <div className="flex justify-center mt-4">
          <div className="text-sm text-gray-500">
            {Math.min(currentIndex + visibleCards, totalCards)} of {totalCards}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiCardCarousel;
