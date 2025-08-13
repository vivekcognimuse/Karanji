import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import IndustryExpertise from "@/sections/Advisory/IndustryExpertise";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";

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
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <HeroSection data={hero} />

      <ServiceOfferings
        data={serviceOffering}
        heightDifference={true}
        icon={`/advisory/offering`}
      />
      <Methodology data={methodology} />
      <IndustryExpertise data={industryExpertise} />
      <SuccessStories data={successStories} />
    </main>
  );
}
