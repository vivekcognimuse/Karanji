import CarouselContainer from "@/components/animations/Carousal";
import { P2 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const EntertainmentServices = ({ data }) => {
  const { title, subTitle, services } = data;

  return (
    <section
      data-reveal-amount="0.25"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
      className="">
      <div className="">
        {/* Header Section */}
        <div
          className="mb-16 opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up">
          <h3 className="mb-4">{title}</h3>
          <P2>{subTitle}</P2>
        </div>

        {/* Services Grid */}
        <div
          className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#EEEAFE] rounded-2xl space-y-8 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Icon */}
              <Image
                src={service.icon}
                alt={service.title}
                width={64}
                height={64}
                className="size-10"
              />
              <hr className="text-black-200" />

              {/* Title */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div
          className="lg:hidden opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up">
          <CarouselContainer>
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#EEEAFE] rounded-2xl space-y-8 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="size-10"
                />
                <hr className="text-black-200" />

                {/* Title */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </CarouselContainer>
        </div>
      </div>

      {/* Run the animation for this section */}
      <SectionReveal />
    </section>
  );
};

export default EntertainmentServices;
