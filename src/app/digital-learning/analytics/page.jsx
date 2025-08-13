import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import Results from "@/sections/digital-learning/analytics/Result";
import CTA from "@/sections/digital-learning/CTA";
import LearningChallenges from "@/sections/digital-learning/LearningChallenges";
import LMSLearning from "@/sections/digital-learning/LMSLearning";
import SwitchSection from "@/sections/digital-learning/SwitchSection";

const heroData = {
  title: "Transform Learning Outcomes with Advanced Analytics",
  subTitle:
    "Make data-driven decisions to enhance learner success through actionable insights & personalized experiences",
  linkText: "Explore Our Approach",
  linkHref: "/", // You can change this to the appropriate link for your services page
  linkIcon: "material-symbols:arrow-forward", // You can change this to the desired icon
  backgroundImage: "/path/to/your/hero-image.jpg", // Provide the background image URL
  stats: [
    {
      subText: "Personalized Learning",
    },
    {
      subText: "Proactive Learner Support",
    },
    {
      subText: "Data-Driven Decision Making",
    },
    {
      subText: "Cloud-Based Solution",
    },
  ],
};
const lmsLearningData = {
  title: "Addressing LMS Challenges with K-nest Solutions",
  description:
    "Overcome common learning management system hurdles with intuitive navigation, easy content organization, advanced assessments, and simplified user management.",
  cards: [
    {
      title: "Common LMS Challenges",
      image: null, // Replace with actual image path if available
      description: [
        "Complex navigation frustrates learners",
        "Difficult content organization",
        "Limited assessment capabilities",
        "Poor user management systems",
      ],
    },
    {
      title: "The K-nest Solution",
      image: null, // Replace with actual image path if available
      description: [
        "Guided navigation ensures smooth progression",
        "Easy-to-structure and organize content",
        "Comprehensive tools to track progress",
        "Efficient management with streamlined controls",
      ],
    },
  ],
};
const serviceOfferingsData = {
  title: "How Learning Analytics Helps",
  description:
    "Learning analytics involves collecting & analyzing data about learners & their learning environments to improve outcomes.",
  Tag: "Who Benefits",
  cards: [
    {
      title: "Learners",
      subtitle: "",
      description: "Get more personalized & effective learning experiences",
      featured: true,
      icon: "/Icons/BuiltGroundUp.svg",
    },
    {
      title: "Instructors",
      subtitle: "",
      description: "Can tailor content & support to each learner’s needs",
      featured: false,
      icon: "/Icons/FlexibleDeployment.svg",
    },
    {
      title: "Organizations",
      subtitle: "",
      description:
        "Gain insights to better allocate resources & reach the right audiences",
      featured: false,
      icon: "/Icons/ValuePricing.svg",
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
const learningChallenges = {
  title: "Learning Challenges",
  subtitle: "Why Organizations Need Learning Analytics",
  challenges: [
    {
      title: "One-Size-Fits-All Approach",
      description:
        "Learning experience not adapted to individual needs. Content created at 'average' level.",
      icon: null, // Optional SVG icon as string
    },
    {
      title: "Reactive Intervention",
      description:
        "No proactive 'nudge'-based support systems. No way to identify learners who need help.",
      icon: null,
    },
    {
      title: "Measurement Gaps",
      description:
        "Unclear metrics on learning impact. Programs designed with limited audience insights.",
      icon: null,
    },
  ],
  description:
    "These challenges directly affect learning providers, instructors & trainers, & learners-limiting the effectiveness, personalization, & outcomes of learning experiences across the board.",
};

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

const ContentDesign = () => {
  return (
    <div className="w-full  max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} />
      <LearningChallenges data={learningChallenges} />
      <ServiceOfferings data={serviceOfferingsData} />
      <LMSLearning data={lmsLearningData} />
      <Results
        data={{
          title: "The Result",
          subtitle:
            "Better learning outcomes & professional growth for everyone involved.",
          adaptiveContent: "Adaptive Content",
          personalizedLearning: "Personalized Learning",
          proactiveSupport: "Proactive Support",
        }}
      />
      <Methodology column={true} data={methodologyData} />
      <SwitchSection />
      <CTA data={ctaData} />
    </div>
  );
};

export default ContentDesign;
