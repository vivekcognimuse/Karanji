import { P2 } from "@/components/CustomTags";
import { ServiceCardHome } from "@/components/ui/serviceCardHome";

export default function TechnologyServicesHome({ data, bgImage }) {
  const { title, description, image, cards = [] } = data || {};

  return (
    <section id="solutions" className="space-y-16 overflow-hidden">
      <div className="space-y-8">
        <div className="space-y-4">
          <h3>{title}</h3>
          <P2>{description}</P2>
        </div>
      </div>

      <ServiceCardHome bgImage={bgImage} cards={cards} image={image} />
    </section>
  );
}
