import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import ConsultancyFramework from "@/sections/digital-learning/ConsultancyFramework";
import ContentFormats from "@/sections/digital-learning/Content-Formats";
import CTA from "@/sections/digital-learning/CTA";

import CustomELearningSolution from "@/sections/digital-learning/CustomELearningSolution";
import EcoSystem from "@/sections/digital-learning/Eco-system";
import LearningChallenges from "@/sections/digital-learning/LearningChallenges";
import Advantages from "@/sections/digital-twin/Advantages";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
import TechnologyServices from "@/sections/service/Service";
import React from "react";

// heroData.js

const heroData = {
  title: "End-to-End Digital Learning Solutions",
  description: "From custom content creation to LMS integration and analytics",
  linkText: "Explore Our Services",
  linkHref: "/", // You can change this to the appropriate link for your services page
  linkIcon: "material-symbols:arrow-forward", // You can change this to the desired icon
  backgroundImage: "/path/to/your/hero-image.jpg", // Provide the background image URL
  stats: [
    {
      subText: "Complete Learning Solutions",
    },
    {
      subText: "Flexible Talent & Engagement",
    },
    {
      subText: "Modern, Engaging Formats",
    },
  ],
};
// methodologyData.js

const methodologyData = {
  title: "Content Development Approach",
  subtitle:
    "Our streamlined 3-step approach delivers engaging learning content that transforms your training initiatives:",
  list: [
    {
      title: "Content Creation",
      description:
        "We select the ideal content formats, add engaging visuals and animations, and develop interactive learning experiences.",
      tags: [
        "Expert SME engagement",
        "Thorough needs analysis",
        "Target audience profiling",
        "Instructional design",
      ],
    },
    {
      title: "Digitization",
      description:
        "We select the ideal content formats, add engaging visuals and animations, and develop interactive learning experiences.",
      tags: [
        "Format selection",
        "Graphic design and visualization",
        "Animation & interactivity",
        "Authoring & development",
      ],
    },
    {
      title: "Localization",
      description:
        "We translate and culturally adapt content with voice-overs and rigorous quality checks for a seamless global learning experience.",
      tags: [
        "Translation to multiple languages",
        "Cultural adaptation",
        "Voice-over and audio production",
        "Quality assurance",
      ],
    },
  ],
};
// successStoriesData.js

const successStoriesData = {
  title: "Success Stories",
  description:
    "Real results through custom content, scalable libraries, and expert talent—driving faster, smarter learning outcomes.",
  cards: [
    {
      title: "Custom Content Development",
      metrics: [
        { value: "42%", label: "Increase in Course Completion" },
        { value: "38%", label: "Improved Learner Engagement" },
      ],
      description:
        "Legacy training was replaced with interactive, scenario-based modules and gamified assessments—resulting in significantly higher completion rates and improved learner participation.",
      link: "Read Full CaseStudy", // optional field if your component uses this
    },
    // Add more testimonial data objects as required
  ],
};
// digitalTwinData.js

