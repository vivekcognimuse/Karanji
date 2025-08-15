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
      className="relative w-[280px] h-[400px] cursor-pointer flex-shrink-0"
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
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl p-3 border border-black-100 bg-white shadow-sm  overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {/* Online Status */}
          <div className="absolute top-6 right-6 flex items-center gap-2 text-sm text-green-500 font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Online</span>
          </div>

          {/* Avatar Image - Takes most of the card space */}
          <div className="w-full h-[280px] rounded-xloverflow-hidden">
            <Image
              src={avatar.image}
              alt={avatar.name}
              width={280}
              height={280}
              className="w-full h-full object-cover rounded-2xl border border-black-200 shadow-lg object-center"
              style={{ objectPosition: "center 20%" }}
            />
          </div>

          {/* Avatar Info - Compact bottom section */}
          <div className="px-6 py-5 flex items-center justify-between bg-white">
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-1 leading-tight">
                {avatar.name}
              </h4>
              <p className="text-gray-600 text-sm font-normal">{avatar.role}</p>
            </div>
            <div className="w-6 h-6 flex-shrink-0 ml-4">
              <Image
                src="/Icons/clarity_arrow-line.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="w-full h-full opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Since the image has gradient, we don't need additional background */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image
              src={avatar.image}
              alt={`${avatar.name} background`}
              fill
              className="w-full h-full object-cover"
              style={{ filter: "blur(20px) brightness(1.1)" }}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
          </div>

          {/* Content on top of background */}
          <div className="relative z-10 flex-1 flex flex-col justify-start space-y-4 pt-4">
            {avatar.expertise?.map((item, index) => (
              <React.Fragment key={index}>
                <P3 className="text-gray-800 text-base font-medium">{item}</P3>
                {index < avatar.expertise.length - 1 && (
                  <div className="border-t border-gray-400/30" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="relative z-10 mt-8 mx-auto">
            <Button
              variant="secondary"
              className="w-full text-base py-3 font-medium"
            >
              {avatar.ctaText || `Talk to ${avatar.name}`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
