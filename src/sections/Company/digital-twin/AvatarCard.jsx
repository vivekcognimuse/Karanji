import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { P3 } from "@/components/CustomTags";

export default function AvatarCard({ avatar }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className="relative w-full max-w-xs h-[300px] sm:h-[350px] md:h-[400px] cursor-pointer flex-shrink-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {/* Online Status */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center gap-1 text-xs sm:text-sm text-green-500">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Online</span>
          </div>

          {/* Avatar Image */}
          <div className="flex justify-center items-center h-[180px] sm:h-[220px] md:h-[280px] bg-gradient-to-b from-purple-50 to-blue-50 p-3 sm:p-4 md:p-6">
            <div className="relative h-full w-full rounded-full ">
              <Image
                src={avatar.image}
                alt={avatar.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Avatar Info */}
          <div className="p-3 sm:p-4 md:p-6 pt-2 sm:pt-3 md:pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-black mb-1">
                  {avatar.name}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {avatar.role}
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                <Image
                  src="/Icons/clarity_arrow-line.svg"
                  alt="Arrow"
                  width={28}
                  height={28}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-lg border border-gray-200 p-3 sm:p-4 md:p-6 flex flex-col justify-between rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background:
              "linear-gradient(325.12deg, #F9DCDC 32.11%, #CAD9EE 76.51%, #BAABFC 120.92%)",
          }}
        >
          {/* Expertise List with divider */}
          <div className="flex-1 flex flex-col justify-start space-y-2 sm:space-y-3 md:space-y-4">
            {avatar.expertise?.map((item, index) => (
              <React.Fragment key={index}>
                <P3 className="text-gray-700 text-xs sm:text-sm">{item}</P3>
                {index < avatar.expertise.length - 1 && (
                  <div className="border-t border-gray-300 my-1 sm:my-2" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-4 sm:mt-5 md:mt-6">
            <Button variant="secondary" className="w-full text-sm sm:text-base">
              {avatar.ctaText || `Talk to ${avatar.name}`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