export const digitalTwinData = {
  title: "Our Digital Twin Offerings",
  subtitle:
    "From initial concept to real-world impact, we help you harness Digital Twin technology to drive efficiency, resilience, and innovation.",
  list: [
    { text: "Consulting & Strategy" },
    { text: "Design & Architecture" },
    { text: "Data Integration & IoT Connectivity" },
    { text: "Development & Implementation" },
    { text: "Deployment & Integration" },
    { text: "Monitoring & Maintenance" },
    { text: "Training & Change Management" },
    { text: "Continuous Improvement & Innovation" },
  ],
  ctaCard: {
    title: "Get expert guidance tailored to your goals.",
    ctaText: "Talk to our Digital Avatars",
    ctaLink: "/talk-to-avatars", // You can update this with the actual link
  },
  cards: [
    {
      icon: "/Icons/Consulting.svg", // Provide correct paths to your icons
      title: "Consulting & Strategy",
      description:
        "Foundations for impactful and scalable digital twin adoption",
    },
    {
      icon: "/Icons/Design.svg", // Provide correct paths to your icons
      title: "Design & Architecture",
      description:
        "Blueprints for intelligent, connected, scalable twin systems",
    },
    {
      icon: "/Icons/Data.svg", // Provide correct paths to your icons
      title: "Data Integration & IoT Connectivity",
      description:
        "Seamless integration for real-time digital twin connectivity",
    },
    {
      icon: "/Icons/Development.svg", // Provide correct paths to your icons
      title: "Development & Implementation",
      description:
        "Smart development, immersive interfaces for virtual precision",
    },
  ],
};
const ADVANTAGES_CONTENT = {
  title: "Content library",
  description:
    "Accelerate your learning initiatives with our library of pre-built, customizable content. Designed by industry experts, our content is available for immediate deployment, and can be tailored to your brand's needs.",
  list: [
    {
      id: "01",
      title: "Designed by industry experts",
      description:
        "Expert-led content tailored to your specific learning goals.",
      icon: null,
    },
    {
      id: "02",
      title: "Built on proven instructional principles",
      description:
        "Content built on solid instructional design principles, ensuring maximum learning impact.",
      icon: null,
    },
    {
      id: "03",
      title: "Available for immediate deployment",
      description:
        "Deploy instantly with our ready-to-use content library, saving valuable time.",
      icon: null,
    },
    {
      id: "04",
      title: "Customizable to your brand and specific needs",
      description:
        "Personalize our content to fit your branding, style, and specific objectives.",
      icon: null,
    },
    {
      id: "05",
      title: "Compatible with major LMS platforms",
      description:
        "Our content integrates seamlessly with major Learning Management Systems (LMS).",
      icon: null,
    },
  ],
};
const CTAData = {
  title: "Looking to Enrich Your Learning Content",
  description:
    "Partner with our experts to craft impactful, learner-centric content through innovative design, agile development, and scalable talent support.",
  PrimaryButtonText: null, // Optional, if no primary button is needed
  PrimaryButtonLink: null, // Optional
  SecondaryButtonText: "Schedule a Consultation",
  SecondaryButtonLink: "/",
};
const contentFormatsData = {
  title: "Our Content Formats",
  description:
    "We offer a diverse range of content formats to meet your specific needs, from custom eLearning modules to interactive videos. Each format is designed to keep learners engaged, whether it's for large-scale training or niche subjects.",

  image: "/digital-learning/content-format/main.webp",
  content: [
    {
      description: "Custom eLearning",
      src: "/digital-learning/content-format/1.svg",
    },
    {
      description: "Microlearning",
      src: "/digital-learning/content-format/2.svg",
    },
    {
      description: "Short Learning",
      src: "/digital-learning/content-format/3.svg",
    },
    { description: "Videos", src: "/digital-learning/content-format/4.svg" },
    {
      description: "Software Simulations",
      src: "/digital-learning/content-format/5.svg",
    },
    {
      description: "Gamification",
      src: "/digital-learning/content-format/6.svg",
    },
    {
      description: "Comic Strips",
      src: "/digital-learning/content-format/7.svg",
    },
    {
      description: "Story–Tutorials",
      src: "/digital-learning/content-format/8.svg",
    },
    {
      description: "E-books & PDFs",
      src: "/digital-learning/content-format/9.svg",
    },
  ],
};
const learningChallenges = {
  title: "Custom E-Learning Solutions",
  subtitle: "Why Organizations Need Learning Analytics",
  challenges: [
    {
      title: "Custom Content Solutions",
      description:
        "Customized training content, ensuring engaging, high-quality, & culturally relevant materials",
      icon: null,
    },
    {
      title: "Ready Solutions & Resources",
      description:
        "Accelerate learning with customizable, expert content, compatible with LMS platforms",
      icon: null,
    },
  ],
};
const ContentDesign = () => {
  return (
    <div className="w-full  max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} />
      <LearningChallenges data={learningChallenges} />

      <Methodology column={true} data={methodologyData} />
      <ContentFormats data={contentFormatsData} />
      <CustomELearningSolution />
      <Advantages data={ADVANTAGES_CONTENT} />
      <DigitalTwinOfferings data={digitalTwinData} />
      <SuccessStories data={successStoriesData} />
      <CTA data={CTAData} />
    </div>
  );
};

export default ContentDesign;
