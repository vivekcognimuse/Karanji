// Updated Service.jsx
"use client";
import { ServiceCard } from "@/components/ui/Service";
import useCMSStore from "@/stores/cmsStore";

export default function TechnologyServices() {
  const { services } = useCMSStore();

  return (
    <section id="solutions" className="space-y-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-medium text-black">
            Our Technology Services
          </h2>
          <p className="text-xl text-black leading-9 tracking-wide">
            Explore a full spectrum of technology services crafted to drive
            innovation and operational excellence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            number={service.number}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}
