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
      icon: "/icons/healthcare.svg", // SVG icon path
      image: "/industries/healthcare-stethoscope.jpg",
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
      icon: "/icons/aviation.svg", // SVG icon path
      image: "/industries/aviation-plane.jpg",
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
      icon: "/icons/logistics.svg", // SVG icon path
      image: "/industries/logistics-containers.jpg",
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
      icon: "/icons/oil-gas.svg", // SVG icon path
      image: "/industries/oil-gas-facility.jpg",
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
    <div className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} bgImage={"/hero/Avatars.webp"} />
      <IndustriesSection data={industriesData} />
      <CTA data={ctaData} />
    </div>
  );
}
