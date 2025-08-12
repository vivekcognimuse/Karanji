import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import ConsultancyFramework from "@/sections/digital-learning/ConsultancyFramework";
import EcoSystem from "@/sections/digital-learning/Eco-system";
import TechnologyServices from "@/sections/service/Service";
import React from "react";

const heroData = {
  title: "End-to-End Digital Learning Solutions",
  subTitle: "From custom content creation to LMS integration and analytics",
  linkText: "Explore Our Services",
  linkHref: "/services", // You can update the link here based on where you want the button to redirect
  linkIcon: "material-symbols:arrow-forward", // You can change this icon as per your choice
  backgroundImage: "/path/to/your/image.jpg", // Provide your background image URL
  stats: [
    {
      number: "89%",
      text: "Return On Investment",
    },
    {
      number: "73%",
      text: "Efficiency Boost",
    },
    {
      number: "25%",
      text: "Cost Reduction",
    },
  ],
};

// technologyServicesData.js

const technologyServicesData = {
  title: "Our Technology Services",
  description:
    "Explore a full spectrum of technology services crafted to drive innovation and operational excellence.",
  cards: [
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
  ],
};
// methodologyData.js

const methodologyData = {
  title: "Our Proven Methodology",
  subtitle:
    "We combine cutting-edge tech with business acumen to build AI-powered business solutions that perform.",
  list: [
    {
      title: "Content Creation",
      description:
        "Built by pools of SMEs and a network of industry veterans for highly practiced, learner-centric content.",
      tags: ["Highly practiced content", "Learner-centric approach"],
    },
    {
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
      title: "Localization",
      description:
        "Localized by expert translators and voice artists across European, Middle Eastern, and Asian languages.",
      tags: ["Usage of automation tools", "Excellent dubbing capabilities"],
    },
    {
      title: "Deployment",
      description:
        "Delivered through Customer LMS, K-nest LMS, and XR device solutions with flexible licensing.",
      tags: ["Flexibility", "Simple, elegant, easy-to-use LMS"],
    },
    {
      title: "Evaluation",
      description:
        "Driven by course feedback, business impact, and user surveys using a proven evaluation framework.",
      tags: ["Proven evaluation framework"],
    },
  ],
};
// successStoriesData.js

const successStoriesData = {
  title: "Entertainment Services Success Stories",
  tag: "technology Solutions",
  description:
    "Real-world examples highlight the impact of our entertainment production services. Explore case studies that showcase how we elevate storytelling, enhance visual experiences, and drive engagement across entertainment platforms.",
  cards: [
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
    // Add more testimonial data objects as required
  ],
};

const DigitalLearning = () => {
  return (
    <div className="w-full   max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} />
      <TechnologyServices data={technologyServicesData} />
      <EcoSystem />
      <ConsultancyFramework />
      <Methodology data={methodologyData} />{" "}
      <SuccessStories data={successStoriesData} />
    </div>
  );
};

export default DigitalLearning;
