import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import Industrychallenge from "@/sections/digital-learning/analytics/Deliverables";
import StrategicPriorities from "@/sections/Industries/StrategicPriorities";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
import StrategicUseCase from "@/sections/Industries/StrategicUseCase";
import Head from "next/head";
import { fetchFromStrapi } from "@/lib/strapi";

const heroData = {
  title: "Transforming Aviation Through Innovation",
  subTitle:
    "Experience how AI, immersive tech, and smart systems are reshaping aviation—boosting efficiency, enhancing passenger satisfaction, and achieving sustainability goals.",
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
    " To know more about these cases or discuss any other requirement for transformation of Aviation.",
  PrimaryButtonText: "Enquire Now",
  PrimaryButtonLink: "/contact",
  popupTitle: "To Know More",
  popupButtonText: "Enquire",
  popupSubtitle:
    "For industry-specific use cases, please fill out the form below",
};
const industryData = {
  title: "Industry Challenges and Priorities",
  tag: "Overview",
  subTitle:
    "The global aviation industry stands at a critical inflection point as it approaches $1 trillion in annual revenues and 5 billion passengers by 2025. Despite this growth trajectory, the sector faces unprecedented challenges across operations, supply chains, workforce, technology, sustainability, and regulatory compliance—all while navigating volatile economic conditions that threaten already thin profit margins.",
  featureHeader: "Top Challenges",
  heroImage: "/Industries & its pages/Aviation/Aviation image.webp", // Replace with your image path
  features: [
    {
      icon: "/Industries & its pages/Aviation/performance_9202949 1.svg", // Replace with your icon path
      title: "Economic Pressure and Operational Bottlenecks",
      description:
        "Rising fuel costs, low margins, and outdated facilities disrupt operations.",
    },
    {
      icon: "/Industries & its pages/Aviation/people_13833111 1.svg", // Replace with your icon path
      title: "Supply Chain Disruptions and Workforce Shortages",
      description:
        "Parts delays and critical workforce gaps impact production and service.",
    },
    {
      icon: "/Industries & its pages/Aviation/sustainable_17002269 1.svg", // Replace with your icon path
      title: "Sustainability and Regulatory Pressure",
      description:
        "High SAF costs and complex global regulations increase compliance burdens.",
    },
    {
      icon: "/Industries & its pages/Aviation/Cybersecurity.svg", // Replace with your icon path
      title: "Technology Gaps and Cybersecurity Risks",
      description:
        "Outdated systems and rising cyberattacks expose aviation to major risks.",
    },
  ],
};
const strategicPrioritiesData = {
  sectionTitle: "Strategic Priorities and Digital Adoption",
  sectionDescription:
    "As aviation faces growing challenges, the industry is fast-tracking digital adoption and strategic initiatives to boost resilience, efficiency, and competitiveness-centered around six key priorities.",
  businessPrioritiesTitle: "Business Priorities",
  topRowCards: [
    {
      id: 1,
      title: "Operational Excellence and Cost Management",
      subTitle:
        "AI, digital twins, and cloud tools boost uptime and cut costs in maintenance and scheduling.",
    },
    {
      id: 2,
      title: "Customer Experience and Revenue Enhancement",
      subTitle:
        "Biometrics and AI personalization improve service flow and drive ancillary revenue.",
    },
    {
      id: 3,
      title: "Sustainability and Environmental Responsibility",
      subTitle:
        "IoT and AI optimize emissions, accelerate SAF adoption, and support compliance.",
    },
  ],
  bottomRowCards: [
    {
      id: 1,
      title: "Workforce Development and Talent Management",
      subTitle:
        "VR/AR and mobile learning speed up training and preserve expert knowledge.",
    },
    {
      id: 2,
      title: "Security and Risk Management Solutions",
      subTitle:
        "AI and blockchain strengthen cybersecurity and reduce system vulnerabilities.",
    },
    {
      id: 3,
      title: "Supply Chain Resilience and Agility",
      subTitle:
        "Digital twins and analytics improve visibility, planning, and disruption response.",
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
        "Digitizing retail and operations for better revenue and experience.",

      hoverContent: [
        { text: "Moving to modern retailing platforms" },
        { text: "Focusing on CX efficiency" },
      ],
    },
    {
      title: "Airports",
      description:
        "Digitally transforming operations with AI, biometrics, and smart infrastructure.",
      hoverContent: [
        { text: "Upgrading core operational systems to boost efficiency" },
        {
          text: "RFID for streamlined security, boarding and baggage handling",
        },
      ],
    },
    {
      title: "Aircraft Manufacturers and MROs",
      description:
        "Adopting tech to boost design, maintenance, and supply chains.",
      hoverContent: [
        { text: "Digital twins and predictive maintenance" },
        { text: "AI tools and advanced analytics for improved performance" },
      ],
    },
  ],
};

