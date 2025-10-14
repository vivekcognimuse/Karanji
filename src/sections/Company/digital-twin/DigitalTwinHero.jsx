import React from "react";

import { P1 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";

// client-only, returns null, runs GSAP
import HeroReveal from "@/components/animations/HeroReveal";
import ScrollButton from "@/components/ScrollButton copy";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

export default function DigitalTwinHeroSection({ data, bgImage }) {
  const {
    title,
    PrimaryButtonLink,
    PrimaryButtonText,
    SecondaryButtonLink,
    SecondaryButtonText,
    subTitle,
    stats,
  } = data;

  return (
    <section
      id="hero-section"
      className={`relative bg-no-repeat flex flex-col h-fit pt-16 md:pt-0 lg:min-h-[calc(100vh-80px)] items-center bg-center bg-contain `}
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="space-y-6  sm:space-y-8 lg:flex-grow flex flex-col justify-center max-w-[1580px] lg:mx-auto">
        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.2}
          threshold={0.2}
        >
          <div className="space-y-3 sm:space-y-4">
            <h2
              className="text-center opacity-0 will-change-transform"
              data-reveal
            >
              {title && <>{title}</>}
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
        </RevealWrapper>

        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.3}
          threshold={0.2}
        >
          <div className="flex-center mt-8 gap-8">
            {PrimaryButtonText && PrimaryButtonLink && (
              <ScrollButton
                ctaLink={PrimaryButtonLink}
                ctaText={PrimaryButtonText}
                variant="primary"
                href={PrimaryButtonLink}
              >
                {PrimaryButtonText}
              </ScrollButton>
            )}
            {SecondaryButtonText && SecondaryButtonLink && (
              <Button
                href={SecondaryButtonLink}
                variant="secondary"
                className=""
              >
                {SecondaryButtonText}
              </Button>
            )}
          </div>
        </RevealWrapper>
      </div>

      {stats?.length > 0 && (
        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.4}
          threshold={0.2}
        >
          <div className="w-full my-16 px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center space-y-2 opacity-0 will-change-transform ${
                    index > 0 ? "lg:border-l lg:border-gray-300 lg:pl-8" : ""
                  }`}
                  data-reveal
                >
                  <h5 className=" text-black ">{stat.text}</h5>
                  {stat.subText && (
                    <h6 className="text-gray-600 ">{stat.subText}</h6>
                  )}
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      )}

      {/* GSAP runs client-side; does not affect SSR of markup */}
      <HeroReveal />
    </section>
  );
}
