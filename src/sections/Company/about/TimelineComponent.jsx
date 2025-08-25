import React, { useState, useEffect, useRef } from "react";
import { P3, P4 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";

const TimelineComponent = ({ timelineData, onBackToAbout, onNextUp }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartY = useRef(0);
  const totalSteps = timelineData.length;
  const isLastStep = currentIndex === totalSteps - 1;

  const currentStep = timelineData[currentIndex];

  // Handle scroll for vertical data change
  useEffect(() => {
    const handleWheel = (e) => {
      if (isLastStep) {
        const container = e.currentTarget;
        if (container.scrollTop === 0 && e.deltaY < 0) {
          e.preventDefault();
          setCurrentIndex(currentIndex - 1);
        }
        return;
      }

      e.preventDefault();

      if (e.deltaY > 0 && currentIndex < totalSteps - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    const container = document.querySelector("[data-timeline-container]");
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    }
  }, [currentIndex, totalSteps, isLastStep]);

  // Fixed touch swipe handling
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    // Minimum swipe distance to trigger navigation
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swipe up: Move to next step
        if (currentIndex < totalSteps - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        // Swipe down: Move to previous step
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      }
    }
  };

  useEffect(() => {
    const container = document.querySelector("[data-timeline-container]");
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      container.addEventListener("touchend", handleTouchEnd, { passive: true });

      return () => {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [currentIndex, totalSteps]);

  const handleTimelineClick = (index) => {
    setCurrentIndex(index);
  };

  // Handle click for previous year
  const handlePrevYearClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle click for next year
  const handleNextYearClick = () => {
    if (currentIndex < totalSteps - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div
      data-timeline-container
      className={`fixed inset-0 bg-gradient-to-br from-purple-50 to-blue-50 z-50 ${
        isLastStep ? "overflow-y-auto" : "overflow-hidden"
      }`}
      style={{ height: "calc(100vh - 80px)", top: "60px" }}
    >
      <div
        className={`w-full mx-auto flex flex-col ${
          isLastStep ? "min-h-full" : "h-full"
        }`}
      >
        {/* Header */}
        <div className="mx-auto w-full px-6 sm:px-12">
          <div className="flex items-center gap-3 py-2 w-fit">
            <Button
              className="text-black-500"
              variant="text"
              size="sm"
              onClick={onBackToAbout}
            >
              Take me back to About Us
            </Button>
            <P3 className="font-semibold">Karanji's Journey</P3>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-1 bg-gray-200 rounded-lg">
            <div
              className="h-full rounded-lg transition-all duration-500"
              style={{
                width: `${((currentIndex + 1) / totalSteps) * 100}%`,
                background: "linear-gradient(90deg, #5254CB 0%, #FF942F 100%)",
              }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`flex-1 flex flex-col ${
            isLastStep ? "py-12" : "justify-center"
          } px-6 sm:px-12`}
        >
          {/* Years Display */}
          <div className="relative text-center mb-4">
            {/* Previous Year - Now visible on mobile with smaller size */}
            {currentIndex > 0 && (
              <div
                className="absolute left-0 top-0 text-gray-400 leading-none cursor-pointer select-none"
                style={{
                  fontFamily: "Inria Serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3vw, 48px)", // Smaller on mobile
                  lineHeight: "1",
                  letterSpacing: "-5%",
                }}
                onClick={handlePrevYearClick}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handlePrevYearClick();
                }}
              >
                {timelineData[currentIndex - 1].year}
              </div>
            )}

            {/* Current Year */}
            <div
              className="inline-block bg-gradient-to-r from-[#9E87FF] via-[#6DBFFE] to-[#FF8F8F] bg-clip-text text-transparent leading-none select-none"
              style={{
                fontFamily: "Inria Serif",
                fontWeight: 700,
                fontSize: "clamp(80px, 12vw, 128px)",
                lineHeight: "1",
                letterSpacing: "-5%",
              }}
            >
              {currentStep.year}
            </div>

            {/* Next Year - Now visible on mobile with smaller size */}
            {currentIndex < totalSteps - 1 && (
              <div
                className="absolute right-0 top-0 text-gray-400 leading-none cursor-pointer select-none"
                style={{
                  fontFamily: "Inria Serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3vw, 48px)", // Smaller on mobile
                  lineHeight: "1",
                  letterSpacing: "-5%",
                }}
                onClick={handleNextYearClick}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleNextYearClick();
                }}
              >
                {timelineData[currentIndex + 1].year}
              </div>
            )}
          </div>

          {/* Mobile Navigation Arrows - Only visible on small screens */}
          <div className="flex justify-between items-center mb-4 sm:hidden">
            <button
              className={`p-2 rounded-full ${
                currentIndex > 0
                  ? "text-gray-600 bg-white/50 shadow-sm"
                  : "text-gray-300 cursor-not-allowed"
              }`}
              onClick={handlePrevYearClick}
              disabled={currentIndex === 0}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M15 18l-6-6 6-6v12z" />
              </svg>
            </button>

            <div className="text-sm text-gray-500">
              {currentIndex + 1} / {totalSteps}
            </div>

            <button
              className={`p-2 rounded-full ${
                currentIndex < totalSteps - 1
                  ? "text-gray-600 bg-white/50 shadow-sm"
                  : "text-gray-300 cursor-not-allowed"
              }`}
              onClick={handleNextYearClick}
              disabled={currentIndex === totalSteps - 1}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 6l6 6-6 6V6z" />
              </svg>
            </button>
          </div>

          {/* Current Year Description */}
          <div className="text-center mb-8">
            <P4 className="text-black-500 max-w-2xl mx-auto">
              "{currentStep.yearDescription}"
            </P4>
          </div>

          {/* Timeline Visual */}
          <div className="relative mb-8">
            {currentIndex === 0 && (
              <div className="absolute left-1/2 top-1/2 w-1/2 h-px bg-black-300 transform -translate-y-1/2">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border border-black-300 bg-black-100 z-20"></div>
              </div>
            )}

            {currentIndex > 0 && currentIndex < totalSteps - 1 && (
              <>
                <div className="absolute left-0 top-1/2 w-1/2 h-px bg-black-300 transform -translate-y-1/2">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border border-black-300 bg-black-100 z-20"></div>
                </div>
                <div className="absolute left-1/2 top-1/2 w-1/2 h-px bg-black-300 transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border border-black-300 bg-black-100 z-20"></div>
                </div>
              </>
            )}

            {currentIndex === totalSteps - 1 && (
              <div className="absolute left-0 top-1/2 w-1/2 h-px bg-black-300 transform -translate-y-1/2">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border border-black-300 bg-black-100 z-20"></div>
              </div>
            )}

            <div className="flex justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full relative bg-black-50 z-10">
                {currentStep.iconSrc && (
                  <img
                    src={currentStep.iconSrc}
                    alt="Timeline icon"
                    className="w-16 h-16"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Step Title */}
          <div className="text-center">
            <h3 className="text-black-800 max-w-5xl mx-auto">
              {currentStep.title}
            </h3>
          </div>
          {currentStep.subTitle && (
            <div className="text-center mb-4">
              <h5 className="text-black-600 max-w-4xl mx-auto">
                {currentStep.subTitle}
              </h5>
            </div>
          )}

          {/* Step Description */}
          <div className="text-center mb-8">
            <div className="max-w-4xl mx-auto">
              <P3 className="text-black-500">{currentStep.description}</P3>
            </div>
          </div>

          {/* Navigation Button - Only show for last index */}
          <div className="text-center pb-8">
            {currentIndex === totalSteps - 1 && (
              <Button variant="secondary" size="lg" onClick={onNextUp}>
                NextUp: Our Vision, Mission & Values
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
