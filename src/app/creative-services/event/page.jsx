import { getMetadata } from "@/lib/metadata";
import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import ContentFormats from "@/sections/digital-learning/Content-Formats";
import CTA from "@/sections/digital-learning/CTA";
import Accordion from "@/sections/entertainment/Accordian";
import ServiceOverview from "@/sections/entertainment/ServiceOverview";
import Head from "next/head";
import React from "react";

const serviceOverviewImages = [
  {
    src: "/entertainment/event/1 event.webp",
    alt: "Podcast production setup with microphones and mixer",
  },
  {
    src: "/entertainment/event/2 event.webp",
    alt: "Voice-over recording in professional studio",
  },
  {
    src: "/entertainment/event/3 event.webp",
    alt: "Sound engineer working with audio mixing software",
  },
];

export async function generateMetadata() {
  return await getMetadata("event-production");
}

const VfxAnimation = async () => {
  const data = await fetchFromStrapi("event-production");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }

  const {
    hero,
    serviceOverview,
    serviceOffering,
    productionProcess,
    technologyStack,
    successStories,
    faq,

    cta,
  } = data || {};
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <HeroSection data={hero} bgImage="/hero/Event-banner.webp" />
      <div className="space-y-16 lg:space-y-32">
        <ServiceOverview
          images={serviceOverviewImages}
          data={serviceOverview}
        />
        <div id="event-service-offerings">
          <ServiceOfferings
            data={serviceOffering}
            bgImage="/service-offering/creative/default.svg"
            icon="/entertainment/event/offering"
          />
        </div>
        <Methodology data={productionProcess} />
        <ContentFormats
          cardImage="/entertainment/event/techstack"
          data={technologyStack}
        />
        <SuccessStories data={successStories} />
        <Accordion data={faq} />
        <CTA data={cta} />
      </div>
    </main>
  );
};

export default VfxAnimation;
