import HeroSection from "@/sections/Advisory/ComapnyHero";
import { draftMode } from "next/headers";
import { fetchFromStrapi } from "@/lib/strapi";
import NextUpSection from "@/sections/Company/about/NextUpSection";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const data = await fetchFromStrapi("company-landing", { populate: "*" });
if (!data) {
  console.error("No data object provided for HeroSection.");
}
console.log("company landing data:", data);
const { cardsData, teamData } = data || {};

export default async function companyLanding() {
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-0">
      <HeroSection />

      <RevealWrapper
        direction="up"
        duration={0.7}
        delay={0.2}
        distance={40}
        threshold={0.15}
      >
        <NextUpSection
          title={teamData?.title}
          description={teamData?.description}
          cards={cardsData}
        />
      </RevealWrapper>
    </main>
  );
}
