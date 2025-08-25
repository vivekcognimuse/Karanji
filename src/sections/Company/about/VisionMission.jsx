"use client";
import React from "react";
import VisionCard from "./VisionCard";
import Image from "next/image";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

// Local icon components
const VisionIcon = () => (
  <Image
    src="/Icons/visionicon.svg"
    alt="Vision Icon"
    width="48"
    height="48"
    unoptimized
    className="w-12 h-12"
  />
);

const MissionIcon = () => (
  <Image
    src="/Icons/missionicon.svg"
    alt="Mission Icon"
    width="48"
    height="48"
    unoptimized
    className="w-12 h-12"
  />
);

const VisionMission = ({ data }) => {
  const { visionTitle, visionDescription, missionTitle, missionDescription } =
    data;

  const visionData = {
    icon: <VisionIcon />,
    title: visionTitle,
    description: visionDescription,
  };

  const missionData = {
    icon: <MissionIcon />,
    title: missionTitle,
    description: missionDescription,
  };

  return (
    <section
      className="py-12 px-4"
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Vision Card */}
          <VisionCard {...visionData} data-reveal data-reveal-dir="up" />
          {/* Mission Card */}
          <VisionCard {...missionData} data-reveal data-reveal-dir="up" />
        </div>
      </div>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </section>
  );
};

export default VisionMission;
