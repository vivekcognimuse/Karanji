import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import Industrychallenge from "@/sections/digital-learning/analytics/Deliverables";
import StrategicPriorities from "@/sections/Industries/StrategicPriorities";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
import StrategicUseCase from "@/sections/Industries/StrategicUseCase";
import Head from "next/head";
const heroData = {
  title: "Driving Digital Transformation in Global Logistics",
  subTitle:
    "From AI-driven compliance and training software to predictive maintenance and digital twins for operations-empower your workforce and streamline logistics.",
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
  PrimaryButtonText: "Enquire Now",
  PrimaryButtonLink: "/contact",
};
const industryData = {
  title: "Industry Challenges and Priorities",
  tag: "Overview",
  subTitle:
    "The $12B logistics sector is growing but challenged by operational disruptions, tech fragmentation, and evolving regulatory demands. AI-driven learning and automation, supported by training software and eLearning platforms, are key to enabling agility and workforce readiness.",
  featureHeader: "Top Challenges",
  heroImage: "/Industries & its pages/Logistics/Logistics.webp", // Replace with your image path
  features: [
    {
      icon: "/Industries & its pages/Aviation/supply-chain-management_18115730 1.svg", // Replace with your icon path
      title: "Supply Chain Disruptions and Cost Pressures",
      description:
        "Delays from trade tensions and shortages, plus rising fuel and tech upgrade costs.",
    },
    {
      icon: "/Industries & its pages/Aviation/sustainable_17002269 1.svg", // Replace with your icon path
      title: "Regulatory Complexity and Sustainability Demands",
      description:
        "Global emissions goals and shifting regulations raise compliance challenges.",
    },
    {
      icon: "/Industries & its pages/Aviation/people_13833111 1.svg", // Replace with your icon path
      title: "Workforce Shortages and Skills Gaps",
      description:
        "Limited talent and high turnover in critical roles hinder operations.",
    },
    {
      icon: "/Industries & its pages/Aviation/Cybersecurity.svg", // Replace with your icon path
      title: "Legacy Systems and Cybersecurity Risks",
      description:
        "Outdated tech reduces visibility and increases cyberattack exposure.",
    },
  ],
};

const strategicPrioritiesData = {
  sectionTitle: "Strategic Priorities and Digital Adoption",
  sectionDescription:
    "As the global logistics sector confronts its core challenges, companies are establishing clear business priorities and accelerating digital adoption to enhance resilience and competitiveness.",
  businessPrioritiesTitle: "Business Priorities",
  topRowCards: [
    {
      id: 1,
      title: "Operational Excellence",
      subTitle:
        "Investing in infrastructure and digital platforms for automation and cost reduction.",
    },
    {
      id: 2,
      title: "Sustainability",
      subTitle:
        "Transitioning to cleaner fuels and strengthening ESG reporting capabilities.",
    },
    {
      id: 3,
      title: "Workforce Development",
      subTitle:
        "Upskilling talent using VR/AR, microlearning, and digital knowledge tools.",
    },
  ],
  bottomRowCards: [
    {
      id: 1,
      title: "Digital Transformation",
      subTitle:
        "Using AI, analytics, and digital twins to optimize operations and customer experience.",
    },
    {
      id: 2,
      title: "Cybersecurity",
      subTitle:
        "Enhancing supply chain security with zero-trust, threat detection, and compliance frameworks.",
    },
  ],
};
const offering = {
  title: "Digital Adoption",
  bottomtext:
    "Regional digital adoption patterns reveal diverse priorities : North America and Europe lead in analytics and sustainability tech, Asia Pacific accelerates smart port and IoT adoption, while the Middle East and Africa focus on infrastructure modernization and blockchain for trade efficiency.",
  ctaCard: {},
  icon: "/Industries & its pages/Logistics/offering",
  cards: [
    {
      title: "AI and Advanced Analytics",
      description:
        "AI streamlines operations with predictive tools and document automation.",
      hoverContent: [
        { text: "65% of carriers use predictive maintenance" },
        { text: "40% are testing generative AI for customs documentation" },
      ],
      frontImage: "/gradients/Card default.svg",
      hoverImage: "/gradients/Card on hover.svg",
    },
    {
      title: "IoT and Connected Devices",
      description:
        "IoT enables real-time asset tracking and operational insights.",
      hoverContent: [
        {
          text: "IoT enables real-time asset tracking and operational insights.",
        },
        { text: "GPS, RFID, and sensors are widely implemented" },
        { text: "Telematics supports smarter fleet management" },
      ],
      frontImage: "/gradients/Card default.svg",
      hoverImage: "/gradients/Card on hover.svg",
    },
    {
      title: "Digital Twins and Simulation",
      description:
        "Digital twins reduce congestion and support operational simulations.",
      hoverContent: [
        {
          text: "Digital twins reduce congestion and support operational simulations.",
        },
      ],
      frontImage: "/gradients/Card default.svg",
      hoverImage: "/gradients/Card on hover.svg",
    },
    {
      title: "Blockchain Technology",
      description:
        "Blockchain enhances compliance, traceability, and secure documentation.",
      hoverContent: [
        {
          text: "Blockchain enhances compliance, traceability, and secure documentation.",
        },
      ],
      frontImage: "/gradients/Card default.svg",
      hoverImage: "/gradients/Card on hover.svg",
    },
    {
      title: "Cloud Computing",
      description: "Cloud solutions enable scalable, flexible operations.",
      hoverContent: [
        { text: "Cloud adoption accelerates digital transformation" },
        { text: "90% of logistics companies use cloud services" },
      ],
      frontImage: "/gradients/Card default.svg",
      hoverImage: "/gradients/Card on hover.svg",
    },
    {
      title: "Immersive Technologies",
      description: "VR/AR enhance training and operational support.",
      hoverContent: [
        { text: "VR/AR enhance training and operational support." },
        { text: "72% of firms use VR for logistics training" },
      ],
      frontImage: "/gradients/Card default.svg",
      hoverImage: "/gradients/Card on hover.svg",
    },
  ],
};

