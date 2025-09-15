import DigitalTwinHeroSection from "@/sections/Company/digital-twin/DigitalTwinHero";
import CTA from "@/sections/digital-learning/CTA";
import ChooseAvatarSection from "@/sections/Company/digital-twin/ChooseAvatarSection";
import RealImpactResults from "@/sections/Company/digital-twin/RealImpactResults";
import Head from "next/head";
import { fetchFromStrapi } from "@/lib/strapi";
import { getMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getMetadata("company-twin");
}
export default async function companyLanding() {
  const data = await fetchFromStrapi("company-twin");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }
  const { twinHero, avatarData, impactSection, ctaData } = data || {};
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <DigitalTwinHeroSection data={twinHero} bgImage={"/hero/Avatars.webp"} />
      <div id="choose-avatar-section">
        <ChooseAvatarSection data={avatarData} />
      </div>
      <RealImpactResults data={impactSection} />
      <CTA data={ctaData} />
    </main>
  );
}
