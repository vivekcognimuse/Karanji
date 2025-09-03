import React from "react";

import { P1 } from "@/components/CustomTags";

// client-only, returns null, runs GSAP
import HeroReveal from "@/components/animations/HeroReveal";
import ScrollButton from "@/components/ScrollButton";
import LogoAnimation from "@/components/LogoAnimation";
import FinalLogo from "@/components/FinalLogo";
import Image from "next/image";

export default function HeroSection({ data, bgImage }) {
  const { title, ctaText, ctaLink, subTitle, stats, backgroundImage } = data;
  console.log("HeroSection data:", data);

  return (
    <section
      id="hero-section"
      className={`relative bg-no-repeat flex flex-col h-fit pt-16 md:pt-0 lg:min-h-[calc(100vh-80px)] bg-top bg-contain`}>
      <div className="space-y-6 sm:space-y-8 flex lg:flex-grow  flex-col justify-center  max-w-[1580px] lg:mx-auto">
        <div className="hidden lg:block">
          <LogoAnimation />
        </div>
        <div className="w-full lg:hidden  pb-24 md:pb-28">
          <div className=" flex flex-col justify-center w-full px-4 md:px-8">
            <Image
              height={40}
              width={40}
              src="/color-logo.svg"
              alt="Quote"
              unoptimized
              className="w-6/12 mx-auto h-auto"
            />
            <div className="ml-4 flex justify-start">
              <Image
                height={40}
                width={40}
                src="/Icons/ph_quotes.svg"
                alt="Quote"
                unoptimized
                className="w-14 h-14"
              />
            </div>

            {/* Main Heading */}
            <div className="text-center">
              <h2 className="text-black lg:text-nowrap">
                Innovate. Design. Transform.
              </h2>
            </div>
          </div>
        </div>

        {/* Use ScrollButton here */}
        {ctaText && <ScrollButton ctaText={ctaText} ctaLink={ctaLink} />}
      </div>

      {stats?.length > 0 && (
        <div className="w-full hidden lg:block pb-24 px-4 sm:px-6">
          <div className={`gap-4 flex flex-col lg:justify-center lg:flex-row`}>
            {stats.map((card, index) => {
              const isThreeCards = stats.length === 3;
              const addLgBorderLeft =
                isThreeCards && index > 0 ? " lg:border-l" : "lg:border-l";

              return (
                <div
                  key={index}
                  className={`px-4 sm:px-6 flex border-l border-black/30 gap-3 sm:gap-4 items-start lg:items-center justify-start text-left${addLgBorderLeft} opacity-0 will-change-transform`}
                  data-reveal>
                  <div className="text-lg lg:text-[2.62rem] font-semibold font-sans text-black sm:mx-0">
                    {card.number}
                  </div>
                  <p className="text-black-700 text-sm font-light sm:text-base lg:text-lg uppercase leading-relaxed sm:mx-0 max-w-xs sm:max-w-none">
                    {card.text || card.subText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GSAP runs client-side; does not affect SSR of markup */}
      <HeroReveal />
    </section>
  );
}
