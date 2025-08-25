"use client";
import React from "react";
import VisionCard from "./VisionCard";

// Local icon components
const VisionIcon = () => (
  <img
    src="/Icons/visionicon.svg"
    alt="Vision Icon"
    width="48"
    height="48"
    className="w-12 h-12"
  />
);

const MissionIcon = () => (
  <img
    src="/Icons/missionicon.svg"
    alt="Mission Icon"
    width="48"
    height="48"
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
          <VisionCard {...visionData} />
          <VisionCard {...missionData} />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
