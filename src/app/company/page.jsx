import HeroSection from "@/sections/Advisory/Hero";
// import QuoteSection from "@/sections/Company/about/quoteSection";
import { fetchFromStrapi } from "@/lib/strapi";
import NextUpSection from "@/sections/Company/about/NextUpSection";
import Head from "next/head";

// const cardsData = [
//   {
//     title: "About Us",
//     description:
//       "Our journey of innovation through technology, learning, & creativity",
//     image: "/Company/Landing page/About us.webp",
//     href: "/company/about-us",
//   },
//   {
//     title: "Our Team",
//     description:
//       "Meet the minds shaping the future of immersive tech & storytelling",
//     image: "/Company/Landing page/Our Team.webp",
//     href: "/company/our-team",
//   },
//   {
//     title: "Career",
//     description:
//       "Build your career at the crossroads of AI, creativity, & impact",
//     image: "/Company/Landing page/Career.webp",
//     href: "/company/careers",
//   },
// ];
const data = await fetchFromStrapi(
  "company-landing",
  { populate: "*" },
  "https://calm-joy-61798b158b.strapiapp.com/api"
);
if (!data) {
  console.error("No data object provided for HeroSection.");
}
console.log("company landing data:", data);
const { heroData, cardsData, teamData } = data || {};
export default async function companyLanding() {
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection
        data={heroData}
        bgImage={"/Company/Animation/5.png"}
        bgOpacity={0.5}
      />
      {/* <QuoteSection title="Innovate. Design. Transform." /> */}
      <NextUpSection
        title={teamData?.title}
        description={teamData?.description}
        cards={cardsData}
      />
    </main>
  );
}
