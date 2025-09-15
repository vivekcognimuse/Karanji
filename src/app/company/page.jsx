import HeroSection from "@/sections/Advisory/ComapnyHero";

import { fetchFromStrapi } from "@/lib/strapi";
import NextUpSection from "@/sections/Company/about/NextUpSection";

const data = await fetchFromStrapi(
  "company-landing",
  { populate: "*" },
  "https://calm-joy-61798b158b.strapiapp.com/api"
);
if (!data) {
  console.error("No data object provided for HeroSection.");
}
console.log("company landing data:", data);
const { cardsData, teamData } = data || {};
export default async function companyLanding() {
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-0">
      {" "}
      <HeroSection />
      <NextUpSection
        title={teamData?.title}
        description={teamData?.description}
        cards={cardsData}
      />
    </main>
  );
}
