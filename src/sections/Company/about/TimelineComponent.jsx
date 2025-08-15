import React, { useState, useEffect } from "react";
import { P3, P4 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";

const TimelineComponent = ({ timelineData, onBackToAbout, onNextUp }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentStep = timelineData[currentIndex];
  const totalSteps = timelineData.length;
  const isLastStep = currentIndex === totalSteps - 1;

  // Handle scroll for vertical data change
  useEffect(() => {
    const handleScroll = (e) => {
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
      container.addEventListener("wheel", handleScroll, { passive: false });
      return () => {
        container.removeEventListener("wheel", handleScroll);
      };
    }
  }, [currentIndex, totalSteps, isLastStep]);

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
      style={{ height: "calc(100vh - 80px)", top: "60px" }}>
      <div
        className={`w-full mx-auto flex flex-col ${
          isLastStep ? "min-h-full" : "h-full"
        }`}>
        {/* Header */}
        <div className="mx-auto w-full px-6 sm:px-12">
          <div className="flex items-center gap-3 mb-2 w-fit">
            <Button
              className="text-black-500"
              variant="text"
              size="sm"
              onClick={onBackToAbout}>
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
          } px-6 sm:px-12`}>
          {/* Years Display */}
          <div className="relative text-center mb-4">
            {/* Previous Year (Visible only on larger screens) */}
            {currentIndex > 0 && (
              <div
                className="absolute left-0 top-0 text-gray-400 leading-none cursor-pointer sm:block hidden"
                style={{
                  fontFamily: "Inria Serif",
                  fontWeight: 700,
                  fontSize: "clamp(30px, 4vw, 48px)",
                  lineHeight: "1",
                  letterSpacing: "-5%",
                }}
                onClick={handlePrevYearClick} // Click to go to previous year
              >
                {timelineData[currentIndex - 1].year}
              </div>
            )}

            {/* Current Year */}
            <div
              className="inline-block bg-gradient-to-r from-[#9E87FF] via-[#6DBFFE] to-[#FF8F8F] bg-clip-text text-transparent leading-none"
              style={{
                fontFamily: "Inria Serif",
                fontWeight: 700,
                fontSize: "clamp(80px, 12vw, 128px)",
                lineHeight: "1",
                letterSpacing: "-5%",
              }}>
              {currentStep.year}
            </div>

            {/* Next Year (Visible only on larger screens) */}
            {currentIndex < totalSteps - 1 && (
              <div
                className="absolute right-0 top-0 text-gray-400 leading-none cursor-pointer sm:block hidden"
                style={{
                  fontFamily: "Inria Serif",
                  fontWeight: 700,
                  fontSize: "clamp(30px, 4vw, 48px)",
                  lineHeight: "1",
                  letterSpacing: "-5%",
                }}
                onClick={handleNextYearClick} // Click to go to next year
              >
                {timelineData[currentIndex + 1].year}
              </div>
            )}
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
            <h3 className="text-black-800 max-w-4xl mx-auto">
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
              <Button variant="secondary" size="sm" onClick={onNextUp}>
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
