import { P2, P3 } from "@/components/CustomTags";
import CarouselContainer from "@/components/animations/Carousal";
import Image from "next/image";
import React from "react";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const Deliverables = ({ data }) => {
  const { heroImage, features, title, tag, subTitle, featureHeader } = data;

  // Individual feature card component for carousel
  const FeatureCard = ({ feature }) => (
    <div className="w-full px-4">
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full">
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center mb-4">
          <Image
            src={feature.icon}
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
      </div>
    </div>
  );

  return (
    <div>
      {/* Main Content Section */}
      <div
        className="mb-8 lg:mb-16"
        data-reveal-amount="0.3"
        data-reveal-duration="0.5"
        data-reveal-stagger="0.12">
        <h3 className="mb-4" data-reveal data-reveal-dir="up">
          {title}
        </h3>

        {tag && <h4 className="mb-4 lg:mb-6 text-black">{tag}</h4>}
        <h4 className="text-black mb-16" data-reveal data-reveal-dir="up">
          {subTitle}
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Side - Hero Image */}
        <div
          className="relative rounded-2xl overflow-hidden "
          data-reveal
          data-reveal-dir="left">
          <Image
            src={heroImage}
            alt="Student learning with laptop"
            className="w-full h-full object-cover"
            width={800}
            height={800}
          />
        </div>

        {/* Right Side - Features */}
        <div>
          {featureHeader && (
            <h4 className="text-black mb-16" data-reveal data-reveal-dir="up">
              {featureHeader}
            </h4>
          )}

          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="space-y-3"
                data-reveal
                data-reveal-dir="up">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src={feature.icon}
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
                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel - Shown only on Mobile */}
          <div className="block md:hidden">
            {features && features.length > 0 && (
              <>
                {features.length === 1 ? (
                  // Single feature - no carousel needed
                  <div className="px-4">
                    <FeatureCard feature={features[0]} />
                  </div>
                ) : (
                  // Multiple features - use carousel
                  <CarouselContainer
                    key={`features-${features.length}`}
                    autoPlay={true}
                    autoPlayInterval={5500}
                    showDots={true}
                    showArrows={false}
                    className="w-full">
                    {features.map((feature, index) => (
                      <FeatureCard key={index} feature={feature} />
                    ))}
                  </CarouselContainer>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </div>
  );
};

export default Deliverables;
