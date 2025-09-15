import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import Industrychallenge from "@/sections/digital-learning/analytics/Deliverables";
import StrategicPriorities from "@/sections/Industries/StrategicPriorities";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
import StrategicUseCase from "@/sections/Industries/StrategicUseCase";

import { fetchFromStrapi } from "@/lib/strapi";
import { getMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getMetadata("aviation");
}
export default async function Aviation() {
  const data = await fetchFromStrapi("aviation");
  if (!data) {
    console.error("No data object provided for aviation.");
    return null; // Or return a fallback UI component
  }
  const {
    heroData,
    industryData,
    strategicPrioritiesData,
    digitalOfferingsData,
    strategicUseCaseData,
    ctaData,
  } = data || {};
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection
        data={heroData}
        bgImage={"/Industries & its pages/Aviation/aviation banner.webp"}
      />
      <Industrychallenge data={industryData} />
      <div id="strategic-priorities">
        <StrategicPriorities data={strategicPrioritiesData} />
      </div>
      <DigitalTwinOfferings
        data={digitalOfferingsData}
        // bgImageHover="/service-offering/industry/hover.svg"
        bgImage="/gradients/Card default.svg"
        bgImageHover="/gradients/Card on hover.svg"
      />
      <StrategicUseCase
        data={strategicUseCaseData}
        icon="/Industries & its pages/Aviation/usecase"
      />
      <CTA data={ctaData} />
    </main>
  );
}
