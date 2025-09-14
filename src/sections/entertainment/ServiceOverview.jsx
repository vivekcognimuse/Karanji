"use client";
import { useState, useEffect } from "react";
import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";

const ServiceOverview = ({ data, images }) => {
  const { title, subTitle, description1, description2 } = data;
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
    <section>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
        {title}
      </h3>

      {/* Subtitle */}
      <h4 className="mb-16">{subTitle}</h4>

      <div className=" flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Content Section */}
        <div className="space-y-6  lg:col-span-5 my-auto">
          <P2 className="mb-6 text=[#010101]">{description1}</P2>
          <P3 className="text-black-500">{description2}</P3>
        </div>

        {/* Right Image Section */}
        <div className="relative lg:col-span-7  rounded-2xl overflow-hidden shadow-2xl h-full ">
          <Image
            src={images[currentIndex].src}
            width={772}
            height={334}
            alt={images[currentIndex].alt}
            className="w-full h-full aspect-[772/334] object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;

// Example data with multiple images
