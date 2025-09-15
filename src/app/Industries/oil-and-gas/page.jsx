import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";

import StrategicPriorities from "@/sections/Industries/StrategicPriorities";
import DigitalTransformation from "@/sections/Industries/DigitalTransformation";
import StrategicUseCase from "@/sections/Industries/StrategicUseCase";

import Deliverables from "@/sections/digital-learning/analytics/Deliverables";
import { fetchFromStrapi } from "@/lib/strapi";
import { getMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getMetadata("oil-and-gas");
}
export default async function OilAndGas() {
  const data = await fetchFromStrapi("oil-and-gas");
  if (!data) {
    console.error("No data object provided for oil and gas.");
    return null; // Or return a fallback UI component
  }
  const {
    heroData,
    industryData,
    strategicPrioritiesData,
    digitalTransformationData,
    strategicUseCaseData,
    ctaData,
  } = data || {};
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection
        data={heroData}
        bgImage={"/Industries & its pages/Oil and gas/Oil and gas banner.webp"}
      />
      <div className="space-y-16 lg:space-y-32">
        <Deliverables data={industryData} />
        <div id="digital-transformation">
          <DigitalTransformation
            data={digitalTransformationData}
            bgImage="/service-offering/industry/default.svg"
          />
        </div>
        <StrategicPriorities data={strategicPrioritiesData} />
        <StrategicUseCase
          data={strategicUseCaseData}
          icon="/Industries & its pages/Oil and gas/usecase"
        />
        <CTA data={ctaData} />
      </div>
    </main>
  );
}
