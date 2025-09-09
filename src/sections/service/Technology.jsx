import { P2 } from "@/components/CustomTags";
import { FeatureCard } from "@/components/ui/Service";
import SectionReveal from "@/components/animations/sectionReveal"; // <- client
import { cn } from "@/lib/utils";
import { AIAssessmentCard } from "@/components/ui/Ai-assesment";

export default function TechnologyAdvantage({
  data,
  isAIAssessmentCard = true,
  className = "",
}) {
  const { title, subTitle, ctaCard, cards = [] } = data;

  return (
    <section
      className={cn("space-y-8 md:space-y-16", className)}
      data-reveal-amount="0.3" // 30% of section in view to start
      data-reveal-duration="0.5" // per-item duration
      data-reveal-stagger="0.12" // delay between items
    >
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
          {subTitle}
        </P2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Features Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
          {cards.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              img={feature.img}
              title={feature.title}
              description={feature.description}
              // reveal tags
              data-reveal
              className="space-y-8 flex flex-col opacity-0 will-change-transform"
              // alternate directions for variety
              data-reveal-dir={index % 2 === 0 ? "up" : "left"}
            />
          ))}
        </div>

        {/* AI Assessment Card */}
        {isAIAssessmentCard && (
          <div
            className="w-full flex justify-center lg:max-w-5/12 xl:w-5/12 opacity-0 will-change-transform"
            data-reveal
            data-reveal-dir="right">
            <AIAssessmentCard data={ctaCard} />
          </div>
        )}
      </div>

      {/* Client-side animator; SSR stays intact */}
      <SectionReveal />
    </section>
  );
}
