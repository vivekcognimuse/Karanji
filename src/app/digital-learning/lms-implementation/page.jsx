import HeroSection from "@/sections/Advisory/Hero";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import CTA from "@/sections/digital-learning/CTA";
import LearningChallenges from "@/sections/digital-learning/LearningChallenges";
import LMSLearning from "@/sections/digital-learning/LMSLearning";
import SwitchSection from "@/sections/digital-learning/SwitchSection";
import { Tag } from "lucide-react";

const heroData = {
  title: "Elevate Your Corporate Learning with K-nest LMS",
  subTitle:
    " A fully-customizable learning platform that adapts to your organization's unique requirements",
  linkText: "Explore Our Platform",
  linkHref: "/", // You can change this to the appropriate link for your services page

  backgroundImage: "/path/to/your/hero-image.jpg", // Provide the background image URL
  stats: [
    {
      subText: "SCORM Compliance",
    },
    {
      subText: "Unlimited Admins",
    },
    {
      subText: "Multilingual Support",
    },
    {
      subText: "Single Sign-On (SSO)",
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
      subtitle: "",
      description:
        "Tailored for your needs from the very beginning, every feature is customizable.",
      featured: true,
      icon: "/digital-learning/lms-discover/1.svg",
    },
    {
      title: "Flexible Deployment",
      subtitle: "",
      description:
        "Choose between cloud-based or on-premise solutions based on your preferences.",
      featured: false,
      icon: "/digital-learning/lms-discover/2.svg",
    },
    {
      title: "Value Pricing",
      subtitle: "",
      description:
        "Affordable pay-per-user model with full customization options.",
      featured: false,
      icon: "/digital-learning/lms-discover/3.svg",
    },
    {
      title: "Integrate",
      subtitle: "",
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
  subtitle:
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
export default async function LMSImplementation() {
  return (
    <div className="w-full max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} />

      <ServiceOfferings
        data={serviceOfferingsData}
        icon="/digital-learning/lms-discover"
      />

      <LMSLearning data={lmsLearningData} />

      <LearningChallenges data={learningChallenges} />
      <SwitchSection />

      <CTA data={ctaData} />
    </div>
  );
}
