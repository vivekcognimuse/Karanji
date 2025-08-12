// VisionMission.jsx
"use client";
import React from "react";
import VisionCard from "./VisionCard";
// Icon Components using external SVG files
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

const VisionMission = () => {
  const visionData = {
    icon: <VisionIcon />,
    title: "Vision",
    description:
      "To be the global leader in creative design and emerging technologies, transforming how people learn, engage, and work efficiently.",
  };

  const missionData = {
    icon: <MissionIcon />,
    title: "Mission",
    description:
      "We create immersive experiences using extended reality, AI and creative design to help organizations improve training, entertainment, and business performance in today's digital world.",
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <VisionCard {...visionData} />
          <VisionCard {...missionData} />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
