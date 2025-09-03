"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";

const MultiCardCarousel = ({
  children,
  autoPlay = false,
  showButtons = false,
  autoPlayInterval = 5000,
  className = "",
}) => {
  const [currentScrollX, setCurrentScrollX] = useState(0);
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

  // Get card visibility information
  const getCardVisibility = useCallback(() => {
    if (!scrollContainerRef.current || !carouselRef.current) return [];

    const containerRect = carouselRef.current.getBoundingClientRect();
    const cards = scrollContainerRef.current.querySelectorAll(".carousel-card");
    const cardVisibility = [];

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardLeft = cardRect.left - containerRect.left;
      const cardRight = cardRect.right - containerRect.left;

      const isFullyVisible = cardLeft >= 0 && cardRight <= containerRect.width;
      const isPartiallyVisible =
        cardLeft < containerRect.width && cardRight > 0 && !isFullyVisible;
      const isVisible = cardLeft < containerRect.width && cardRight > 0;

      cardVisibility.push({
        index,
        card,
        isFullyVisible,
        isPartiallyVisible,
        isVisible,
        cardLeft,
        cardRight,
        cardWidth: cardRect.width,
      });
    });

    return cardVisibility;
  }, []);

  // Update navigation button states
  const updateNavigationState = useCallback(() => {
    if (!scrollContainerRef.current || !carouselRef.current) return;

    const containerWidth = carouselRef.current.offsetWidth;
    const scrollWidth = scrollContainerRef.current.scrollWidth;

    // Check if we can scroll left (not at the beginning)
    setCanScrollLeft(currentScrollX > 0);

    // Check if we can scroll right (not at the end)
    setCanScrollRight(currentScrollX < scrollWidth - containerWidth - 1);
  }, [currentScrollX]);

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
  const scrollToPosition = useCallback(
    (targetX) => {
      if (!scrollContainerRef.current || isAnimating) return;

      setIsAnimating(true);

      // Ensure we don't scroll beyond boundaries
      const containerWidth = carouselRef.current.offsetWidth;
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const maxScroll = Math.max(0, scrollWidth - containerWidth);
      const finalX = Math.max(0, Math.min(targetX, maxScroll));

      gsap.to(scrollContainerRef.current, {
        x: -finalX,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setIsAnimating(false);
          setCurrentScrollX(finalX);
        },
      });
    },
    [isAnimating]
  );

  // Navigation functions
  const goToNext = useCallback(() => {
    if (isAnimating || !canScrollRight) return;

    const cardVisibility = getCardVisibility();
    if (cardVisibility.length === 0) return;

    // Find the first partially visible card on the right
    let targetCard = null;
    for (const cardInfo of cardVisibility) {
      if (
        cardInfo.isPartiallyVisible &&
        cardInfo.cardRight > carouselRef.current.offsetWidth
      ) {
        targetCard = cardInfo;
        break;
      }
    }

    // If no partially visible card on the right, find the first completely hidden card
    if (!targetCard) {
      for (const cardInfo of cardVisibility) {
        if (cardInfo.cardLeft >= carouselRef.current.offsetWidth) {
          targetCard = cardInfo;
          break;
        }
      }
    }

    if (targetCard) {
      // Calculate scroll position to make this card the first visible card
      const gap = 32; // 32px gap
      const targetScrollX = currentScrollX + targetCard.cardLeft;

      scrollToPosition(targetScrollX);
      setLastInteraction(Date.now());
    }
  }, [
    currentScrollX,
    canScrollRight,
    isAnimating,
    getCardVisibility,
    scrollToPosition,
  ]);

  const goToPrevious = useCallback(() => {
    if (isAnimating || !canScrollLeft) return;

    const cardVisibility = getCardVisibility();
    if (cardVisibility.length === 0) return;

    const containerWidth = carouselRef.current.offsetWidth;

    // Find the first partially visible card on the left
    let targetCard = null;
    for (let i = 0; i < cardVisibility.length; i++) {
      const cardInfo = cardVisibility[i];
      if (cardInfo.isPartiallyVisible && cardInfo.cardLeft < 0) {
        targetCard = cardInfo;
        break;
      }
    }

    if (targetCard) {
      // Calculate scroll position to make this card the last fully visible card
      // Position it so its right edge aligns with the container's right edge
      const targetScrollX = Math.max(
        0,
        currentScrollX + targetCard.cardRight - containerWidth
      );

      scrollToPosition(targetScrollX);
      setLastInteraction(Date.now());
    } else {
      // If no partially visible card on the left, scroll back by container width worth of cards
      // Find cards that would fit in one viewport width going backwards
      let scrollDistance = 0;
      let accumulatedWidth = 0;

      // Find the first visible card
      let firstVisibleIndex = -1;
      for (let i = 0; i < cardVisibility.length; i++) {
        if (cardVisibility[i].isVisible && cardVisibility[i].cardLeft >= 0) {
          firstVisibleIndex = i;
          break;
        }
      }

      if (firstVisibleIndex > 0) {
        // Go backwards and accumulate cards until we fill a viewport
        for (let i = firstVisibleIndex - 1; i >= 0; i--) {
          const cardWidth = cardVisibility[i].cardWidth + 32; // card width + gap
          if (accumulatedWidth + cardWidth <= containerWidth) {
            scrollDistance += cardWidth;
            accumulatedWidth += cardWidth;
          } else {
            // This card would overflow, so include it partially to fill the viewport
            scrollDistance += cardWidth;
            break;
          }
        }

        const targetScrollX = Math.max(0, currentScrollX - scrollDistance);
        scrollToPosition(targetScrollX);
        setLastInteraction(Date.now());
      }
    }
  }, [
    currentScrollX,
    canScrollLeft,
    isAnimating,
    getCardVisibility,
    scrollToPosition,
  ]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || totalCards <= visibleCards) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const timeSinceLastInteraction = now - lastInteraction;

      if (timeSinceLastInteraction >= autoPlayInterval && !isAnimating) {
        if (canScrollRight) {
          goToNext();
        } else {
          // Reset to beginning when reached the end
          setLastInteraction(now);
          scrollToPosition(0);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    autoPlay,
    autoPlayInterval,
    totalCards,
    visibleCards,
    lastInteraction,
    isAnimating,
    canScrollRight,
    goToNext,
    scrollToPosition,
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
          className="flex items-center  w-fit"
          style={{ gap: "32px" }}>
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="carousel-card flex items-center flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Bottom Right */}
      {(totalCards > visibleCards || showButtons) && (
        <div className="flex justify-end items-center gap-2 mt-6">
          <button
            onClick={goToPrevious}
            className={`flex items-center justify-center w-10 h-10 rounded-full  transition-all duration-200 ${
              canScrollLeft
                ? " bg-gradient from-[#D3C9FF] via-[#DCF0FF] to-[#FFCFCF] cursor-pointer"
                : " bg-gray-100 cursor-not-allowed opacity-50"
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
            className={`flex items-center justify-center w-10 h-10 rounded-full  transition-all duration-200 ${
              canScrollRight
                ? " bg-gradient from-[#D3C9FF] via-[#DCF0FF] to-[#FFCFCF] cursor-pointer"
                : " bg-gray-100 cursor-not-allowed opacity-50"
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
    </div>
  );
};

export default MultiCardCarousel;
