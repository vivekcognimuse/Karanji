import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import ConsultancyFramework from "@/sections/digital-learning/ConsultancyFramework";
import EcoSystem from "@/sections/digital-learning/Eco-system";
import TechnologyServices from "@/sections/service/Service";
import React from "react";

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
const services = [
  {
    id: 1,
    title: "Content Design & Development",
    number: "01",
    image: "/solutions/ai-advisory.webp",
  },
  {
    id: 2,
    title: "Learning Management System (LMS)",
    number: "02",
    image: "/solutions/gaming-solutions.webp",
  },
  {
    id: 3,
    title: "Learning Analytics & Optimization",
    number: "03",
    image: "/solutions/digital-twins.webp",
  },
];

export const methodologyData = [
  {
    step: "#1",
    title: "Content Creation",
    description:
      "Built by pools of SMEs and a network of industry veterans for highly practiced, learner-centric content.",
    tags: ["Highly practiced content", "Learner-centric approach"],
  },
  {
    step: "#2",
    title: "Digitization",
    description:
      "Powered by AR/VR, eLearnings, videos, and gamification using AI, animations, and accessibility tools.",
    tags: [
      "Immersive Technologies (AR/VR/Metaverse)",
      "eLearning",
      "Videos",
      "Gamification",
    ],
  },
  {
    step: "#3",
    title: "Localization",
    description:
      "Localized by expert translators and voice artists across European, Middle Eastern, and Asian languages.",
    tags: ["Usage of automation tools", "Excellent dubbing capabilities"],
  },
  {
    step: "#4",
    title: "Deployment",
    description:
      "Delivered through Customer LMS, K-nest LMS, and XR device solutions with flexible licensing.",
    tags: [
      "Flexibility",
      "Simple, elegant, easy-to-use LMS",
      "Simple, elegant, easy-to-use LMS", // This seems duplicated in the image — remove if not intended
    ],
  },
  {
    step: "#5",
    title: "Evaluation",
    description:
      "Driven by course feedback, business impact, and user surveys using a proven evaluation framework.",
    tags: ["Proven evaluation framework"],
  },
];

export const testimonialsData = [
  {
    title: "One-Hour Podcast into a Visual Experience",
    metrics: [
      { value: "+100%", label: "Improved Video Clarity" },
      { value: "30–sec", label: "Hook Developed Proactively" },
    ],
    description:
      "We enhanced a raw one-hour podcast with AI-driven upgrades, adding dynamic visuals and a motion graphics hook to elevate the content, making it more engaging and visually compelling.",
    link: "Read Full CaseStudy", // optional field if your component uses this
  },
];

const DigitalLearning = () => {
  return (
    <div className="w-full  max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection
        title="End-to-End Digital Learning Solutions"
        description="From custom content creation to LMS integration and analytics"
        linkText="Explore Our Services"
        statsCards={exampleStatsCards}
      />
      <TechnologyServices
        description="Explore a full spectrum of technology services crafted to drive
                  innovation and operational excellence."
        title="Our Technology Services"
        services={services}
      />
      <EcoSystem />
      <ConsultancyFramework />
      <Methodology
        column={true}
        title="Our Proven Methodology"
        description="We combine cutting-edge tech with business acumen to build
                  AI-powered business solutions that perform."
        methodologyData={methodologyData}
      />{" "}
      <SuccessStories
        title="Entertainment Services Success Stories"
        description="Real-world examples highlight the impact of our entertainment production services. Explore case studies that showcase how we elevate storytelling, enhance visual experiences, and drive engagement across entertainment platforms."
        testimonialsData={testimonialsData}
      />
    </div>
  );
};

export default DigitalLearning;
