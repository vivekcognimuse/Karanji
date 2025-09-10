import { P2 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import { fetchFromStrapi } from "@/lib/strapi";

import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";

import ContentFormats from "@/sections/digital-learning/Content-Formats";
import CTA from "@/sections/digital-learning/CTA";

import CustomELearningSolution from "@/sections/digital-learning/CustomELearningSolution";
import ELearningCustomELearningSolutionDeepDive from "@/sections/digital-learning/CustomELearningSolutionDeepDive";

import LearningChallenges from "@/sections/digital-learning/LearningChallenges";
import Advantages from "@/sections/digital-twin/Advantages";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
import Link from "next/link";
import React from "react";
import { metadata } from "../page";

// heroData.js
const tabs = [
  { key: "custom", buttonLabel: "Custom Content Solutions" },
  { key: "ready", buttonLabel: "Ready Solutions and Resources" },
];
const heroData = {
  title: "Content Design and Development Solutions",
  subTitle:
    " Transforming learning experiences through expert content design, development, and talent resources.",
  ctaText: "Explore Our Solutions",
  ctaLink: "eLearning-solutions", // You can change this to the appropriate link for your services page
  linkIcon: "material-symbols:arrow-forward", // You can change this to the desired icon
  backgroundImage: "/path/to/your/hero-image.jpg", // Provide the background image URL
  stats: [
    {
      subText: "Complete Learning Solutions",
    },
    {
      subText: "Flexible Talent and Engagement",
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
        { text: "Expert SME engagement" },
        { text: "Thorough needs analysis" },
        { text: "Target audience profiling" },
        { text: "Instructional design" },
      ],
    },
    {
      title: "Digitization",
      description:
        "We select the ideal content formats, add engaging visuals and animations, and develop interactive learning experiences.",
      tags: [
        { text: "Format selection" },
        { text: "Graphic design and visualization" },
        { text: "Animation and interactivity" },
        { text: "Authoring and development" },
      ],
    },
    {
      title: "Localization",
      description:
        "We translate and culturally adapt content with voice-overs and rigorous quality checks for a seamless global learning experience.",
      tags: [
        { text: "Translation to multiple languages" },
        { text: "Cultural adaptation" },
        { text: "Voice-over and audio production" },
        { text: "Quality assurance" },
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
      title: "Corporate Learning and Development Teams ",
      stats: [
        { title: "High", subTitle: "Quality Animations" },
        { title: "70%", subTitle: "Seamless Alignment" },
      ],
      description:
        "Gamified, branching eLearning modules for a banking L&D team, built with sprint-based production, visual logic maps, and parallel sub-teams to keep complex Yes/No paths coherent—delivered on time.",
      ctaText: "Read Full CaseStudy",
      ctaLink: "10",
      tag: "Digital Learning",
    },
    {
      title: "Driving School and Training Module",
      stats: [
        { title: "6", subTitle: "Crafted Modules" },
        { title: "100%", subTitle: "Client Satisfaction" },
      ],
      description:
        "A specialized, end-to-end eLearning program for a leading automotive company’s professional driving school in India, delivered on a tight timeline for both managers and practical trainers.",
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
  ],
};

// digitalTwinData.js

const digitalTwinData = {
  title: "Categories",

  list: [
    { text: "Leadership and Management" },
    { text: "Compliance and Regulatory" },
    { text: "Soft Skills and Communication" },
    { text: "Industry-Specific Training" },
    { text: "Technical and IT Skills" },
    { text: "Onboarding and Orientation" },
    { text: "Training and Change Management" },
    { text: "Continuous Improvement and Innovation" },
  ],
  ctaCard: {
    title: "Extensive Library of Ready-to-Use Content.",
    subTitle:
      "Covering multiple industries and skill areas-from compliance to technical training, everything you need in one place",
    ctaText: "Request content catalog",
    ctaLink: "/contact", // You can update this with the actual link
  },
  cards: [],
};
const ADVANTAGES_CONTENT = {
  title: "Content library",
  description:
    "Accelerate your learning initiatives with our library of pre-built, customizable content. Designed by industry experts, our content is available for immediate deployment, and can be tailored to your brand's needs.",
  lists: [
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
  title: "Looking to Enrich Your Learning Content?",
  description:
    "Partner with our experts to craft impactful, learner-centric content through innovative design, agile development, and scalable talent support.",
  PrimaryButtonText: "Schedule a Consultation", // Optional, if no primary button is needed
  PrimaryButtonLink: "/contact", // Optional
  // SecondaryButtonText: "Schedule a Consultation",
  // SecondaryButtonLink: "/contact",
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
      description: "ILT/VLT",
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
      description: "E-books and PDFs",
      src: "/digital-learning/content-format/9.svg",
    },
  ],
};
const learningChallenges = {
  title: "Custom eLearning Solutions",
  subTitle:
    "Transform Your Learning Initiatives with Tailored Content and Expert Resources.",
  cards: [
    {
      title: "Custom Content Solutions",
      description:
        "Customized training content, ensuring engaging, high-quality, and culturally relevant materials.",
      icon: null,
    },
    {
      title: "Ready Solutions and Resources",
      description:
        "Accelerate learning with customizable, expert content, compatible with LMS platforms.",
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
        "We create tailored training content that meets your specific needs, from instructional design to localization. Our 3-step approach ensures engaging, high-quality and culturally relevant learning materials for any audience.",
      stats: [
        { title: "3 step Approach" },
        { title: "Content Creation" },
        { title: "Modules" },
      ],
    },
    ready: {
      buttonSubTitle: "Ready Solutions and Resources",
      title: "Ready Solutions and Resources",
      img: "/digital-learning/content-solution/Readysolutionsandresources.webp",
      alt: "Ready Solutions and Resources",
      description:
        "Accelerate your learning initiatives with our pre-built, customizable content library. Designed by industry experts and ready for immediate deployment, our resources are fully compatible with major LMS platforms.",
      stats: [{ title: "Library Preview" }, { title: "Talent Augmentation" }],
    },
  },
  defaultTab: "custom", // optional, defaults to first tab
};
const customELearningSolutionDeepDive = {
  title: "Custom eLearning Solutions Deep Dive",
  subTitle:
    "Our team of instructional designers, graphic designers, subject matter experts work together to craft engaging eLearning solutions that fit your specific needs. From basic text-based modules to fully interactive simulations, we deliver solutions that transform the learning experience.",
  cards: [
    {
      tag: "Level 1",
      description:
        "Basic text, images, and voice with minor interactive animations and visual enhancements.",
      imageSrc: "/digital-learning/content-solution/deepLearning/level 1.webp",
      videoSrc:
        "https://360.articulate.com/review/content/86f66826-278f-4400-b6c4-829f0833272b/review",
      imageAlt: "Information Security Awareness Training slide",
    },
    {
      tag: "Level 2",
      description: "Enhanced graphics and animations with interactive quizzes.",
      imageSrc: "/digital-learning/content-solution/deepLearning/level 2.webp",
      videoSrc:
        "https://360.articulate.com/review/content/d6db3a2f-2051-4488-9efe-d7907bce4663/review",
      imageAlt: "Global and US Healthcare Industry slide",
    },
    {
      tag: "Level 3",
      description:
        "2D animations, branching scenarios, mini-games, assessments.",
      imageSrc: "/digital-learning/content-solution/deepLearning/level 3.webp",
      videoSrc:
        "https://360.articulate.com/review/content/896d0d5c-001a-42d8-a311-3b9f6148fa4e/review",
      imageAlt: "Global and US Healthcare Industry slide",
    },
    {
      tag: "Level 4",
      description:
        "Rich graphics, custom music and advanced interactive content.",
      imageSrc: "/digital-learning/content-solution/deepLearning/level 4.webp",
      videoSrc:
        "https://360.articulate.com/review/content/224d0588-ba86-4680-808f-883ef2648267/review",
      imageAlt: "Global and US Healthcare Industry slide",
    },
  ],
  cta: {
    text: "Need something totally ready to deploy?",
    buttonText: "View Ready Solutions and Resources",
    buttonLink: "solutions-and-resources",
  },
};

const serviceOfferingsData = {
  title: "Talent Augmentation  ",
  subTitle:
    "Enhance your learning initiatives with our skilled professionals. We provide flexible talent solutions to support your training needs.",

  cards: [
    {
      title: "Learning Experts",
      subTitle: "",
      description:
        "Skilled professionals who design, develop, and analyze effective learning experiences.",
      featured: true,
      icon: "/digital-learning/content-design/content-design/talent/1.svg",
    },
    {
      title: "Trainers Network",
      subTitle: "",
      description:
        "Certified trainers for virtual, in-person, technical, soft skills, and leadership training.",
      featured: false,
      icon: "/digital-learning/content-design/content-design/talent/2.svg",
    },
    {
      title: "SME expertise",
      subTitle: "",
      description:
        "Specialists with deep industry, domain, and technical expertise.",
      featured: false,
      icon: "/digital-learning/content-design/content-design/talent/3.svg",
    },
    {
      title: "Talent solutions",
      subTitle: "",
      description:
        "Flexible delivery models tailored to your needs-from projects to managed teams.",
      featured: false,
      icon: "/digital-learning/content-design/content-design/talent/4.svg",
    },
  ],
};

export async function generateMetadata() {
  const data = await fetchFromStrapi("content-design");
  const { title, description } = data?.metaData || {};
  console.log("title, description:", title, description);
  return {
    title:
      title ||
      "Content Design & Development Solutions | Custom eLearning & Instructional Design",
    description:
      description ||
      "Transform learning with expert content design & development.",
  };
}
const ContentDesign = async ({ searchParams }) => {
  const activeTab = searchParams?.tab || "custom";

  const data = await fetchFromStrapi("content-design");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }
  console.log("content-design data:", data);
  const {
    hero,
    eLearningSolutions,
    technologyServicesData,
    customContentSolutions,
    consultancyFramework,
    readySolutions,
    ecoSystem,
    cta,
  } = data || {};
  // const [activeTab, setActiveTab] = useState("custom");

  return (
    <main className="w-full max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32 ">
      {" "}
      <HeroSection bgImage="/hero/Content-design.webp" data={hero} />
      <div className="space-y-16 lg:space-y-32">
        <div id="eLearning-solutions">
          <LearningChallenges
            icons="/digital-learning/content-solution/eSolutions"
            data={eLearningSolutions}
          />
        </div>
        {/* Toggle Buttons */}
        <div
          id="solutions-and-resources"
          className="flex justify-center gap-2 mb-8">
          {tabs.map(({ key, buttonLabel }) => (
            <Link
              key={key}
              href={`?tab=${key}#solutions-and-resources`}
              className={`px-6 py-2 rounded-full p2 shadow-lg duration-300 cursor-pointer transition-colors ${
                activeTab === key
                  ? "bg-[#F0B8B8] text-gray-800"
                  : "bg-white text-gray-600 hover:bg-pink-100"
              }`}>
              {buttonLabel}
            </Link>
          ))}
        </div>
        <div className="p-8 bg-[#FCE8E8] border border-black-200 space-y-16 lg:space-y-32 rounded-2xl">
          {/* Tab Content */}
          <CustomELearningSolution data={eLearning} activeTab={activeTab} />

          {/* Conditional Content */}
          {activeTab === "custom" ? (
            <>
              <Methodology
                column={true}
                data={customContentSolutions.contentDevelopmentApproach}
              />
              <ContentFormats
                cardImage="/digital-learning/content-format"
                data={customContentSolutions.contentFormats}
              />
              <ELearningCustomELearningSolutionDeepDive
                data={customELearningSolutionDeepDive}
              />
            </>
          ) : (
            <>
              <Advantages data={readySolutions.contentLibrary} />
              <DigitalTwinOfferings
                CtaClassName="lg:-mt-24"
                bgImageCard="/service-offering/digital-learning/content-catalogue.svg"
                data={readySolutions.categorties}
                thankYouPopup={true}
              />{" "}
              <ServiceOfferings
                data={readySolutions.talentAugmentation}
                bgImage="/service-offering/digital-learning/default.svg"
                icon="/digital-learning/lms-discover"
              />
              <div className="mt-16 flex-col md:flex-row text-center md:text-start flex justify-end items-center gap-4 ">
                <P2 className=" ">
                  {readySolutions.talentAugmentation.ctaText ??
                    "Looking for something more tailored?"}
                </P2>

                <Link href="?tab=custom#solutions-and-resources">
                  <Button size="sm" variant="secondary" className="">
                    {readySolutions.talentAugmentation.ctaButtonText ??
                      "View Custom Content Solutions"}
                  </Button>
                </Link>
              </div>
            </>
          )}
          {/* <div className="mt-16 flex-col md:flex-row text-center md:text-start flex justify-end items-center gap-4 ">
          <P2 className=" ">{customELearningSolutionDeepDive.cta.text}</P2>
          <Button size="sm" variant="secondary" className="">
            {customELearningSolutionDeepDive.cta.buttonText}
          </Button>
        </div> */}
        </div>
        <SuccessStories data={successStoriesData} />
        <CTA data={cta} />
      </div>
    </main>
  );
};

export default ContentDesign;
