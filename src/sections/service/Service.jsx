// Updated Service.jsx
"use client";
import { P2 } from "@/components/CustomTags";
import { ServiceCard } from "@/components/ui/Service";

export default function TechnologyServices({ data }) {
  const { title, description, cards } = data || {};
  console.log("TechnologyServices data:", data);
  return (
    <section id="solutions" className="space-y-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="">{title} </h3>
          <P2 className=""> {description}</P2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cards.map((service) => (
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
