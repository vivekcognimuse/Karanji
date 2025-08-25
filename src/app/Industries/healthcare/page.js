import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import Industrychallenge from "@/sections/digital-learning/analytics/Deliverables";
import StrategicPriorities from "@/sections/Industries/StrategicPriorities";
import DigitalTransformation from "@/sections/Industries/DigitalTransformation";
import StrategicRoadmap from "@/sections/Industries/StrategicRoadmap";
import StrategicUseCase from "@/sections/Industries/StrategicUseCase";
import Methodology from "@/sections/Advisory/Methodology";
import Head from "next/head";
const heroData = {
  title: "Healthcare Transformation Solutions",
  subTitle:
    "Transforming healthcare with AI, XR, & Digital Learning to solve workforce gaps, control costs, & boost patient engagement through immersive, intelligent, & scalable solutions.",
  ctaText: "Explore the Transformation Landscape",
  ctaLink: "digital-transformation-landscape",
  stats: [
    {
      text: "Executives Prioritize AI",
      number: "77%",
    },
    {
      text: "Market Growth by 2032",
      number: "46B",
    },
    {
      text: "Worker Shortage by 2028",
      number: "100K+",
    },
    {
      text: "Market Growth by 2032",
      number: "68%",
    },
  ],
};
const ctaData = {
  title: "Ready to lead the future of healthcare?",
  description:
    " To know more about these cases or discuss any other requirement for transformation of Healthcare ",
  PrimaryButtonText: "Please Click here",
  PrimaryButtonLink: "/contact",
};
const industryData = {
  title: "Industry Challenges & Priorities",
  tag: "Overview",
  subTitle:
    "The healthcare industry is evolving through AI, XR, & digital learning – driving smarter care, cost efficiency, and better patient engagement. Amid workforce & tech challenges, digital solutions empower providers to innovate and scale resiliently.",
  featureHeader: "Critical Challenges",
  heroImage: "/Industries & its pages/Healthcare/Healthcare image.webp",
  features: [
    {
      icon: "/Industries & its pages/Healthcare/3.svg",
      title: "Workforce Crisis",
      description:
        "100K+ critical worker shortage by 2028, 50% burnout rate persists.",
    },
    {
      icon: "/Industries & its pages/Healthcare/5.svg",
      title: "Financial Pressure",
      description:
        "8% cost increases, 2% operating margins, $100B underpayment gap.",
    },
    {
      icon: "/Industries & its pages/Healthcare/7.svg", // Replace with your icon path
      title: "Technology Gaps",
      description:
        "180+ ransomware attacks, 137TB daily data, workflow inefficiencies.",
    },
    {
      icon: "/Industries & its pages/Healthcare/4.svg", // Replace with your icon path
      title: "Access Barriers",
      description:
        "26-day wait times, 4 in 10 can't afford care, cost-driven skipping.",
    },
  ],
};

