import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import TechnologyServices from "@/sections/service/Service";
import TechnologyAdvantage from "@/sections/service/Technology";

// Static metadata definition
export const metadata = {
  title:
    "AI Consulting, XR & Digital Twin Solutions | Future-Ready Technology Services",
  description:
    "Transform your business with our AI consulting, XR/VR experiences, and digital twin technology. Drive innovation, optimize operations, and accelerate digital transformation.",
};

export default async function TechnologySolution() {
  const data = await fetchFromStrapi("technology-solutions");
  console.log("TechnologySolution data:", data);
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }

  const { hero, technologyAdvantage, technologyService } = data || {};
  const successStoriesData = {
    title: "Technology Implementation Success Stories",
    description:
      "Real-world examples demonstrate the tangible benefits of our technology solutions. Explore case studies showcasing measurable improvements across industries.",
    cards: [
      {
        title: "3D AI Advertisement",

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
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-20 space-y-16 lg:space-y-32">
      {/* No need for <Head> for static metadata */}
      <HeroSection data={hero} bgImage="/hero/TechnologySolutions.webp" />
      <TechnologyAdvantage data={technologyAdvantage} className="lg:-mt-16" />
      <div id="technology-solutions">
        <TechnologyServices
          bgImage="/technologySolutions/gradient.svg"
          data={technologyService}
        />
      </div>
      <SuccessStories data={successStoriesData} />
      {/* <ResourcesSection /> */}
    </main>
  );
}
