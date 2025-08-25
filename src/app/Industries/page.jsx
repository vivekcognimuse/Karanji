import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import IndustriesSection from "@/sections/Industries/IndustriesSection";
import Head from "next/head";
const heroData = {
  title: "Transform Your Industry with Us",
  subTitle:
    "From predictive maintenance to automated workflows, our AI tools help teams in Healthcare, Aviation, Logistics, & Oil & Gas work smarter, safer, & faster.",
  ctaText: "See Industry Solutions",
  ctaLink: "industries-section",
};
const ctaData = {
  title: "Ready to lead the future?",
  description:
    "Let’s collaborate to bring your next industrial innovation to life with AI, XR, & digital learning ",
  PrimaryButtonText: "Schedule a Consultation",
  PrimaryButtonLink: "/contact",
};
const industriesData = {
  title: "Purpose — Built for Complex Industries.",
  description:
    "We partner with organizations in Healthcare, Aviation, Logistics, & Oil & Gas to solve their most pressing operational challenges from reducing downtime & paperwork to improving safety, speed, & compliance. Each solution is tailored to real-world workflows, helping teams work smarter & scale faster.",
};
const cards = [
  {
    id: 33,
    title: "HealthCare",

    img: "/Industries & its pages/Landing page/Healthcare card.webp",

    subTitle: "Reimagining Healthcare",
    hoverContent: [
      "Digital Twin Readiness Assessment",
      "Business Case Development",
      "Roadmap Creation",
    ],
    ctaLink: "/Industries/healthcare",
    icon: "/Icons/Industries/fluent-mdl2_health.svg",
  },
  {
    id: 34,
    title: "Aviation",
    img: "/Industries & its pages/Landing page/Aviation card .webp",
    subTitle: "Future-ready aviation.",
    hoverContent: [
      "Predictive Maintenance Solutions",
      "Flight Crew Training Simulations",
      "Safety Compliance Automation",
    ],
    ctaLink: "/Industries/aviation",
    icon: "/Icons/Industries/mage_aeroplane.svg",
  },
  {
    id: 35,
    title: "Logistics",
    img: "/Industries & its pages/Landing page/Logistics card.webp",
    subTitle: "Precision in Every Operation",
    hoverContent: [
      "Supply Chain Optimization",
      "Warehouse Automation",
      "Real-time Tracking & Analytics",
    ],
    ctaLink: "/Industries/logistics",
    icon: "/Icons/Industries/streamline-ultimate_shipment-cargo-boat.svg",
  },
  {
    id: 36,
    title: "Oil & Gas",
    img: "/Industries & its pages/Landing page/Oil and Gas card.webp",
    subTitle: "Driving Digital Intelligence in Energy",
    hoverContent: [
      "Equipment Monitoring Systems",
      "Safety Training & Compliance",
      "Operational Efficiency Tools",
    ],
    ctaLink: "/Industries/oil-and-gas",
    icon: "/Icons/Industries/Group.svg",
  },
];

export default async function IndustryLanding() {
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection
        data={heroData}
        bgImage="/Industries & its pages/Landing page/banner.webp"
      />
      <div id="industries-section">
        <IndustriesSection cards={cards} data={industriesData} />
      </div>
      <CTA data={ctaData} />
    </main>
  );
}
