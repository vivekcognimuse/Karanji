import { P2, P3 } from "@/components/CustomTags";
import CarouselContainer from "@/components/animations/Carousal";
import Image from "next/image";
import React from "react";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const FeatureCard = ({ feature, cardImage, index }) => (
  <div className="w-full px-4 md:px-0">
    <div
      className={`
         rounded-lg p-6 shadow-sm border border-gray-100 h-full
        md:bg-transparent md:rounded-none md:p-0 md:shadow-none md:border-0 md:space-y-3
      `}>
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center mb-4 md:mb-0">
        <Image
          src={`${cardImage}/${index + 1}.svg` || feature.src}
          alt={`${feature.title} icon`}
          className="w-10 h-10 object-contain"
          width={40}
          height={40}
        />
      </div>

      {/* Title */}
      <h5 className="mb-2">{feature.title}</h5>

      {/* Description */}
      <P3 className="text-black-500">{feature.description}</P3>

      {/* Divider (desktop only) */}
      <div className="hidden md:block border-t border-gray-200 my-4"></div>
    </div>
  </div>
);

const Deliverables = ({ heroImage, data, cardImage }) => {
  const { cards, title, tags, subTitle, featureHeader } = data;
  console.log("data of logistics", cards);
  // Shared Feature Card (mobile + desktop styles in one place)

  return (
    <div>
      {/* Main Content Section */}
      <div className="mb-8 lg:mb-16">
        <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
          <h3 className="mb-4">{title}</h3>
        </RevealWrapper>

        {tags && (
          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.1}
            threshold={0.2}>
            <h4 className="mb-4 lg:mb-6 text-black">{tags}</h4>
          </RevealWrapper>
        )}

        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.15}
          threshold={0.2}>
          <P2 className="text-black mb-16">{subTitle}</P2>
        </RevealWrapper>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Side - Hero Image */}
        <RevealWrapper
          direction="left"
          duration={0.6}
          delay={0.2}
          threshold={0.2}
          className="relative rounded-2xl overflow-hidden">
          <Image
            src={heroImage}
            alt="Student learning with laptop"
            className="w-full h-full object-cover"
            width={800}
            height={800}
          />
        </RevealWrapper>

        {/* Right Side - Features */}
        <div>
          {featureHeader && (
            <RevealWrapper
              direction="up"
              duration={0.6}
              delay={0.3}
              threshold={0.2}>
              <h4 className="text-black mb-16">{featureHeader}</h4>
            </RevealWrapper>
          )}

          {/* Desktop Grid */}
          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.4}
            stagger={0.1}
            threshold={0.15}
            className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {cards?.map((feature, index) => (
              <FeatureCard
                index={index}
                key={index}
                cardImage={cardImage}
                feature={feature}
              />
            ))}
          </RevealWrapper>

          {/* Mobile Carousel */}
          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.4}
            threshold={0.15}
            className="block md:hidden">
            {cards?.length > 0 && (
              <>
                {cards.length === 1 ? (
                  <FeatureCard
                    index={index}
                    cardImage={cardImage}
                    feature={cards[0]}
                  />
                ) : (
                  <CarouselContainer
                    key={`cards-${cards.length}`}
                    autoPlay={true}
                    autoPlayInterval={5500}
                    showDots={true}
                    showArrows={false}
                    className="w-full">
                    {cards.map((feature, index) => (
                      <FeatureCard
                        index={index}
                        cardImage={cardImage}
                        key={index}
                        feature={feature}
                      />
                    ))}
                  </CarouselContainer>
                )}
              </>
            )}
          </RevealWrapper>
        </div>
      </div>
    </div>
  );
};

export default Deliverables;
