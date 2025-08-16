import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import IndustryExpertise from "@/sections/Advisory/IndustryExpertise";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import Head from "next/head";

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
      {" "}
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <HeroSection data={hero} bgImage="/hero/AI advisory.webp" />
      <div id="ai-service-offerings">
        <ServiceOfferings
          data={serviceOffering}
          heightDifference={true}
          icon={`/advisory/offering`}
        />
      </div>
      <Methodology data={methodology} />
      <IndustryExpertise data={industryExpertise} />
      <SuccessStories data={successStories} />
    </main>
  );
}
