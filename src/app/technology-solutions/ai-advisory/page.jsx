import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import IndustryExpertise from "@/sections/Advisory/IndustryExpertise";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import CTA from "@/sections/digital-learning/CTA";

const CTAData = {
  title: "Transform Your Industry with Tailored Approach",
  description:
    "Discover how our solutions address the unique challenges in your industry.",
  PrimaryButtonText: null,
  PrimaryButtonLink: null,
  SecondaryButtonText: "Explore Industry Solutions",
  SecondaryButtonLink: "/Industries",
};

export const metadata = {
  title:
    "AI Consulting, XR & Digital Twin Solutions | Future-Ready Technology Services",
  description:
    "Transform your business with our AI consulting, XR/VR experiences, and digital twin technology. Drive innovation, optimize operations, and accelerate digital transformation.",
};
export default async function AIAdvisoryPage() {
  const data = await fetchFromStrapi("ai-advisory");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }
  console.log("AI Advisory data:", data);
  const {
    hero,
    successStories,
    serviceOffering,
    methodology,
    industryExpertise,
  } = data || {};
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32 ">
      {" "}
      <HeroSection data={hero} bgImage="/hero/AI advisory.webp" />
      <div className="space-y-16 lg:space-y-32">
        <div id="ai-service-offerings" className="">
          <ServiceOfferings
            data={serviceOffering}
            heightDifference={true}
            icon={`/advisory/offering`}
          />
        </div>
        <Methodology data={methodology} />
        <IndustryExpertise
          data={industryExpertise}
          icon={`/technologySolutions/ai-industry`}
        />
        <CTA data={industryExpertise.cta} />
        <SuccessStories data={successStories} />
      </div>
    </main>
  );
}
