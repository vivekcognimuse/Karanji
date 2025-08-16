import HeroSection from "@/sections/Advisory/Hero";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import CTA from "@/sections/digital-learning/CTA";
import LearningChallenges from "@/sections/digital-learning/LearningChallenges";
import LMSLearning from "@/sections/digital-learning/LMSLearning";
import SwitchSection from "@/sections/digital-learning/SwitchSection";
import { Tag } from "lucide-react";

const heroData = {
  title: "Elevate Your Corporate Learning with K-nest LMS",
  subTitle:
    " A fully-customizable learning platform that adapts to your organization's unique requirements",
  ctaText: "Explore Our Platform",
  ctaLink: "lms-services", // You can change this to the appropriate link for your services page

  backgroundImage: "/path/to/your/hero-image.jpg", // Provide the background image URL
  stats: [
    {
      text: "SCORM Compliance",
    },
    {
      text: "Unlimited Admins",
    },
    {
      text: "Multilingual Support",
    },
    {
      text: "Single Sign-On (SSO)",
    },
  ],
};
const serviceOfferingsData = {
  title: "Discover the Benefits of K-nest LMS",
  description:
    "Learning analytics involves collecting & analyzing data about learners & their learning environments to improve outcomes.",
  Tag: "Who Benefits",
  cards: [
    {
      title: "Built Ground Up",
      subTitle: "",
      description:
        "Tailored for your needs from the very beginning, every feature is customizable.",
      featured: true,
      icon: "/digital-learning/lms-discover/1.svg",
    },
    {
      title: "Flexible Deployment",
      subTitle: "",
      description:
        "Choose between cloud-based or on-premise solutions based on your preferences.",
      featured: false,
      icon: "/digital-learning/lms-discover/2.svg",
    },
    {
      title: "Value Pricing",
      subTitle: "",
      description:
        "Affordable pay-per-user model with full customization options.",
      featured: false,
      icon: "/digital-learning/lms-discover/3.svg",
    },
    {
      title: "Integrate",
      subTitle: "",
      description:
        "Seamlessly connect with any system, regardless of complexity or scale.",
      featured: false,
      icon: "/digital-learning/lms-discover/4.svg",
    },
  ],
};
const ctaData = {
  title: "Transform Your Corporate Learning Today",
  description:
    "Experience the power of a fully-customizable LMS that adapts to your organization’s unique needs",
  PrimaryButtonText: "Take a Demo on K-nest LMS",
  PrimaryButtonLink: "https://knestlms.com/try-demo",
  SecondaryButtonText: "Schedule a Consultation",
  SecondaryButtonLink: "/",
};
const lmsLearningData = {
  title: "Addressing LMS Challenges with K-nest Solutions",
  description:
    "Overcome common learning management system hurdles with intuitive navigation, easy content organization, advanced assessments, and simplified user management.",
  cards: [
    {
      title: "Common LMS Challenges",
      image: "/digital-learning/lms-challenges/1.svg",
      description: [
        "Complex navigation frustrates learners",
        "Difficult content organization",
        "Limited assessment capabilities",
        "Poor user management systems",
      ],
    },
    {
      title: "The K-nest Solution",
      image: "/digital-learning/lms-challenges/2.svg",
      description: [
        "Guided navigation ensures smooth progression",
        "Easy-to-structure and organize content",
        "Comprehensive tools to track progress",
        "Efficient management with streamlined controls",
      ],
    },
  ],
};
const learningChallenges = {
  title: "A Comprehensive Learning Platform",
  subTitle:
    " K-nest LMS offers everything you need to create, deliver, & measure effective learning experiences.",
  challenges: [
    {
      title: "Learning Experience",
      description:
        "Engaging, intuitive interfaces for seamless learning journeys.",
      icon: "/digital-learning/lms-learning/1.svg", // Optional SVG icon as string
    },
    {
      title: "Content Management",
      description:
        "Powerful tools to organize & deliver diverse learning materials",
      icon: "/digital-learning/lms-learning/2.svg", // Optional SVG icon as string
    },
    {
      title: "Administration & Analytics",
      description:
        "Robust backend systems for management, tracking, & optimization.",
      icon: "/digital-learning/lms-learning/3.svg",
    },
  ],
};
const switchSectionData = {
  tabs: [
    "Learning Experience",
    "Content Management",
    "Administration & Reporting",
  ],
  content: {
    "Learning Experience": {
      sections: [
        {
          title: "Course Navigation",
          image:
            "/digital-learning/switchSection/Learning experience/Course Navigation.webp",
          content:
            "With K-nest LMS, navigating through training content is easy & effortless, providing a seamless learning experience.",
          tags: [
            "CYU quizzes for comprehension",
            "Access Active & Completed courses",
          ],
        },
        {
          title: "Gamification & Engagement",
          image:
            "/digital-learning/switchSection/Learning experience/Gamification & Engagement (1).webp",
          content:
            "Gamification & leaderboards inspire achievement & healthy competition, motivating learners to perform their best",
          tags: [
            "Custom badges",
            "Leaderboards & points",
            "Social learning tools",
          ],
        },
        {
          title: "Mobile Learning",
          image:
            "/digital-learning/switchSection/Learning experience/Mobile Learning (1).webp",
          content:
            "The K-nest MobiTute Mobile App, you can learn anytime & anywhere, putting education right in the palm of your hand",
          tags: [
            "Offline access",
            "Mobile assessments",
            "Cross-device compatibility",
          ],
        },
      ],
    },
    "Content Management": {
      sections: [
        {
          title: "Course Structure",
          image:
            "/digital-learning/switchSection/Content Management/Course Structure.webp",
          content:
            "Organize & structure your courses with an intuitive hierarchy, supports various file types including SCORM for easy management.",
          tags: ["Hierarchical structure", "SCORM support"],
        },
        {
          title: "Assessment Tools",
          image:
            "/digital-learning/switchSection/Content Management/Assessment Tools.webp",
          content:
            "Track learner progress with built-in assessments, tailored question difficulty, & precise grading, providing valuable insights, reports.",
          tags: ["Built-in assessments", "Coaching reports", "Precise grading"],
        },
        {
          title: "Certification",
          image:
            "/digital-learning/switchSection/Content Management/Certification.webp",
          content:
            "Celebrate learner achievements with customizable certificates & badges, all featuring your company’s branding & detailed grades",
          tags: ["Custom certificates", "Badges", "Grades", "Credentials"],
        },
      ],
    },
    "Administration & Reporting": {
      sections: [
        {
          title: "User Management",
          image:
            "/digital-learning/switchSection/Administration and supporting/User Management.png",
          content:
            "Manage users & groups easily with bulk operations & HRMS integration, including single sign-on for seamless access.",
          tags: [
            "Effortless user creation",
            "Bulk operations",
            "Single sign-on",
          ],
        },
        {
          title: "Reporting & Analytics",
          image:
            "/digital-learning/switchSection/Administration and supporting/Reporting & Analytics.webp",
          content:
            "Get valuable insights into your training efforts with performance tracking, activity monitoring, & customizable reports.",
          tags: [
            "Performance tracking",
            "Activity monitoring",
            "Exportable reports",
          ],
        },
        {
          title: "System Administration",
          image:
            "/digital-learning/switchSection/Administration and supporting/System Administration.png",
          content:
            "Take full control of your training environment with reusable course components, bulk assessments, & automated reminders.",
          tags: [
            "Reusable components",
            "Automated notifications",
            "Bulk assessments",
          ],
        },
      ],
    },
  },
};
const successStoriesData = {
  title: "LMS Implementation Success Stories",
  description:
    "Explore how our LMS platforms streamline learning, enhance engagement, and deliver measurable outcomes across industries. Discover success stories of digital transformation in education and training.",
  cards: [
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

export default async function LMSImplementation() {
  return (
    <div className="w-full max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} bgImage="/hero/1.LMS banner.webp" />
      <div id="lms-services">
        <ServiceOfferings
          data={serviceOfferingsData}
          icon="/digital-learning/lms-discover"
        />
      </div>

      <LMSLearning data={lmsLearningData} />

      <LearningChallenges data={learningChallenges} />
      <SwitchSection data={switchSectionData} />
      <SuccessStories data={successStoriesData} />
      <CTA data={ctaData} />
    </div>
  );
}
