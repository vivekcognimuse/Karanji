// Updated DigitalTwinOfferings.jsx
import React from "react";
import Image from "next/image";
import { P2, P3, P4 } from "@/components/CustomTags";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { RevealWrapper } from "@/components/animations/RevealWrapper";
import CarouselContainer from "@/components/animations/Carousal";
import OfferingCard from "@/components/ui/OfferingCard";
import MultiCardCarousel from "@/components/animations/MultiCardCarousal";
import { AIAssessmentCard } from "@/components/ui/Ai-assesment";

const DigitalTwinOfferings = ({
  CtaClassName = "",
  className = "",
  data,
  noPopup,
  thankYouPopup,
  bgImageHover,
  bgImageCard,
  bgImage,
}) => {
  const { title, subTitle, bottomtext, list, ctaCard, icon, cards } =
    data || {};
  console.log("DigitalTwinOfferings data:", data);

  return (
    <section className={cn("", className)}>
      <div className="max-w-[1580px] mx-auto">
        {/* Header Section */}
        <div className="text-left mb-12">
          <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
            <h3 className="text-gray-900 mb-6">{title}</h3>
          </RevealWrapper>

          {subTitle && (
            <RevealWrapper
              direction="up"
              duration={0.6}
              delay={0.1}
              threshold={0.2}>
              <P2 className="max-w-4xl">{subTitle}</P2>
            </RevealWrapper>
          )}
        </div>

        {/* List and CTA Card Section */}
        {list && (
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
            <div className="lg:col-span-6">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {list?.map((service, index) => (
                  <RevealWrapper
                    key={index}
                    direction="up"
                    duration={0.5}
                    delay={0.15 + index * 0.08} // Staggered list items
                    distance={20}
                    threshold={0.15}>
                    <P3 className="flex items-start">
                      <span className="text-black-400 mr-3 mt-1">
                        {index + 1}.
                      </span>
                      <span className="text-black-400">{service.text}</span>
                    </P3>
                  </RevealWrapper>
                ))}
              </div>
            </div>

            {/* AI Assessment Card */}
            <RevealWrapper
              direction="right"
              duration={0.7}
              delay={0.3}
              distance={30}
              threshold={0.2}>
              <AIAssessmentCard
                noPopup={noPopup}
                thankYouPopup={thankYouPopup}
                bgImage={bgImageCard}
                className="max-w-xl"
                data={ctaCard}
              />
            </RevealWrapper>
          </div>
        )}

        {/* Desktop Cards Section */}
        <div className="hidden lg:block">
          {cards.length === 3 ? (
            <div className="w-full flex gap-8 justify-center">
              {cards.map((card, index) => (
                <RevealWrapper
                  key={index}
                  direction="up"
                  duration={0.6}
                  delay={0.2 + index * 0.12} // Staggered cards
                  distance={30}
                  threshold={0.15}>
                  <OfferingCard
                    icon={icon}
                    bgImage={bgImage}
                    bgImageHover={bgImageHover}
                    card={card}
                    index={index}
                  />
                </RevealWrapper>
              ))}
            </div>
          ) : (
            <RevealWrapper
              direction="up"
              duration={0.7}
              delay={0.2}
              distance={30}
              threshold={0.15}>
              <MultiCardCarousel>
                {cards.map((card, index) => (
                  <OfferingCard
                    icon={icon}
                    bgImage={bgImage}
                    key={index}
                    bgImageHover={bgImageHover}
                    card={card}
                    index={index}
                  />
                ))}
              </MultiCardCarousel>
            </RevealWrapper>
          )}
        </div>

        {/* Mobile Carousel */}
        <RevealWrapper
          direction="up"
          duration={0.7}
          delay={0.2}
          distance={30}
          threshold={0.2}
          className="lg:hidden">
          <CarouselContainer>
            {cards.map((card, index) => (
              <OfferingCard
                icon={icon}
                bgImage={bgImage}
                bgImageHover={bgImageHover}
                key={index}
                card={card}
                index={index}
              />
            ))}
          </CarouselContainer>
        </RevealWrapper>
      </div>

      {/* Bottom Text */}
      {bottomtext && (
        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.3}
          distance={20}
          threshold={0.2}>
          <P2 className="mt-12">{bottomtext}</P2>
        </RevealWrapper>
      )}
    </section>
  );
};

export default DigitalTwinOfferings;
