import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const HeroSection = ({
  title,
  description,
  linkText,
  linkHref = "#solutions",
  linkIcon = "carbon:arrow-up-right",
  backgroundImage = "/advisory/hero.png",
  statsCards = null,
  className = "",
}) => {
  return (
    <section
      className={`flex  flex-col -z-1 min-h-screen  items-center gap-12 py-10 
        before:content-[''] before:absolute before:inset-0 
        before:bg-[url('/advisory/hero.png')] before:bg-contain before:bg-center before:bg-no-repeat 
        before:opacity-12 before:-z-1 ${className}`}
      style={{ backgroundImage: backgroundImage }}>
      <div className="flex-1 text-center lg:text-left space-y-8">
        <div className="space-y-4">
          {title && <h1 className="">{title}</h1>}
          {description && (
            <p className="text-black text-2xl font-normal text-center leading-9 tracking-wide">
              {description}
            </p>
          )}
        </div>
        {linkText && (
          <div className="flex">
            <Link
              href={linkHref}
              className="inline-flex mx-auto items-center gap-2 text-lg text-black tracking-wide hover:opacity-80 transition-opacity">
              {linkText}
              <Icon icon={linkIcon} className="w-6 h-6" />
            </Link>
          </div>
        )}
      </div>

      {/* Optional Statistics Cards */}
      {statsCards && statsCards.length > 0 && (
        <div className="w-full mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {statsCards.map((card, index) => (
              <div
                key={index}
                className={`px-6 flex gap-4 text-nowrap ${
                  index % 2 === 1 ? "border-l border-black/30 pl-8" : ""
                }`}>
                <div className="text-4xl font-normal text-black mb-2">
                  {card.mainText}
                </div>
                <p className="text-black text-lg font-normal leading-relaxed">
                  {card.subText}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
