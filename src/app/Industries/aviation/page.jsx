import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import Industrychallenge from "@/sections/digital-learning/analytics/Deliverables";
import StrategicPriorities from "@/sections/Industries/StrategicPriorities";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
import StrategicUseCase from "@/sections/Industries/StrategicUseCase";
import Head from "next/head";
const heroData = {
  title: "Transforming Aviation Through Innovation",
  subTitle:
    "Experience how AI, immersive tech, & smart systems are reshaping aviation—boosting efficiency, enhancing passenger satisfaction, & achieving sustainability goals.",
  ctaText: "Explore the Strategic Priorities",
  ctaLink: "strategic-priorities",
  stats: [
    {
      text: "Reduction in AOG time",
      number: "35-45%",
    },
    {
      text: "faster training using XR/VR",
      number: "45-60%",
    },
    {
      text: "fewer disruptions",
      number: "35%",
    },
  ],
};
const ctaData = {
  title: "Ready to lead the future of Aviation?",
  description:
    " To know more about these cases or discuss any other requirement for transformation of Aviation",
  PrimaryButtonText: "Start Your Transformation",
  PrimaryButtonLink: "/contact",
};
const industryData = {
  title: "Industry Challenges & Priorities",
  tag: "Overview",
  subTitle:
    "The global aviation industry stands at a critical inflection point as it approaches $1 trillion in annual revenues & 5 billion passengers by 2025. Despite this growth trajectory, the sector faces unprecedented challenges across operations, supply chains, workforce, technology, sustainability, & regulatory compliance—all while navigating volatile economic conditions that threaten already thin profit margins.",
  featureHeader: "Top Challenges",
  heroImage: "/Industries & its pages/Aviation/Aviation image.webp", // Replace with your image path
  features: [
    {
      icon: "/Industries & its pages/Aviation/performance_9202949 1.svg", // Replace with your icon path
      title: "Economic Pressure & Operational Bottlenecks",
      description:
        "Rising fuel costs, low margins, & outdated facilities disrupt operations.",
    },
    {
      icon: "/Industries & its pages/Aviation/people_13833111 1.svg", // Replace with your icon path
      title: "Supply Chain Disruptions & Workforce Shortages",
      description:
        "Parts delays & critical workforce gaps impact production & service.",
    },
    {
      icon: "/Industries & its pages/Aviation/sustainable_17002269 1.svg", // Replace with your icon path
      title: "Sustainability & Regulatory Pressure",
      description:
        "High SAF costs & complex global regulations increase compliance burdens.",
    },
    {
      icon: "/Industries & its pages/Aviation/Cybersecurity.svg", // Replace with your icon path
      title: "Technology Gaps & Cybersecurity Risks",
      description:
        "Outdated systems & rising cyberattacks expose aviation to major risks.",
    },
  ],
};
const strategicPrioritiesData = {
  sectionTitle: "Strategic Priorities & Digital Adoption",
  sectionDescription:
    "As aviation faces growing challenges, the industry is fast-tracking digital adoption & strategic initiatives to boost resilience, efficiency, & competitiveness-centered around six key priorities.",
  businessPrioritiesTitle: "Business Priorities",
  topRowCards: [
    {
      id: 1,
      title: "Operational Excellence & Cost Management",
      subTitle:
        "AI, digital twins, & cloud tools boost uptime & cut costs in maintenance & scheduling.",
    },
    {
      id: 2,
      title: "Customer Experience & Revenue Enhancement",
      subTitle:
        "Biometrics & AI personalization improve service flow & drive ancillary revenue.",
    },
    {
      id: 3,
      title: "Sustainability & Environmental Responsibility",
      subTitle:
        "IoT & AI optimize emissions, accelerate SAF adoption, & support compliance.",
    },
  ],
  bottomRowCards: [
    {
      id: 1,
      title: "Workforce Development & Talent Management",
      subTitle:
        "VR/AR & mobile learning speed up training & preserve expert knowledge.",
    },
    {
      id: 2,
      title: "Security & Risk Management Solutions",
      subTitle:
        "AI & blockchain strengthen cybersecurity & reduce system vulnerabilities.",
    },
    {
      id: 3,
      title: "Supply Chain Resilience & Agility",
      subTitle:
        "Digital twins & analytics improve visibility, planning, & disruption response.",
    },
  ],
};
const digitalOfferingsData = {
  title: "Digital Adoption",
  icon: "/Industries & its pages/Aviation/offering",
  cards: [
    {
      title: "Airlines",

      description:
        "Digitizing retail & operations for better revenue & experience.",

      hoverContent: [
        { text: "Moving to modern retailing platforms" },
        { text: "Focusing on CX efficiency" },
      ],
    },
    {
      title: "Airports",
      description:
        "Digitally transforming operations with AI, biometrics, & smart infrastructure.",
      hoverContent: [
        { text: "Upgrading core operational systems to boost efficiency" },
        { text: "RFID for streamlined security, boarding & baggage handling" },
      ],
    },
    {
      title: "Aircraft Manufacturers & MROs",
      description:
        "Adopting tech to boost design, maintenance, & supply chains.",
      hoverContent: [
        { text: "Digital twins & predictive maintenance" },
        { text: "AI tools & advanced analytics for improved performance" },
      ],
    },
  ],
};

