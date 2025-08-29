"use client";
import React from "react";
import { P2, P3, P4 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import Image from "next/image";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const JourneySection = ({ data = {} }) => {
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

  return (
    <section
      className="w-full  flex flex-col  justify-center"
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
    >
      <div className="mx-auto ">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:gap-x-8 justify-between">
          <h3
            className="text-black lg:min-w-lg"
            data-reveal
            data-reveal-dir="up"
          >
            Redefining the Future: Karanji’s Journey
          </h3>
          <P4 className="text-black-800">
            Discover Karanji’s inspiring journey from a visionary startup in
            2007 to a global leader in AI, VR, and digital learning solutions.
            With key milestones in strategic partnerships and pioneering
            technologies, Karanji has consistently driven innovation and
            continues to lead the AI revolution globally, shaping the future of
            technology and learning.
          </P4>
        </div>
        {/* Title & Description */}

        {/* Year Description (Centered) */}
        <div
          className="text-center mb-8 mx-auto max-w-5xl w-fit my-16"
          data-reveal
          data-reveal-dir="up"
        >
          <Image
            src="/journey.svg"
            alt="Description of the image"
            width={945}
            height={410}
            className="mx-auto w-full h-auto"
          />
        </div>

        {/* Button (Centered) */}
        <div className="text-center" data-reveal data-reveal-dir="up">
          <Button
            variant="secondary"
            size="md"
            onClick={onContinueJourney}
            className="w-full sm:w-auto"
            aria-label={buttonText}
          >
            {buttonText}
          </Button>
        </div>
      </div>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </section>
  );
};

export default JourneySection;
