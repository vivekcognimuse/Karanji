"use client";
import React from "react";
import { P3 } from "@/components/CustomTags";
import Image from "next/image";

const ValueCard = ({ icon, title, description, isFullWidth = false }) => {
  return (
    <div
      className={`value-card rounded-lg p-6 ${
        isFullWidth ? "col-span-2 text-center" : ""
      }`}
      data-reveal
      data-reveal-dir="up" // Add data-reveal and direction for animation
    >
      {/* Icon */}
      <div className={`mb-4${isFullWidth ? " flex justify-center" : ""}`}>
        <Image
          src={icon}
          alt={`${title} Icon`}
          width="32"
          height="32"
          unoptimized
          className=" "
        />
      </div>

      {/* Title */}
      <h4 className="text-black-950 mb-3">{title}</h4>

      {/* Description */}
      <P3 className="text-black-800">{description}</P3>

      <style jsx>{`
        .value-card {
          position: relative;
          border-radius: 0.5rem;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .value-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          border-radius: 0.5rem;
          padding: 1px;
          background: linear-gradient(
            106.03deg,
            #9e87ff -0.89%,
            #6dbffe 39.98%,
            #ff8f8f 80.85%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .value-card > * {
          position: relative;
          z-index: 1;
        }

        .value-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default ValueCard;
