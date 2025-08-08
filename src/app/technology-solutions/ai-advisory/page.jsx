import {
  methodologyData,
  serviceOfferingsData,
  testimonialsData,
} from "@/constant/advisory";
import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import IndustryExpertise from "@/sections/Advisory/IndustryExpertise";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";

const exampleStatsCards = [
  {
    mainText: "89%",
    subText: "Return On Investment",
  },
  {
    mainText: "73%",
    subText: "Efficiency Boost",
  },
  {
    mainText: "25%",
    subText: "COST REDUCTION",
  },
];

const industriesData = [
  {
    title: "Healthcare",
    description: "AI-powered solutions to improve patient care and outcomes.",
    icon: "/Icons/Healthcare.svg",
    altTag: "Healthcare Industry",
  },
  {
    title: "Finance",
    description: "Optimizing financial strategies using AI insights.",
    icon: "/Icons/Financial-Services.svg",
    altTag: "Finance Industry",
  },
  {
    title: "Retail",
    description:
      "Enhancing customer experience with AI-driven recommendations.",
    icon: "/Icons/Manufacturing.svg",
    altTag: "Retail Industry",
  },
  {
    title: "Technology",
    description:
      "Drive innovation through AI-powered product development & operational efficiency.",
    icon: "/Icons/Technology.svg",
    altTag: "Technology Industry",
  },
  // Add more industries as needed
];

export default async function AIAdvisoryPage() {
  const data = await fetchFromStrapi("ai-advisory");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }
  console.log("AI Advisory data:", data);
  const {
    hero,
    advantages,
    serviceOffering,
    methodology,
    industryExpertise,
    successStories,
  } = data || {};
  return (
    <main className="w-full max-w-7xl mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <HeroSection data={hero} />

      <ServiceOfferings
        data={serviceOffering}
        heightDifference={true}
        title=" Our AI Service Offerings"
        description="From high-level strategy to tactical execution and operational implementation, we guide you through every aspect of your AI journey."
        serviceOfferingsData={serviceOfferingsData}
      />
      <Methodology data={methodology} />
      <IndustryExpertise data={industryExpertise} />
      <SuccessStories data={successStories} />
    </main>
  );
}
