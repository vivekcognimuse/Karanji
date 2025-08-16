"use client";
import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import ConsultancyFramework from "@/sections/digital-learning/ConsultancyFramework";
import ContentFormats from "@/sections/digital-learning/Content-Formats";
import CTA from "@/sections/digital-learning/CTA";

import CustomELearningSolution from "@/sections/digital-learning/CustomELearningSolution";
import ELearningCustomELearningSolutionDeepDive from "@/sections/digital-learning/CustomELearningSolutionDeepDive";

import LearningChallenges from "@/sections/digital-learning/LearningChallenges";
import Advantages from "@/sections/digital-twin/Advantages";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";

import React, { useState } from "react";

// heroData.js
const tabs = [
  { key: "custom", buttonLabel: "Custom Content Solutions" },
  { key: "ready", buttonLabel: "Ready Solutions & Resources" },
];
const heroData = {
  title: "Content Design & Development Solutions",
  subTitle:
    " Transforming learning experiences through expert content design, development, & talent resources",
  ctaText: "Explore Our Solutions",
  ctaLink: "e-learning-solutions", // You can change this to the appropriate link for your services page
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
  subTitle:
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
      title: "Corporate Learning & Development Teams ",
      stats: [
        { title: "High", subTitle: "Quality Animations" },
        { title: "70%", subTitle: "Seamless Alignment" },
      ],
      description:
        "Gamified, branching e-learning modules for a banking L&D team, built with sprint-based production, visual logic maps, and parallel sub-teams to keep complex Yes/No paths coherent—delivered on time.",
      ctaText: "Read Full CaseStudy",
      ctaLink: "10",
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
    },
  ],
};

// digitalTwinData.js

export const digitalTwinData = {
  title: "Our Digital Twin Offerings",
  subTitle:
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
    ctaLink: "/coming-soon", // You can update this with the actual link
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
  SecondaryButtonLink: "/contact",
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
  subTitle:
    "Transform Your Learning Initiatives with Tailored Content & Expert Resources",
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

// Example usage:
const eLearning = {
  tabs: {
    custom: {
      buttonSubTitle: "Custom Content Solutions",
      title: "Custom Content Solutions",
      img: "/digital-learning/content-solution/CustomContentSolutions.webp",
      alt: "Custom Content Solutions",
      description:
        "We create tailored training content that meets your specific needs, from instructional design to localization. Our 3-step approach ensures engaging, high-quality & culturally relevant learning materials for any audience.",
      stats: [
        { title: "3 step Approach" },
        { title: "Content Creation" },
        { title: "Modules" },
      ],
    },
    ready: {
      buttonSubTitle: "Ready Solutions & Resources",
      title: "Ready Solutions & Resources",
      img: "/digital-learning/content-solution/Readysolutionsandresources.webp",
      alt: "Ready Solutions & Resources",
      description:
        "Accelerate your learning initiatives with our pre-built, customizable content library. Designed by industry experts & ready for immediate deployment, our resources are fully compatible with major LMS platforms.",
      stats: [{ title: "Library Preview" }, { title: "Talent Augmentation" }],
    },
  },
  defaultTab: "custom", // optional, defaults to first tab
};
const customELearningSolutionDeepDive = {
  title: "Custom E-Learning Solutions Deep Dive",
  subTitle:
    "Our team of instructional designers, graphic designers, subject matter experts work together to craft engaging e-learning solutions that fit your specific needs. From basic text-based modules to fully interactive simulations, we deliver solutions that transform the learning experience.",
  cards: [
    {
      subTitle: "Level 1",
      description:
        "Basic text, images, & voice with minor interactive animations & visual enhancements.",
      imageSrc: "/digital-learning/content-solution/deepLearning/level 1.webp",
      videoSrc:
        "https://360.articulate.com/review/content/86f66826-278f-4400-b6c4-829f0833272b/review",
      imageAlt: "Information Security Awareness Training slide",
    },
    {
      subTitle: "Level 2",
      description: "Enhanced graphics & animations with interactive quizzes.",
      imageSrc: "/digital-learning/content-solution/deepLearning/level 2.webp",
      videoSrc:
        "https://360.articulate.com/review/content/d6db3a2f-2051-4488-9efe-d7907bce4663/review",
      imageAlt: "Global and US Healthcare Industry slide",
    },
    {
      subTitle: "Level 3",
      description:
        "2D animations, branching scenarios, mini-games, assessments",
      imageSrc: "/digital-learning/content-solution/deepLearning/level 3.webp",
      videoSrc:
        "https://360.articulate.com/review/content/896d0d5c-001a-42d8-a311-3b9f6148fa4e/review",
      imageAlt: "Global and US Healthcare Industry slide",
    },
    {
      subTitle: "Level 4",
      description:
        "Rich graphics, custom music & advanced interactive content.",
      imageSrc: "/digital-learning/content-solution/deepLearning/level 4.webp",
      videoSrc:
        "https://360.articulate.com/review/content/224d0588-ba86-4680-808f-883ef2648267/review",
      imageAlt: "Global and US Healthcare Industry slide",
    },
  ],
  cta: {
    text: "Need something totally ready to deploy?",
    buttonText: "View Ready Solutions & Resources",
  },
};
const ContentDesign = () => {
  const [activeTab, setActiveTab] = useState("custom");

  return (
    <div className="w-full max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} />
      <div id="e-learning-solutions">
        <LearningChallenges data={learningChallenges} />
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-2 mb-8">
        {tabs.map(({ key, buttonLabel }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === key
                ? "bg-[#F0B8B8] text-gray-800"
                : "bg-white text-gray-600 hover:bg-pink-100"
            }`}>
            {buttonLabel}
          </button>
        ))}
      </div>
      <div className="p-8 bg-[#FCE8E8] border border-black-200 space-y-16 lg:space-y-32 rounded-2xl">
        {/* Tab Content */}
        <CustomELearningSolution data={eLearning} activeTab={activeTab} />

        {/* Conditional Content */}
        {activeTab === "custom" ? (
          <>
            <Methodology column={true} data={methodologyData} />
            <ContentFormats data={contentFormatsData} />
          </>
        ) : (
          <>
            <Advantages data={ADVANTAGES_CONTENT} />
            <DigitalTwinOfferings data={digitalTwinData} />
          </>
        )}
      </div>
      <ELearningCustomELearningSolutionDeepDive
        data={customELearningSolutionDeepDive}
      />
      <SuccessStories data={successStoriesData} />
      <CTA data={CTAData} />
    </div>
  );
};

export default ContentDesign;
