import React from "react";
import Image from "next/image";
import { P2, P3 } from "@/components/CustomTags";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const DigitalTwinOfferings = ({
  title,
  subtitle,
  services,
  ctaText,
  ctaButtonText,
  onCtaClick = () => {},
  featuredCards,
  showNavigation = true,
  onPrevClick = () => {},
  onNextClick = () => {},
  className = "",
}) => {
  return (
    <div className={cn("py-16", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h3 className=" text-gray-900 mb-6">{title}</h3>
          <P2 className=" max-w-4xl">{subtitle}</P2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {services.map((service, index) => (
                <P3 key={index} className="flex items-start">
                  <span className="text-black-400 mr-3 mt-1">{index + 1}.</span>
                  <span className="text-black-400">{service}</span>
                </P3>
              ))}
            </div>
          </div>

          <div className="bg-[url('/gradients/offering-card-gradient.svg')] bg-contain bg-bottom bg-no-repeat border border-black-300 shadow-lg rounded-2xl p-8 text-center">
            <p className="text-gray-900 text-lg mb-6">{ctaText}</p>
            <Button onClick={onCtaClick} className="">
              {ctaButtonText}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCards.map((card, index) => (
              <div
                key={index}
                className=" rounded-2xl flex flex-col p-4 bg-[url('/gradients/offering-card-gradient.svg')] bg-cover bg-bottom bg-no-repeat shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-200">
                {card.icon && (
                  <div className="mb-6 w-16 h-16 flex items-center justify-center">
                    <Image
                      src={card.icon}
                      alt={`${card.title} icon`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                )}
                <h4 className="mb-4">{card.title}</h4>
                <P3 className="text-gray-600 leading-relaxed">
                  {card.description}
                </P3>
              </div>
            ))}
          </div>

          {/* {showNavigation && (
            <div className="flex justify-end mt-8 space-x-4">
              <button
                onClick={onPrevClick}
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                aria-label="Previous">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={onNextClick}
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                aria-label="Next">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default DigitalTwinOfferings;
