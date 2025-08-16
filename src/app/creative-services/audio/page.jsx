import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import ContentFormats from "@/sections/digital-learning/Content-Formats";
import CTA from "@/sections/digital-learning/CTA";
import Accordion from "@/sections/entertainment/Accordian";
import ServiceOverview from "@/sections/entertainment/ServiceOverview";
import React from "react";

const heroData = {
  title: "Professional Audio Podcast & Production",
  subTitle:
    "Studio-quality sound that elevates your content & engages audiences",
  linkText: "Explore Our Services",
  linkHref: "/", // adjust as needed
  backgroundImage: null, // only include if there's a background image provided
  stats: [], // omitted since the image shows no stats
};
const serviceOverview = {
  title: "Service overview",
  subTitle: "Captivate your audience with professional audio",
  description:
    "Our audio production team combines technical expertise with creative storytelling to deliver pristine sound that keeps listeners engaged. From concept development to final distribution, we provide complete audio solutions for podcasts, voice-overs & sound design.",
  feature:
    "With state-of-the-art recording tools & in-house engineers, we deliver polished, professional sound across any distribution platform.",
  images: [
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
  ],
};
const serviceOfferingsData = {
  title: "Our Services Offerings",
  subTitle:
    "Captivate Your Audience with Professional Audio. From concept to distribution, our expert team delivers crystal-clear sound with creative storytelling for podcasts, voice-overs, & commercial media..",

  cards: [
    {
      title: "End‑to‑End Podcast Production",
      subTitle: "",
      description: "Comprehensive service from concept through distribution.",
      featured: true,
      icon: "/audio/icons/end-to-end.svg",
    },
    {
      title: "Audio engineering & Sound Design",
      subTitle: "",
      description: "Creative sound solutions for any media project.",
      featured: false,
      icon: "/audio/icons/sound-design.svg",
    },
    {
      title: "Voice‑over recording, direction",
      subTitle: "",
      description: "Voice recording for ads, narration, or characters.",
      featured: false,
      icon: "/audio/icons/voice-over.svg",
    },
    {
      title: "Audio restoration & enhancement",
      subTitle: "",
      description: "Specialized services to fix problematic audio.",
      featured: false,
      icon: "/audio/icons/restoration.svg",
    },
  ],
};
const methodologyData = {
  title: "Our Production Process",
  subTitle:
    "A 5-step workflow from planning to delivery ensures efficiency & quality. Designed for smooth collaboration & on-time results.",
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
    {
      description: "Pro Tools HD",
      src: "/entertainment/audio/techstack/1.svg",
    },
    { description: "Logic Pro X", src: "/entertainment/audio/techstack/2.svg" },
    {
      description: "Neumann microphones",
      src: "/entertainment/audio/techstack/3.svg",
    },
    {
      description: "Soundcraft mixing console",
      src: "/entertainment/audio/techstack/4.svg",
    },
    {
      description: "Avalon preamps",
      src: "/entertainment/audio/techstack/5.svg",
    },
    {
      description: "iZotope RX suite",
      src: "/entertainment/audio/techstack/6.svg",
    },
    {
      description: "Waves plugin bundle",
      src: "/entertainment/audio/techstack/7.svg",
    },
    {
      description: "Sound‑treated studio rooms",
      src: "/entertainment/audio/techstack/8.svg",
    },
    {
      description: "Podcast recording setup",
      src: "/entertainment/audio/techstack/9.svg",
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
      title: "One-Hour Podcast into a Visually Engaging Experience",
      stats: [
        { title: "+100%", subTitle: "Improved Video Quality" },
        { title: "1 week", subTitle: "Project Completion" },
      ],
      description:
        "A one-hour, low-quality video-call podcast (Senior Director × bestselling author) was turned into a visually engaging piece for a global IT services provider—covering innovation, resilience, and storytelling.",
      link: "Read Full CaseStudy",
    },
  ],
};

const accordionData = {
  title: "Frequently Asked Questions",
  subTitle:
    "Find quick guidance on pricing, timelines, equipment needs, remote recording, & distribution support.",
  questions: [
    {
      question: "How much does professional podcast production cost?",
      answer:
        "Pricing depends on your project’s scope & needs. We offer flexible packages starting from basic audio editing to full-service production including recording, mixing, mastering, and post-production support.",
    },
    {
      question: "What equipment do I need to record a professional podcast?",
      answer:
        "We recommend using a quality microphone, audio interface, and sound-treated space. If you’re recording remotely, we can guide you on the best gear or provide access to our studios.",
    },
    {
      question: "How long does it take to produce a podcast episode?",
      answer:
        "Production timelines vary based on episode length and services required. On average, a 30–60 minute episode takes 2–5 days from recording to delivery.",
    },
    {
      question:
        "Can you help distribute my podcast to platforms like Spotify & Apple Podcasts?",
      answer:
        "Yes! We assist with podcast hosting setup, distribution to major platforms, and analytics integration to track performance and audience engagement.",
    },
    {
      question: "Do you offer remote recording options for podcast guests?",
      answer:
        "Absolutely—we support remote recording using studio-grade virtual tools for high-quality results, even if guests are in different locations.",
    },
  ],
};

const CTAData = {
  title: "Ready to create a professional audio content ?",
  description:
    "Let’s discuss your project. Whether launching a podcast or requiring sound design, our team is ready to deliver results.",
  PrimaryButtonText: null,
  PrimaryButtonLink: null,
  SecondaryButtonText: "Schedule a Consultation",
  SecondaryButtonLink: "/contact",
};

const VfxAnimation = () => {
  return (
    <div className="w-full max-w-[1540px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} bgImage="/hero/Podcast banner.webp" />
      <ServiceOverview data={serviceOverview} />
      <ServiceOfferings
        data={serviceOfferingsData}
        icon="/entertainment/vfx/offering"
      />{" "}
      <Methodology data={methodologyData} />
      <ContentFormats data={contentFormatsData} />{" "}
      <SuccessStories data={successStoriesData} />
      <Accordion data={accordionData} />
      <CTA data={CTAData} />
    </div>
  );
};

export default VfxAnimation;
