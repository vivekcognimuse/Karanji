import React from "react";
import Image from "next/image";
import { P2, P3, P4 } from "@/components/CustomTags";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SectionReveal from "@/components/animations/sectionReveal";
import CarouselContainer from "@/components/animations/Carousal";
import OfferingCard from "@/components/ui/OfferingCard";
import MultiCardCarousel from "@/components/animations/MultiCardCarousal";
import { AIAssessmentCard } from "@/components/ui/Ai-assesment";

const DigitalTwinOfferings = ({ CtaClassName = "", className = "", data }) => {
  const { title, subTitle, bottomtext, list, ctaCard, icon, cards } =
    data || {};
  console.log("DigitalTwinOfferings data:", data);
  return (
    <section
      className={cn("", className)}
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
    >
      <div className="max-w-[1580px] mx-auto">
        <div className="text-left mb-12">
          <h3 className=" text-gray-900 mb-6" data-reveal data-reveal-dir="up">
            {title}
          </h3>
          {subTitle && (
            <P2 className=" max-w-4xl" data-reveal data-reveal-dir="up">
              {subTitle}
            </P2>
          )}
        </div>

        {list && (
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
            <div className="lg:col-span-6">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {list?.map((service, index) => (
                  <P3
                    key={index}
                    className="flex items-start"
                    data-reveal
                    data-reveal-dir="up"
                  >
                    <span className="text-black-400 mr-3 mt-1">
                      {index + 1}.
                    </span>
                    <span className="text-black-400">{service.text}</span>
                  </P3>
                ))}
              </div>
            </div>

            {/* <div
              className={cn(
                "bg-[url('/gradients/offering-card-gradient.svg')] max-w-xl col-span-6 lg:col-end-12 bg-contain bg-bottom bg-no-repeat border border-black-300 shadow-lg rounded-2xl p-8 text-center",
                CtaClassName
              )}
              data-reveal
              data-reveal-dir="up">
              <h4 className="text-gray-900  mb-4">{ctaCard.title}</h4>
              <P4 className="text-gray-600 mb-8">{ctaCard.subTitle}</P4>
              <Link href={ctaCard.ctaLink} className="w-auto">
                <Button className="">{ctaCard.ctaText}</Button>
              </Link>
            </div> */}
            <AIAssessmentCard className="max-w-xl" data={ctaCard} />
          </div>
        )}
        <div className=" hidden lg:block">
          <MultiCardCarousel>
            {cards.map((card, index) => (
              <OfferingCard icon={icon} key={index} card={card} index={index} />
            ))}
          </MultiCardCarousel>{" "}
        </div>
        <div className="lg:hidden">
          <CarouselContainer>
            {cards.map((card, index) => (
              <OfferingCard icon={icon} key={index} card={card} index={index} />
            ))}
          </CarouselContainer>
        </div>
      </div>

      {bottomtext && (
        <P2 className="mt-12 " data-reveal data-reveal-dir="up">
          {bottomtext}
        </P2>
      )}
      <SectionReveal />
    </section>
  );
};

export default DigitalTwinOfferings;
