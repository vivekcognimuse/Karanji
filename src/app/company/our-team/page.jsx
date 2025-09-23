import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import TeamSections from "@/sections/Company/about/teamSections";
import Head from "next/head";
import { fetchFromStrapi } from "@/lib/strapi";
import { getMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getMetadata("our-team");
}
export default async function teampage() {
  const data = await fetchFromStrapi("our-team");
  if (!data) {
    console.error("No data object provided for our-team.");
    return null;
  }
  const { heroData, teamData, teamSectionData, cta } = data || {};

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection data={heroData} bgImage="/hero/team.png" />
      <CTA data={teamData} />
      <div id="team-section">
        <TeamSections data={teamSectionData} />
      </div>
      <CTA data={cta} />
    </main>
  );
}
