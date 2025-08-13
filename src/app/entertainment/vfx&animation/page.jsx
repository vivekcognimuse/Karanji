import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import ContentFormats from "@/sections/digital-learning/Content-Formats";
import CTA from "@/sections/digital-learning/CTA";
import Accordion from "@/sections/entertainment/Accordian";
import ServiceOverview from "@/sections/entertainment/ServiceOverview";
import React from "react";

// HERO SECTION
const heroData = {
  title: "Professional Audio Podcast & Production",
  description:
    "Studio-quality sound that elevates your content & engages audiences",
  linkText: "Explore Our Services",
  linkHref: "/", // adjust as needed
  backgroundImage: null, // only include if there's a background image provided
  stats: [], // omitted since the image shows no stats
};
// SERVICE OVERVIEW
const serviceOverview = {
  title: "Service overview",
  subtitle: "Captivate your audience with professional audio",
  description:
    "Our audio production team combines technical expertise with creative storytelling to deliver pristine sound that keeps listeners engaged. From concept development to final distribution, we provide complete audio solutions for podcasts, voice-overs & sound design.",
  feature:
    "With state-of-the-art recording tools & in-house engineers, we deliver polished, professional sound across any distribution platform.",
  image: {
    src: "/audio/overview.jpg", // replace with your actual image path
    alt: "Podcast production setup with professional audio equipment",
  },
};

// SERVICE OFFERINGS
const serviceOfferingsData = {
  title: "Our Services Offerings",
  description:
    "Capture Your Audience with Professional Audio. From concept to distribution, our expert team delivers crystal‑clear sound with creative storytelling for podcasts, voice-overs, & commercial media.",
  tag: "Audio Production",
  cards: [
    {
      title: "End‑to‑End Podcast Production",
      subtitle: "",
      description: "Comprehensive service from concept through distribution.",
      featured: true,
      icon: "/audio/icons/end-to-end.svg",
    },
    {
      title: "Audio engineering & Sound Design",
      subtitle: "",
      description: "Creative sound solutions for any media project.",
      featured: false,
      icon: "/audio/icons/sound-design.svg",
    },
    {
      title: "Voice‑over recording, direction",
      subtitle: "",
      description: "Voice recording for ads, narration, or characters.",
      featured: false,
      icon: "/audio/icons/voice-over.svg",
    },
    {
      title: "Audio restoration & enhancement",
      subtitle: "",
      description: "Specialized services to fix problematic audio.",
      featured: false,
      icon: "/audio/icons/restoration.svg",
    },
  ],
};

// METHODOLOGY
const methodologyData = {
  title: "Our Production Process",
  subtitle:
    "A 5‑step workflow from planning to delivery ensures efficiency & quality. Designed for smooth collaboration & on‑time results.",
  list: [
    {
      title: "Consultation & Planning",
      description: "Understanding your goals & project needs.",
      tags: [],
    },
    {
      title: "Pre‑Production",
      description: "Script development, scheduling, technical preparation.",
      tags: [],
    },
    {
      title: "Recording & Performance",
      description: "Capturing high-quality audio with expert direction.",
      tags: [],
    },
    {
      title: "Post‑Production",
      description: "Editing, mixing, & mastering.",
      tags: [],
    },
    {
      title: "Delivery & Distribution",
      description: "Final files & platform optimization.",
      tags: [],
    },
  ],
};

// AUDIO TECH STACK (used in ContentFormats component)
const contentFormatsData = {
  title: "Our Audio Technology",
  description:
    "Industry‑standard tools like Pro Tools HD, Neumann mics, & Avalon preamps. Our setup is built for high‑end audio across formats.",
  image: null,
  content: [
    { description: "Pro Tools HD", src: "/audio/tools/pro-tools-hd.svg" },
    { description: "Logic Pro X", src: "/audio/tools/logic-pro-x.svg" },
    {
      description: "Neumann microphones",
      src: "/audio/tools/neumann-mics.svg",
    },
    {
      description: "Soundcraft mixing console",
      src: "/audio/tools/soundcraft-console.svg",
    },
    { description: "Avalon preamps", src: "/audio/tools/avalon-preamps.svg" },
    { description: "iZotope RX suite", src: "/audio/tools/izotope-rx.svg" },
    {
      description: "Waves plugin bundle",
      src: "/audio/tools/waves-plugins.svg",
    },
    {
      description: "Sound‑treated studio rooms",
      src: "/audio/tools/studio-rooms.svg",
    },
    {
      description: "Podcast recording setup",
      src: "/audio/tools/podcast-setup.svg",
    },
  ],
};

// SUCCESS STORIES
const successStoriesData = {
  title: "Use Cases & Success Stories",
  description:
    "Explore how our audio & podcast production services have helped clients elevate their content, engage audiences, & deliver polished, professional results across platforms.",
  cards: [
    {
      title: "One‑Hour Podcast into a Visual Experience",
      metrics: [
        { value: "+100%", label: "Improved Video Clarity" },
        { value: "30‑sec", label: "Hook Developed Proactively" },
      ],
      description:
        "We enhanced a raw one‑hour podcast with AI‑driven upgrades, adding dynamic visuals & a motion‑graphics hook to elevate the content, making it more engaging & visually compelling.",
      link: "Read Full CaseStudy", // keep if component uses it
    },
  ],
};

// FAQ ACCORDION
const accordionData = {
  title: "Frequently Asked Questions",
  subtitle:
    "Find quick guidance on pricing, timelines, equipment needs, remote recording, & distribution support.",
  questions: [
    {
      question: "How much does professional podcast production cost?",
      answer:
        "Costs vary based on project scope & complexity. Simple edits have lower rates, while full production—editing, mixing & direction—are quoted based on deliverables. Contact us for a custom estimate.",
    },
    {
      question: "What equipment do I need to record a professional podcast?",
      answer:
        "We provide studio-grade equipment during sessions. For remote setups, we recommend a quality mic, pop filter, and a quiet, treated room. We guide remote guest setups as needed.",
    },
    {
      question: "How long does it take to produce a podcast episode?",
      answer:
        "Turnaround depends on length and complexity. Typically, a 30‑minute episode takes 2–5 business days from recording through revisions and final delivery.",
    },
    {
      question:
        "Can you help distribute my podcast to platforms like Spotify & Apple Podcasts?",
      answer:
        "Yes—we assist with distribution, formatting, metadata, and uploading to all major platforms for smooth publishing.",
    },
    {
      question: "Do you offer remote recording options for podcast guests?",
      answer:
        "Absolutely—we support remote guest recording via high-quality virtual tools while our engineers ensure optimal audio capture and support throughout.",
    },
  ],
};

// CTA SECTION
const CTAData = {
  title: "Ready to create a professional audio content ?",
  description:
    "Let’s discuss your project. Whether launching a podcast or requiring sound design, our team is ready to deliver results.",
  PrimaryButtonText: null,
  PrimaryButtonLink: null,
  SecondaryButtonText: "Schedule a Consultation",
  SecondaryButtonLink: "/",
};

const AudioPodcastProduction = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} />
      <ServiceOverview data={serviceOverview} />
      <ServiceOfferings
        data={serviceOfferingsData}
        icon="/audio/icons/default.svg" // Update if using dynamic icons
      />
      <Methodology data={methodologyData} />
      <ContentFormats data={contentFormatsData} />
      <SuccessStories data={successStoriesData} />
      <Accordion data={accordionData} />
      <CTA data={CTAData} />
    </div>
  );
};

export default AudioPodcastProduction;
