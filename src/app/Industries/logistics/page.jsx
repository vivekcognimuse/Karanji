import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import Industrychallenge from "@/sections/digital-learning/analytics/Deliverables";
import StrategicPriorities from "@/sections/Industries/StrategicPriorities";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
import StrategicUseCase from "@/sections/Industries/StrategicUseCase";
import Head from "next/head";
const heroData = {
  title: "Driving Digital Transformation inGlobal Logistics",
  subTitle:
    "From AI-driven compliance & training software to predictive maintenance & digital twins for operations-empower your workforce & streamline logistics.",
  ctaText: "Explore the Strategic Priorities",
  ctaLink: "strategic-priorities",
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
  title: "Ready to transform the future of logistics?",
  description:
    " To know more about these cases or discuss any other requirement for transformation of Logistics",
  PrimaryButtonText: "Start Your Transformation",
  PrimaryButtonLink: "/contact",
};
const industryData = {
  title: "Industry Challenges & Priorities",
  tag: "Overview",
  subTitle:
    "The $12B logistics sector is growing but challenged by operational disruptions, tech fragmentation, & evolving regulatory demands. AI-driven learning & automation, supported by training software & eLearning platforms, are key to enabling agility & workforce readiness.",
  featureHeader: "Top Challenges",
  heroImage: "/Industries & its pages/Logistics/Logistics.webp", // Replace with your image path
  features: [
    {
      icon: "/Industries & its pages/Aviation/supply-chain-management_18115730 1.svg", // Replace with your icon path
      title: "Supply Chain Disruptions & Cost Pressures",
      description:
        "Delays from trade tensions & shortages, plus rising fuel & tech upgrade costs.",
    },
    {
      icon: "/Industries & its pages/Aviation/sustainable_17002269 1.svg", // Replace with your icon path
      title: "Regulatory Complexity & Sustainability Demands",
      description:
        "Global emissions goals & shifting regulations raise compliance challenges.",
    },
    {
      icon: "/Industries & its pages/Aviation/people_13833111 1.svg", // Replace with your icon path
      title: "Workforce Shortages & Skills Gaps",
      description:
        "Limited talent & high turnover in critical roles hinder operations.",
    },
    {
      icon: "/Industries & its pages/Aviation/Cybersecurity.svg", // Replace with your icon path
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
      subTitle:
        "Investing in infrastructure & digital platforms for automation & cost reduction.",
    },
    {
      id: 2,
      title: "Sustainability",
      subTitle:
        "Transitioning to cleaner fuels & strengthening ESG reporting capabilities.",
    },
    {
      id: 3,
      title: "Workforce Development",
      subTitle:
        "Upskilling talent using VR/AR, microlearning, & digital knowledge tools.",
    },
  ],
  bottomRowCards: [
    {
      id: 1,
      title: "Digital Transformation",
      subTitle:
        "Using AI, analytics, & digital twins to optimize operations & customer experience.",
    },
    {
      id: 2,
      title: "Cybersecurity",
      subTitle:
        "Enhancing supply chain security with zero-trust, threat detection, & compliance frameworks.",
    },
  ],
};
const offering = {
  title: "Digital Adoption",
  bottomtext:
    "Regional digital adoption patterns reveal diverse priorities : North America & Europe lead in analytics & sustainability tech, Asia Pacific accelerates smart port & IoT adoption, while the Middle East & Africa focus on infrastructure modernization & blockchain for trade efficiency.",
  ctaCard: {},
  icon: "/Industries & its pages/Logistics/offering",
  cards: [
    {
      title: "AI & Advanced Analytics",
      description:
        "AI streamlines operations with predictive tools & document automation.",
      hoverContent: [
        { text: "65% of carriers use predictive maintenance" },
        { text: "40% are testing generative AI for customs documentation" },
      ],
      frontImage: "/mnt/data/0354547c-4967-4b4c-b603-4b7494b33b71.png",
      hoverImage: "/mnt/data/6398b2cb-8645-4e61-95aa-762ecd7cc6cc.png",
    },
    {
      title: "IoT & Connected Devices",
      description:
        "IoT enables real-time asset tracking & operational insights.",
      hoverContent: [
        {
          text: "IoT enables real-time asset tracking & operational insights.",
        },
        { text: "GPS, RFID, & sensors are widely implemented" },
        { text: "Telematics supports smarter fleet management" },
      ],
      frontImage: "/mnt/data/4b8b0721-8565-4e3d-a886-3f4774554843.png",
      hoverImage: "/mnt/data/18a5f56d-971b-4ca2-a716-55ba39f08209.png",
    },
    {
      title: "Digital Twins & Simulation",
      description:
        "Digital twins reduce congestion & support operational simulations.",
      hoverContent: [
        {
          text: "Digital twins reduce congestion & support operational simulations.",
        },
      ],
      frontImage: "/mnt/data/4f1c5fa3-2adf-4a3e-8499-2f8a2fa14b94.png",
      hoverImage: "/mnt/data/6398b2cb-8645-4e61-95aa-762ecd7cc6cc.png",
    },
    {
      title: "Blockchain Technology",
      description:
        "Blockchain enhances compliance, traceability, & secure documentation.",
      hoverContent: [
        {
          text: "Blockchain enhances compliance, traceability, & secure documentation.",
        },
      ],
      frontImage: "/mnt/data/6398b2cb-8645-4e61-95aa-762ecd7cc6cc.png",
      hoverImage: "/mnt/data/4f1c5fa3-2adf-4a3e-8499-2f8a2fa14b94.png",
    },
    {
      title: "Cloud Computing",
      description: "Cloud solutions enable scalable, flexible operations.",
      hoverContent: [
        { text: "Cloud adoption accelerates digital transformation" },
        { text: "90% of logistics companies use cloud services" },
      ],
      frontImage: "/mnt/data/18a5f56d-971b-4ca2-a716-55ba39f08209.png",
      hoverImage: "/mnt/data/4b8b0721-8565-4e3d-a886-3f4774554843.png",
    },
    {
      title: "Immersive Technologies",
      description: "VR/AR enhance training & operational support.",
      hoverContent: [
        { text: "VR/AR enhance training & operational support." },
        { text: "72% of firms use VR for logistics training" },
      ],
      frontImage: "/mnt/data/0354547c-4967-4b4c-b603-4b7494b33b71.png",
      hoverImage: "/mnt/data/6398b2cb-8645-4e61-95aa-762ecd7cc6cc.png",
    },
  ],
};

