import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import IndustriesSection from "@/sections/Industries/IndustriesSection";
const heroData = {
  title: "Transform Your Industry with Us",
  subTitle:
    "From predictive maintenance to automated workflows, our AI tools help teams in Healthcare, Aviation, Logistics, & Oil & Gas work smarter, safer, & faster.",
  ctaText: "See Industry Solutions",
  ctaLink: "/industries",
};
const ctaData = {
  title: "Ready to lead the future?",
  description:
    "Let’s collaborate to bring your next industrial innovation to life with AI, XR, & digital learning ",
  PrimaryButtonText: "Schedule a Consultation",
  PrimaryButtonLink: "/",
};
const industriesData = {
  title: "Purpose — Built for Complex Industries.",
  description:
    "We partner with organizations in Healthcare, Aviation, Logistics, & Oil & Gas to solve their most pressing operational challenges from reducing downtime & paperwork to improving safety, speed, & compliance. Each solution is tailored to real-world workflows, helping teams work smarter & scale faster.",
  industries: [
    {
      title: "HealthCare",
      description: "Reimagining Healthcare",
      icon: "/Icons/Industies/fluent-mdl2_health.svg", // SVG icon path
      image: "/Industries & its pages/Landing page/Healthcare card.webp",
      details: [
        "AI-Powered Clinical Intelligence",
        "Immersive XR/VR Training Platforms",
        "Digital Learning & Patient Engagement",
      ],
      buttonText: "Learn More",
    },
    {
      title: "Aviation",
      description: "Future-ready aviation.",
      icon: "/Icons/Industies/mage_aeroplane.svg", // SVG icon path
      image: "/Industries & its pages/Landing page/Aviation card .webp",
      details: [
        "Predictive Maintenance Solutions",
        "Flight Crew Training Simulations",
        "Safety Compliance Automation",
      ],
      buttonText: "Learn More",
    },
    {
      title: "Logistics",
      description: "Precision in Every Operation",
      icon: "/Icons/Industies/streamline-ultimate_shipment-cargo-boat.svg", // SVG icon path
      image: "/Industries & its pages/Landing page/Logistics card.webp",
      details: [
        "Supply Chain Optimization",
        "Warehouse Automation",
        "Real-time Tracking & Analytics",
      ],
      buttonText: "Learn More",
    },
    {
      title: "Oil & Gas",
      description: "Driving Digital Intelligence in Energy",
      icon: "/Icons/Industies/streamline-ultimate_gas-f.svg", // SVG icon path
      image: "/Industries & its pages/Landing page/Oil and Gas card.webp",
      details: [
        "Equipment Monitoring Systems",
        "Safety Training & Compliance",
        "Operational Efficiency Tools",
      ],
      buttonText: "Learn More",
    },
  ],
};

export default async function IndustryLanding() {
  return (
    <div className="w-full  mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection
        data={heroData}
        bgImage={"/Industries & its pages/Landing page/banner.webp"}
      />
      <IndustriesSection data={industriesData} />
      <CTA data={ctaData} />
    </div>
  );
}
