//about-us.jsx
"use client";
import { useState, useRef, useEffect } from "react";
import WebinarHeader from "@/components/webinar/WebinarHeader";
import QuoteSection from "@/sections/Company/about/quoteSection";
import NextUpSection from "@/sections/Company/about/NextUpSection";
import VisionMission from "@/sections/Company/about/VisionMission";
import ValuesSection from "@/sections/Company/about/ValuesSection";
import JourneySection from "@/sections/Company/about/journeySection";
import TimelineComponent from "@/sections/Company/about/TimelineComponent";
import Head from "next/head";

const heroData = {
  title: "Our Identity & Purpose",
  description:
    "Discover who we are, what drives us, and the values that shape every solution we deliver.",
  backgroundImage: "/path/to/your/hero-image.jpg",
};

const cardsData = [
  {
    title: "Our Team",
    description:
      "Meet the minds shaping the future of immersive tech & storytelling",
    image: "/Company/Landing page/Our Team.webp",
    href: "/company/our-team", // Link navigation
  },
  {
    title: "Career",
    description:
      "Build your career at the crossroads of AI, creativity, & impact",
    image: "/Company/Landing page/Career.webp",
    href: "/company/careers", // Link navigation
  },
];

const journeyData = {
  title: "Redefining the Future: Karanji's Journey",
  subTitle:
    "Step through Karanji's 18+ year journey with our interactive timeline experience. From a bold start in 2007 to becoming a global leader in AI, VR, & digital learning, each milestone reveals how we've continually pushed technological boundaries, delivered transformational solutions, & shaped the future of enterprise learning & digital experiences.",
  currentYear: "2007",
  currentYearDescription:
    "A seed was planted in 2007 with a goal to change the future of learning.",

  yearDescription:
    "Karanji was founded with a vision to revolutionize how people learn by integrating emerging technologies when most still relied on traditional methods. The name 'Karanji', meaning fountain in our local language, symbolizes our mission - to be a constant source of fresh ideas, energy, & innovation in learning technology.",
  buttonText: "Continue the Journey",
  iconSrc: "/Icons/year07icon.svg",
};

