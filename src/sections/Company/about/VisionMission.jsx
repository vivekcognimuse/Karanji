"use client";
import React from "react";
import VisionCard from "./VisionCard";
import Image from "next/image";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

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
    <section className="py-12 px-4">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Vision Card */}
          <RevealWrapper
            direction="up"
            duration={0.5}
            delay={0.2}
            distance={30}
            threshold={0.3}
          >
            <VisionCard {...visionData} />
          </RevealWrapper>

          {/* Mission Card */}
          <RevealWrapper
            direction="up"
            duration={0.5}
            delay={0.32} // 0.2 + 0.12 stagger
            distance={30}
            threshold={0.3}
          >
            <VisionCard {...missionData} />
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