const strategicUseCaseData = {
  sectionTitle: "Strategic Use Cases & Implementation",
  sectionDescription:
    "AI-Powered Solutions Transforming the Logistics Industry",
  filterButtons: [
    { label: "All", active: true },
    { label: "AI Advisory & Implementation", active: false },
    { label: "XR & Gaming", active: false },
    { label: "Creative & Entertainment", active: false },
    { label: "Digital Learning", active: false },
  ],
  categoryMapping: {
    "AI Advisory & Implementation": "AI Advisory",
    "XR & Gaming": "XR & Gaming",
    "Creative & Entertainment": "Creative & Entertainment",
    "Digital Learning": "Digital Learning",
  },
  useCaseCards: [
    {
      id: 1,
      icon: "Icons/ocr-nlp.svg", // Replace with appropriate icon path
      category: "AI Advisory",
      title:
        "Predictive Supply Chain Intelligence Platform with RAG Integration",
      description:
        "Decreases document access time by 95% & cuts translation costs by 90% with intelligent multilingual search.",
    },
    {
      id: 2,
      icon: "Icons/ocr-nlp.svg",
      category: "AI Advisory",
      title: "Unified Operational Intelligence Platform",
      description:
        "Decreases document access time by 95% & cuts translation costs by 90% with intelligent multilingual search.",
    },
    {
      id: 3,
      icon: "Icons/ocr-nlp.svg",
      category: "AI Advisory",
      title: "Advanced Aviation Cybersecurity Co-Pilot",
      description:
        "Reduces incident response time by 85% & meets 99% of regulatory standards with AI-powered threat detection.",
    },
    {
      id: 4,
      icon: "Icons/ocr-nlp.svg",
      category: "AI Advisory",
      title: "Multilingual Aviation Documentation Intelligence Platform",
      description:
        "Decreases document access time by 95% & cuts translation costs by 90% with intelligent multilingual search.",
    },
    {
      id: 5,
      icon: "Icons/ocr-nlp.svg",
      category: "AI Advisory",
      title: "Multimodal Communication Platform for Diverse Aviation Workforce",
      description:
        "Improves workforce collaboration by 95% & reduces miscommunication incidents by 65%.",
    },
    {
      id: 6,
      icon: "Icons/ocr-nlp.svg",
      category: "XR & Gaming",
      title: "Multilingual XR Airport Digital Twin",
      description:
        "Enhances operational efficiency by 20% & cuts disruptions by 35% through real-time simulation & multilingual support.",
    },
    {
      id: 7,
      icon: "Icons/ocr-nlp.svg",
      category: "XR & Gaming",
      title: "VR Maintenance Training Ecosystem",
      description:
        "Reduces training time by up to 60% & improves knowledge retention to 95% using immersive simulations.",
    },
    {
      id: 8,
      icon: "Icons/ocr-nlp.svg",
      category: "XR & Gaming",
      title: "MR Passenger Experience Platform",
      description:
        "Boosts NPS by 25 points & increases non-aero revenue by 18% using AR-based engagement & personalization.",
    },
    {
      id: 9,
      icon: "Icons/ocr-nlp.svg",
      category: "Creative & Entertainment",
      title: "Integrated Brand & Safety Experience Ecosystem",
      description:
        "Improves safety info retention by 150% & brand recall by 60% through gamified, engaging briefings.",
    },
    {
      id: 10,
      icon: "Icons/ocr-nlp.svg",
      category: "Creative & Entertainment",
      title: "Sustainability Storytelling & Metrics Platform",
      description:
        "Boosts carbon offset participation by 45% & reduces reporting time by 75% with visual storytelling tools.",
    },
    {
      id: 11,
      icon: "Icons/ocr-nlp.svg",
      category: "Creative & Entertainment",
      title: "Immersive Multi-Sensory Passenger Experience Platform",
      description:
        "Cuts travel anxiety by 40% & raises engagement by 100% with personalized digital environments.",
    },
    {
      id: 12,
      icon: "Icons/ocr-nlp.svg",
      category: "Digital Learning",
      title: "Adaptive Maintenance Training Ecosystem",
      description:
        "Reduces training costs by 40% & improves first-time quality by 30% via adaptive learning paths.",
    },
    {
      id: 13,
      icon: "Icons/ocr-nlp.svg",
      category: "Digital Learning",
      title: "Multilingual Compliance Learning Platform",
      description:
        "Increases compliance completion to 94% & reduces training time by 40% using AI & microlearning.",
    },
    {
      id: 14,
      icon: "Icons/ocr-nlp.svg",
      category: "Digital Learning",
      title: "Operational Excellence Simulation Environment",
      description:
        "Improves decision quality by 45% & cuts irregular operations recovery time by 35% with digital twin simulations.",
    },
  ],
};
export const metadata = {
  title:
    "Aviation Transformation Solutions: AI, XR & Predictive Maintenance for Airlines",
  description:
    "Transform aviation operations with AI, XR, and predictive maintenance solutions. Boost efficiency, enhance passenger experience, and achieve sustainability goals with innovative technology.",
};
export default async function Aviation() {
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection
        data={heroData}
        bgImage={"/Industries & its pages/Aviation/aviation banner.webp"}
      />
      <Industrychallenge data={industryData} />
      <div id="strategic-priorities">
        <StrategicPriorities data={strategicPrioritiesData} />
      </div>
      <DigitalTwinOfferings data={digitalOfferingsData} />
      <StrategicUseCase
        data={strategicUseCaseData}
        icon="/Industries & its pages/Aviation/usecase"
      />
      <CTA data={ctaData} />
    </main>
  );
}
