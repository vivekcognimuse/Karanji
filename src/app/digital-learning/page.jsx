import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import SuccessStories from "@/sections/Advisory/SuccessStories";

import EcoSystem from "@/sections/digital-learning/Eco-system";
import TechnologyServices from "@/sections/service/Service";

import React from "react";

export const metadata = {
  title:
    "End-to-End Digital Learning Solutions: Custom eLearning, LMS & Analytics",
  description:
    "Transform training with our digital learning solutions. From custom eLearning content and LMS integration to AI-powered learning analytics, we boost ROI and learner engagement.",
};

const consultancyFramework = [
  {
    icon: "/digital-learning/accordian/1.svg",
    title: "Understanding Complex Training Landscape",
    description: [
      "Analysis: Gap & maturity level assessment",
      "Engagement: Surveys, workshops, interviews",
      "Feedback: Employee & customer insights",
      "Outcome: Identified needs & opportunities",
    ],
  },
  {
    icon: "/digital-learning/accordian/2.svg",
    title: "Measuring, Monitoring, & Improving",
    description: [
      "Analysis: Define KPIs & baseline",
      "Engagement: AI-based dashboards & monitoring",
      "Feedback: Insights from learners & stakeholders",
      "Outcome: Continuous improvement plan",
    ],
  },
  {
    icon: "/digital-learning/accordian/3.svg",
    title: "Mapping Training Needs to Right Strategy",
    description: [
      "Analysis: Strategy alignment with training needs",
      "Engagement: Development of training programs",
      "Feedback: Budget, ROI, timeline, recommendations",
      "Outcome: Strategic plan for addressing gaps",
    ],
  },
  {
    icon: "/digital-learning/accordian/4.svg",
    title: "Integrating Technology, Processes, Systems",
    description: [
      "Analysis: Evaluation of current systems, workflows",
      "Engagement: Implementation of technologies, methods",
      "Feedback: Insights from trainers & SMEs",
      "Outcome: A connected, efficient training ecosystem",
    ],
  },
];
const technologyServicesData = {
  title: "Our Digital Learning Services",
  description:
    "Explore a full spectrum of technology services crafted to drive innovation & operational excellence.",
  cards: [
    {
      id: 1,
      title: "Content Design & Development",
      number: "01",

      image: "/digital-learning/service/1.webp",
      description:
        "Transforming learning experiences through expert content design, development, & talent resources.",
      list: [
        { text: "Custom eLearning modules" },
        { text: "Microlearning formats" },
        { text: "Interactive & Immersive Learning" },
        { text: "Learning Gamification" },
      ],
      ctaText: "Learn More",
      ctaLink: "/digital-learning/content-design",
    },
    {
      id: 2,
      title: "Learning Management System (LMS)",
      number: "02",
      image: "/digital-learning/service/2.webp",
      description:
        "A fully customizable learning platform that adapts to your organization’s needs.",
      ctaText: "Learn More",
      list: [
        { text: "Homegrown LMS " },
        { text: "System Integration" },
        { text: "Content Management" },
        { text: "Platform Administration" },
      ],
      ctaLink: "/digital-learning/lms-implementation",
    },
    {
      id: 3,
      title: "Learning Analytics & Optimization",
      number: "03",
      image: "/digital-learning/service/3.webp",
      description:
        "Make data-driven decisions to enhance learner success through actionable insights & personalized experiences.",
      list: [
        { text: "Learning Data Management" },
        { text: "Custom Dashboards" },
        { text: "AI Based Learning" },
        { text: "Performance Measurement" },
      ],
      ctaText: "Learn More",
      ctaLink: "/digital-learning/analytics",
    },
  ],
};
const DigitalLearning = async () => {
  const data = await fetchFromStrapi("digital-learning");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }
  console.log("DigitalLearning data:", data);
  const {
    hero,
    methodologyData,
    successStoriesData,
    // technologyServicesData,
    consultancyFramework,
    ecoSystem,
  } = data || {};
  return (
    <main className="w-full   max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection data={hero} bgImage="/hero/digital-Learning.webp" />
      <div className="space-y-16 lg:space-y-32">
        <div id="digital-learning-solutions">
          <TechnologyServices
            data={technologyServicesData}
            bgImage="/digital-learning/service/bg.svg"
          />
        </div>
        <EcoSystem data={ecoSystem} />
        {/* <ConsultancyFramework data={consultancyFramework} /> */}
        <Methodology column={true} data={methodologyData} />{" "}
        <SuccessStories data={successStoriesData} />
      </div>
    </main>
  );
};

export default DigitalLearning;
