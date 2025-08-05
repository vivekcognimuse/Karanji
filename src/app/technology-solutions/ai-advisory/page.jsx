"use client";
import {
  methodologyData,
  serviceOfferingsData,
  testimonialsData,
} from "@/constant/advisory";
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

export default function AIAdvisoryPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <HeroSection
        title="AI Advisory & Implementation"
        description="As a leading artificial intelligence consulting firm, we specialize in creating custom strategies that generate results-measurable, scalable, and built for the real world."
        linkText="Explore Our Offerings"
        linkHref="#solutions"
        statsCards={exampleStatsCards}
        backgroundImage="/public/Images/Banner images/AI advisory.webp"
      />

      <ServiceOfferings
        heightDifference={true}
        title=" Our AI Service Offerings"
        description="From high-level strategy to tactical execution and operational implementation, we guide you through every aspect of your AI journey."
        serviceOfferingsData={serviceOfferingsData}
      />
      <Methodology
        title="Our Proven Methodology"
        description="We combine cutting-edge tech with business acumen to build
            AI-powered business solutions that perform."
        methodologyData={methodologyData}
      />
      <IndustryExpertise
        title="Industry-Specific Expertise in AI Consulting"
        subtitle="Tailored approaches that address unique challenges in diverse sectors."
        industriesData={industriesData}
      />
      <SuccessStories
        title="Use Cases & Success Stories "
        description="Discover real-world impact as our immersive solutions transform operations across industries "
        testimonialsData={testimonialsData}
      />
    </main>
  );
}
