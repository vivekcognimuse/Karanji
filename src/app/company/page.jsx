import HeroSection from "@/sections/Advisory/Hero";
import QuoteSection from "@/sections/Company/about/quoteSection";

import NextUpSection from "@/sections/Company/about/NextUpSection";
const heroData = {
  title: "",
};
const teamData = {
  title: "Our Story, Our People, Your Future",
  description:
    "Discover the heart of Karanji - the values & mission that define who we are, the talented team driving our success, & the vision that inspires everything we do. Explore how innovation, collaboration, & purpose shape our journey.",
};
const cardsData = [
  {
    title: "About Us",
    description:
      "Our journey of innovation through technology, learning, & creativity",
    image: "/Company/Landing page/About us.webp",
  },
  {
    title: "Our Team",
    description:
      "Meet the minds shaping the future of immersive tech & storytelling",
    image: "/Company/Landing page/Our Team.webp",
  },
  {
    title: "Career",
    description:
      "Build your career at the crossroads of AI, creativity, & impact",
    image: "/Company/Landing page/Career.webp",
  },
];
export default async function companyLanding() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} bgImage={"/Company/Animation/5.png"} />

      <QuoteSection title="Innovate. Design. Transform." />

      <NextUpSection
        title={teamData.title}
        description={teamData.description}
        cards={cardsData}
      />
    </div>
  );
}