const strategicUseCaseData = {
  sectionTitle: "Strategic Use Cases & Implementation",
  sectionDescription:
    "AI-Powered Solutions Transforming the Logistics Industry",
  filterButtons: [
    { label: "All", active: true },
    { label: "AI Consulting & Technology Services", active: false },
    { label: "Immersive Technologies & Digital Learning", active: false },
  ],
  categoryMapping: {
    "AI Consulting & Technology Services": "AI Consulting & Tech",
    "Immersive Technologies & Digital Learning":
      "Immersive Tech & Digital Learning",
  },
  useCaseCards: [
    {
      id: 1,
      icon: "Icons/ocr-nlp.svg", // Replace with appropriate icon path
      category: "AI Consulting & Tech",
      title: "Automatic Document Verification System",
      description:
        "Reduces document errors by 95% & speeds up processing by 70% using OCR & NLP-based verification.",
    },
    {
      id: 2,
      icon: "Icons/rag-multilingual.svg", // Replace with appropriate icon path
      category: "AI Consulting & Tech",
      title: "RAG-Based Multilingual Document Access System",
      description:
        "Cuts translation costs by 90% & boosts information retrieval speed by 80% using RAG & multilingual models.",
    },
    {
      id: 3,
      icon: "Icons/ai-compliance.svg", // Replace with appropriate icon path
      category: "AI Consulting & Tech",
      title: "AI Compliance Engine for Regulatory Automation",
      description:
        "Achieves 99% accuracy in classification & reduces compliance checks time by 90%.",
    },
    {
      id: 4,
      icon: "Icons/ai-dispatch.svg", // Replace with appropriate icon path
      category: "AI Consulting & Tech",
      title: "Autonomous Dispatch System",
      description:
        "Reduces empty miles by 30% & improves on-time delivery by 25% using AI-based carrier matching.",
    },
    {
      id: 5,
      icon: "Icons/financial-operations.svg", // Replace with appropriate icon path
      category: "AI Consulting & Tech",
      title: "AI-Powered Financial Operations System",
      description:
        "Cuts payment errors by 85% & invoice processing time by 50% through AI-based reconciliation.",
    },
    {
      id: 6,
      icon: "Icons/customer-service.svg", // Replace with appropriate icon path
      category: "AI Consulting & Tech",
      title: "Intelligent Customer Service Automation",
      description:
        "Delivers 24/7 support, reduces agent workload, & improves satisfaction via AI chatbots & sentiment analysis.",
    },
    {
      id: 7,
      icon: "Icons/supplier-ecosystem.svg", // Replace with appropriate icon path
      category: "AI Consulting & Tech",
      title: "Supplier & Partner Ecosystem Collaboration",
      description:
        "Automates 80% of document exchanges & achieves 100% shipment traceability through blockchain.",
    },
    {
      id: 8,
      icon: "Icons/vr-cardboard.svg", // Replace with appropriate icon path
      category: "Immersive Tech & Digital Learning",
      title: "Maritime Training & Safety Simulation",
      description:
        "Reduces training time by up to 75% & enhances safety through VR-based emergency drills.",
    },
    {
      id: 9,
      icon: "Icons/maritime-academy.svg", // Replace with appropriate icon path
      category: "Immersive Tech & Digital Learning",
      title: "Maritime Knowledge Academy",
      description:
        "Standardizes training globally & scales learning access 24/7 via gamified e-learning.",
    },
    {
      id: 10,
      icon: "Icons/cybersecurity.svg", // Replace with appropriate icon path
      category: "Immersive Tech & Digital Learning",
      title: "Cybersecurity Awareness",
      description:
        "Improves security behavior & reduces incidents via scenario-based microlearning.",
    },
    {
      id: 11,
      icon: "Icons/sustainability.svg", // Replace with appropriate icon path
      category: "Immersive Tech & Digital Learning",
      title: "Sustainability & Compliance Training",
      description:
        "Ensures compliance & reduces risk of violations through environmental regulation training.",
    },
    {
      id: 12,
      icon: "Icons/ar-maintenance.svg", // Replace with appropriate icon path
      category: "Immersive Tech & Digital Learning",
      title: "AR-Enhanced Maintenance & Repair",
      description:
        "Reduces repair time by 30% & preserves knowledge through AR-guided procedures.",
    },
    {
      id: 13,
      icon: "Icons/digital-twin.svg", // Replace with appropriate icon path
      category: "Immersive Tech & Digital Learning",
      title: "Digital Twin Visualization for Port Operations",
      description:
        "Improves port throughput by 20% & reduces emissions through 3D visual planning tools.",
    },
  ],
};
export const metadata = {
  title:
    "Logistics Digital Transformation: AI, Predictive Maintenance & Workforce Training Solutions",
  description:
    "Drive digital transformation in logistics with AI-powered compliance, predictive maintenance, and immersive workforce training. Streamline operations, reduce costs, and enhance efficiency.",
};
export default async function Logistics() {
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection
        data={heroData}
        bgImage={"/Industries & its pages/Logistics/Logistics banner.webp"}
      />
      <Industrychallenge data={industryData} />
      <div id="strategic-priorities">
        <StrategicPriorities data={strategicPrioritiesData} />
      </div>
      <DigitalTwinOfferings
        data={offering}
        // bgImageHover="/service-offering/industry/hover.svg"
        bgImage="/service-offering/industry/default.svg"
      />
      <StrategicUseCase
        data={strategicUseCaseData}
        icon="/Industries & its pages/Logistics/usecase"
      />
      <CTA data={ctaData} />
    </main>
  );
}
