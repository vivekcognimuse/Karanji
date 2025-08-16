import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import TechnologyServices from "@/sections/service/Service";
import TechnologyAdvantage from "@/sections/service/Technology";
import Head from "next/head";
export default async function TechnologySolution() {
  const data = await fetchFromStrapi("technology-solutions");
  console.log("TechnologySolution data:", data);
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }
  const { hero, technologyAdvantage, technologyService } = data || {};
  return (
    <main className="w-full   max-w-[1580px] mx-auto px-4 lg:px-20 space-y-16 lg:space-y-32">
      {" "}
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <HeroSection data={hero} bgImage="/hero/TechnologySolutions.webp" />
      <TechnologyAdvantage data={technologyAdvantage} />
      <div id="technology-solutions">
        <TechnologyServices
          bgImage="/technologySolutions/gradient.svg"
          data={technologyService}
        />
      </div>
      <SuccessStories data={technologyService.successStories} />
      {/* <ResourcesSection /> */}
    </main>
  );
}
