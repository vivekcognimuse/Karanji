import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import Head from "next/head";
export const metadata = {
  title:
    "XR & Gaming Solutions | Immersive VR/AR Training & Game-Based Learning",
  description:
    "Transform operations with our XR & gaming solutions. Featuring immersive VR/AR experiences, interactive training simulations, and game-based learning for 90% retention rates.",
};
const serviceOffering = {
  id: 4,
  title: "Our XR & Gaming Offerings",
  cards: [
    {
      id: 10,
      title: "VR/AR Experience Development",
      subTitle: null,
      description: "Custom immersive experiences across platforms",
      icon: null,
    },
    {
      id: 11,
      title: "Interactive Training Simulations",
      subTitle: null,
      description: "Realistic simulations to boost skills & safety",
      icon: null,
    },
    {
      id: 12,
      title: "Game Based Learning Experiences",
      subTitle: null,
      description:
        "Enhanced learner retention through game-based eLearning modules",
      icon: null,
    },
    {
      id: 12,
      title: "XR Infrastructure & Integration",
      subTitle: null,
      description: "Seamlessly connect XR capabilities with systems",
      icon: null,
    },
  ],
};

const XRGaming = async () => {
  const data = await fetchFromStrapi("xr-gaming");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }
  console.log("XRGaming data:", data);
  const { hero, methodology, successStories } = data || {};

  return (
    <main className="w-full max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32 ">
      {" "}
      <HeroSection bgImage="/hero/XR-Gaming.webp" data={hero} />
      <div className="space-y-16 lg:space-y-32">
        <div id="xr-service-offerings">
          <ServiceOfferings
            bgImage="/service-offering/ai-advisory/default.svg"
            data={serviceOffering}
            icon={`/technologySolutions/xr-offering`}
          />
        </div>
        <Methodology data={methodology} />
        <SuccessStories data={successStories} />
      </div>
    </main>
  );
};

export default XRGaming;
