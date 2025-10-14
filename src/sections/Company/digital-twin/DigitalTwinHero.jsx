import React from "react";

import { P1 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";

// client-only, returns null, runs GSAP
import HeroReveal from "@/components/animations/HeroReveal";
import ScrollButton from "@/components/ScrollButton copy";

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
      }}>
      <div className="space-y-6  sm:space-y-8 lg:flex-grow flex flex-col justify-center max-w-[1580px] lg:mx-auto">
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-center ">{title && <>{title}</>}</h2>

          {subTitle && (
            <P1 className="text-black text-center mx-auto ">{subTitle}</P1>
          )}
        </div>

        <div className="flex-center mt-8 gap-8">
          {PrimaryButtonText && PrimaryButtonLink && (
            <ScrollButton
              ctaLink={PrimaryButtonLink}
              ctaText={PrimaryButtonText}
              variant="primary"
              href={PrimaryButtonLink}>
              {PrimaryButtonText}
            </ScrollButton>
          )}
          {SecondaryButtonText && SecondaryButtonLink && (
            <Button href={SecondaryButtonLink} variant="secondary" className="">
              {SecondaryButtonText}
            </Button>
          )}
        </div>
      </div>

      {stats?.length > 0 && (
        <div className="w-full my-16 px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center space-y-2  ${
                  index > 0 ? "lg:border-l lg:border-gray-300 lg:pl-8" : ""
                }`}>
                <h5 className=" text-black ">{stat.text}</h5>
                {stat.subText && (
                  <h6 className="text-gray-600 ">{stat.subText}</h6>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GSAP runs client-side; does not affect SSR of markup */}
      <HeroReveal />
    </section>
  );
}
