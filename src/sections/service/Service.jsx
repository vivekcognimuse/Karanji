// Updated Service.jsx
"use client";
import { P2 } from "@/components/CustomTags";
import { ServiceCard } from "@/components/ui/Service";
import useCMSStore from "@/stores/cmsStore";

export default function TechnologyServices() {
  const { services } = useCMSStore();

  return (
    <section id="solutions" className="space-y-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="">Our Technology Services</h3>
          <P2 className="">
            Explore a full spectrum of technology services crafted to drive
            innovation and operational excellence.
          </P2>
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
