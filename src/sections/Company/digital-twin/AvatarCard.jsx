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
      className="relative w-full max-w-xs h-[400px] cursor-pointer flex-shrink-0"
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
          <div className="absolute top-4 right-4 flex items-center gap-1 text-sm text-green-500">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Online</span>
          </div>

          {/* Avatar Image */}
          <div className="flex justify-center items-center h-[280px] bg-gradient-to-b from-purple-50 to-blue-50 p-6">
            <div className="relative w-48 h-48 rounded-full overflow-hidden">
              <Image
                src={avatar.image}
                alt={avatar.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Avatar Info */}
          <div className="p-6 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-black mb-1">
                  {avatar.name}
                </h4>
                <p className="text-gray-600 text-sm">{avatar.role}</p>
              </div>
              <div className="w-12 h-12 ">
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
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col justify-between rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background:
              "linear-gradient(325.12deg, #F9DCDC 32.11%, #CAD9EE 76.51%, #BAABFC 120.92%)",
          }}
        >
          {/* Expertise List with divider */}
          <div className="flex-1 flex flex-col justify-start space-y-4">
            {avatar.expertise?.map((item, index) => (
              <React.Fragment key={index}>
                <P3 className="text-gray-700 ">{item}</P3>
                {index < avatar.expertise.length - 1 && (
                  <div className="border-t border-gray-300 my-2" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-6">
            <Button variant="secondary" className="w-full">
              {avatar.ctaText || `Talk to ${avatar.name}`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