const strategicPrioritiesData = {
  businessPrioritiesTitle: "Strategic Priorities 2025",
  topRowCards: [
    {
      id: 1,
      value: "65%",
      title: "Revenue Growth",
      subTitle: "of executives' top priority",
    },
    {
      id: 2,
      value: "55%",
      title: "Consumer Experience",
      subTitle: "of executives' top priority",
    },
    {
      id: 3,
      value: "55%",
      title: "AI & Technology",
      subTitle: "priority ranking",
    },
  ],
  bottomRowCards: [
    {
      id: 1,
      value: "70%",
      title: "Workforce Development",
      subTitle: "Critical retention, training focus",
    },
    {
      id: 2,
      value: "60%",
      title: "Cybersecurity",
      subTitle: "prioritizing enhancement",
    },
  ],
};
const digitalTransformationData = {
  sectionTitle: "Digital Transformation Landscape",
  sectionSubtitle: "Empowering Healthcare Through Smart Technologies",
  digitalCards: [
    {
      id: 1,
      title: "AI Leadership",
      icon: "/Industries & its pages/Healthcare/Ai.svg", // Replace with your icon path
      points: [
        "77% of leaders prioritize AI",
        "73% plan to use Generative AI",
        "Market growth $4B to $46B",
      ],
    },
    {
      id: 2,
      title: "XR/VR Revolution",
      icon: "/Industries & its pages/Healthcare/vr-glasses_3646958 1.svg", // Replace with your icon path
      points: [
        "68% medical schools use VR",
        "71% doctors prefer VR training",
        "84% believe positive impact",
      ],
    },
    {
      id: 3,
      title: "Digital Learning",
      icon: "/Industries & its pages/Healthcare/online-learning_18510398 1.svg", // Replace with your icon path
      points: [
        "Remote Acceleration",
        "AI personalizes training paths",
        "Enhance learning engagement",
      ],
    },
    {
      id: 4,
      title: "Patient Centric Care",
      icon: "/Industries & its pages/Healthcare/target-user_16897971 1.svg", // Replace with your icon path
      points: [
        "Digital front doors",
        "$265B home care by 2025",
        "Boost patient engagement",
      ],
    },
  ],
};
const strategicRoadmapData = {
  sectionTitle: "Strategic Roadmap for Healthcare Transformation",
  sectionDescription:
    "Based on industry challenges & proven use cases, here's a clear action plan for entering & growing in the healthcare market:",
  roadmapData: [
    {
      title: "Immediate Priorities",
      timeframe: "(0–6 months)",
      intro: "Focus on quick wins & workforce gaps:",
      points: [
        "VR surgical training platforms",
        "AI services for revenue cycle optimization",
        "Patient education content",
      ],
      note: "Builds early success & market trust",
    },
    {
      title: "Medium–Term Priorities",
      timeframe: "(6–18 months)",
      intro: "Exp& into broader solutions:",
      points: [
        "Learning management systems (LMS)",
        "Clinical decision support AI",
        "Patient engagement services",
      ],
      note: "Deepens offerings & strengthens client ties",
    },
    {
      title: "Long–Term Priorities",
      timeframe: "(18+ months)",
      intro: "Aim for market leadership:",
      points: [
        "Fully integrated transformation platforms",
        "Advanced VR therapy",
        "Scalable workforce development",
      ],
      note: "Positions as a strategic healthcare partner",
    },
  ],
};

