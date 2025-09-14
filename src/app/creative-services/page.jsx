import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import EntertainmentServices from "@/sections/entertainment/EntertainmentService";
import TechnologyServices from "@/sections/service/Service";

import React from "react";

export const metadata = {
  title:
    "Entertainment Production Services: Professional VFX, Audio and Event Production",
  description:
    "Elevate your content with our entertainment production services. From VFX and animation to audio production and live event coverage, we bring your vision to life with cutting-edge technology.",
};
const Entertainment = async () => {
  const data = await fetchFromStrapi("creative");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }
  console.log("creative:", data);
  const { hero, entertainmentServices, technologyServices, successStories } =
    data || {};

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <HeroSection data={hero} bgImage="/hero/entertainment.webp" />
      <div className="space-y-16 lg:space-y-32">
        <div id="entertainment-services">
          <EntertainmentServices
            icon="/entertainment/entertainment-advantage"
            data={entertainmentServices}
          />
        </div>
        <TechnologyServices
          data={technologyServices}
          image="/entertainment/landing/service"
        />
        <SuccessStories data={successStories} />
      </div>
    </main>
  );
};

export default Entertainment;
