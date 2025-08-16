import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import Industrychallenge from "@/sections/Industries/IndustryChallenge";
import StrategicPriorities from "@/sections/Industries/StrategicPriorities";
import DigitalTransformation from "@/sections/Industries/DigitalTransformation";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import StrategicRoadmap from "@/sections/Industries/StrategicRoadmap";
import StrategicUseCase from "@/sections/Industries/StrategicUseCase";
const heroData = {
  title: "Digital Evolution in Oil & Gas",
  subTitle:
    "EAccelerating Strategic Digital Transformation to Unlock Operational Excellence, Efficiency, & Resilience Across the Energy Value Chain",
  ctaText: "Explore the Transformation Landscape",
  ctaLink: "/industries",
  stats: [
    {
      text: "Equipment Uptime",
      number: "+18%",
    },
    {
      text: "Asset Savings",
      number: "$4.2M%",
    },
    {
      text: "Faster Competency",
      number: "40%%",
    },
  ],
};
const ctaData = {
  title: "Ready to power the future of oil & gas?",
  description:
    "  To know more about these cases or discuss any other requirement for transformation of Oil & gas",
  PrimaryButtonText: "Please Click here",
  PrimaryButtonLink: "/contact",
};
const industryData = {
  sectionTitle: "Industry Challenges & Landscape",
  overviewTitle: "Overview",
  overviewDescription:
    "The oil & gas sector is undergoing rapid disruption from price volatility & environmental pressures to workforce & infrastructure challenges. To stay competitive, companies are turning to digital solutions like AI-driven maintenance, emissions tracking, & immersive training. The future of energy is data-powered, automated, & built for resilience.",
  challengesTitle: "Top Challenges",
  image: "/Industries & its pages/Oil and gas/Oil and gas image image.webp", // Replace with your image path
  imageAlt: "Oil and gas workers on site",
  challenges: [
    {
      id: 1,
      icon: "/Industries & its pages/Aviation/regulation_15546710 1.svg", // Replace with appropriate icon path
      title: "Market Dynamics",
      description:
        "Price volatility, market divergence, & supply chain pressures.",
    },
    {
      id: 2,
      icon: "/Industries & its pages/Aviation/stock-market_9610148 1.svg", // Replace with appropriate icon path
      title: "Regulatory Environment",
      description:
        "Emissions regulations, policy uncertainty, and ESG requirements.",
    },
    {
      id: 3,
      icon: "/Industries & its pages/Aviation/people_13833111 1.svg", // Replace with appropriate icon path
      title: "Workforce Challenges",
      description: "Demographic shifts, skill gaps, and safety imperatives.",
    },
    {
      id: 4,
      icon: "/Industries & its pages/Aviation/Cybersecurity.svg", // Replace with appropriate icon path
      title: "Cybersecurity Threats",
      description: "Threaten systems, requiring stronger protection.",
    },
  ],
};
const strategicPrioritiesData = {
  sectionTitle: "Our Services Portfolio",
  sectionDescription: "End-to-End Digital Solutions for the Energy Sector",
  isServicesPortfolio: true, // New flag to identify this layout
  topRowCards: [
    {
      id: 1,
      title: "AI & Analytics",
      subTitle:
        "Predictive maintenance, production optimization, & intelligent exploration solutions",
      number: "+18%",
      metric: "Equipment Uptime",
    },
    {
      id: 2,
      title: "Learning Tech",
      subTitle:
        "VR safety training, AR-assisted maintenance, & digital learning ecosystems",
      number: "40%",
      metric: "Faster Competency",
    },
    {
      id: 3,
      title: "Asset Optimization",
      subTitle:
        "Digital twins, predictive maintenance, & condition-based monitoring",
      number: "$4.2M",
      metric: "Annual Savings",
    },
  ],
  bottomRowCards: [
    {
      id: 1,
      title: "Environmental",
      subTitle:
        "Emissions monitoring, ESG analytics, & regulatory compliance platforms",
      number: "65%",
      metric: "Reporting Efficiency",
    },
    {
      id: 2,
      title: "Knowledge Management",
      subTitle:
        "Expertise capture, collaborative platforms, & knowledge transfer systems",
      number: "200+",
      metric: "Videos in 6 Months",
    },
    {
      id: 3,
      title: "Implementation",
      subTitle: "Strategy development, change management, & ROI measurement",
      number: "8-12",
      metric: "Week Implementation",
    },
  ],
};

