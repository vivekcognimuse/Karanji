import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import Accordion from "@/sections/digital-learning/Accordian";
import ConsultancyFramework from "@/sections/digital-learning/ConsultancyFramework";
import EcoSystem from "@/sections/digital-learning/Eco-system";
import TechnologyServices from "@/sections/service/Service";
import { Icon } from "lucide-react";
import Head from "next/head";
import React from "react";

const heroData = {
  title: "End-to-End Digital Learning Solutions",
  subTitle: "From custom content creation to LMS integration and analytics",
  ctaText: "Explore Our Services",
  ctaLink: "digital-learning-solutions", // You can update the link here based on where you want the button to redirect
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

// methodologyData.js

const methodologyData = {
  title: "Our Proven Methodology",
  subTitle:
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
  title: "Digital Learning Success Stories",
  tag: "technology Solutions",
  description:
    "Real-world examples highlight the impact of our digital learning solutions. Explore case studies showcasing enhanced learner engagement, improved training efficiency, and measurable performance growth across organizations.",
  cards: [
    {
      title: "Corporate Learning & Development Teams ",
      stats: [
        { title: "High", subTitle: "Quality Animations" },
        { title: "70%", subTitle: "Seamless Alignment" },
      ],
      description:
        "Gamified, branching e-learning modules for a banking L&D team, built with sprint-based production, visual logic maps, and parallel sub-teams to keep complex Yes/No paths coherent—delivered on time.",
      ctaText: "Read Full CaseStudy",
      ctaLink: "10",
      tag: "Digital Learning",
    },
    {
      title: "Driving School & Training Module",
      stats: [
        { title: "6", subTitle: "Crafted Modules" },
        { title: "100%", subTitle: "Client Satisfaction" },
      ],
      description:
        "A specialized, end-to-end e-learning program for a leading automotive company’s professional driving school in India, delivered on a tight timeline for both managers and practical trainers.",
      ctaText: "Read Full CaseStudy",
      ctaLink: "9",
      tag: "Digital Learning",
    },
    {
      title: "Futuristic Digital Payments Training Module",
      stats: [
        { title: "80%", subTitle: "Completion Efficiency" },
        { title: "+90%", subTitle: "Learner Engagement" },
      ],
      description:
        "A futuristic training module for a global digital-payments leader—an interactive experience that blends storytelling, simulations, and high-tech visuals. Delivered as eLearning solutions that run smoothly across enterprise learning platforms.",
      ctaText: "Read Full CaseStudy",
      ctaLink: "8",
      tag: "Digital Learning",
    },
    {
      title: "AI-Certification LMS",
      stats: [
        { title: "+90%", subTitle: "Optimized Time Controls" },
        { title: "100%", subTitle: "Seamless LMS Integration" },
      ],
      description:
        "AI-certification LMS by building a per-question JavaScript timer, rewriting score logic to store the highest attempt, and adjusting SCORM resume settings so learners can restart cleanly—delivering a smooth, certification-ready experience.",
      ctaText: "Read Full CaseStudy",
      ctaLink: "11",
    },
    {
      title: "Automobile-EV Training Module",
      stats: [
        { title: "75%", subTitle: "Cross Team Synergy" },
        { title: "85%", subTitle: "Increased Learner Engagement" },
      ],
      description:
        "An EV microlearning program that compresses 10 hours of complex content into 7-minute lessons for an automotive workforce, clarifying topics like 5G-enabled V2X and regenerative braking.",
      ctaText: "Read Full CaseStudy",
      ctaLink: "12",
    },
  ],
};

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

const DigitalLearning = () => {
  return (
    <main className="w-full   max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection data={heroData} bgImage="/hero/digital-Learning.webp" />
      <div className="space-y-16 lg:space-y-32">
        <div id="digital-learning-solutions">
          <TechnologyServices
            data={technologyServicesData}
            bgImage="/digital-learning/service/bg.svg"
          />
        </div>
        <EcoSystem />
        <ConsultancyFramework data={consultancyFramework} />
        <Methodology column={true} data={methodologyData} />{" "}
        <SuccessStories data={successStoriesData} />
      </div>
    </main>
  );
};

export default DigitalLearning;
