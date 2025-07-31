import { P2 } from "@/components/CustomTags";
import { AIAssessmentCard, FeatureCard } from "@/components/ui/Service";

export default function TechnologyAdvantage({ title, description, features }) {
  return (
    <section className="space-y-16">
      <div className="space-y-4">
        <h3 className=" ">{title}</h3>
        <P2 className=""> {description}</P2>
      </div>

      <div className="flex gap-16">
        {/* Features Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              img={feature.img}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* AI Assessment Card */}
        <AIAssessmentCard />
      </div>
    </section>
  );
}
