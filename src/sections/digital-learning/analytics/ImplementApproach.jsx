"use client";
import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ImplementApproach = ({ data }) => {
  const { title, subTitle, implementationTimeline } = data;
  console.log("ImplementApproach data:", data);
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
    if (!implementationTimeline?.cards || isMobile) return;
    const interval = setInterval(() => {
      setCurrentTimelineIndex(
        (prevIndex) => (prevIndex + 1) % implementationTimeline.cards.length
      );
    }, 4000); // 4 seconds delay
    return () => clearInterval(interval);
  }, [implementationTimeline?.cards, isMobile]);

  const currentTimelineItem =
    implementationTimeline?.cards?.[currentTimelineIndex] || {};

  return (
    <div>
      <h3 className="mb-4">{title}</h3>
      <P2 className="mb-16">{subTitle}</P2>
      <div>
        {/* Only render image if it exists */}
        {data.image && (
          <>
            <div className="flex-center">
              <Image
                src={data.image.mblSrc}
                alt={data.image.alt}
                width={data.image.width}
                className="w-[50vw] h-fit md:hidden"
                height={data.image.height}
              />
            </div>
            <Image
              src={data.image.src}
              className="hidden md:block"
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
            />
          </>
        )}
        <div className="flex mt-16 gap-8 flex-col md:flex-row">
          {/* Section 1 */}
          <div className="mb-8 md:mb-0">
            <h4 className="mb-4">{implementationTimeline?.title}</h4>
            <P3 className="text-black-500">
              {implementationTimeline?.description}
            </P3>
          </div>
          {/* Desktop: Current Timeline Item with Loop */}
          <div className="hidden md:block border-l-2 pl-4 border-[#B15252] w-1/2">
            <h4 className="mb-4">{currentTimelineItem.title}</h4>
            <P3 className="text-black-500 mb-2">
              {currentTimelineItem.timeline}
            </P3>{" "}
            <hr className="mt-3 text-black-200  mb-8" />
            <P3 className="text-black-500">
              {currentTimelineItem.description}
            </P3>
          </div>
          {/* Mobile: All Timeline Items Listed */}
          <div className="md:hidden space-y-8">
            {implementationTimeline?.cards?.map((timelineItem, index) => (
              <div
                key={timelineItem.id || index}
                className="border-t-2 pt-4 border-[#B15252]">
                <h4 className="mb-4">{timelineItem.title}</h4>
                <P3 className="text-black-500 mb-2">
                  {timelineItem.timeline}
                </P3>{" "}
                <hr className="mt-3 text-black-200  mb-8" />
                <P3 className="text-black-500">{timelineItem.description}</P3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementApproach;
