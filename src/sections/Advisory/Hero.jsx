import React from "react";

import { P1 } from "@/components/CustomTags";

// client-only, returns null, runs GSAP
import HeroReveal from "@/components/animations/HeroReveal";
import ScrollButton from "@/components/ScrollButton";

export default function HeroSection({ data, bgImage }) {
  const {
    title = data?.title || "",
    ctaText,
    ctaLink,
    subTitle,
    stats,
    backgroundImage,
  } = data;
  console.log("HeroSection data:", data);

  return (
    <section
      id="hero-section"
      className={`relative bg-no-repeat flex flex-col h-fit pt-16 md:pt-0 lg:min-h-[calc(100vh-80px)] bg-top bg-contain`}
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="space-y-6 sm:space-y-8 lg:flex-grow flex flex-col justify-center  max-w-[1580px] lg:mx-auto">
        <div className="space-y-3 sm:space-y-4">
          <h2
            className="text-center opacity-0 will-change-transform"
            data-reveal
          >
            {title}
          </h2>

          {subTitle && (
            <P1
              className="text-black text-center mx-auto opacity-0 will-change-transform"
              data-reveal
            >
              {subTitle}
            </P1>
          )}
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
                  data-reveal
                >
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
