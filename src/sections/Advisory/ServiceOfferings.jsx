"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { ServiceCard } from "@/components/ui/advisory";
import { serviceOfferingsData } from "@/constant/advisory";

export default function ServiceOfferings() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Albert_Sans'] text-black mb-4">
            Our AI Service Offerings
          </h2>
          <p className="text-lg md:text-xl font-normal font-['Outfit'] text-black leading-relaxed tracking-wide max-w-4xl">
            From high-level strategy to tactical execution and operational
            implementation, we guide you through every aspect of your AI
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceOfferingsData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              featured={service.featured}
              index={index}
              icon={service.icon}
              currentIndex={currentIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
