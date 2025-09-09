import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import TechnologyServices from "@/sections/service/Service";
import TechnologyAdvantage from "@/sections/service/Technology";

// Static metadata definition
export const metadata = {
  title:
    "AI Consulting, XR & Digital Twin Solutions | Future-Ready Technology Services",
  description:
    "Transform your business with our AI consulting, XR/VR experiences, and digital twin technology. Drive innovation, optimize operations, and accelerate digital transformation.",
};

export default async function TechnologySolution() {
  const data = await fetchFromStrapi("technology-solutions");
  console.log("TechnologySolution data:", data);
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }

  const { hero, technologyAdvantage, technologyService, successStories } =
    data || {};

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-20 space-y-16 lg:space-y-32 ">
      {/* No need for <Head> for static metadata */}
      <HeroSection data={hero} bgImage="/hero/TechnologySolutions.webp" />
      <div className="space-y-16 lg:space-y-32">
        <TechnologyAdvantage data={technologyAdvantage} className="lg:-mt-16" />
        <div id="technology-solutions">
          <TechnologyServices
            bgImage="/technologySolutions/gradient.svg"
            data={technologyService}
          />
        </div>
        <SuccessStories data={successStories} />
      </div>
      {/* <ResourcesSection /> */}
    </main>
  );
}
