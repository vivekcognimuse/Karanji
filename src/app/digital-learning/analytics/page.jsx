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
import Head from "next/head";

const heroData = {
  title: "Transform Learning Outcomes with Advanced Analytics",
  subTitle:
    "Make data-driven decisions to enhance learner success through actionable insights and personalized experiences.",
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
  subTitle:
    "Learning analytics involves collecting and analyzing data about learners and their learning environments to improve outcomes.",

  tag: "Who Benefits",
  cards: [
    {
      title: "Learners",
      subTitle: "",
      description: "Get more personalized and effective learning experiences",
      featured: true,
      icon: "/Icons/BuiltGroundUp.svg",
    },
    {
      title: "Instructors",
      subTitle: "",
      description: "Can tailor content and support to each learner’s needs",
      featured: false,
      icon: "/Icons/FlexibleDeployment.svg",
    },
    {
      title: "Organizations",
      subTitle: "",
      description:
        "Gain insights to better allocate resources and reach the right audiences",
      featured: false,
      icon: "/Icons/ValuePricing.svg",
    },
  ],
};
const ctaData = {
  title: "Ready to Transform Learning Outcomes?",
  description:
    "Let our analytics experts help you enhance learning effectiveness through data-driven insights and personalized experiences.",
  PrimaryButtonText: "Schedule a Consultation", //"Take a Demo on K-nest LMS"
  PrimaryButtonLink: "/contact", //"https://knestlms.com/try-demo"
  SecondaryButtonText: null,
  SecondaryButtonLink: null,
};
const learningChallenges = {
  title: "Learning Challenges",
  subTitle: "Why Organizations Need Learning Analytics.",
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
    "These challenges directly affect learning providers, instructors and trainers, and learners-limiting the effectiveness, personalization, and outcomes of learning experiences across the board.",
};

const methodologyData = {
  title: "Our Analytics Approach",
  subTitle:
    "Turning learner data into measurable growth through personalized profiles and targeted interventions.",
  list: [
    {
      title: "Define Successful Outcomes",
      description: (
        <>
          <span className="w-full block pb-6">
            {" "}
            Success = Measurable Growth + Goal Achievement
          </span>
          <span className="w-full mt-8">
            {" "}
            We track success using clear, outcome-based metrics:
          </span>
        </>
      ),
      tags: [
        "Skill development and real-world application",
        "Career or professional advancement",
        "Performance improvement",
        "Goal achievement rates",
      ],
    },
    {
      title: "Understand What Drives Success",
      description: (
        <>
          <span className="w-full block pb-6">
            {" "}
            Success = Profile + Intervention
          </span>
          <span className="w-full mt-8"> We use objective data to define:</span>
        </>
      ),
      tags: [
        "Demographics",
        "Learning styles",
        "Prior knowledge",
        "Motivation drivers",
        "Personal goals and aspirations",
        "Content quality and relevance",
        "Engagement and participation",
        "Learning activities and paths",
        "Support mechanisms",
        "Systems for feedback and improvement",
      ],
    },
  ],
};
const analyticsData = {
  title: "Analytics Maturity Model",
  subTitle:
    "From tracking progress to predicting outcomes, and optimizing learning paths—empowering data-driven decisions at every stage.",
  stairImage: "/digital-learning/analytics/matureModal.svg", // Replace with your actual image path
  stages: [
    {
      title: "Describe",
      question: "What is happening?",
      points: [
        "Measurement of completion and engagement",
        "Data exploration and integration",
        "Multi-dimensional dashboards",
      ],
    },
    {
      title: "Diagnose",
      question: "Why is it happening?",
      points: [
        "Learner segmentation and analysis",
        "Content effectiveness assessment",
        "Causal analysis and actionable insights",
      ],
    },
    {
      title: "Predict",
      question: "What will happen?",
      points: [
        "Learning outcome forecasting",
        "Early intervention modeling",
        "Risk analysis and opportunity identification",
      ],
    },
    {
      title: "Prescribe and Optimize",
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
  title: "Key Outcomes and Deliverables",
  subTitle: "What Learning Analytics Delivers",
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
      description: "Measure of engagement and learning outcomes",
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
    "A data-driven methodology combining learner behavior, content insights, and AI for accurate success forecasting.",
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
        "No investment in proprietary software. Open-source applications and cloud access.",
      timeline: [
        {
          title: "Access",
          contentTop: "T0 + 1-2 weeks",
          divider: true,
          contentBottom:
            "All variables • Data consistency • Measure correlation • Check removal",
        },
        {
          title: "Assess",
          contentTop: "T0 + 2-3 weeks",
          divider: true,
          contentBottom: "Data distribution • Data cleaning",
        },
        {
          title: "Build/Test",
          contentTop: "T0 + 4 weeks",
          divider: true,
          contentBottom: "Data systems • Variables format & cadence",
        },
      ],
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
      title: "Monitoring and Adaptation",
      description: "Content adapts based on performance",
    },
  ],
  completion: {
    title: "COMPLETION and GROWTH",
    description: "Outcome metrics validate learning effectiveness",
  },
  entry: {
    title: "ENTRY",
    description: "Learners are evaluated at entry",
  },
};

export const metadata = {
  title:
    "Advanced Learning Analytics: Data-Driven Insights for Personalized Learning and Outcomes",
  description:
    "Transform learning outcomes with advanced analytics. Gain actionable insights, forecast learner success, and deliver personalized experiences through data-driven decision-making",
};
const ContentDesign = () => {
  return (
    <main className="w-full  max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection data={heroData} bgImage="/hero/Analytics-banner.webp" />
      <LearningChallenges data={learningChallenges} />
      <div id="analytics-service-offerings">
        <ServiceOfferings
          className="w-fit mx-auto"
          bgImage="/service-offering/digital-learning/default.svg"
          data={serviceOfferingsData}
          icon="/digital-learning/analytics/deliverableIcons/learningAnalytics"
        />
      </div>
      <Results
        data={{
          title: "The Result",
          subTitle:
            "Better learning outcomes and professional growth for everyone involved.",
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
    </main>
  );
};

export default ContentDesign;
