"use client";
import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// 📦 Data object
const ImplementApproach = ({ data }) => {
  const { title, description, image, sections } = data;
  const [currentTimelineIndex, setCurrentTimelineIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Auto-loop through timeline items with 4-second delay (desktop only)
  useEffect(() => {
    if (!sections[0]?.timeline || isMobile) return;

    const interval = setInterval(() => {
      setCurrentTimelineIndex(
        (prevIndex) => (prevIndex + 1) % sections[0].timeline.length
      );
    }, 4000); // 4 seconds delay

    return () => clearInterval(interval);
  }, [sections, isMobile]);

  const currentTimelineItem =
    sections[0]?.timeline?.[currentTimelineIndex] || {};

  return (
    <div>
      <h3 className="mb-4">{title}</h3>
      <P2 className="mb-16">{description}</P2>

      <div>
        <div className="flex-center">
          <Image
            src={image.mblSrc}
            alt={image.alt}
            width={image.width}
            className="w-[50vw] h-fit md:hidden"
            height={image.height}
          />
        </div>
        <Image
          src={image.src}
          className="hidden md:block"
          alt={image.alt}
          width={image.width}
          height={image.height}
        />

        <div className="flex mt-16 gap-8 flex-col md:flex-row">
          {/* Section 1 */}
          <div className="mb-8 md:mb-0">
            <h4 className="mb-4">{sections[0].title}</h4>
            <P3 className="text-black-500">{sections[0].content}</P3>
          </div>

          {/* Desktop: Current Timeline Item with Loop */}
          <div className="hidden md:block border-l-2 pl-4 border-[#B15252] w-1/2">
            <h4 className="mb-4">{currentTimelineItem.title}</h4>
            <P3 className="text-black-500">{currentTimelineItem.contentTop}</P3>
            {currentTimelineItem.divider && <hr className="mt-3 mb-8" />}
            <P3 className="text-black-500">
              {currentTimelineItem.contentBottom}
            </P3>
          </div>

          {/* Mobile: All Timeline Items Listed */}
          <div className="md:hidden space-y-8">
            {sections[0]?.timeline?.map((timelineItem, index) => (
              <div key={index} className="border-t-2 pt-4 border-[#B15252]">
                <h4 className="mb-4">{timelineItem.title}</h4>
                <P3 className="text-black-500">{timelineItem.contentTop}</P3>
                {timelineItem.divider && <hr className="mt-3 mb-8" />}
                <P3 className="text-black-500">{timelineItem.contentBottom}</P3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementApproach;
