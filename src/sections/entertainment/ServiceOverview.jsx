"use client";
import { useState, useEffect } from "react";
import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const ServiceOverview = ({ data }) => {
  const { title, subTitle, description, feature, images } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    }, 1000); // 1 second interval
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      data-reveal-amount="0.25"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      {/* Title */}
      <div
        className="opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          {title}
        </h3>
      </div>

      {/* Subtitle */}
      <div
        className="opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        <h4 className="mb-16">{subTitle}</h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Content Section */}
        <div
          className="space-y-6 col-span-5 my-auto opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up">
          <P2 className="mb-6 text-[#010101]">{description}</P2>
          <P3 className="text-black-500">{feature}</P3>
        </div>

        {/* Right Image Section */}
        <div
          className="relative col-span-7 rounded-2xl overflow-hidden shadow-2xl h-full opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full aspect-[772/334] object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
      </div>

      {/* Run the animation for this section */}
      <SectionReveal />
    </section>
  );
};

export default ServiceOverview;
