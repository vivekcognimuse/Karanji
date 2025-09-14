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
    src: "/entertainment/audio/1 Podcast.webp",
    alt: "Podcast production setup with microphones and mixer",
  },
  {
    src: "/entertainment/audio/2 Podcast.webp",
    alt: "Voice-over recording in professional studio",
  },
  {
    src: "/entertainment/audio/3 Podcast.webp",
    alt: "Sound engineer working with audio mixing software",
  },
];
export async function generateMetadata() {
  return await getMetadata("audio-and-podcast");
}
const VfxAnimation = async () => {
  const data = await fetchFromStrapi("audio-and-podcast");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }

  const {
    hero,
    serviceOverview,
    serviceOffering,
    vfxProcess,
    technologyStack,
    faq,
    successStories,
    cta,
  } = data || {};
  return (
    <main className="w-full max-w-[1540px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <HeroSection data={hero} bgImage="/hero/Podcast banner.webp" />
      <div className="space-y-16 lg:space-y-32">
        <ServiceOverview
          images={serviceOverviewImages}
          data={serviceOverview}
        />
        <div id="audio-service-offerings">
          <ServiceOfferings
            data={serviceOffering}
            icon="/audio/icons"
            bgImage="/service-offering/creative/default.svg"
          />{" "}
        </div>
        <Methodology data={vfxProcess} />
        <ContentFormats
          cardImage="/entertainment/audio/techstack"
          data={technologyStack}
        />{" "}
        <SuccessStories data={successStories} />
        <Accordion data={faq} />
        <CTA data={cta} />
      </div>
    </main>
  );
};

export default VfxAnimation;
