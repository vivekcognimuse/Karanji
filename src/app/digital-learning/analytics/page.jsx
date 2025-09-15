import { getMetadata } from "@/lib/metadata";
import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import Deliverables from "@/sections/digital-learning/analytics/Deliverables";
import HowItWorks from "@/sections/digital-learning/analytics/HowItWorks";
import ImplementApproach from "@/sections/digital-learning/analytics/ImplementApproach";
import AnalyticsMaturityModel from "@/sections/digital-learning/analytics/MatureModal";
import Results from "@/sections/digital-learning/analytics/Result";
import CTA from "@/sections/digital-learning/CTA";
import LearningChallenges from "@/sections/digital-learning/LearningChallenges";

export async function generateMetadata() {
  return await getMetadata("advance-learning-analytics");
}
const ContentDesign = async () => {
  const data = await fetchFromStrapi("advance-learning-analytics");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }

  const {
    hero,
    learningChallenge,
    maturityModel,
    HowLearningAnalyticsHelps,
    implementationApproach,
    KeyOutcomes,
    howItWorks,
    analyticsApproach,
    cta,
  } = data || {};
  return (
    <main className="w-full  max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection data={hero} bgImage="/hero/Analytics-banner.webp" />
      <LearningChallenges
        icons="/digital-learning/analytics/learning"
        data={learningChallenge}
      />
      <div id="analytics-service-offerings">
        <ServiceOfferings
          className="w-fit mx-auto"
          bgImage="/service-offering/digital-learning/default.svg"
          data={HowLearningAnalyticsHelps}
          icon="/digital-learning/analytics/deliverableIcons/learningAnalytics"
        />
      </div>
      <Results
        data={{
          title: "The Result",
          subTitle:
            "Better learning outcomes and professional growth for everyone involved.",
          adaptiveContent: "Adaptive Content",
          personalizedLearning: "Personalized Learning",
          proactiveSupport: "Proactive Support",
        }}
      />
      <Methodology column={true} data={analyticsApproach} />
      <AnalyticsMaturityModel
        stairImage="/digital-learning/analytics/matureModal.svg"
        data={maturityModel}
      />
      <ImplementApproach data={implementationApproach} />
      <Deliverables
        heroImage="/digital-learning/analytics/deliverables.webp"
        cardImage="/digital-learning/analytics/deliverableIcons"
        data={KeyOutcomes}
      />
      <HowItWorks data={howItWorks} />
      <CTA data={cta} />
    </main>
  );
};

export default ContentDesign;
