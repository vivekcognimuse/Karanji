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
    src: "/entertainment/vfx/1 VFX.webp",
    alt: "Podcast production setup with microphones and mixer",
  },
  {
    src: "/entertainment/vfx/2 VFX.webp",
    alt: "Voice-over recording in professional studio",
  },
  {
    src: "/entertainment/vfx/3 VFX.webp",
    alt: "Sound engineer working with audio mixing software",
  },
];

export const metadata = {
  title:
    "Entertainment Production Services: Professional VFX, Audio and Event Production",
  description:
    "Elevate your content with our entertainment production services. From VFX and animation to audio production and live event coverage, we bring your vision to life with cutting-edge technology.",
};

const AudioPodcastProduction = async () => {
  const data = await fetchFromStrapi("vfx");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }
  console.log("vfx data:", data);
  const {
    hero,
    serviceOverview,
    serviceOffering,
    vfxProcess,
    technologyStack,
    successStories,
    FAQ,

    cta,
  } = data || {};

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10  space-y-16 lg:space-y-32">
      <HeroSection data={hero} bgImage="/hero/VFX banner.webp" />
      <div className="space-y-16 lg:space-y-32">
        <ServiceOverview
          images={serviceOverviewImages}
          data={serviceOverview}
        />
        <div id="vfx-service-offerings">
          <ServiceOfferings
            data={serviceOffering}
            bgImage="/service-offering/creative/default.svg"
            icon="/entertainment/vfx/offering" // Update if using dynamic icons
          />
        </div>
        <Methodology data={vfxProcess} />
        <ContentFormats
          cardImage="/entertainment/vfx/techstack"
          data={technologyStack}
        />
        <SuccessStories data={successStories} />
        <Accordion data={FAQ} />
        <CTA data={cta} />
      </div>
    </main>
  );
};

export default AudioPodcastProduction;
