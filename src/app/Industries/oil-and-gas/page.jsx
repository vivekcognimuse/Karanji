import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import Industrychallenge from "@/sections/digital-learning/analytics/Deliverables";
import StrategicPriorities from "@/sections/Industries/StrategicPriorities";
import DigitalTransformation from "@/sections/Industries/DigitalTransformation";
import StrategicUseCase from "@/sections/Industries/StrategicUseCase";
import Head from "next/head";
import Deliverables from "@/sections/digital-learning/analytics/Deliverables";
const heroData = {
  title: "Digital Evolution in Oil and Gas",
  subTitle:
    "Accelerating Strategic Digital Transformation to Unlock Operational Excellence, Efficiency, and Resilience Across the Energy Value Chain.",
  ctaText: "Explore the Transformation Landscape",
  ctaLink: "digital-transformation",
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
      number: "40%",
    },
  ],
};
const ctaData = {
  title: "Ready to power the future of oil and gas?",
  description:
    "To know more about these cases or discuss any other requirement for transformation of Oil and gas",
  PrimaryButtonText: "Enquire Now",
  PrimaryButtonLink: "/contact",
};
const industryData = {
  title: "Industry Challenges and Landscape",
  tag: "Overview",
  subTitle:
    "The oil and gas sector is undergoing rapid disruption from price volatility and environmental pressures to workforce and infrastructure challenges. To stay competitive, companies are turning to digital solutions like AI-driven maintenance, emissions tracking, and immersive training. The future of energy is data-powered, automated, and built for resilience.",
  heroImage: "/Industries & its pages/Oil and gas/Oil and gas image image.webp",
  featureHeader: "Top Challenges",
  features: [
    {
      icon: "/Industries & its pages/Aviation/regulation_15546710 1.svg", // Replace with appropriate icon path
      title: "Market Dynamics",
      description:
        "Price volatility, market divergence, and supply chain pressures.",
    },
    {
      icon: "/Industries & its pages/Aviation/stock-market_9610148 1.svg", // Replace with appropriate icon path
      title: "Regulatory Environment",
      description:
        "Emissions regulations, policy uncertainty, and ESG requirements.",
    },
    {
      icon: "/Industries & its pages/Aviation/people_13833111 1.svg", // Replace with appropriate icon path
      title: "Workforce Challenges",
      description: "Demographic shifts, skill gaps, and safety imperatives.",
    },
    {
      icon: "/Industries & its pages/Aviation/Cybersecurity.svg", // Replace with appropriate icon path
      title: "Cybersecurity Threats",
      description: "Threaten systems, requiring stronger protection.",
    },
  ],
};
const strategicPrioritiesData = {
  sectionTitle: "Our Services Portfolio",
  sectionDescription: "End-to-End Digital Solutions for the Energy Sector.",
  isServicesPortfolio: true, // New flag to identify this layout
  topRowCards: [
    {
      id: 1,
      title: "AI and Analytics",
      subTitle:
        "Predictive maintenance, production optimization, and intelligent exploration solutions.",
      number: "+18%",
      metric: "Equipment Uptime",
    },
    {
      id: 2,
      title: "Learning Tech",
      subTitle:
        "VR safety training, AR-assisted maintenance, and digital learning ecosystems.",
      number: "40%",
      metric: "Faster Competency",
    },
    {
      id: 3,
      title: "Asset Optimization",
      subTitle:
        "Digital twins, predictive maintenance, and condition-based monitoring.",
      number: "$4.2M",
      metric: "Annual Savings",
    },
  ],
  bottomRowCards: [
    {
      id: 1,
      title: "Environmental",
      subTitle:
        "Emissions monitoring, ESG analytics, and regulatory compliance platforms.",
      number: "65%",
      metric: "Reporting Efficiency",
    },
    {
      id: 2,
      title: "Knowledge Management",
      subTitle:
        "Expertise capture, collaborative platforms, and knowledge transfer systems.",
      number: "200+",
      metric: "Videos in 6 Months",
    },
    {
      id: 3,
      title: "Implementation",
      subTitle: "Strategy development, change management, and ROI measurement.",
      number: "8-12",
      metric: "Week Implementation",
    },
  ],
};