const strategicUseCaseData = {
  sectionTitle: "Strategic Use Cases & Implementation",
  sectionDescription:
    "12 validated opportunities with proven market demand & clear ROI pathways",
  filterButtons: [
    { label: "All", active: true },
    { label: "XR & Gaming", active: false },
    { label: "AI Advisory & Implementation", active: false },
    { label: "Creative & Entertainment", active: false },
    { label: "Digital Learning", active: false },
  ],
  categoryMapping: {
    "XR & Gaming": "XR & Gaming",
    "AI Advisory & Implementation": "AI Advisory",
    "Creative & Entertainment": "Creative & Entertainment",
    "Digital Learning": "Digital Learning",
  },
  useCaseCards: [
    {
      id: 1,
      icon: "/Icons/_x34_7_Maximize.svg", // Replace with your icon path
      category: "XR & Gaming",
      title: "Surgical Training Platform",
      description:
        "Critical physician shortage (37K–124K by 2034) with limited surgical training opportunities",
      duration: "12–18 months",
      complexity: "Medium Complexity",
    },
    {
      id: 2,
      icon: "Icons/notes-medical.svg", // Replace with your icon path
      category: "XR & Gaming",
      title: "Patient Education VR",
      description:
        "4 in 10 patients face affordability & understanding gaps: poor treatment compliance",
      duration: "12–18 months",
      complexity: "Low Complexity",
    },
    {
      id: 3,
      icon: "Icons/laptop-medical.svg", // Replace with your icon path
      category: "XR & Gaming",
      title: "Remote Consultation Platform",
      description:
        "Specialist access gaps in rural/underserved areas; $265B shifts to home-based care",
      duration: "18–24 months",
      complexity: "High Complexity",
    },
    {
      id: 4,
      icon: "Icons/microchip.svg", // Replace with your icon path
      category: "AI Advisory",
      title: "AI Readiness Assessment",
      description:
        "77% prioritize AI but lack a strategic framework for effective, scalable implementation",
      duration: "12–18 months",
      complexity: "Medium Complexity",
    },
    {
      id: 5,
      icon: "Icons/money-bill-wave.svg", // Replace with your icon path
      category: "AI Advisory",
      title: "Revenue Cycle Optimization",
      description:
        "15 cents lost per dollar; current systems lack predictive AI for denial prevention & efficiency",
      duration: "6–12 months",
      complexity: "Medium Complexity",
    },
    {
      id: 6,
      icon: "Icons/user-md.svg", // Replace with your icon path
      category: "AI Advisory",
      title: "Clinical Decision Support",
      description:
        "Medical decisions suffer without real-time AI to improve safety, accuracy, & diagnostic confidence.",
      duration: "12–18 months",
      complexity: "High Complexity",
    },
    {
      id: 7,
      icon: "Icons/book-medical.svg", // Replace with your icon path
      category: "Creative & Entertainment",
      title: "Patient Education Content",
      description:
        "Low health literacy persists; providers lack customizable, multilingual tools for clear patient communication.",
      duration: "12–18 months",
      complexity: "Low Complexity",
    },
    {
      id: 8,
      icon: "Icons/microchip.svg", // Replace with your icon path
      category: "Creative & Entertainment",
      title: "Healthcare Marketing",
      description:
        "Organizations struggle to differentiate; authentic, culturally resonant storytelling boosts trust & community engagement.",
      duration: "6–12 months",
      complexity: "Medium Complexity",
    },
    {
      id: 9,
      icon: "Icons/user-md.svg", // Replace with your icon path
      category: "Creative & Entertainment",
      title: "Medical Training Content Production",
      description:
        "Healthcare workers lack effective training content tailored to learning styles, specialists, & competency needs.",
      duration: "12–18 months",
      complexity: "High Complexity",
    },
    {
      id: 10,
      icon: "Icons/laptop-medical.svg", // Replace with your icon path
      category: "Digital Learning",
      title: "Healthcare LMS",
      description:
        "Fragmented training programs lack robust LMS tools for workforce & competency tracking.",
      duration: "12–18 months",
      complexity: "Medium Complexity",
    },
    {
      id: 11,
      icon: "Icons/gamepad.svg", // Replace with your icon path
      category: "Creative & Entertainment",
      title: "Gamified Learning",
      description:
        "Traditional training underperforms; gamified learning boosts engagement, retention, & clinical outcomes.",
      duration: "12–18 months",
      complexity: "Medium Complexity",
    },
    {
      id: 12,
      icon: "Icons/vr-cardboard.svg", // Replace with your icon path
      category: "Creative & Entertainment",
      title: "Virtual Skills Laboratory",
      description:
        "Simulation access is limited; virtual labs deliver scalable, safe, remote procedural & patient training.",
      duration: "18–24 months",
      complexity: "High Complexity",
    },
  ],
};
const strategicFramework = {
  isStepHidden: true,
  title: "Strategic Transformation Framework",
  subTitle:
    "A strategic framework driving innovation, efficiency, & resilience across care delivery, workforce, & operations.",
  list: [
    {
      title: "Tech-First",
      description: "AI, VR/AR, digital platforms",
    },
    {
      title: "Workforce Augmentation",
      description: "AI workflows, remote learning",
    },
    {
      title: "Patient-Centric",
      description: "Digital front doors, home-based care ($265B by 2025)",
    },
    {
      title: "Operational Excellence",
      description: "Cost control, security, quality systems",
    },
    {
      title: "Regulatory Adaptation",
      description: "Compliance automation, value-based care models",
    },
  ],
};
const metadata = {
  title:
    "Healthcare Transformation Solutions: AI, XR & Digital Learning for Modern Healthcare",
  description:
  "Transform healthcare with AI, XR, and digital learning solutions. Address workforce gaps, reduce costs, and enhance patient engagement through immersive and intelligent technologies.",
};
export default async function HealthCare() {
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
       <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* You can add more meta tags if needed */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <HeroSection
        data={heroData}
        bgImage={"/Industries & its pages/Healthcare/Healthcare banner.webp"}
      />
      <Industrychallenge data={industryData} />
      <StrategicPriorities data={strategicPrioritiesData} />
      <div id="digital-transformation-landscape">
        <DigitalTransformation data={digitalTransformationData} />
      </div>
      <Methodology data={strategicFramework} />
      <StrategicRoadmap data={strategicRoadmapData} />
      <StrategicUseCase
        data={strategicUseCaseData}
        icon="/Industries & its pages/Healthcare/usecase"
      />
      <CTA data={ctaData} />
    </main>
  );
}