const strategicUseCaseData = {
  sectionTitle: "Strategic Use Cases & Implementation",
  sectionDescription: "AI-Powered Solutions Transforming the Energy Industry",
  filterButtons: [
    { label: "All", active: true },
    { label: "AI Implementation", active: false },
    { label: "Immersive Technologies & Digital Learning", active: false },
  ],
  categoryMapping: {
    "AI Implementation": "AI Implementation",
    "Immersive Technologies & Digital Learning":
      "Immersive Tech & Digital Learning",
  },
  useCaseCards: [
    {
      id: 1,
      icon: "Icons/ai-icon.svg", // Replace with appropriate icon path
      category: "AI Implementation",
      title: "Predictive Maintenance for Critical Equipment",
      description:
        "Reduces downtime by 45% & maintenance costs by 30% using AI-based anomaly detection & IoT sensors.",
    },
    {
      id: 2,
      icon: "Icons/ai-icon.svg",
      category: "AI Implementation",
      title: "Production Rate Optimization",
      description:
        "Increases production by 6% & drives $3.2M in revenue annually through LSTM-based forecasting.",
    },
    {
      id: 3,
      icon: "Icons/ai-icon.svg",
      category: "AI Implementation",
      title: "Automated Seismic Interpretation",
      description:
        "Boosts mapping accuracy by 90% & reduces interpretation time by 75% using GANs & deep learning.",
    },
    {
      id: 4,
      icon: "Icons/ai-icon.svg",
      category: "AI Implementation",
      title: "Drilling Parameter Advisor",
      description:
        "Lowers drilling time by 15% through AI-driven parameter optimization using historical & real-time data.",
    },
    {
      id: 5,
      icon: "Icons/ai-icon.svg",
      category: "AI Implementation",
      title: "AI-Powered Emissions Monitoring",
      description:
        "Delivers 95% accuracy & real-time visibility using computer vision & machine learning.",
    },
    {
      id: 6,
      icon: "Icons/ai-icon.svg",
      category: "AI Implementation",
      title: "Digital Performance Support System (AI RAG Model)",
      description:
        "Reduces info retrieval time by 60% & boosts SOP usage by 300% using retrieval-augmented generation.",
    },
    {
      id: 7,
      icon: "Icons/immersive-tech-icon.svg", // Replace with appropriate icon path
      category: "Immersive Tech & Digital Learning",
      title: "VR Safety Training Simulations",
      description:
        "Increases retention by 28% & speeds competency by 40% with immersive, scenario-based simulations.",
    },
    {
      id: 8,
      icon: "Icons/immersive-tech-icon.svg",
      category: "Immersive Tech & Digital Learning",
      title: "Peer Learning Video Platform",
      description:
        "Accelerates onboarding & preserves expertise through AI-tagged training videos & avatar-based learning.",
    },
    {
      id: 9,
      icon: "Icons/immersive-tech-icon.svg",
      category: "Immersive Tech & Digital Learning",
      title: "Collaborative Virtual Design Environment",
      description:
        "Reduces design rework & speeds iteration using real-time VR collaboration & simulation tools.",
    },
    {
      id: 10,
      icon: "Icons/immersive-tech-icon.svg",
      category: "Immersive Tech & Digital Learning",
      title: "Augmented Reality Maintenance Support",
      description:
        "Cuts error rates by 60% & reduces travel by 80% with AR-based remote guidance.",
    },
  ],
};

const digitalTransformationData = {
  sectionTitle: "Digital Transformation Landscape",
  sectionSubtitle: "Transforming Oil & Gas with Smart Digital Technologies",
  digitalCards: [
    {
      id: 1,
      title: "Operational Technology",
      icon: "/Industries & its pages/Oil and gas/Increase.svg", // Replace with your icon path
      points: ["Digital Twin", "Remote Operations", "Automation"],
    },
    {
      id: 2,
      title: "Workforce Solutions",
      icon: "/Industries & its pages/Oil and gas/engagement_12182606 1.svg", // Replace with your icon path
      points: ["VR/AR Applications", "Knowledge Management", "Mobile Learning"],
    },
    {
      id: 3,
      title: "Data & Analytics",
      icon: "/Industries & its pages/Oil and gas/Increase.svg", // Replace with your icon path
      points: ["Advanced Analytics", "Machine Learning", "Edge Computing"],
    },
    {
      id: 4,
      title: "Sustainability",
      icon: "/Industries & its pages/Oil and gas/sustainable_17002269 1.svg", // Replace with your icon path
      points: ["Emissions Monitoring", "Energy Efficiency", "ESG Reporting"],
    },
  ],
};

export default async function Aviation() {
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <HeroSection
        data={heroData}
        bgImage={"/Industries & its pages/Oil and gas/Oil and gas banner.webp"}
      />
      <Industrychallenge data={industryData} />

      <DigitalTransformation data={digitalTransformationData} />
      <StrategicPriorities data={strategicPrioritiesData} />

      <StrategicUseCase data={strategicUseCaseData} />
      <CTA data={ctaData} />
    </main>
  );
}
