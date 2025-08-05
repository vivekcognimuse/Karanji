import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { P1 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";

const HeroSection = ({ data }) => {
  const {
    title,
    description,
    linkText,
    linkHref,
    linkIcon,
    statsCards,
    backgroundImage,
  } = data;
  return (
    <section
      className={`flex flex-col  h-fit -z-1 pt-16 md:pt-0 lg:min-h-[calc(100vh-80px)] items-center 
         before:content-[''] before:absolute before:inset-0
         before:bg-[url('/advisory/hero.png')] before:bg-contain before:bg-center before:bg-no-repeat
         before:opacity-12 before:-z-1 `}
      style={{ backgroundImage: backgroundImage }}>
      <div className="space-y-6  sm:space-y-8 lg:flex-grow flex flex-col justify-center max-w-7xl lg:mx-auto">
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-center  ">{title}</h2>
          {description && (
            <P1 className="text-black text-center   mx-auto">{description}</P1>
          )}
        </div>
        {linkText && (
          <div className="flex">
            <Link href={linkHref} className="mx-auto">
              <Button variant="text" className="mx-auto">
                {linkText}
                <Icon icon={linkIcon} className="w-6 h-6" />
              </Button>
            </Link>
          </div>
        )}
      </div>

      {statsCards && statsCards.length > 0 && (
        <div className="w-full   my-16 px-4 sm:px-6">
          <div
            className={`grid gap-4 ${
              statsCards.length === 3
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2"
            }`}>
            {statsCards.map((card, index) => {
              const isThreeCards = statsCards.length === 3;
              const addLgBorderLeft =
                isThreeCards && index > 0 ? " lg:border-l" : "";

              return (
                <div
                  key={index}
                  className={`px-4 sm:px-6 flex border-l border-black/30 :flex-row gap-3 sm:gap-4 items-start lg:items-center justify-start text-left ${
                    index % 2 === 1 ? " lg:pl-8" : "lg:border-none"
                  }${addLgBorderLeft}`}>
                  <div className="text-lg lg:text-[2.62rem] font-semibold font-sans text-black lg:mx-auto sm:mx-0">
                    {card.title}
                  </div>
                  <p className="text-black-700 text-sm font-light sm:text-base lg:text-lg capitalize leading-relaxed lg:mx-auto sm:mx-0 max-w-xs sm:max-w-none">
                    {card.subTitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
