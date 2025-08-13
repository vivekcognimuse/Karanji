import HeroSection from "@/sections/Advisory/Hero";
import QuoteSection from "@/sections/Company/quoteSection";

import NextUpSection from "@/sections/Company/NextUpSection";
const heroData = {
  title: "Transform Learning Outcomes with Advanced Analytics",
  subTitle:
    "Make data-driven decisions to enhance learner success through actionable insights & personalized experiences",
  linkText: "Explore Our Approach",
  linkHref: "/", // You can change this to the appropriate link for your services page
  linkIcon: "material-symbols:arrow-forward", // You can change this to the desired icon
  backgroundImage: "/path/to/your/hero-image.jpg", // Provide the background image URL
  stats: [
    {
      subText: "Personalized Learning",
    },
    {
      subText: "Proactive Learner Support",
    },
    {
      subText: "Data-Driven Decision Making",
    },
    {
      subText: "Cloud-Based Solution",
    },
  ],
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
    image: "/Images/Card images/teamcardimg.png",
  },
  {
    title: "Our Team",
    description:
      "Meet the minds shaping the future of immersive tech & storytelling",
    image: "/Images/Card images/teamcardimg.png",
  },
  {
    title: "Career",
    description:
      "Build your career at the crossroads of AI, creativity, & impact",
    image: "/Images/Card images/teamcardimg.png",
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