const strategicUseCaseData = {
  sectionTitle: "Strategic Use Cases and Implementation",
  sectionDescription: "AI-Powered Solutions Transforming the Energy Industry.",
  filterButtons: [
    { label: "All", active: true },
    { label: "AI Implementation", active: false },
    { label: "Immersive Technologies and Digital Learning", active: false },
  ],
  categoryMapping: {
    "AI Implementation": "AI Implementation",
    "Immersive Technologies and Digital Learning":
      "Immersive Tech and Digital Learning",
  },
  useCaseCards: [
    {
      id: 1,
      icon: "Icons/ai-icon.svg", // Replace with appropriate icon path
      category: "AI Implementation",
      title: "Predictive Maintenance for Critical Equipment",
      description:
        "Reduces downtime by 45% and maintenance costs by 30% using AI-based anomaly detection and IoT sensors.",
    },
    {
      id: 2,
      icon: "Icons/ai-icon.svg",
      category: "AI Implementation",
      title: "Production Rate Optimization",
      description:
        "Increases production by 6% and drives $3.2M in revenue annually through LSTM-based forecasting.",
    },
    {
      id: 3,
      icon: "Icons/ai-icon.svg",
      category: "AI Implementation",
      title: "Automated Seismic Interpretation",
      description:
        "Boosts mapping accuracy by 90% and reduces interpretation time by 75% using GANs and deep learning.",
    },
    {
      id: 4,
      icon: "Icons/ai-icon.svg",
      category: "AI Implementation",
      title: "Drilling Parameter Advisor",
      description:
        "Lowers drilling time by 15% through AI-driven parameter optimization using historical and real-time data.",
    },
    {
      id: 5,
      icon: "Icons/ai-icon.svg",
      category: "AI Implementation",
      title: "AI-Powered Emissions Monitoring",
      description:
        "Delivers 95% accuracy and real-time visibility using computer vision and machine learning.",
    },
    {
      id: 6,
      icon: "Icons/ai-icon.svg",
      category: "AI Implementation",
      title: "Digital Performance Support System (AI RAG Model)",
      description:
        "Reduces info retrieval time by 60% and boosts SOP usage by 300% using retrieval-augmented generation.",
    },
    {
      id: 7,
      icon: "Icons/ai-icon.svg",
      category: "AI Implementation",
      title: "ESG Performance Analytics and Reporting",
      description:
        "Reduces ESG reporting time from 6 weeks to 2 days using AI-powered automation and data pipelines.",
    },
    {
      id: 8,
      icon: "Icons/immersive-tech-icon.svg", // Replace with appropriate icon path
      category: "Immersive Tech and Digital Learning",
      title: "VR Safety Training Simulations",
      description:
        "Increases retention by 28% and speeds competency by 40% with immersive, scenario-based simulations.",
    },
    {
      id: 9,
      icon: "Icons/immersive-tech-icon.svg",
      category: "Immersive Tech and Digital Learning",
      title: "Peer Learning Video Platform",
      description:
        "Accelerates onboarding and preserves expertise through AI-tagged training videos and avatar-based learning.",
    },
    {
      id: 10,
      icon: "Icons/immersive-tech-icon.svg",
      category: "Immersive Tech and Digital Learning",
      title: "Collaborative Virtual Design Environment",
      description:
        "Reduces design rework and speeds iteration using real-time VR collaboration and simulation tools.",
    },
    {
      id: 11,
      icon: "Icons/immersive-tech-icon.svg",
      category: "Immersive Tech and Digital Learning",
      title: "Augmented Reality Maintenance Support",
      description:
        "Cuts error rates by 60% and reduces travel by 80% with AR-based remote guidance.",
    },
  ],
};

const digitalTransformationData = {
  sectionTitle: "Digital Transformation Landscape",
  sectionSubtitle: "Transforming Oil and Gas with Smart Digital Technologies.",
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
      title: "Data and Analytics",
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
export const metadata = {
  title:
    "Oil and Gas Digital Transformation: AI, VR Training and Predictive Maintenance Solutions",
  description:
    "Accelerate digital transformation in Oil and Gas with AI-driven predictive maintenance, VR safety training, and digital twin solutions. Boost operational excellence, reduce costs, and enhance efficiency.",
};
export default async function Aviation() {
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection
        data={heroData}
        bgImage={"/Industries & its pages/Oil and gas/Oil and gas banner.webp"}
      />
      <div className="space-y-16 lg:space-y-32">
        <Deliverables data={industryData} />
        <div id="digital-transformation">
          <DigitalTransformation
            data={digitalTransformationData}
            bgImage="/service-offering/industry/default.svg"
          />
        </div>
        <StrategicPriorities data={strategicPrioritiesData} />
        <StrategicUseCase
          data={strategicUseCaseData}
          icon="/Industries & its pages/Oil and gas/usecase"
        />
        <CTA data={ctaData} />
      </div>
    </main>
  );
}
