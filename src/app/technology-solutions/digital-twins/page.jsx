import Advantages from "@/sections/digital-twin/Advantages";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
import HeroSection from "@/sections/Advisory/Hero";
import IndustryExpertise from "@/sections/Advisory/IndustryExpertise";
import Methodology from "@/sections/Advisory/Methodology";

import SuccessStories from "@/sections/Advisory/SuccessStories";
import { fetchFromStrapi } from "@/lib/strapi";
import Head from "next/head";
import CTA from "@/sections/digital-learning/CTA";
import { getMetadata } from "@/lib/metadata";
export async function generateMetadata() {
  return await getMetadata("twin");
}

const DigitalTwins = async () => {
  const data = await fetchFromStrapi("twin");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }

  const {
    hero,
    advantages,
    offering,
    methodology,
    industryExpertise,
    successStories,
  } = data || {};
  console.log("digital twins data:", data);

  return (
    <main className="w-full max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32 ">
      {" "}
      <HeroSection
        data={hero}
        bgImage="/hero/Digital Twins & Simulations.webp"
      />
      <div className="space-y-16 lg:space-y-32">
        <Advantages data={advantages} />
        <div id="digital-twin-offerings">
          <DigitalTwinOfferings
            data={offering}
            noPopup={true}
            bgImage="/service-offering/digital-twin/default.svg"
            bgImageHover="/service-offering/digital-twin/hover.svg"
          />
        </div>
        <Methodology data={methodology} />
        <IndustryExpertise
          data={industryExpertise}
          icon={`/technologySolutions/digital-offering`}
        />
        <CTA data={industryExpertise.cta} />
        <SuccessStories data={successStories} />
      </div>
    </main>
  );
};

export default DigitalTwins;