const strategicUseCaseData = {
  sectionTitle: "Strategic Use Cases and Implementation",
  sectionDescription:
    "AI-Powered Solutions Transforming the Logistics Industry.",
  filterButtons: [
    { label: "All", active: true },
    { label: "AI Advisory and Implementation", active: false },
    { label: "XR and Gaming", active: false },
    { label: "Creative and Entertainment", active: false },
    { label: "Digital Learning", active: false },
  ],
  categoryMapping: {
    "AI Advisory and Implementation": "AI Advisory",
    "XR and Gaming": "XR and Gaming",
    "Creative and Entertainment": "Creative and Entertainment",
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
        "Decreases document access time by 95% and cuts translation costs by 90% with intelligent multilingual search.",
    },
    {
      id: 2,
      icon: "Icons/ocr-nlp.svg",
      category: "AI Advisory",
      title: "Unified Operational Intelligence Platform",
      description:
        "Decreases document access time by 95% and cuts translation costs by 90% with intelligent multilingual search.",
    },
    {
      id: 3,
      icon: "Icons/ocr-nlp.svg",
      category: "AI Advisory",
      title: "Advanced Aviation Cybersecurity Co-Pilot",
      description:
        "Reduces incident response time by 85% and meets 99% of regulatory standards with AI-powered threat detection.",
    },
    {
      id: 4,
      icon: "Icons/ocr-nlp.svg",
      category: "AI Advisory",
      title: "Multilingual Aviation Documentation Intelligence Platform",
      description:
        "Decreases document access time by 95% and cuts translation costs by 90% with intelligent multilingual search.",
    },
    {
      id: 5,
      icon: "Icons/ocr-nlp.svg",
      category: "AI Advisory",
      title: "Multimodal Communication Platform for Diverse Aviation Workforce",
      description:
        "Improves workforce collaboration by 95% and reduces miscommunication incidents by 65%.",
    },
    {
      id: 6,
      icon: "Icons/ocr-nlp.svg",
      category: "XR and Gaming",
      title: "Multilingual XR Airport Digital Twin",
      description:
        "Enhances operational efficiency by 20% and cuts disruptions by 35% through real-time simulation and multilingual support.",
    },
    {
      id: 7,
      icon: "Icons/ocr-nlp.svg",
      category: "XR and Gaming",
      title: "VR Maintenance Training Ecosystem",
      description:
        "Reduces training time by up to 60% and improves knowledge retention to 95% using immersive simulations.",
    },
    {
      id: 8,
      icon: "Icons/ocr-nlp.svg",
      category: "XR and Gaming",
      title: "MR Passenger Experience Platform",
      description:
        "Boosts NPS by 25 points and increases non-aero revenue by 18% using AR-based engagement and personalization.",
    },
    {
      id: 9,
      icon: "Icons/ocr-nlp.svg",
      category: "Creative and Entertainment",
      title: "Integrated Brand and Safety Experience Ecosystem",
      description:
        "Improves safety info retention by 150% and brand recall by 60% through gamified, engaging briefings.",
    },
    {
      id: 10,
      icon: "Icons/ocr-nlp.svg",
      category: "Creative and Entertainment",
      title: "Sustainability Storytelling and Metrics Platform",
      description:
        "Boosts carbon offset participation by 45% and reduces reporting time by 75% with visual storytelling tools.",
    },
    {
      id: 11,
      icon: "Icons/ocr-nlp.svg",
      category: "Creative and Entertainment",
      title: "Immersive Multi-Sensory Passenger Experience Platform",
      description:
        "Cuts travel anxiety by 40% and raises engagement by 100% with personalized digital environments.",
    },
    {
      id: 12,
      icon: "Icons/ocr-nlp.svg",
      category: "Digital Learning",
      title: "Adaptive Maintenance Training Ecosystem",
      description:
        "Reduces training costs by 40% and improves first-time quality by 30% via adaptive learning paths.",
    },
    {
      id: 13,
      icon: "Icons/ocr-nlp.svg",
      category: "Digital Learning",
      title: "Multilingual Compliance Learning Platform",
      description:
        "Increases compliance completion to 94% and reduces training time by 40% using AI and microlearning.",
    },
    {
      id: 14,
      icon: "Icons/ocr-nlp.svg",
      category: "Digital Learning",
      title: "Operational Excellence Simulation Environment",
      description:
        "Improves decision quality by 45% and cuts irregular operations recovery time by 35% with digital twin simulations.",
    },
  ],
};
export const metadata = {
  title:
    "Aviation Transformation Solutions: AI, XR and Predictive Maintenance for Airlines",
  description:
    "Transform aviation operations with AI, XR, and predictive maintenance solutions. Boost efficiency, enhance passenger experience, and achieve sustainability goals with innovative technology.",
};
export default async function Aviation() {
  const data = await fetchFromStrapi("aviation");
  if (!data) {
    console.error("No data object provided for aviation.");
    return null; // Or return a fallback UI component
  }
  const {
    heroData,
    industryData,
    strategicPrioritiesData,
    digitalOfferingsData,
    strategicUseCaseData,
    ctaData,
  } = data || {};
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
      <DigitalTwinOfferings
        data={digitalOfferingsData}
        // bgImageHover="/service-offering/industry/hover.svg"
        bgImage="/gradients/Card default.svg"
        bgImageHover="/gradients/Card on hover.svg"
      />
      <StrategicUseCase
        data={strategicUseCaseData}
        icon="/Industries & its pages/Aviation/usecase"
      />
      <CTA data={ctaData} />
    </main>
  );
}
