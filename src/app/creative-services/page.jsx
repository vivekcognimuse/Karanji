import HeroSection from "@/sections/Advisory/Hero";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import EntertainmentServices from "@/sections/entertainment/EntertainmentService";
import TechnologyServices from "@/sections/service/Service";
import Head from "next/head";
import React from "react";

const heroData = {
  title:
    "Elevate your content with professional entertainment production services",
  subTitle:
    "From stunning visual effects to immersive audio experiences & dynamic event coverage-bringing your vision to life",
  ctaText: "Explore Our Services",
  ctaLink: "entertainment-services", // You can change this to the appropriate link for your services page

  backgroundImage: "/path/to/your/hero-image.jpg", // Provide the background image URL
  stats: [
    {
      subText: "End-to-End Solutions",
    },
    {
      subText: "Expertise & Customization",
    },
    {
      subText: "Cutting-Edge Technology",
    },
    {
      subText: "Collaborative & Reliable",
    },
  ],
};
const entertainmentServices = {
  title: "The Advantage of choosing our entertainment services",
  subTitle:
    "We offer a full range of solutions, from VFX & animation to audio production & live event coverage, using industry expertise & cutting-edge technology to bring your vision to life.",
  services: [
    {
      icon: "/entertainment/entertainment-advantage/1.svg",
      title: "End-to-end solutions",
      description:
        "Seamless integration of all creative & production elements from concept to delivery.",
    },
    {
      icon: "/entertainment/entertainment-advantage/2.svg",
      title: "Industry Expertise",
      description:
        "Our expert team delivers exceptional results working on projects across all entertainment sectors.",
    },
    {
      icon: "/entertainment/entertainment-advantage/3.svg",
      title: "Custom Approach",
      description:
        "Tailored production solutions to meet your specific creative & technical requirements.",
    },
    {
      icon: "/entertainment/entertainment-advantage/4.svg",
      title: "Cutting-edge technology",
      description:
        "State-of-the-art equipment & software for premium quality & innovative services.",
    },
    {
      icon: "/entertainment/entertainment-advantage/5.svg",
      title: "Collaborative process",
      description:
        "We work closely with you every step to ensure your creative vision is expertly realized.",
    },
    {
      icon: "/entertainment/entertainment-advantage/6.svg",
      title: "Delivery Excellence",
      description:
        "Reliable on-time delivery with uncompromising quality & client satisfaction.",
    },
  ],
};

const technologyServices = {
  description:
    "We offer expert, tailored production solutions with cutting-edge technology for seamless execution & exceptional results.",
  cards: [
    {
      id: 1,
      title: "VFX/Animation",
      description:
        "Cutting-edge visual effects, animation, and motion graphics that elevate your production. Our artists bring imagination to life with industry-standard software and creative storytelling.",
      list: [
        { id: 101, text: "3D/2D Animation" },
        { id: 102, text: "Motion Graphics" },
        { id: 103, text: "Visual Effects (VFX)" },
        { id: 104, text: "Character Animation" },
      ],
      ctaText: "Learn More",
      ctaLink: "/creative-services/vfx-animation",
      image: "/entertainment/landing/service/1.webp",
    },
    {
      id: 2,
      title: "Audio & Podcast",
      description:
        "Professional sound design & podcast production that captures the essence of your message. From recording to post-production, we ensure clarity, quality, and creativity.",
      list: [
        { id: 201, text: "Podcast Recording" },
        { id: 202, text: "Audio Editing & Mixing" },
        { id: 203, text: "Voiceovers & Narration" },
        { id: 204, text: "Sound Design" },
      ],
      ctaText: "Learn More",
      ctaLink: "/creative-services/audio",
      image: "/entertainment/landing/service/2.webp",
    },
    {
      id: 3,
      title: "Event Production",
      description:
        "Dynamic coverage of live events with multi-camera setups, expert crews, and live streaming options. We bring your events to life, capturing every moment in stunning detail.",
      list: [
        { id: 301, text: "Multi-camera Live Coverage" },
        { id: 302, text: "Live Streaming" },
        { id: 303, text: "On-site Production Crew" },
        { id: 304, text: "Post-event Editing" },
      ],
      ctaText: "Learn More",
      ctaLink: "/creative-services/event",
      image: "/entertainment/landing/service/3.webp",
    },
  ],
};

const successStoriesData = {
  title: "Entertainment Services Success Stories",
  tag: "Entertainment Services",
  description:
    "Real-world examples highlight the impact of our entertainment production services. Explore case studies that showcase how we elevate storytelling, enhance visual experiences, & drive engagement across entertainment platforms.",
  cards: [
    {
      title: "One-Hour Podcast into a Visual Experience",
      stats: [
        { title: "+100%", subTitle: "Improved Video Clarity" },
        { title: "30–sec", subTitle: "Hook Developed Proactively" },
      ],
      description:
        "We enhanced a raw one-hour podcast with AI-driven upgrades, adding dynamic visuals & motion graphics hook to elevate the content, making it more engaging & visually compelling.",
      link: "Read Full CaseStudy",
    },
    // Add more testimonial data objects as required
  ],
};

const Entertainment = () => {
  return (
    <div className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <HeroSection data={heroData} bgImage="/hero/entertainment.webp" />
      <div id="entertainment-services">
        <EntertainmentServices data={entertainmentServices} />
      </div>
      <TechnologyServices
        data={technologyServices}
        image="/entertainment/landing/service"
      />
      <SuccessStories data={successStoriesData} />
    </div>
  );
};

export default Entertainment;
