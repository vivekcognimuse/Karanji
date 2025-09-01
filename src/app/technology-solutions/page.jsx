import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import TechnologyServices from "@/sections/service/Service";
import TechnologyAdvantage from "@/sections/service/Technology";
import { Tag } from "lucide-react";

// Static metadata definition
export const metadata = {
  title:
    "AI Consulting, XR & Digital Twin Solutions | Future-Ready Technology Services",
  description:
    "Transform your business with our AI consulting, XR/VR experiences, and digital twin technology. Drive innovation, optimize operations, and accelerate digital transformation.",
};

const technologyService = {
  id: 20,
  title: "Our Technology Services",
  description:
    "Explore a full spectrum of technology services crafted to drive innovation & operational excellence.",
  cards: [
    {
      id: 55,
      title: "AI Advisory & Implementation",
      description:
        "Empower your business with tailored AI strategies - from maturity assessments & customized roadmaps to actionable AI solutions that drive growth.",
      image: null,
      list: [
        { id: 321, text: "AI strategy & roadmap development" },
        { id: 322, text: "Comprehensive AI maturity assessments" },
        { id: 323, text: "Custom AI-driven applications" },
        { id: 324, text: "Data strategy & analytics" },
      ],
      ctaLink: "/technology-solutions/ai-advisory",
      ctaText: "Learn More",
    },
    {
      id: 55,
      title: "XR & GamingSolutions",
      description:
        "Engage & inspire with immersive VR/AR/MR experiences that transform training, marketing, & customer interaction into dynamic journeys.",
      image: null,
      list: [
        { id: 321, text: "Immersive VR training experiences" },
        { id: 322, text: "Augmented reality learning modules" },
        { id: 323, text: "Interactive gaming & simulation applications" },
        { id: 324, text: "Dynamic mixed reality experiences" },
      ],
      ctaLink: "/technology-solutions/xr-gaming",
      ctaText: "Learn More",
    },
    {
      id: 56,
      title: "Digital Twins &Simulations",
      description:
        "Revolutionize your operational insights through digital replicas & interactive simulations that provide real-time data visualization & predictive analytics.",
      image: null,
      list: [
        { id: 325, text: "Virtual replicas of physical environments" },
        { id: 326, text: "Interactive 3DSimulations" },
        { id: 327, text: "Predictive analytics integration" },
        { id: 328, text: "Process optimization modeling" },
      ],
      ctaLink: "/technology-solutions/digital-twins",
      ctaText: "Learn More",
    },
  ],
};

export default async function TechnologySolution() {
  const data = await fetchFromStrapi("technology-solutions");
  console.log("TechnologySolution data:", data);
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }

  const { hero, technologyAdvantage } = data || {};
  const successStoriesData = {
    title: "Technology Implementation Success Stories",
    description:
      "Real-world examples demonstrate the tangible benefits of our technology solutions. Explore case studies showcasing measurable improvements across industries.",
    cards: [
      {
        title: "3D AI Advertisement",
        tag: "Technology Solutions",
        stats: [
          { title: "+45%", subTitle: "Team Skill Growth" },
          { title: "+100%", subTitle: "Client Satisfaction" },
        ],
        description:
          "We scripted and produced a full 3D AI-generated ad with a human avatar and custom voice, delivered end-to-end in just four working days—solving tight budget and timeline constraints for a leading agriculture company in India.",
        ctaText: "Read Full CaseStudy",
        ctaLink: "1",
      },
      {
        title: "K buddy AI Learning Companion",
        tag: "Technology Solutions",
        stats: [
          { title: "60%", subTitle: "Increased After-hours Engagement" },
          { title: "35%", subTitle: "Improved Student Satisfaction" },
        ],
        description:
          "AI-powered learning companion for the education sector that offers instant explanations, quiz generation, and personalized assessments through a voice/text chatbot, with full deployment completed in three months.",
        ctaText: "Read Full CaseStudy",
        ctaLink: "3",
      },
      {
        title: "Outbound Calling Agent",
        tag: "Technology Solutions",
        stats: [
          { title: "60%", subTitle: "Reduced Manual Workload" },
          { title: "40%", subTitle: "Improved Lead Response Rate" },
        ],
        description:
          "An automated outbound calling agent for EdTech sales teams that places voice calls at set intervals, logs every interaction centrally, and gives managers a dashboard for activation and oversight.",
        ctaText: "Read Full CaseStudy",
        ctaLink: "4",
      },
      {
        title: "Sign Language Bot (SignBot)",
        tag: "Technology Solutions",
        stats: [
          { title: "Reduced", subTitle: "Content Creation Time" },
          { title: "Better", subTitle: "Engagement" },
        ],
        description:
          "AI tool that converts text into sign language by retrieving and stitching pre-recorded sign clips using SBERT-based semantic similarity and exact phrase matching.",
        ctaText: "Read Full CaseStudy",
        ctaLink: "5",
      },
      {
        title: "Teacher Empowerment System (TES)",
        tag: "Technology Solutions",
        stats: [
          { title: "40-50%", subTitle: "Reduced Preparation Time" },
          { title: "30%", subTitle: "Increased Interactive Sessions" },
        ],
        description:
          "AI-powered teacher assistant that cuts prep time by up to 50% through syllabus-aligned resource curation, auto-generated quizzes, and smart teaching suggestions—already deployed in 10 schools.",
        ctaText: "Read Full CaseStudy",
        ctaLink: "6",
      },
    ],
  };

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-20 space-y-16 lg:space-y-32 ">
      {/* No need for <Head> for static metadata */}
      <HeroSection data={hero} bgImage="/hero/TechnologySolutions.webp" />
      <div className="space-y-16 lg:space-y-32">
        <TechnologyAdvantage data={technologyAdvantage} className="lg:-mt-16" />
        <div id="technology-solutions">
          <TechnologyServices
            bgImage="/technologySolutions/gradient.svg"
            data={technologyService}
          />
        </div>
        <SuccessStories data={successStoriesData} />
      </div>
      {/* <ResourcesSection /> */}
    </main>
  );
}
