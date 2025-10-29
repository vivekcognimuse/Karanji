import CarouselContainer from "@/components/animations/Carousal";
import { P2, P3 } from "@/components/CustomTags";

import Image from "next/image";
import React from "react";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const EntertainmentServices = ({ data, icon }) => {
  const { title, subTitle, services } = data;

  return (
    <div className="">
      <div className="">
        {/* Header Section */}
        <div className=" mb-16">
          <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
            <h3 className=" mb-4">{title}</h3>
          </RevealWrapper>

          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.1}
            threshold={0.2}>
            <P2 className="">{subTitle}</P2>
          </RevealWrapper>
        </div>

        {/* Services Grid */}
        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.2}
          stagger={0.1}
          threshold={0.15}
          className=" hidden  lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#EEEAFE] rounded-2xl space-y-8 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Icon */}

              <Image
                src={`${icon}/${index + 1}.svg` || "/"}
                alt={service.title}
                width={64}
                height={64}
                className="size-10"
              />
              <hr className=" text-black-200" />

              {/* Title */}
              <div>
                <h5 className=" font-semibold text-gray-800 mb-4">
                  {service.title}
                </h5>

                {/* Description */}
                <P3 className="text-gray-600 leading-relaxed">
                  {service.description}
                </P3>
              </div>
            </div>
          ))}
        </RevealWrapper>

        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.2}
          threshold={0.15}
          className="lg:hidden">
          <CarouselContainer>
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#EEEAFE] rounded-2xl space-y-8 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Icon */}

                <Image
                  src={`${icon}/${index + 1}.svg` || "/"}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="size-10"
                />
                <hr className=" text-black-200" />

                {/* Title */}
                <div>
                  <h5 className=" font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h5>

                  {/* Description */}
                  <P3 className="text-gray-600 leading-relaxed">
                    {service.description}
                  </P3>
                </div>
              </div>
            ))}
          </CarouselContainer>
        </RevealWrapper>
      </div>
    </div>
  );
};

export default EntertainmentServices;
