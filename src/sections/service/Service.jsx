import { P2 } from "@/components/CustomTags";
import SectionReveal from "@/components/animations/sectionReveal";
import { ServiceCard } from "@/components/ui/serviceCard";

export default function TechnologyServices({ data }) {
  const { title, description, cards = [] } = data || {};
  console.log("TechnologyServices data:", data);

  const dirForIndex = (i) =>
    i % 3 === 0 ? "right" : i % 3 === 1 ? "up" : "left";

  return (
    <section
      id="solutions"
      className="space-y-16 overflow-hidden" // Added overflow-hidden to prevent horizontal scroll
      data-reveal-amount="0.25"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className="space-y-8">
        <div className="space-y-4">
          <h3
            className="opacity-0 will-change-transform"
            data-reveal
            data-reveal-dir="up">
            {title}
          </h3>
          <P2
            className="opacity-0 will-change-transform"
            data-reveal
            data-reveal-dir="up">
            {description}
          </P2>
        </div>
      </div>

      {/* Flex layout to handle dynamic width changes */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 xl:gap-6 justify-start lg:justify-start items-start overflow-x-auto lg:overflow-x-visible">
        {cards.map((service, i) => (
          <ServiceCard
            data={service}
            key={service.id}
            data-reveal
            data-reveal-dir={dirForIndex(i)}
            className="opacity-0 will-change-transform flex-shrink-0"
          />
        ))}
      </div>

      <SectionReveal />
    </section>
  );
}
