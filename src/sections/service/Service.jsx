// Updated TechnologyServices.jsx
import { P2 } from "@/components/CustomTags";
import { RevealWrapper } from "@/components/animations/RevealWrapper";
import { ServiceCard } from "@/components/ui/serviceCard";

export default function TechnologyServices({ data, image, bgImage }) {
  const { title, description, cards = [] } = data || {};

  return (
    <section id="solutions" className="space-y-16 overflow-hidden">
      <div className="space-y-8">
        <div className="space-y-4">
          <RevealWrapper direction="up" duration={0.6} threshold={0.25}>
            <h3>{title}</h3>
          </RevealWrapper>

          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.12}
            threshold={0.25}>
            <P2>{description}</P2>
          </RevealWrapper>
        </div>
      </div>

      <RevealWrapper
        direction="up"
        duration={0.7}
        delay={0.24}
        distance={30}
        threshold={0.2}>
        <ServiceCard bgImage={bgImage} cards={cards} image={image} />
      </RevealWrapper>
    </section>
  );
}
