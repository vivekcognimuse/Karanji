import Advantages from "@/sections/digital-twin/Advantages";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
import HeroSection from "@/sections/Advisory/Hero";
import IndustryExpertise from "@/sections/Advisory/IndustryExpertise";
import Methodology from "@/sections/Advisory/Methodology";

import SuccessStories from "@/sections/Advisory/SuccessStories";
import { fetchFromStrapi } from "@/lib/strapi";

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
  return (
    <main className="w-full max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection
        data={hero}
        bgImage="/hero/Digital Twins & Simulations.webp"
      />
      <Advantages data={advantages} />
      <div id="digital-twin-offerings">
        <DigitalTwinOfferings data={offering} />
      </div>
      <Methodology data={methodology} />
      <IndustryExpertise data={industryExpertise} />
      <SuccessStories data={successStories} />
    </main>
  );
};

export default DigitalTwins;
