"use client";

import Hero from "@/sections/Advisory/Hero";
import HeroSection from "@/sections/Advisory/Hero";
import IndustryExpertise from "@/sections/Advisory/IndustryExpertise";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";

export default function AIAdvisoryPage() {
  const exampleStatsCards = [
    {
      mainText: "30%",
      subText: "COST REDUCTION",
    },
    {
      mainText: "90%",
      subText: "LEARNING RETENTION THROUGH VR",
    },
    {
      mainText: "40%",
      subText: "FASTER ONBOARDING",
    },
    {
      mainText: "25%",
      subText: "EFFICIENCY IMPROVEMENT",
    },
  ];

  // constant/advisory.js
  const industriesData = [
    {
      title: "Healthcare",
      description: "AI-powered solutions to improve patient care and outcomes.",
      icon: null,
    },
    {
      title: "Finance",
      description: "Optimizing financial strategies using AI insights.",
      icon: null,
    },
    {
      title: "Retail",
      description:
        "Enhancing customer experience with AI-driven recommendations.",
      icon: null,
    },
    // Add more industries as needed
  ];

  return (
    <main className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection
        title="AI Advisory & Implementation"
        description="As a leading artificial intelligence consulting firm, we specialize in creating custom strategies that generate results-measurable, scalable, and built for the real world."
        linkText="Explore Our Offerings"
        linkHref="#solutions"
        statsCards={exampleStatsCards}
      />

      <ServiceOfferings />
      <Methodology />
      <IndustryExpertise
        title="Industry-Specific Expertise in AI Consulting"
        subtitle="Tailored approaches that address unique challenges in diverse sectors."
        industriesData={industriesData}
      />
      <SuccessStories />
    </main>
  );
}
