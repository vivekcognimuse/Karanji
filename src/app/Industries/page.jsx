import { draftMode } from "next/headers";
import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import IndustriesSection from "@/sections/Industries/IndustriesSection";

import { fetchFromStrapi } from "@/lib/strapi";
import { getMetadata } from "@/lib/metadata";

const cards = [
  {
    id: 33,
    title: "Oil and Gas",
    img: "/Industries & its pages/Landing page/Oil and Gas card.webp",
    subTitle: "Driving Digital Intelligence in Energy",
    hoverContent: [
      "Equipment Monitoring Systems",
      "Safety Training and Compliance",
      "Operational Efficiency Tools",
    ],
    ctaLink: "/Industries/oil-and-gas",
    icon: "/Icons/Industries/Group.svg",
  },
  {
    id: 34,
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
    id: 35,
    title: "Aviation",
    img: "/Industries & its pages/Landing page/Aviation card .webp",
    subTitle: "Future-ready Aviation",
    hoverContent: [
      "Predictive Maintenance Solutions",
      "Flight Crew Training Simulations",
      "Safety Compliance Automation",
    ],
    ctaLink: "/Industries/aviation",
    icon: "/Icons/Industries/mage_aeroplane.svg",
  },
  {
    id: 36,
    title: "Logistics",
    img: "/Industries & its pages/Landing page/Logistics card.webp",
    subTitle: "Precision in Every Operation",
    hoverContent: [
      "Supply Chain Optimization",
      "Warehouse Automation",
      "Real-time Tracking and Analytics",
    ],
    ctaLink: "/Industries/logistics",
    icon: "/Icons/Industries/streamline-ultimate_shipment-cargo-boat.svg",
  },
];
export async function generateMetadata() {
  return await getMetadata("xr-gaming");
}
export default async function IndustryLanding() {
  const { isEnabled: isPreview } = await draftMode();

  const data = await fetchFromStrapi("Industry-landing", {
    preview: isPreview,
  });
  if (!data) {
    console.error("No data object provided for aviation.");
    return null; // Or return a fallback UI component
  }
  const { heroData, industriesData, ctaData } = data || {};
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection
        data={heroData}
        bgImage="/Industries & its pages/Landing page/banner.webp"
      />
      <div className="space-y-16 lg:space-y-32">
        <div id="industries-section">
          <IndustriesSection cards={cards} data={industriesData} />
        </div>
        <CTA data={ctaData} />
      </div>
    </main>
  );
}
