import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import Deliverables from "@/sections/digital-learning/analytics/Deliverables";
import HowItWorks from "@/sections/digital-learning/analytics/HowItWorks";
import ImplementApproach from "@/sections/digital-learning/analytics/ImplementApproach";
import AnalyticsMaturityModel from "@/sections/digital-learning/analytics/MatureModal";
import Results from "@/sections/digital-learning/analytics/Result";
import CTA from "@/sections/digital-learning/CTA";
import LearningChallenges from "@/sections/digital-learning/LearningChallenges";
import LMSLearning from "@/sections/digital-learning/LMSLearning";

const heroData = {
  title: "Transform Learning Outcomes with Advanced Analytics",
  subTitle:
    "Make data-driven decisions to enhance learner success through actionable insights & personalized experiences",
  ctaText: "Explore Our Approach",
  ctaLink: "analytics-service-offerings", // You can change this to the appropriate link for your services page
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
      image: "/digital-learning/analytics/learning/1.svg", // Replace with actual image path if available
      description: [
        "Complex navigation frustrates learners",
        "Difficult content organization",
        "Limited assessment capabilities",
        "Poor user management systems",
      ],
    },
    {
      title: "The K-nest Solution",
      image: "/digital-learning/analytics/learning/1.svg", // Replace with actual image path if available
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
      subTitle: "",
      description: "Get more personalized & effective learning experiences",
      featured: true,
      icon: "/Icons/BuiltGroundUp.svg",
    },
    {
      title: "Instructors",
      subTitle: "",
      description: "Can tailor content & support to each learner’s needs",
      featured: false,
      icon: "/Icons/FlexibleDeployment.svg",
    },
    {
      title: "Organizations",
      subTitle: "",
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
  subTitle: "Why Organizations Need Learning Analytics",
  challenges: [
    {
      title: "One-Size-Fits-All Approach",
      description:
        "Learning experience not adapted to individual needs. Content created at 'average' level.",
      icon: "/digital-learning/analytics/learning/1.svg", // Optional SVG icon as string
    },
    {
      title: "Reactive Intervention",
      description:
        "No proactive 'nudge'-based support systems. No way to identify learners who need help.",
      icon: "/digital-learning/analytics/learning/2.svg",
    },
    {
      title: "Measurement Gaps",
      description:
        "Unclear metrics on learning impact. Programs designed with limited audience insights.",
      icon: "/digital-learning/analytics/learning/3.svg",
    },
  ],
  description:
    "These challenges directly affect learning providers, instructors & trainers, & learners-limiting the effectiveness, personalization, & outcomes of learning experiences across the board.",
};

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
const analyticsData = {
  title: "Analytics Maturity Model",
  subTitle:
    "From tracking progress to predicting outcomes, & optimizing learning paths—empowering data-driven decisions at every stage.",
  stairImage: "/digital-learning/analytics/matureModal.svg", // Replace with your actual image path
  stages: [
    {
      title: "Describe",
      question: "What is happening?",
      points: [
        "Measurement of completion & engagement",
        "Data exploration & integration",
        "Multi-dimensional dashboards",
      ],
    },
    {
      title: "Diagnose",
      question: "Why is it happening?",
      points: [
        "Learner segmentation & analysis",
        "Content effectiveness assessment",
        "Causal analysis & actionable insights",
      ],
    },
    {
      title: "Predict",
      question: "What will happen?",
      points: [
        "Learning outcome forecasting",
        "Early intervention modeling",
        "Risk analysis & opportunity identification",
      ],
    },
    {
      title: "Prescribe & Optimize",
      question: "What should be done?",
      points: [
        "Personalized learning paths",
        "Automated support recommendations",
        "Continuous content optimization",
      ],
    },
  ],
};
const deliverablesData = {
  heroImage: "/digital-learning/analytics/deliverables.webp", // Replace with your actual image path
  features: [
    {
      icon: "/digital-learning/analytics/deliverableIcons/1.svg", // Replace with actual icon path
      title: "Learner Success Forecasting",
      description: "Predict outcomes based on early indicators",
    },
    {
      icon: "/digital-learning/analytics/deliverableIcons/2.svg", // Replace with actual icon path
      title: "At-Risk Learner Support",
      description: "Proactive real-time intervention systems",
    },
    {
      icon: "/digital-learning/analytics/deliverableIcons/3.svg", // Replace with actual icon path
      title: "Content Effectiveness Index",
      description: "Measure of engagement & learning outcomes",
    },
    {
      icon: "/digital-learning/analytics/deliverableIcons/4.svg", // Replace with actual icon path
      title: "Audience Targeting",
      description: "Program marketing through targeted audience insights",
    },
  ],
};
const implementApproachData = {
  title: "Our Implementation Approach",
  description:
    "A data-driven methodology combining learner behavior, content insights, & AI for accurate success forecasting.",
  image: {
    src: "/digital-learning/analytics/implement.svg",
    mblSrc: "/digital-learning/analytics/implement-mbl.svg",
    alt: "Implementation Approach",
    width: 1360,
    height: 203,
  },
  sections: [
    {
      title: "Implementation Timeline",
      content:
        "No investment in proprietary software. Open-source applications & cloud access.",
    },
    {
      title: "Access",
      contentTop: "T0 + 1-2 weeks",
      divider: true,
      contentBottom:
        "All variables • Data consistency • Measure correlation • Check removal",
    },
  ],
};
const howItWorks = {
  title: "How It Works in Practice",
  subTitle: "Process flow",

  steps: [
    {
      number: "01",
      title: "Calculate Learner Success",
      description: "Personalized learning paths are created",
    },
    {
      number: "02",
      title: "Learning Path Creation",
      description: "Continuous monitoring enables timely support",
    },
    {
      number: "03",
      title: "Monitoring & Adaptation",
      description: "Content adapts based on performance",
    },
  ],
  completion: {
    title: "COMPLETION & GROWTH",
    description: "Outcome metrics validate learning effectiveness",
  },
  entry: {
    title: "ENTRY",
    description: "Learners are evaluated at entry",
  },
};
const ContentDesign = () => {
  return (
    <div className="w-full  max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} bgImage="/hero/1.Analytics banner .webp" />
      <LearningChallenges data={learningChallenges} />
      <div id="analytics-service-offerings">
        <ServiceOfferings
          data={serviceOfferingsData}
          icon="/digital-learning/analytics/deliverableIcons/learningAnalytics"
        />
      </div>
      <LMSLearning data={lmsLearningData} />
      <Results
        data={{
          title: "The Result",
          subTitle:
            "Better learning outcomes & professional growth for everyone involved.",
          adaptiveContent: "Adaptive Content",
          personalizedLearning: "Personalized Learning",
          proactiveSupport: "Proactive Support",
        }}
      />
      <Methodology column={true} data={methodologyData} />
      <AnalyticsMaturityModel data={analyticsData} />

      <ImplementApproach data={implementApproachData} />

      <Deliverables data={deliverablesData} />
      <HowItWorks data={howItWorks} />
      <CTA data={ctaData} />
    </div>
  );
};

export default ContentDesign;
