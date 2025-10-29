import React from "react";
import { P1 } from "@/components/CustomTags";
import ScrollButton from "@/components/ScrollButton";
import LogoAnimation from "@/components/LogoAnimation";
import {
  RevealWrapper,
  RevealSection,
} from "@/components/animations/RevealWrapper";

export default function HeroSection({ data, bgImage }) {
  const {
    title = "",
    ctaText,
    ctaLink,
    subTitle,
    stats,
    backgroundImage,
  } = data;

  return (
    <section
      id="hero-section"
      className={`relative bg-no-repeat flex flex-col h-fit pt-16 md:min-h-[calc(100vh-80px)] bg-top bg-contain`}
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}>
      <div className="space-y-6 sm:space-y-8 lg:flex-grow flex flex-col justify-center max-w-[1580px] lg:mx-auto">
        {/* Hero content with staggered reveal */}
        <RevealSection
          className="space-y-3 sm:space-y-4"
          stagger={0.2}
          direction="up"
          duration={0.8}
          threshold={0.1}>
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-[4rem] text-black font-normal mb-4 text-center">
            {title}
          </h1>

          {subTitle && (
            <P1 className="text-black text-center mx-auto">{subTitle}</P1>
          )}
        </RevealSection>

        {/* CTA Button with delay */}

        <RevealWrapper
          direction="fade"
          duration={0.6}
          delay={0.4}
          threshold={0.1}>
          <ScrollButton ctaText={ctaText} ctaLink={ctaLink} />
        </RevealWrapper>
      </div>

      {/* Stats section with staggered reveal */}
      {stats?.length > 0 && (
        <RevealWrapper
          className="w-full hidden lg:block mt-24 pb-24 px-4 sm:px-6"
          stagger={0.15}
          direction="up"
          duration={0.6}
          delay={0.2}
          threshold={0.2}>
          <div className="gap-4 flex flex-col lg:justify-center lg:flex-row">
            {stats.map((card, index) => {
              const isThreeCards = stats.length === 3;
              const addLgBorderLeft =
                isThreeCards && index > 0 ? " lg:border-l" : "lg:border-l";

              return (
                <div
                  key={index}
                  className={`px-4 sm:px-6 flex border-l border-black/30 gap-3 sm:gap-4 items-start lg:items-center justify-start text-left${addLgBorderLeft}`}>
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
        </RevealWrapper>
      )}
    </section>
  );
}
