import { getMetadata } from "@/lib/metadata";
import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import ConsultancyFramework from "@/sections/digital-learning/ConsultancyFramework";

import EcoSystem from "@/sections/digital-learning/Eco-system";
import TechnologyServices from "@/sections/service/Service";

import React from "react";

export async function generateMetadata() {
  return await getMetadata("digital-learning");
}

const DigitalLearning = async () => {
  const data = await fetchFromStrapi("digital-learning");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }

  const {
    hero,
    methodologyData,
    successStoriesData,
    technologyServicesData,
    consultancyFramework,
    ecoSystem,
  } = data || {};
  return (
    <main className="w-full   max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection data={hero} bgImage="/hero/digital-Learning.webp" />
      <div className="space-y-16 lg:space-y-32">
        <div id="digital-learning-solutions">
          <TechnologyServices
            image={"/digital-learning/service"}
            data={technologyServicesData}
            bgImage="/digital-learning/service/bg.svg"
          />
        </div>
        <EcoSystem data={ecoSystem} />
        {/* <ConsultancyFramework data={consultancyFramework} /> */}
        <Methodology column={true} data={methodologyData} />{" "}
        <SuccessStories data={successStoriesData} />
      </div>
    </main>
  );
};

export default DigitalLearning;
