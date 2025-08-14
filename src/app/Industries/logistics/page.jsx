import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import Industrychallenge from "@/sections/Industries/IndustryChallenge";
import StrategicPriorities from "@/sections/Industries/StrategicPriorities";
import DigitalAdoption from "@/sections/Industries/DigitalAdoption";
import StrategicRoadmap from "@/sections/Industries/StrategicRoadmap";
import StrategicUseCase from "@/sections/Industries/StrategicUseCase";
const heroData = {
  title: "Driving Digital Transformation inGlobal Logistics",
  subTitle:
    "From AI-driven compliance & training software to predictive maintenance & digital twins for operations-empower your workforce & streamline logistics.",
  ctaText: "Explore the Strategic Priorities",
  ctaLink: "/industries",
  stats: [
    {
      text: "Reduction in processing time",
      number: "80%",
    },
    {
      text: "Faster technician training",
      number: "45-60%",
    },
    {
      text: "Fewer empty miles",
      number: "30%",
    },
  ],
};
const ctaData = {
  title: "Ready to lead the future of healthcare?",
  description:
    " To know more about these cases or discuss any other requirement for transformation of Healthcare ",
  PrimaryButtonText: "Please Click here",
  PrimaryButtonLink: "/",
};
const industryData = {
  sectionTitle: "Industry Challenges & Priorities",
  overviewTitle: "Overview",
  overviewDescription:
    "The $12B logistics sector is growing but challenged by operational disruptions, tech fragmentation, & evolving regulatory demands. AI-driven learning & automation, supported by training software & eLearning platforms, are key to enabling agility & workforce readiness.",
  challengesTitle: "Top Challenges",
  image: "Images/industry-vr-healthcare.jpg", // Replace with your image path
  imageAlt: "Healthcare professional using VR technology",
  challenges: [
    {
      id: 1,
      icon: "Icons/user-md.svg", // Replace with your icon path
      title: "Supply Chain Disruptions & Cost Pressures",
      description:
        "Delays from trade tensions & shortages, plus rising fuel & tech upgrade costs.",
    },
    {
      id: 2,
      icon: "Icons/microchip.svg", // Replace with your icon path
      title: "Regulatory Complexity & Sustainability Demands",
      description:
        "Global emissions goals & shifting regulations raise compliance challenges.",
    },
    {
      id: 3,
      icon: "Icons/microchip.svg", // Replace with your icon path
      title: "Workforce Shortages & Skills Gaps",
      description:
        "Limited talent & high turnover in critical roles hinder operations.",
    },
    {
      id: 4,
      icon: "Icons/hospital.svg", // Replace with your icon path
      title: "Legacy Systems & Cybersecurity Risks",
      description:
        "Outdated tech reduces visibility & increases cyberattack exposure.",
    },
  ],
};

const strategicPrioritiesData = {
  sectionTitle: "Strategic Priorities & Digital Adoption",
  sectionDescription:
    "As the global logistics sector confronts its core challenges, companies are establishing clear business priorities & accelerating digital adoption to enhance resilience & competitiveness.",
  businessPrioritiesTitle: "Business Priorities",
  topRowCards: [
    {
      id: 1,
      title: "Operational Excellence",
      subtitle:
        "Investing in infrastructure & digital platforms for automation & cost reduction.",
    },
    {
      id: 2,
      title: "Sustainability",
      subtitle:
        "Transitioning to cleaner fuels & strengthening ESG reporting capabilities.",
    },
    {
      id: 3,
      title: "Workforce Development",
      subtitle:
        "Upskilling talent using VR/AR, microlearning, & digital knowledge tools.",
    },
  ],
  bottomRowCards: [
    {
      id: 1,
      title: "Digital Transformation",
      subtitle:
        "Using AI, analytics, & digital twins to optimize operations & customer experience.",
    },
    {
      id: 2,
      title: "Cybersecurity",
      subtitle:
        "Enhancing supply chain security with zero-trust, threat detection, & compliance frameworks.",
    },
  ],
};
const digitalAdoptionData = {
  sectionTitle: "Digital Adoption",
  sectionDescription:
    "Regional digital adoption patterns reveal diverse priorities: North America & Europe lead in analytics & sustainability tech, Asia Pacific accelerates smart port & IoT adoption, while the Middle East & Africa focus on infrastructure modernization & blockchain for trade efficiency.",
  digitalCards: [
    {
      id: 1,
      title: "AI & Advanced Analytics",
      icon: "Icons/ai-analytics.svg",
      description:
        "AI streamlines operations with predictive tools & document automation.",
      hoverContent: [
        "65% of carriers use predictive maintenance",
        "40% are testing generative AI for customs documentation",
      ],
    },
    {
      id: 2,
      title: "IoT & Connected Devices",
      icon: "Icons/iot-devices.svg",
      description:
        "IoT enables real-time asset tracking & operational insights.",
      hoverContent: [
        "IoT enables real-time asset tracking & operational insights.",
        "GPS, RFID, & sensors are widely implemented",
        "Telematics supports smarter fleet management",
      ],
    },
    {
      id: 3,
      title: "Digital Twins & Simulation",
      icon: "Icons/digital-twins.svg",
      description:
        "Digital twins reduce congestion & support operational simulations.",
      hoverContent: [
        "Digital twins reduce congestion & support operational simulations.",
      ],
    },
    {
      id: 4,
      title: "Blockchain Technology",
      icon: "Icons/blockchain.svg",
      description:
        "Blockchain enhances compliance, traceability, & secure documentation.",
      hoverContent: [
        "Blockchain enhances compliance, traceability, & secure documentation.",
      ],
    },
    // Add more cards to test arrow functionality
    {
      id: 5,
      title: "Cloud Computing",
      icon: "Icons/cloud.svg",
      description: "Cloud solutions enable scalable, flexible operations.",
      hoverContent: [
        "Cloud adoption accelerates digital transformation",
        "90% of logistics companies use cloud services",
      ],
    },
  ],
};

const strategicRoadmapData = {
  sectionTitle: "Strategic StrategicRoadmap for Healthcare Transformation",
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
  useCaseCards: [
    {
      id: 1,
      icon: "Icons/vr-cardboard.svg", // Replace with your icon path
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

export default async function Logistics() {
  return (
    <div className="w-full  mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} bgImage={"/hero/Avatars.webp"} />
      <Industrychallenge data={industryData} />
      <StrategicPriorities data={strategicPrioritiesData} />
      <DigitalAdoption data={digitalAdoptionData} />
      <StrategicRoadmap data={strategicRoadmapData} />
      <StrategicUseCase data={strategicUseCaseData} />
      <CTA data={ctaData} />
    </div>
  );
}
