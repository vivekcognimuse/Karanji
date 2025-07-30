"use client";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
import HeroSection from "@/sections/service/Hero";
import ResourcesSection from "@/sections/service/Resource";
import TechnologyServices from "@/sections/service/Service";
import SuccessStories from "@/sections/service/Stories";
import TechnologyAdvantage from "@/sections/service/Technology";

const DIGITAL_TWIN_CONTENT = {
  title: "The Karanji Technology Advantage",

  subtitle:
    "Our approach combines strategic insight with hands-on implementation. We specialize in integrating artificial intelligence consulting, XR/VR/AR experiences, and digital twin technologies to help you optimize operations, improve efficiencies, accelerate digital transformation. Rooted in the evolution of AI and shaped by today’s realities—from AI policy to limited memory AI—we bring future-ready solutions that align with your long-term vision.",

  services: [
    "Outcome-Driven Methodology – Focused on delivering clear, measurable results.",
    "Integrated Capabilities – Seamless synergy across AI, XR, and digital twins.",
    "Expert Leadership – Hands-on advisory and implementation from industry veterans.",
    "Scalable Solutions – Tailored approaches that grow with your business.",
  ],

  ctaText:
    "Not sure how AI-ready your business is?\nTake our quick diagnostic to benchmark your AI maturity and unlock tailored insights.",

  ctaButtonText: "Start AI Assessment",

  featuredCards: [
    {
      icon: null,
      title: "Outcome-Driven Methodology",
      description: "Focused on delivering clear, measurable results.",
    },
    {
      icon: null,
      title: "Integrated Capabilities",
      description: "Seamless synergy across AI, XR, and digital twins.",
    },
    {
      icon: null,
      title: "Expert Leadership",
      description:
        "Hands-on advisory and implementation from industry veterans.",
    },
    {
      icon: null,
      title: "Scalable Solutions",
      description: "Tailored approaches that grow with your business.",
    },
  ],
};

export default function ServicesPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection />

      {/* <DigitalTwinOfferings
        title={DIGITAL_TWIN_CONTENT.title}
        subtitle={DIGITAL_TWIN_CONTENT.subtitle}
        services={DIGITAL_TWIN_CONTENT.services}
        ctaText={DIGITAL_TWIN_CONTENT.ctaText}
        ctaButtonText={DIGITAL_TWIN_CONTENT.ctaButtonText}
        featuredCards={DIGITAL_TWIN_CONTENT.featuredCards}
      /> */}
      <TechnologyAdvantage />

      <TechnologyServices />

      <SuccessStories />

      <ResourcesSection />
    </main>
  );
}
