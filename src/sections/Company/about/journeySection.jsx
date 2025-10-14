"use client";
import React, { useState, useRef, useEffect } from "react";
import { P2, P3, P4 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { RevealWrapper } from "@/components/animations/RevealWrapper";
import TimelineComponent from "@/sections/Company/about/TimelineComponent";

const JourneySection = ({ data = {}, timelineData = [] }) => {
  const [showTimeline, setShowTimeline] = useState(false);
  const timelineRef = useRef(null);

  const {
    title = "",
    subTitle = "",
    currentYear = "",
    currentYearDescription = "",
    yearDescription = "",
    buttonText = "Continue",
    iconSrc = "",
    onContinueJourney = () => {},
    iconAlt = "Timeline icon",
  } = data;

  // Lock background scroll when timeline is visible
  useEffect(() => {
    if (showTimeline) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showTimeline]);

  const handleContinueJourney = () => {
    setShowTimeline(true);
  };

  const handleBackToAbout = () => {
    setShowTimeline(false);
  };

  const handleNextUp = () => {
    setShowTimeline(false);
    document.getElementById("vision-mission")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleMouseEnter = () => {
    if (timelineRef.current) {
      timelineRef.current.style.overflow = "auto";
    }
  };

  const handleMouseLeave = () => {
    if (timelineRef.current) {
      timelineRef.current.style.overflow = "hidden";
    }
  };

  return (
    <>
      <section className="w-full  flex flex-col  justify-center">
        <div className="mx-auto ">
          {/* Section Heading */}
          <div className="flex flex-col lg:flex-row lg:gap-x-8 justify-between">
            <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
              <h3 className="text-black lg:min-w-lg">
                Redefining the Future: Karanji's Journey
              </h3>
            </RevealWrapper>

            <RevealWrapper
              direction="up"
              duration={0.6}
              delay={0.1}
              threshold={0.2}
            >
              <P4 className="text-black-800">
                Discover Karanji's inspiring journey from a visionary startup in
                2007 to a global leader in AI, VR, and digital learning
                solutions. With key milestones in strategic partnerships and
                pioneering technologies, Karanji has consistently driven
                innovation and continues to lead the AI revolution globally,
                shaping the future of technology and learning.
              </P4>
            </RevealWrapper>
          </div>
          {/* Title & Description */}

          {/* Year Description (Centered) */}
          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.2}
            distance={30}
            threshold={0.3}
          >
            <div className="text-center mb-8 mx-auto max-w-5xl w-fit my-16">
              {/* Desktop Infographic */}
              <div className="hidden sm:block">
                <Image
                  src="/Desktop-infographic.svg"
                  alt="Description of the image"
                  width={945}
                  height={410}
                  className="mx-auto w-full h-auto"
                />
              </div>
              {/* Mobile Infographic */}
              <div className="block sm:hidden">
                <Image
                  src="/Mobile-infographic.svg"
                  alt="Description of the image"
                  width={400}
                  height={400}
                  className="mx-auto w-full h-auto"
                />
              </div>
            </div>
          </RevealWrapper>

          {/* Button (Centered) */}
          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.3}
            distance={30}
            threshold={0.3}
          >
            <div className="text-center">
              <Button
                variant="secondary"
                size="md"
                onClick={handleContinueJourney}
                className="w-full sm:w-auto"
                aria-label={buttonText}
              >
                {buttonText}
              </Button>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Timeline Component Overlay */}
      {showTimeline && (
        <div
          ref={timelineRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="fixed inset-0 z-50 bg-gradient-to-br from-purple-50 to-blue-50 "
          style={{
            top: "60px",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <TimelineComponent
            timelineData={timelineData}
            onBackToAbout={handleBackToAbout}
            onNextUp={handleNextUp}
          />
        </div>
      )}
    </>
  );
};

export default JourneySection;
