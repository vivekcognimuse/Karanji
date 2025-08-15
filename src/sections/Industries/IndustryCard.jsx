"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image"; // Assuming you're using Next.js
import { P2, P3, P4 } from "@/components/CustomTags";

const IndustryCard = ({
  title,
  description,
  image,
  details,
  icon,
  altTag,
  buttonText = "Learn More",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-[20rem] border border-black/10 bg-white rounded-2xl shadow-lg p-4 z-0 relative hover:scale-105 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Content */}
      <div
        className={`flex flex-col h-full ${
          isHovered ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      >
        {/* Icon */}
        <div className="flex justify-start items-center mb-4">
          {icon && (
            <div className="w-12 h-12 flex items-center justify-center rounded-lg">
              <Image
                src={icon}
                alt={altTag || title}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
          )}
        </div>

        {/* Title */}
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>

        {/* Description */}
        <P2 className="text-gray-600 text-sm mb-4 flex-1">{description}</P2>

        {/* Image */}
        <div className="flex-1 relative overflow-hidden rounded-lg">
          {image && (
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              width={320} // Add appropriate width & height if necessary
              height={180}
            />
          )}
        </div>
      </div>

      {/* Hover State - Display Details */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col justify-between p-6">
          {/* Icon */}
          <div className="flex justify-start items-center mb-4">
            {icon && (
              <div className="w-12 h-12 flex items-center justify-center rounded-lg">
                <Image
                  src={icon}
                  alt={altTag || title}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
            )}
          </div>

          {/* Title */}
          <h4 className="text-xl font-semibold text-gray-900 mb-4">{title}</h4>
          <P2 className="text-gray-600 text-sm mb-4 flex-1">{description}</P2>

          {/* Details */}
          <div className="flex-1 space-y-3">
            {details?.map((detail, index) => (
              <P4 key={index} className="text-sm text-gray-700">
                {detail}
              </P4>
            ))}
          </div>

          {/* Button */}
          <div className="mt-6">
            <Button variant="secondary" size="sm" className="w-full">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