// Timeline data for the interactive timeline component
const timelineData = [
  {
    year: "2007",
    yearDescription:
      "A seed was planted in 2007 with a goal to change the future of learning.",
    title: "Where It All Began",
    description:
      "Karanji was founded with a vision to revolutionize how people learn by integrating emerging technologies when most still relied on traditional methods. The name 'Karanji', meaning fountain in our local language, symbolizes our mission - to be a constant source of fresh ideas, energy, and innovation in learning technology.",
    iconSrc: "/Icons/year07icon.svg",
  },
  {
    year: "2007-10",
    yearDescription:
      "We built a bridge between traditional training & cutting-edge technology.",
    title: "Building the Bridge Between Traditional & Modern Learning",
    description:
      "Karanji started working on creating a bridge between traditional training methods & emerging technologies like AI & Virtual Reality (VR).",
    iconSrc: "/Icons/year08icon.svg",
  },
  {
    year: "2010-13",
    yearDescription:
      "Our first big break came with Infosys - the first validation of our ideas.",
    title: "Growing the Foundation – First Major Client: Infosys",
    description:
      "Through hard work & tad bit of luck, Infosys became the company's first major client, which validated their vision & gave them confidence.",
    iconSrc: "/Icons/year13icon.svg",
  },
  {
    year: "2014-16",
    yearDescription:
      "2014-16 marked a leap into the future with Virtual Reality & Augmented Reality.",
    title: "The Big Leap - Entering Virtual Reality & Augmented Reality",
    description:
      "Karanji made a strategic decision to integrate VR & AR into their learning design, which would revolutionize training & learning processes.",
    iconSrc: "/Icons/year16icon.svg",
  },
  {
    year: "2017",
    yearDescription:
      "In 2017, we formed a strategic partnership with Novigo Solutions, expanding our global reach.",
    title: "Global Expansion – Partnership with Novigo Solutions",
    description:
      "Karanji partnered with Novigo Solutions, gaining access to global clients & resources for more innovative ideas.",
    iconSrc: "/Icons/year17icon.svg",
  },
  {
    year: "2020",
    yearDescription:
      "As the world shifted to remote learning, Karanji was ready to guide businesses with comprehensive digital learning solutions.",
    title:
      "Adapting to the Global Shift - Helping Clients Transition to Remote Learning During COVID-19",
    description:
      "When COVID-19 hit, Karanji quickly adapted & helped businesses shift to remote learning through their integrated solutions.",
    iconSrc: "/Icons/year20icon.svg",
  },
  {
    year: "2024",
    yearDescription:
      "In 2024, we took another leap by forming a full AI team to drive the future of learning & business innovation.",
    title: "The AI Revolution - Building a Full AI Team",
    description:
      "Karanji created a dedicated AI team to help clients use AI in smart, impactful ways for learning & business solutions.",
    iconSrc: "/Icons/year24icon.svg",
  },
  {
    year: "2025",
    yearDescription:
      "In 2024, we took another leap by forming a full AI team to drive the future of learning & business innovation.",
    title: "A Bold New Identity: Reimagined for the Future",
    subTitle:
      "“We rebranded to reflect who we’ve become - an integrated technology partner for the AI era.”",
    description:
      "In 2025, Karanji embraced a new visual identity to match its evolved mission. What began as a digital learning company now leads the way in AI, VR, AR and creative technology. This rebrand marks our transformation into a comprehensive technology services partner, helping businesses across industries create meaningful, human-centered digital experiences.",
    iconSrc: "/Icons/year25icon.svg",
  },
];
const quoteData = {
  title: "Innovate. Design. Transform.",
};
const visionMissionData = {
  visionTitle: "Vision",
  visionDescription:
    "To be the global leader in creative design and emerging technologies, transforming how people learn, engage, and work efficiently.",
  missionTitle: "Mission",
  missionDescription:
    "We create immersive experiences using extended reality, AI and creative design to help organizations improve training, entertainment, and business performance in today's digital world.",
};
const valuesData = [
  {
    icon: "/Company/about/hugeicons_ai-innovation-03.svg",
    title: "Continuous innovation",
    description: "Leading with new ideas in design, AI, and XR.",
  },
  {
    icon: "/Company/about/carbon_collaborate.svg",
    title: "Empowerment",
    description: "Helping people grow through immersive tech.",
  },
  {
    icon: "/Company/about/arcticons_s-trust.svg",
    title: "Impact",
    description: "Transforming how the world learns and works.",
    isFullWidth: true,
  },
  {
    icon: "/Company/about/pepicons-pencil_stars.svg",
    title: "Agility",
    description: "Adapting fast to emerging trends and needs.",
  },
  {
    icon: "/Company/about/emojione-monotone_world-map.svg",
    title: "Integrity",
    description: "Building trust through vision, honesty & progress.",
  },
];

export default function AboutUs() {
  const [showTimeline, setShowTimeline] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    // Lock the background scroll when the timeline is visible
    if (showTimeline) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [showTimeline]);

  const handleContinueJourney = () => {
    setShowTimeline(true);
  };

  const handleBackToAbout = () => {
    setShowTimeline(false);
  };

  const handleNextUp = () => {
    setShowTimeline(false);
    document.getElementById("vision-mission")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleMouseEnter = () => {
    if (timelineRef.current) {
      timelineRef.current.style.overflow = "auto";
    }
  };

  const handleMouseLeave = () => {
    if (timelineRef.current) {
      timelineRef.current.style.overflow = "hidden";
    }
  };

  return (
    <>
      <main className="">
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <WebinarHeader data={heroData} bgImage={"/hero/aboutUsBg.webp"} />
        <div className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
          <JourneySection
            data={{
              ...journeyData,
              onContinueJourney: handleContinueJourney,
            }}
          />
          <div id="vision-mission">
            <VisionMission data={visionMissionData} />
          </div>

          <ValuesSection data={valuesData} />
          <NextUpSection heading="Next Up" cards={cardsData} />
          <QuoteSection data={quoteData} />
        </div>
      </main>

      {/* Timeline Component Overlay */}
      {showTimeline && (
        <div
          ref={timelineRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="fixed inset-0 z-50 bg-gradient-to-br from-purple-50 to-blue-50 "
          style={{
            top: "60px", // Adjusted top position for header
            height: "100vh", // Ensuring full height of the viewport
            overflow: "hidden", // Initially hide overflow
          }}
        >
          <TimelineComponent
            timelineData={timelineData}
            onBackToAbout={handleBackToAbout}
            onNextUp={handleNextUp}
          />
        </div>
      )}
    </>
  );
}
