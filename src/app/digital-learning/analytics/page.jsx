import HeroSection from "@/sections/Advisory/Hero";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import CTA from "@/sections/digital-learning/CTA";
import CustomELearning from "@/sections/digital-learning/CustomELearning";
import LMSLearning from "@/sections/digital-learning/LMSLearning";
import SwitchSection from "@/sections/digital-learning/SwitchSection";

const exampleStatsCards = [
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
];

export const methodologyData = [
  {
    step: "#1",
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
    step: "#2",
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
    step: "#3",
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
];

const serviceOfferingsData = [
  {
    title: "Built Ground Up",
    subtitle: "",
    description:
      "Tailored for your needs from the very beginning, every feature is customizable.",
    featured: true,
    icon: "/Icons/BuiltGroundUp.svg",
  },
  {
    title: "Flexible Deployment",
    subtitle: "",
    description:
      "Choose between cloud-based or on-premise solutions based on your preferences.",
    featured: false,
    icon: "/Icons/FlexibleDeployment.svg",
  },
  {
    title: "Value Pricing",
    subtitle: "",
    description:
      "Affordable pay-per-user model with full customization options.",
    featured: false,
    icon: "/Icons/ValuePricing.svg",
  },
  {
    title: "Integrate",
    subtitle: "",
    description:
      "Seamlessly connect with any system, regardless of complexity or scale.",
    featured: false,
    icon: "/Icons/Integrate.svg",
  },
];
export const lmsLearningData = {
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

const ContentDesign = () => {
  return (
    <div className="w-full  max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection
        title="Transform Learning Outcomes with Advanced Analytics"
        description=" Make data-driven decisions to enhance learner success through actionable insights & personalized experiences"
        linkText="Explore Our Approach"
        statsCards={exampleStatsCards}
      />

      <LMSLearning
        cards={lmsLearningData.cards}
        description={lmsLearningData.description}
        title={lmsLearningData.title}
      />
      <CustomELearning />
      <ServiceOfferings
        title=" How Learning Analytics Helps"
        description="Learning analytics involves collecting & analyzing data about learners & their learning environments to improve outcomes."
        serviceOfferingsData={serviceOfferingsData}
      />
      <SwitchSection />
      <CTA
        title="Transform Your Corporate Learning Today"
        description="Experience the power of a fully-customizable LMS that adapts to your organization’s unique needs"
        PrimaryButtonText="Take a Demo on K-nest LMS"
        PrimaryButtonLink="https://knestlms.com/try-demo"
        SecondaryButtonText="Schedule a Consultation"
        SecondaryButtonLink="/"
      />
    </div>
  );
};

export default ContentDesign;
