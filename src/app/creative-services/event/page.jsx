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

const heroData = {
  title: "Event Production and Management",
  subTitle:
    "Flawless execution of memorable events from concept to completion.",
  ctaText: "Explore Our Services",
  ctaLink: "event-service-offerings", // Adjust as necessary
  backgroundImage: null, // No visible background image
  stats: [
    {
      subText: "Virtual and Hybrid Event Expertise",
    },
    {
      subText: "Scalable for Any Event Size",
    },
    {
      subText: "Client-Centered Approach",
    },
  ], // Omit if none are shown
};

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
const serviceOfferingsData = {
  title: "Our Services Offerings",
  subTitle:
    "Create exceptional events powered by technology and expert planning. Our team ensures every critical element runs smoothly while you connect with your audience.",

  cards: [
    {
      title: "Live event production and Management",
      subTitle: "",
      description: "Event management from concept to execution.",
      featured: true,
      icon: "/event/icons/production.svg",
    },
    {
      title: "Event tech and Equipment rental",
      subTitle: "",
      description: "State-of-the-art technical solutions for any event scale.",
      featured: false,
      icon: "/event/icons/tech.svg",
    },
    {
      title: "Stage design and Production",
      subTitle: "",
      description: "Custom environments for presentation and branding.",
      featured: false,
      icon: "/event/icons/stage-design.svg",
    },
    {
      title: "Virtual and Hybrid events production",
      subTitle: "",
      description: "Seamless experiences for in-person and online attendees.",
      featured: false,
      icon: "/event/icons/hybrid.svg",
    },
  ],
};

const methodologyData = {
  title: "Our Production Process",
  subTitle:
    "Professional‑grade tools backed by a streamlined workflow. From planning to post‑event review, our process delivers results with clarity and control.",
  list: [
    {
      title: "Discovery and Planning",
      description: "Understanding your goals and creating project plans.",
      tags: [],
    },
    {
      title: "Technical Design",
      description: "Custom solutions for your specific requirements.",
      tags: [],
    },
    {
      title: "Pre‑Production",
      description: "Scheduling, coordination, and preparation.",
      tags: [],
    },
    {
      title: "Execution",
      description: "On‑site management and technical coordination.",
      tags: [],
    },
    {
      title: "Post‑Event Analysis",
      description: "Evaluation, reporting, and recommendations.",
      tags: [],
    },
  ],
};

const contentFormatsData = {
  title: "Our Event Technology",
  description:
    "Industry‑standard tools like L‑Acoustics, Martin Lighting, and Blackmagic gear. We use modern equipment to ensure performance, reliability, and quality.",
  image: null,
  content: [
    {
      description: "HDL‑Acoustics sound systems",
      src: "/entertainment/event/technology/1.svg",
    },
    {
      description: "Dynamic Martin lighting solutions",
      src: "/entertainment/event/technology/2.svg",
    },
    {
      description: "4K projection and LED display walls",
      src: "/entertainment/event/technology/3.svg",
    },
    {
      description: "High‑resolution LED display technology",
      src: "/entertainment/event/technology/4.svg",
    },
    {
      description: "Blackmagic video production gear",
      src: "/entertainment/event/technology/5.svg",
    },
    {
      description: "ClearCom communication systems",
      src: "/entertainment/event/technology/6.svg",
    },
    {
      description: "Modular custom stage rigging setups",
      src: "/entertainment/event/technology/7.svg",
    },
    {
      description: "Streaming encoders and platforms",
      src: "/entertainment/event/technology/8.svg",
    },
    {
      description: "Interactive audience response tools",
      src: "/entertainment/event/technology/9.svg",
    },
  ],
};

const successStoriesData = {
  title: "Use Cases and Success Stories",
  description:
    "Explore how our services adapt across industries, formats, and event scales.",
  cards: [
    {
      title: "Convocation Day School Real Video Project",
      tag: "Creative Services",
      stats: [
        { title: "95%", subTitle: "Engaging" },
        { title: "100%", subTitle: "Client Satisfaction" },
      ],
      description:
        "A three-day, end-to-end convocation video for a school, produced via rapid scripting/storyboarding, in-school filming, and smart use of stock footage to showcase the institution during the ceremony.",
      link: "Read Full CaseStudy",
    },
  ],
};

const accordionData = {
  title: "Frequently Asked Questions",
  subTitle:
    "Answers to your top event planning questions in one place. From booking timelines to pricing and hybrid strategies, we’ve got you covered.",
  questions: [
    {
      question: "How far in advance should I book event production services?",
      answer:
        "We recommend booking at least 4–6 weeks in advance to allow time for planning, technical setup, and coordination. For large-scale events, more lead time is ideal.",
    },
    {
      question: "How do you determine pricing?",
      answer:
        "Pricing is based on factors such as event size, technical needs, location, duration, and production complexity. We provide custom quotes after understanding your exact requirements.",
    },
    {
      question: "Can you work with our existing venue or help find one?",
      answer:
        "Yes. We’re experienced in working with client-selected venues or helping source the right location through our network of partners.",
    },
    {
      question: "What contingency plans do you have for technical failures?",
      answer:
        "We implement redundancies for critical systems, have on-site tech support, and detailed backup procedures to ensure uninterrupted event execution.",
    },
    {
      question: "Do you do fully hybrid events?",
      answer:
        "Absolutely—we support hybrid events that combine live experiences with virtual participation. Our team handles streaming, interaction, and platform integration end-to-end.",
    },
  ],
};

const CTAData = {
  title: "Ready to create an unforgettable event?",
  description:
    "Let’s bring your vision to life with expert coordination—from creative design to flawless execution.",
  PrimaryButtonText: "Schedule a Consultation",
  PrimaryButtonLink: "/contact",
  SecondaryButtonText: null,
  SecondaryButtonLink: null,
};

export const metadata = {
  title:
    "Professional Event Production and Management Services | Live, Virtual and Hybrid Events",
  description:
    "Expert event production and management for live, virtual, and hybrid events. From stage design and tech rental to seamless execution, we deliver memorable experiences.",
};

const VfxAnimation = async () => {
  const data = await fetchFromStrapi("event-production");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }
  console.log("event production data:", data);
  const {
    hero,
    serviceOverview,
    serviceOffering,
    productionProcess,
    technologyStack,

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
        <SuccessStories data={successStoriesData} />
        <Accordion data={faq} />
        <CTA data={cta} />
      </div>
    </main>
  );
};

export default VfxAnimation;
