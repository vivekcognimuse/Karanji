// Updated TechnologyAdvantage.jsx
import { P2 } from "@/components/CustomTags";
import { FeatureCard } from "@/components/ui/Service";
import { cn } from "@/lib/utils";
import { AIAssessmentCard } from "@/components/ui/Ai-assesment";
import {
  RevealWrapper,
  RevealGrid,
  RevealSection,
} from "@/components/animations/RevealWrapper";

export default function TechnologyAdvantage({
  data,
  isAIAssessmentCard = true,
  className = "",
}) {
  const { title, subTitle, ctaCard, cards = [] } = data;

  return (
    <section className={cn("space-y-8 md:space-y-16", className)}>
      {/* Header Section with staggered reveal */}
      <RevealSection stagger={0.2} className="space-y-4">
        <h3>{title}</h3>
        <P2>{subTitle}</P2>
      </RevealSection>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Features Grid with staggered children */}
        <RevealGrid
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16"
          stagger={0.15}
          threshold={0.1}
          direction="up"
          duration={0.6}>
          {cards.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              img={feature.img}
              title={feature.title}
              description={feature.description}
              className="space-y-8 flex flex-col"
            />
          ))}
        </RevealGrid>

        {/* AI Assessment Card with slide-in from right */}
        {isAIAssessmentCard && (
          <RevealWrapper
            direction="right"
            duration={0.8}
            delay={0.3}
            className="w-full flex justify-center lg:max-w-5/12 xl:w-5/12">
            <AIAssessmentCard data={ctaCard} />
          </RevealWrapper>
        )}
      </div>
    </section>
  );
}

// Alternative: If you want more granular control per item
export function TechnologyAdvantageGranular({
  data,
  isAIAssessmentCard = true,
  className = "",
}) {
  const { title, subTitle, ctaCard, cards = [] } = data;

  return (
    <section className={cn("space-y-8 md:space-y-16", className)}>
      <div className="space-y-4">
        <RevealWrapper direction="up" duration={0.5}>
          <h3>{title}</h3>
        </RevealWrapper>
        <RevealWrapper direction="up" delay={0.1} duration={0.5}>
          <P2>{subTitle}</P2>
        </RevealWrapper>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
          {cards.map((feature, index) => (
            <RevealWrapper
              key={index}
              direction={index % 2 === 0 ? "up" : "left"}
              delay={index * 0.1}
              duration={0.6}
              threshold={0.15}>
              <FeatureCard
                index={index}
                img={feature.img}
                title={feature.title}
                description={feature.description}
                className="space-y-8 flex flex-col"
              />
            </RevealWrapper>
          ))}
        </div>

        {isAIAssessmentCard && (
          <RevealWrapper
            direction="right"
            duration={0.8}
            delay={0.3}
            distance={40}
            className="w-full flex justify-center lg:max-w-5/12 xl:w-5/12">
            <AIAssessmentCard data={ctaCard} />
          </RevealWrapper>
        )}
      </div>
    </section>
  );
}
