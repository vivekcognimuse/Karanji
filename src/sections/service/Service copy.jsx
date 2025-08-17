import { P2 } from "@/components/CustomTags";
import SectionReveal from "@/components/animations/sectionReveal";
import { ServiceCardHome } from "@/components/ui/serviceCardHome";

export default function TechnologyServicesHome({ data, image, bgImage }) {
  const { title, description, cards = [] } = data || {};

  return (
    <section
      id="solutions"
      className="space-y-16 overflow-hidden"
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

      <ServiceCardHome bgImage={bgImage} cards={cards} image={image} />

      <SectionReveal />
    </section>
  );
}
