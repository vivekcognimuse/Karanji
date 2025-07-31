import { P2 } from "@/components/CustomTags";
import { AIAssessmentCard, FeatureCard } from "@/components/ui/Service";

export default function TechnologyAdvantage({ title, description, features }) {
  return (
    <section className="space-y-8 md:space-y-16 ">
      <div className="space-y-4">
        <h3 className="">{title}</h3>
        <P2 className="">{description}</P2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Features Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
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
        <div className="w-full flex justify-center  lg:max-w-5/12 xl:w-5/12">
          <AIAssessmentCard />
        </div>
      </div>
    </section>
  );
}
