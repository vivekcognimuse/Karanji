import CarouselContainer from "@/components/animations/Carousal";
import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";

const EntertainmentServices = ({ data }) => {
  const { title, subTitle, services } = data;

  return (
    <div className="">
      <div className="">
        {/* Header Section */}
        <div className=" mb-16">
          <h3 className=" mb-4">{title}</h3>
          <P2 className="">{subTitle}</P2>
        </div>

        {/* Services Grid */}
        <div className=" hidden  lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#EEEAFE] rounded-2xl space-y-8 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Icon */}

              <Image
                src={service.icon || "/"}
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
        </div>
        <div className="lg:hidden">
          <CarouselContainer>
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#EEEAFE] rounded-2xl space-y-8 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Icon */}

                <Image
                  src={service.icon || "/"}
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
        </div>
      </div>
    </div>
  );
};

export default EntertainmentServices;
