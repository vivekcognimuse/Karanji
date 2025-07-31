"use client";
import HeroSection from "@/sections/Advisory/Hero";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";

import ResourcesSection from "@/sections/service/Resource";
import TechnologyServices from "@/sections/service/Service";

import TechnologyAdvantage from "@/sections/service/Technology";

export default function ServicesPage() {
  const features = [
    {
      title: "Outcome-Driven Methodology",
      description: "Focused on delivering clear, measurable results.",
      img: "/solutions/icons/outcome-driven.svg",
    },
    {
      title: "Integrated Capabilities",
      description: "Seamless synergy across AI, XR, and digital twins.",
      img: "/solutions/icons/integrated-capabilities.svg",
    },
    {
      title: "Expert Leadership",
      description:
        "Hands-on advisory and implementation from industry veterans",
      img: "/solutions/icons/expert-leadership.svg",
    },
    {
      title: "Scalable Solutions",
      description: "Tailored approaches that grow with your business.",
      img: "/solutions/icons/scalable-solutions.svg",
    },
  ];

  const testimonialsData = [
    {
      title: "AI-Powered Digital Twin for Manufacturing",
      metrics: [
        { value: "25%", label: "Improved Operational Efficiency" },
        { value: "30%", label: "Reduced Downtime" },
      ],
      description:
        "An integrated solution combining digital twins simulations with AI analytics to streamline manufacturing processes, reduce downtime, and optimize production efficiency.",
    },
    {
      title: "Immersive XR Training with AI Personalization",
      metrics: [
        { value: "60%", label: "Increase in training effectiveness" },
        { value: "40%", label: "Faster onboarding" },
      ],
      description:
        "A customized XR training program tailored with AI-driven insights transforming traditional training methods.",
    },
  ];
  return (
    <main className="w-full  max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection
        description="Empower your business with intelligent, immersive solutions tailored for today’s dynamic digital landscape. Stay ahead in the world of AI with technologies that drive meaningful, measurable change."
        title="Transform Your Business with Future-Ready Technology in the World of AI"
        linkText="Explore Our Technology Solutions"
        linkHref="#solutions"
        backgroundImage="/public/Images/Banner images/Technology solutions.webp"
      />

      <TechnologyAdvantage
        description="Our approach combines strategic insight with hands-on implementation.
          We specialize in integrating artificial intelligence consulting,
          XR/VR/AR experiences, and digital twin technologies to help you
          optimize operations, improve efficiencies, accelerate digital
          transformation. Rooted in the evolution of AI and shaped by today's
          realities-from AI policy to limited memory AI-we bring future-ready
          solutions that align with your long-term vision."
        features={features}
        title="The Karanji Technology Advantage"
      />

      <TechnologyServices />
      <SuccessStories
        title="Technology Implementation Success Stories"
        description="Real-world examples demonstrate the tangible benefits of our
          technology solutions. Explore case studies showcasing measurable
          improvements across industries."
        testimonialsData={testimonialsData}
      />

      <ResourcesSection />
    </main>
  );
}
