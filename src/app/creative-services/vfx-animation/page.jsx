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

// HERO SECTION
const heroData = {
  title: "Cutting-Edge VFX & Animation Services",
  subTitle:
    "Bringing extraordinary visions to life with precision & creativity",
  ctaText: "Explore Our Services",
  ctaLink: "vfx-service-offerings", // You can change this to the appropriate link for your services page

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

// SERVICE OVERVIEW
const serviceOverview = {
  title: "Service overview",
  subTitle: "Transform your vision with professional vfx & animation",
  description:
    "Our VFX & animation team delivers stunning visual elements that elevate your project from ordinary to extraordinary. With expertise spanning film, advertising, and digital media, we provide end-to-end visual effects solutions tailored to your creative vision & technical requirements.",
  feature:
    "From subtle enhancements to complex digital environments, our industry veterans bring technical precision & artistic excellence to every frame, ensuring seamless integration & maximum visual impact.",

  images: [
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
  ],
};

// SERVICE OFFERINGS
const serviceOfferingsData = {
  title: "Our Service Offerings",
  subTitle:
    "Transform your vision with professional VFX & animation. Our team delivers end-to-end solutions across film, television, advertising, & digital media to elevate your project.",

  cards: [
    {
      title: "Rotoscoping services",
      subTitle: "",
      description:
        "Frame-by-frame precision to isolate & manipulate elements for seamless compositing.",
      featured: true,
      icon: "/entertainment/vfx/offering",
    },
    {
      title: "Compositing & CG Integration",
      subTitle: "",
      description:
        "Blending computer-generated elements with live-action footage for realistic quality.",
      featured: false,
      icon: "/entertainment/vfx/offering",
    },
    {
      title: "Motion graphics & Particle effects",
      subTitle: "",
      description:
        "Dynamic visual elements enhancing storytelling & brand consistency.",
      featured: false,
      icon: "/entertainment/vfx/offering",
    },
    {
      title: "VFX pipeline consulting & on-set supervision",
      subTitle: "",
      description:
        "Expert guidance for optimizing VFX workflow & on-set capture.",
      featured: false,
      icon: "/entertainment/vfx/offering",
    },
  ],
};
const methodologyData = {
  title: "Our VFX Process",
  subTitle:
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
      title: "Bringing a Murder Mystery Scene to Life",
      stats: [
        { title: "70%", subTitle: "Innovation" },
        { title: "0 bugs", subTitle: "Final Delivery" },
      ],
      description:
        "We composited client-provided murder footage onto a moving phone screen using Mocha AE planar tracking, matching motion, angle, and lighting for a realistic “video-on-phone” effect—shot with a green screen and replaced in post.",
      link: "Read Full CaseStudy",
    },
    {
      title: "Quality Month: Video Animation",
      stats: [
        { title: "On time", subTitle: "Delivery" },
        { title: "100%", subTitle: "In-house Dubbing" },
      ],
      description:
        "A culturally resonant animated VSB series for an automotive company’s Quality Month, told in a Panchayat-style narrative with custom Kannada voiceovers to mirror employees and values.",
      link: "Read Full CaseStudy",
    },
  ],
};

// METHODOLOGY

// FAQ ACCORDION
const accordionData = {
  title: "Frequently Asked Questions",
  subTitle:
    "Find answers to common questions about VFX pricing, timelines, rotoscoping, & remote collaboration. ",
  questions: [
    {
      question: "What is rotoscoping in VFX & when is it necessary?",
      answer:
        "Rotoscoping is the process of creating precise masks to separate elements in footage frame-by-frame. It's essential when elements need to be isolated for effects application, color correction, or integration with other visual elements.",
    },
    {
      question: "How much does professional VFX & animation typically cost?",
      answer:
        "VFX pricing depends on project complexity, timeline, & specific requirements. Simple rotoscoping may start at X per frame, while complex compositing & CGI work is typically quoted based on the full scope. Contact us for a customized quote tailored to your project needs.",
    },
    {
      question: "What information do you need to provide for a VFX quote?",
      answer:
        "To provide an accurate quote, we typically need: footage samples or storyboards, detailed description of required effects, project timeline, output format requirements, & any specific technical considerations. The more details you provide, the more precise our estimate will be.",
    },
    {
      question: "What information do you need to provide for a VFX quote?",
      answer:
        "Timelines vary based on complexity & scope. Simple rotoscoping might be completed in days, while complex compositing & CGI could take weeks. We work closely with clients to establish realistic schedules & can adjust team size for urgent deadlines when possible.",
    },
    {
      question: "What information do you need to provide for a VFX quote?",
      answer:
        "We work with clients globally through efficient remote collaboration. For complex shoots requiring on-set VFX supervision, our team can travel to your location to ensure all necessary elements are captured correctly, optimizing the post-production process.",
    },
  ],
};

// CTA SECTION
const CTAData = {
  title: "Ready to elevate your project with professional VFX ?",
  description:
    "Contact our team today to discuss your visual effects & animation needs.",
  PrimaryButtonText: "Schedule a Consultation",
  PrimaryButtonLink: "/contact",
  SecondaryButtonText: null,
  SecondaryButtonLink: null,
};

export const metadata = {
  title:
    "Entertainment Production Services: Professional VFX, Audio & Event Production",
  description:
    "Elevate your content with our entertainment production services. From VFX and animation to audio production and live event coverage, we bring your vision to life with cutting-edge technology.",
};

const AudioPodcastProduction = () => {
  return (
    <div className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection data={heroData} bgImage="/hero/VFX banner.webp" />
      <ServiceOverview data={serviceOverview} />
      <div id="vfx-service-offerings">
        <ServiceOfferings
          data={serviceOfferingsData}
          icon="/entertainment/vfx/offering" // Update if using dynamic icons
        />
      </div>
      <Methodology data={methodologyData} />
      <ContentFormats data={contentFormatsData} />
      <SuccessStories data={successStoriesData} />
      <Accordion data={accordionData} />
      <CTA data={CTAData} />
    </div>
  );
};

export default AudioPodcastProduction;
