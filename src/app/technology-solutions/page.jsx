import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import TechnologyServices from "@/sections/service/Service";
import TechnologyAdvantage from "@/sections/service/Technology";
export default async function TechnologySolution() {
  const data = await fetchFromStrapi("technology-solutions");
  console.log("TechnologySolution data:", data);
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }
  const { hero, technologyAdvantage, technologyService } = data || {};
  return (
    <main className="w-full  max-w-[1580px] mx-auto p-4 lg:p-20 space-y-16 lg:space-y-32">
      <HeroSection data={hero} />

      <TechnologyAdvantage data={technologyAdvantage} />

      <TechnologyServices data={technologyService} />
      <SuccessStories data={technologyService.successStories} />

      {/* <ResourcesSection /> */}
    </main>
  );
}
