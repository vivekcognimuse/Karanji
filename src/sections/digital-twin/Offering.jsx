import React from "react";
import Image from "next/image";
import { P2, P3 } from "@/components/CustomTags";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SectionReveal from "@/components/animations/sectionReveal";
import CarouselContainer from "@/components/animations/Carousal";
import OfferingCard from "@/components/ui/OfferingCard";

const DigitalTwinOfferings = ({ className = "", data }) => {
  const { title, subtitle, list, ctaCard, cards } = data || {};
  console.log("DigitalTwinOfferings data:", data);
  return (
    <section
      className={cn("py-16", className)}
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className="max-w-[1580px] mx-auto">
        <div className="text-left mb-12">
          <h3 className=" text-gray-900 mb-6" data-reveal data-reveal-dir="up">
            {title}
          </h3>
          <P2 className=" max-w-4xl" data-reveal data-reveal-dir="up">
            {subtitle}
          </P2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {list?.map((service, index) => (
                <P3
                  key={index}
                  className="flex items-start"
                  data-reveal
                  data-reveal-dir="up">
                  <span className="text-black-400 mr-3 mt-1">{index + 1}.</span>
                  <span className="text-black-400">{service.text}</span>
                </P3>
              ))}
            </div>
          </div>

          <div
            className="bg-[url('/gradients/offering-card-gradient.svg')] bg-contain bg-bottom bg-no-repeat border border-black-300 shadow-lg rounded-2xl p-8 text-center"
            data-reveal
            data-reveal-dir="up">
            <p className="text-gray-900 text-lg mb-6">{ctaCard.title}</p>
            <Link href={ctaCard.ctaLink} className="w-auto">
              <Button className="">{ctaCard.ctaText}</Button>
            </Link>
          </div>
        </div>

        <div className="hidden lg:grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <OfferingCard key={index} card={card} index={index} />
          ))}
        </div>
        <div className="lg:hidden">
          <CarouselContainer>
            {cards.map((card, index) => (
              <OfferingCard key={index} card={card} index={index} />
            ))}
          </CarouselContainer>
        </div>
      </div>

      <SectionReveal />
    </section>
  );
};

export default DigitalTwinOfferings;
