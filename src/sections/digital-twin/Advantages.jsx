import React from "react";
import Image from "next/image";
import { P2, P3 } from "@/components/CustomTags";
import SectionReveal from "@/components/animations/sectionReveal";
import MultiCardCarousel from "@/components/animations/MultiCardCarousal";
import CarouselContainer from "@/components/animations/Carousal";

const Advantages = ({ className = "", data }) => {
  const { title, lists } = data || {};
  console.log("Fetched Advantages data:", data);
  return (
    <section
      className={className}
      data-reveal-amount="0.3"
      data-reveal-duration="0.6"
      data-reveal-stagger="0.15">
      <div className="max-w-[1580px] mx-auto">
        <div className="mb-8">
          <h2
            className="text-xl font-semibold text-gray-900"
            data-reveal
            data-reveal-dir="up">
            {title}
          </h2>
        </div>

        <div className="md:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8 items-end">
          {lists.map((card, index) => (
            <div
              key={card.id}
              className="border-l-2 border-gray-300 pl-4 flex flex-col justify-end min-h-fit"
              data-reveal
              data-reveal-dir="up">
              <p className="text-5xl font-[100] text-black font-sans mb-3 text-left">
                {(index + 1).toString().padStart(2, "0")}
              </p>

              <P2 className="">{card.title}</P2>

              <P3 className="text-black-500 font-light">{card.description}</P3>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <CarouselContainer>
            {lists.map((card, index) => (
              <div
                key={card.id}
                className="border-l-2 max-w-screen border-gray-300 pl-4 flex flex-col justify-end min-h-fit"
                data-reveal
                data-reveal-dir="up">
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
        </div>
      </div>

      <SectionReveal />
    </section>
  );
};

export default Advantages;
