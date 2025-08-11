import { P2 } from "@/components/CustomTags";
import { ServiceCard } from "@/components/ui/Service";
import SectionReveal from "@/components/animations/sectionReveal";

export default function TechnologyServices({ data }) {
  const { title, description, cards = [] } = data || {};

  const dirForIndex = (i) =>
    i % 3 === 0 ? "right" : i % 3 === 1 ? "up" : "left";

  return (
    <section
      id="solutions"
      className="space-y-16"
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cards.map((service, i) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            number={service.number}
            image={service.image}
            data-reveal
            data-reveal-dir={dirForIndex(i)}
            className="opacity-0 will-change-transform"
          />
        ))}
      </div>

      <SectionReveal />
    </section>
  );
}
