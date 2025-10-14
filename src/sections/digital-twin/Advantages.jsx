// Updated Advantages.jsx
import React from "react";
import Image from "next/image";
import { P2, P3 } from "@/components/CustomTags";
import { RevealWrapper } from "@/components/animations/RevealWrapper";
import MultiCardCarousel from "@/components/animations/MultiCardCarousal";
import CarouselContainer from "@/components/animations/Carousal";

const Advantages = ({ className = "", data }) => {
  const { title, lists } = data || {};

  return (
    <section className={className}>
      <div className="max-w-[1580px] mx-auto">
        {/* Title with reveal animation */}
        <RevealWrapper
          direction="up"
          duration={0.6}
          threshold={0.2}
          className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        </RevealWrapper>

        {/* Desktop Grid - Each card animates individually */}
        <div className="md:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8 items-end">
          {lists.map((card, index) => (
            <RevealWrapper
              key={card.id}
              direction="up"
              duration={0.6}
              delay={index * 0.15} // Staggered animation
              distance={30}
              threshold={0.15}
              className="border-l-2 border-gray-300 pl-4 flex flex-col justify-end min-h-fit">
              <p className="text-5xl font-[100] text-black font-sans mb-3 text-left">
                {(index + 1).toString().padStart(2, "0")}
              </p>

              <P2 className="">{card.title}</P2>

              <P3 className="text-black-500 font-light">{card.description}</P3>
            </RevealWrapper>
          ))}
        </div>

        {/* Mobile Carousel - Wrap entire carousel */}
        <RevealWrapper
          direction="up"
          duration={0.7}
          distance={30}
          threshold={0.2}
          className="md:hidden">
          <CarouselContainer>
            {lists.map((card, index) => (
              <div
                key={card.id}
                className="border-l-2 max-w-screen border-gray-300 pl-4 flex flex-col justify-end min-h-fit">
                <p className="text-5xl font-[100] text-black font-sans mb-3 text-left">
                  {(index + 1).toString().padStart(2, "0")}
                </p>

                <P2 className="">{card.title}</P2>

                <P3 className="text-black-500 font-light">
                  {card.description}
                </P3>
              </div>
            ))}
          </CarouselContainer>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default Advantages;
