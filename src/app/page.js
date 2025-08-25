import HeroSection from "@/sections/home/Hero";
import StatsSection from "@/sections/home/Stats";
import SuccessStoriesSection from "@/sections/home/Successtories";
import ScrollImageSequence from "@/components/LandingAnimation";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import TechnologyServices from "@/sections/service/Service";
import ScrollVideoSequence from "@/components/LandingAnimation";
import TechnologyServicesHome from "@/sections/service/Service copy";
import LogoStoryAnimation from "@/components/LandingAnimation";
import LogoAnimation from "@/components/LogoAnimation";

const successStoriesData = {
  title: "Transforming Business Through Measurable Success",
  description:
    "Discover the significant impact of Karanji’s innovative solutions. Our metrics showcase how we drive efficiency & savings for our clients. Join us in transforming challenges into opportunities for growth.",
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
  ],
};
const technologyServicesData = {
  title: "Our Solutions",
  description:
    "Discover how Karanji's unique integration of technologies, creative services, & learning expertise creates powerful solutions greater than the sum of their parts.",
  cards: [
    {
      id: 1,
      title: "Technology Solutions",
      number: "01",

      image: "/home/technology.jpg",
      description:
        "Transforming learning experiences through expert content design, development, & talent resources",
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
        "Make data-driven decisions to enhance learner success through actionable insights & personalized experiences",
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
const KaranjiLanding = () => {
  return (
    <div className="bg-[url('/page/home.svg')] bg-cover bg-right bg-no-repeat">
      <main className="w-full max-w-[1580px]  mx-auto px-4 lg:p-10 ">
        <HeroSection />
        <StatsSection />
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
        {/* <ScrollVideoSequence /> */}
        <SuccessStories data={successStoriesData} />
      </main>
    </div>
  );
};

export default KaranjiLanding;
