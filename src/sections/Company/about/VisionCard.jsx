"use client";
import { P3 } from "@/components/CustomTags";
import React from "react";

const VisionCard = ({ icon, title, description }) => {
  return (
    <div
      className="vision-card rounded-2xl p-6 flex-1"
      data-reveal
      data-reveal-dir="up" // Apply the animation (from bottom)
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-12 h-12 flex items-center justify-center">{icon}</div>
      </div>

      {/* Title */}
      <h4 className="text-black-950 mb-4 border-b border-gray-300 pb-2">
        {title}
      </h4>

      {/* Description */}
      <P3 className="text-black-800">{description}</P3>

      <style jsx>{`
        .vision-card {
          background: linear-gradient(
            83.18deg,
            #d3c9ff 0%,
            #dcf0ff 50%,
            #ffcfcf 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .vision-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};
export default VisionCard;
