"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { ServiceCard } from "@/components/ui/advisory";
import { cn } from "@/lib/utils";

export default function ServiceOfferings({
  title,
  description,
  serviceOfferingsData,
  heightDifference,
  className,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Albert_Sans'] text-black mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl font-normal font-['Outfit'] text-black leading-relaxed tracking-wide max-w-4xl">
            {description}
          </p>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
            className
          )}>
          {serviceOfferingsData.map((service, index) => (
            <div key={index} className="flex flex-col justify-end h-full">
              <ServiceCard
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                featured={service.featured}
                index={index}
                heightDifference={heightDifference}
                icon={service.icon}
                currentIndex={currentIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
