import React from "react";
import { P3 } from "@/components/CustomTags";
import Image from "next/image";
// Reusable Card Component
const WhyWorkCard = ({ icon, title, description, image, className = "" }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[16px] max-w-xs shadow-lg ${className}`}
    >
      {/* Background and border */}
      <div
        className="p-6 h-full relative z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 209, 193, 0.2) 28.11%, rgba(206, 220, 255, 0.2) 70.88%)",
        }}
      >
        {/* Gradient border overlay */}
        <div
          className="absolute inset-0 rounded-[16px] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(82, 84, 203, 0.2) 0%, rgba(255, 148, 47, 0.2) 100%)",
            padding: "0.5px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "exclude",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          }}
        />
        {/* Content */}
        <div className="relative z-10">
          {/* Icon and Title in same line */}
          <div className="mb-4 flex items-center gap-3">
            <Image
              height={40}
              width={40}
              src={icon}
              alt={`${title} icon`}
              className="w-12 h-12 object-contain"
            />
            <h4 className="text-xl font-semibold text-gray-900 mb-0">
              {title}
            </h4>
          </div>
          {/* Description */}
          <P3 className="text-gray-700 leading-relaxed mb-4">{description}</P3>
        </div>
        {/* Main Image - Outside content div to ignore padding */}
        {image && (
          <div className="mt-4 -mx-6 -mb-6">
            <Image
              height={400}
              width={400}
              src={image}
              alt={`${title} illustration`}
              className="w-full h-56 object-cover object-bottom rounded-b-[16px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

// Main Section Component
const WhyWorkWithUsSection = ({
  title,
  description,
  cards = [],
  className = "",
}) => {
  return (
    <section className={` ${className}`}>
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h4 className=" text-black-800 mb-8">{title}</h4>
          <P3 className="text-black-950 mx-auto">{description}</P3>
        </div>
        {/* Cards Scatter Flexbox */}
        <div className="flex flex-wrap justify-center items-center gap-8 relative">
          {cards.map((card, index) => {
            // Scatter effect: offset cards from center
            let scatter = "";
            if (cards.length > 1) {
              const offset = (index - (cards.length - 1) / 2) * 20; // px offset
              const rotate = (index - (cards.length - 1) / 2) * 4; // deg rotation
              scatter = `translateY(${offset}px) rotate(${rotate}deg)`;
            }
            return (
              <WhyWorkCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                image={card.image}
                className="transform hover:scale-105 transition-transform duration-300"
                style={{ transform: scatter }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
