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
  title: "Cutting-Edge VFX & Animation Services",
  description:
    "Bringing extraordinary visions to life with precision & creativity",
  linkText: "Explore Our Services",
  linkHref: "/", // You can change this to the appropriate link for your services page

  backgroundImage: "/path/to/your/hero-image.jpg", // Provide the background image URL
  stats: [
    {
      subText: "Visual Quality & Integration",
    },
    {
      subText: "Workflow & Collaboration",
    },
    {
      subText: "Technical Precision",
    },
    {
      subText: "Production Efficiency",
    },
  ],
};
const serviceOverview = {
  title: "Service overview",
  subtitle: "Transform your vision with professional vfx & animation",
  description:
    "Our VFX & animation team delivers stunning visual elements that elevate your project from ordinary to extraordinary. With expertise spanning film, advertising, and digital media, we provide end-to-end visual effects solutions tailored to your creative vision & technical requirements.",
  feature:
    "From subtle enhancements to complex digital environments, our industry veterans bring technical precision & artistic excellence to every frame, ensuring seamless integration & maximum visual impact.",
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
  title: "Our Service Offerings",
  description:
    "Transform your vision with professional VFX & animation. Our team delivers end-to-end solutions across film, television, advertising, & digital media to elevate your project.",
  tag: "Entertainment Services",
  cards: [
    {
      title: "Rotoscoping services",
      subtitle: "",
      description:
        "Frame-by-frame precision to isolate & manipulate elements for seamless compositing.",
      featured: true,
      icon: "/entertainment/vfx/offering",
    },
    {
      title: "Compositing & CG Integration",
      subtitle: "",
      description:
        "Blending computer-generated elements with live-action footage for realistic quality.",
      featured: false,
      icon: "/entertainment/vfx/offering",
    },
    {
      title: "Motion graphics & Particle effects",
      subtitle: "",
      description:
        "Dynamic visual elements enhancing storytelling & brand consistency.",
      featured: false,
      icon: "/entertainment/vfx/offering",
    },
    {
      title: "VFX pipeline consulting & on-set supervision",
      subtitle: "",
      description:
        "Expert guidance for optimizing VFX workflow & on-set capture.",
      featured: false,
      icon: "/entertainment/vfx/offering",
    },
  ],
};
const methodologyData = {
  title: "Our VFX Process",
  subtitle:
    "Our streamlined VFX process guarantees smooth production, from consultation to final delivery.",
  list: [
    {
      title: "Consultation & Planning",
      description: "Understanding your vision & planning optimal approach.",
      tags: [],
    },
    {
      title: "Production & Capture",
      description: "Collecting necessary footage & technical data.",
      tags: [],
    },
    {
      title: "Creation & Integration",
      description: "Developing VFX elements & integrating with source media.",
      tags: [],
    },
    {
      title: "Refinement & Approval",
      description: "Collaborative review process with revisions as needed.",
      tags: [],
    },
    {
      title: "Final Delivery",
      description: "Outputting in required formats with quality assurance.",
      tags: [],
    },
  ],
};
const contentFormatsData = {
  title: "Our Technology Stack",
  description:
    "We rely on the best industry tools to craft exceptional VFX, ensuring precision & quality at every stage of production.",

  image: null, // No main image shown in your screenshot — set to null or remove if unused
  content: [
    {
      description: "After Effects",
      src: "/entertainment/vfx/techstack/1.svg",
    },
    {
      description: "Adobe Photoshop",
      src: "/entertainment/vfx/techstack/2.svg",
    },
    {
      description: "Nuke",
      src: "/entertainment/vfx/techstack/3.svg",
    },
    {
      description: "Cinema 4D",
      src: "/entertainment/vfx/techstack/4.svg",
    },
    {
      description: "Houdini",
      src: "/entertainment/vfx/techstack/5.svg",
    },
    {
      description: "Mocha Pro",
      src: "/entertainment/vfx/techstack/6.svg",
    },
    {
      description: "Blender",
      src: "/entertainment/vfx/techstack/7.svg",
    },
    {
      description: "DaVinci Resolve",
      src: "/entertainment/vfx/techstack/8.svg",
    },
    {
      description: "Custom rendering pipeline",
      src: "/entertainment/vfx/techstack/9.svg",
    },
  ],
};
const successStoriesData = {
  title: "Use Cases & Success Stories",
  description:
    "Explore case studies that demonstrate how we enhance visual storytelling, integrate cutting-edge effects, & elevate the overall cinematic experience across entertainment platforms.",
  cards: [
    {
      title: "Bringing a Murder Mystery to Life",
      stats: [
        { title: "Seamless", subtitle: "Video Tracking" },
        { title: "0 Bugs", subtitle: "Final Delivery" },
      ],
      description:
        "We transformed provided footage into realistic video playback on set phones using advanced tracking techniques & Mocha AE, ensuring seamless integration & meeting tight deadlines.",
      link: "Read Full CaseStudy", // Optional field
    },
    // Add more stories here if needed
  ],
};
const accordionData = {
  title: "Frequently Asked Questions",
  subtitle:
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
  SecondaryButtonLink: "/",
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
