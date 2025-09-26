import HeroSection from "@/sections/home/Hero";
import StatsSection from "@/sections/home/Stats";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import TechnologyServicesHome from "@/sections/service/Service copy";
import LogoStoryAnimation from "@/components/LandingAnimation";
import { getMetadata } from "@/lib/metadata";
import { fetchFromStrapi } from "@/lib/strapi";

const successStoriesData = {
  title: "Transforming Business Through Measurable Success",
  description:
    "Discover the significant impact of Karanji’s innovative solutions. Our metrics showcase how we drive efficiency and savings for our clients. Join us in transforming challenges into opportunities for growth.",
  cards: [
    {
      title: "Corporate Learning and Development Teams",
      stats: [
        { title: "High", subTitle: "Quality Animations" },
        { title: "70%", subTitle: "Seamless Alignment" },
      ],
      description:
        "Gamified, branching eLearning modules for a banking L&D team, built sprint-based production, visual logic maps, and parallel sub-teams to keep complex Yes/No paths coherent - and the project was delivered on time.",
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
      tag: "Technology Solutions",
    },
    {
      title: "K Buddy AI Learning Companion",

      tag: "Technology Solutions",

      stats: [
        { title: "60%", subTitle: "Increased After-hours Engagement" },
        { title: "35%", subTitle: "Improved Student Satisfaction" },
      ],
      description:
        "AI-powered learning companion for the education sector that offers instant explanations, quiz generation, and personalized assessments through a voice/text chatbot, with full deployment completed in three months.",
      ctaText: "Read Full CaseStudy",
      ctaLink: "3",
      tag: "Technology Solutions",
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
      tag: "Technology Solutions",
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
      tag: "Technology Solutions",
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
      tag: "Technology Solutions",
    },
    {
      title: "Bringing a Murder Mystery Scene to Life",
      tag: "Creative Services",
      stats: [
        { title: "70%", subTitle: "Innovation" },
        { title: "0 bugs", subTitle: "Final Delivery" },
      ],
      description:
        "We composited client-provided murder footage onto a moving phone screen using Mocha AE planar tracking, matching motion, angle, and lighting for a realistic “video-on-phone” effect—shot with a green screen and replaced in post.",
      link: "Read Full CaseStudy",
    },
    {
      title: "Quality Month: Video Animation",
      tag: "Creative Services",
      stats: [
        { title: "On time", subTitle: "Delivery" },
        { title: "100%", subTitle: "In-house Dubbing" },
      ],
      description:
        "A culturally resonant animated VSB series for an automotive company’s Quality Month, told in a Panchayat-style narrative with custom Kannada voiceovers to mirror employees and values.",
      link: "Read Full CaseStudy",
    },
    {
      title: "One-Hour Podcast into a Visually Engaging Experience",
      tag: "Creative Services",
      stats: [
        { title: "+100%", subTitle: "Improved Video Quality" },
        { title: "1 week", subTitle: "Project Completion" },
      ],
      description:
        "A one-hour, low-quality video-call podcast (Senior Director × bestselling author) was turned into a visually engaging piece for a global IT services provider—covering innovation, resilience, and storytelling.",
      link: "Read Full CaseStudy",
    },
    {
      title: "Convocation Day School Real Video Project",
      tag: "Creative Services",
      stats: [
        { title: "95%", subTitle: "Engaging" },
        { title: "100%", subTitle: "Client Satisfaction" },
      ],
      description:
        "A three-day, end-to-end convocation video for a school, produced via rapid scripting/storyboarding, in-school filming, and smart use of stock footage to showcase the institution during the ceremony.",
      link: "Read Full CaseStudy",
    },
  ],
};
const technologyServicesData = {
  title: "Our Solutions",
  description:
    "Discover how Karanji's unique integration of technologies, creative services, and learning expertise creates powerful solutions greater than the sum of their parts.",
  cards: [
    {
      id: 1,
      title: "Technology Solutions",
      number: "01",

      image: "/home/technology.jpg",
      description:
        "Transforming learning experiences through expert content design, development, and talent resources",
      list: [
        { text: "Custom eLearning modules" },
        { text: "Microlearning formats" },
        { text: "Interactive & Immersive Learning" },
        { text: "Learning Gamification" },
      ],
      ctaText: "Learn More",
      ctaLink: "/technology-solutions",
    },
    {
      id: 2,
      title: "Digital Learning",
      number: "02",
      image: "/home/digital_learning.webp",
      description:
        "A fully customizable learning platform that adapts to your organization’s needs.",
      ctaText: "Learn More",
      list: [
        { text: "Homegrown LMS " },
        { text: "System Integration" },
        { text: "Content Management" },
        { text: "Platform Administration" },
      ],
      ctaLink: "/digital-learning",
    },
    {
      id: 3,
      title: "Creative Services",
      number: "03",
      image: "/home/creative_services.webp",
      description:
        "Make data-driven decisions to enhance learner success through actionable insights and personalized experiences",
      list: [
        { text: "Learning Data Management" },
        { text: "Custom Dashboards" },
        { text: "AI Based Learning" },
        { text: "Performance Measurement" },
      ],
      ctaText: "Learn More",
      ctaLink: "/creative-services",
    },
  ],
};
export async function generateMetadata() {
  return await getMetadata("landing-page");
}

const KaranjiLanding = async () => {
  const data = await fetchFromStrapi("landing-page");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }

  const { hero, stats, successStories, cta1_Text, cta2_Link, cta2_Text } =
    data || {};
  console.log("hero", data);
  return (
    <div className="bg-[url('/page/home.svg')] bg-cover bg-right bg-no-repeat">
      <main className="w-full max-w-[1580px]  mx-auto px-4 lg:p-10 ">
        <HeroSection
          data={hero}
          cta1_Text={cta1_Text}
          cta2_Link={cta2_Link}
          cta2_Text={cta2_Text}
        />
        <StatsSection data={stats} />
        <div id="our-services" className="mt-16  lg:mt-0">
          <div className="block lg:hidden">
            <TechnologyServicesHome
              bgImage="/technologySolutions/gradient.svg"
              data={technologyServicesData}
            />
          </div>

          <div className="hidden lg:block">
            <LogoStoryAnimation />
          </div>
        </div>

        <SuccessStories data={successStories} />
      </main>
    </div>
  );
};

export default KaranjiLanding;