const strategicUseCaseData = {
  sectionTitle: "Strategic Use Cases and Implementation",
  sectionDescription:
    "AI-Powered Solutions Transforming the Logistics Industry",
  filterButtons: [
    { label: "All", active: true },
    { label: "AI Consulting and Technology Services", active: false },
    { label: "Immersive Technologies and Digital Learning", active: false },
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
        "Reduces document errors by 95% and speeds up processing by 70% using OCR and NLP-based verification.",
    },
    {
      id: 2,
      icon: "Icons/rag-multilingual.svg", // Replace with appropriate icon path
      category: "AI Consulting & Tech",
      title: "RAG-Based Multilingual Document Access System",
      description:
        "Cuts translation costs by 90% and boosts information retrieval speed by 80% using RAG and multilingual models.",
    },
    {
      id: 3,
      icon: "Icons/ai-compliance.svg", // Replace with appropriate icon path
      category: "AI Consulting & Tech",
      title: "AI Compliance Engine for Regulatory Automation",
      description:
        "Achieves 99% accuracy in classification and reduces compliance checks time by 90%.",
    },
    {
      id: 4,
      icon: "Icons/ai-dispatch.svg", // Replace with appropriate icon path
      category: "AI Consulting & Tech",
      title: "Autonomous Dispatch System",
      description:
        "Reduces empty miles by 30% and improves on-time delivery by 25% using AI-based carrier matching.",
    },
    {
      id: 5,
      icon: "Icons/financial-operations.svg", // Replace with appropriate icon path
      category: "AI Consulting & Tech",
      title: "AI-Powered Financial Operations System",
      description:
        "Cuts payment errors by 85% and invoice processing time by 50% through AI-based reconciliation.",
    },
    {
      id: 6,
      icon: "Icons/customer-service.svg", // Replace with appropriate icon path
      category: "AI Consulting & Tech",
      title: "Intelligent Customer Service Automation",
      description:
        "Delivers 24/7 support, reduces agent workload, and improves satisfaction via AI chatbots and sentiment analysis.",
    },
    {
      id: 7,
      icon: "Icons/supplier-ecosystem.svg", // Replace with appropriate icon path
      category: "AI Consulting & Tech",
      title: "Supplier and Partner Ecosystem Collaboration",
      description:
        "Automates 80% of document exchanges and achieves 100% shipment traceability through blockchain.",
    },
    {
      id: 8,
      icon: "Icons/vr-cardboard.svg", // Replace with appropriate icon path
      category: "Immersive Tech & Digital Learning",
      title: "Maritime Training and Safety Simulation",
      description:
        "Reduces training time by up to 75% and enhances safety through VR-based emergency drills.",
    },
    {
      id: 9,
      icon: "Icons/maritime-academy.svg", // Replace with appropriate icon path
      category: "Immersive Tech & Digital Learning",
      title: "Maritime Knowledge Academy",
      description:
        "Standardizes training globally and scales learning access 24/7 via gamified e-learning.",
    },
    {
      id: 10,
      icon: "Icons/cybersecurity.svg", // Replace with appropriate icon path
      category: "Immersive Tech & Digital Learning",
      title: "Cybersecurity Awareness",
      description:
        "Improves security behavior and reduces incidents via scenario-based microlearning.",
    },
    {
      id: 11,
      icon: "Icons/sustainability.svg", // Replace with appropriate icon path
      category: "Immersive Tech & Digital Learning",
      title: "Sustainability and Compliance Training",
      description:
        "Ensures compliance and reduces risk of violations through environmental regulation training.",
    },
    {
      id: 12,
      icon: "Icons/ar-maintenance.svg", // Replace with appropriate icon path
      category: "Immersive Tech & Digital Learning",
      title: "AR-Enhanced Maintenance and Repair",
      description:
        "Reduces repair time by 30% and preserves knowledge through AR-guided procedures.",
    },
    {
      id: 13,
      icon: "Icons/digital-twin.svg", // Replace with appropriate icon path
      category: "Immersive Tech & Digital Learning",
      title: "Digital Twin Visualization for Port Operations",
      description:
        "Improves port throughput by 20% and reduces emissions through 3D visual planning tools.",
    },
  ],
};
export const metadata = {
  title:
    "Logistics Digital Transformation: AI, Predictive Maintenance and Workforce Training Solutions",
  description:
    "Drive digital transformation in logistics with AI-powered compliance, predictive maintenance, and immersive workforce training. Streamline operations, reduce costs, and enhance efficiency.",
};
export default async function Logistics() {
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
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
        bgImage="/gradients/Card default.svg"
        bgImageHover="/gradients/Card on hover.svg"
      />
      <StrategicUseCase
        data={strategicUseCaseData}
        icon="/Industries & its pages/Logistics/usecase"
      />
      <CTA data={ctaData} />
    </main>
  );
}
