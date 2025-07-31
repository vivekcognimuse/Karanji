"use client";

import Advantages from "@/sections/digital-twin/Advantages";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
import HeroSection from "@/sections/Advisory/Hero";
import IndustryExpertise from "@/sections/Advisory/IndustryExpertise";
import Methodology from "@/sections/Advisory/Methodology";

import SuccessStories from "@/sections/Advisory/SuccessStories";
const ADVANTAGES_CONTENT = {
  title: "Advantages",
  cards: [
    {
      id: "01",
      title: "Real-Time Monitoring",
      description:
        "Provides up-to-date data and insights about assets, systems, or processes, allowing for better decision-making.",
      icon: null,
    },
    {
      id: "02",
      title: "Predictive Maintenance",
      description:
        "Identifies potential failures or maintenance needs before they occur, reducing unplanned downtime and repair costs.",
      icon: null,
    },
    {
      id: "03",
      title: "Performance Optimization",
      description:
        "Helps optimize operations and resource usage by simulating different scenarios and identifying the most efficient strategies.",
      icon: null,
    },
    {
      id: "04",
      title: "Cost Savings",
      description:
        "Reduces expenses related to maintenance, energy consumption, and operational inefficiencies.",
      icon: null,
    },
    {
      id: "05",
      title: "Enhanced Product Development",
      description:
        "Allows testing and validating new designs or processes virtually before physical implementation, speeding up innovation and reducing risks.",
      icon: null,
    },
    {
      id: "06",
      title: "Remote Monitoring and Control",
      description:
        "Enables operators to monitor and manage physical systems from anywhere, improving flexibility and responsiveness.",
      icon: null,
    },
    {
      id: "07",
      title: "Increased Safety",
      description:
        "Identifies and mitigates potential safety risks by simulating hazardous scenarios in a virtual environment.",
      icon: null,
    },
    {
      id: "08",
      title: "Improved Collaboration",
      description:
        "Facilitates better communication and collaboration among teams by providing a shared, up-to-date digital representation of assets and processes.",
      icon: null,
    },
    {
      id: "09",
      title: "Sustainability",
      description:
        "Supports environmental goals by optimizing resource usage and reducing waste.",
      icon: null,
    },
    {
      id: "10",
      title: "Historical Analysis",
      description:
        "Maintains a complete digital record of an asset's lifecycle, useful for compliance, audits, and continuous improvement.",
      icon: null,
    },
  ],
};

const exampleStatsCards = [
  {
    mainText: "30%",
    subText: "Extension in Asset Lifecycle",
  },
  {
    mainText: "90%",
    subText: "Reduced DOWNTIME",
  },
];
const industriesData = [
  {
    title: "Aerospace & Defense",
    description:
      "Optimize maintenance turnaround and reduce testing costs with AI-driven predictive models.",
    icon: null,
  },
  {
    title: "Healthcare",
    description:
      "From predictive analytics to patient management solutions that enhance outcomes.",
    icon: null,
  },
  {
    title: "Smart Cities & Construction",
    description:
      "Leverage real-time simulation to reduce project delivery time and energy consumption in construction.",
    icon: null,
  },
  {
    title: "Transportation & Logistics",
    description:
      "Enhance fleet utilization, improve delivery accuracy, and optimize fuel efficiency with advanced AI solutions.",
    icon: null,
  },
  {
    title: "Manufacturing",
    description:
      "Leveraging digital twin-driven optimization and predictive maintenance, manufacturing solutions enhance efficiency & reduce downtime.",
    icon: null,
  },
  {
    title: "Energy & Utilities",
    description:
      "Utilize advanced and actionable predictive analytics to extend equipment lifespan and significantly enhance grid reliability.",
    icon: null,
  },
];

const steps = [
  {
    step: "#1",
    title: "Data Acquisition",
    description: "Connect sensors and devices to feed real-time data",
  },
  {
    step: "#2",
    title: "Digital Modeling",
    description:
      "Create high-fidelity digital replicas of your physical assets, processes.",
  },
  {
    step: "#3",
    title: "Simulation & Predictive Analytics",
    description:
      "Simulate scenarios and forecast outcomes with advanced analytics.",
  },
  {
    step: "#4",
    title: "Optimization & Feedback",
    description:
      "Continuously refine operations based on data-driven insights.",
  },
];

const testimonialsData = [
  {
    title: "AI-Powered Digital Twin for Manufacturing",
    metrics: [
      { value: "25%", label: "Improved Operational Efficiency" },
      { value: "30%", label: "Reduced Downtime" },
    ],
    description:
      "An integrated solution combining digital twins simulations with AI analytics to streamline manufacturing processes, reduce downtime, and optimize production efficiency.",
  },
  {
    title: "Immersive XR Training with AI Personalization",
    metrics: [
      { value: "60%", label: "Increase in training effectiveness" },
      { value: "40%", label: "Faster onboarding" },
    ],
    description:
      "A customized XR training program tailored with AI-driven insights transforming traditional training methods.",
  },
];

const DIGITAL_TWIN_CONTENT = {
  title: "Our Digital Twin Offerings",

  subtitle:
    "From initial concept to real-world impact, we help you harness Digital Twin technology to drive efficiency, resilience, and innovation",

  services: [
    "Consulting & Strategy",
    "Design & Architecture",
    "Data Integration & IoT Connectivity",
    "Development & Implementation",
    "Deployment & Integration",
    "Monitoring & Maintenance",
    "Training & Change Management",
    "Continuous Improvement & Innovation",
  ],

  ctaText: "Get expert guidance tailored to your goals.",
  ctaButtonText: "Talk to our Digital Avatars",

  featuredCards: [
    {
      icon: null,
      title: "Consulting & Strategy",
      description:
        "Foundations for impactful and scalable digital twin adoption",
    },
    {
      icon: null,
      title: "Design & Architecture",
      description:
        "Blueprints for intelligent, connected, scalable twin systems",
    },
    {
      icon: null,
      title: "Data Integration & IoT Connectivity",
      description:
        "Seamless integration for real-time digital twin connectivity",
    },
    {
      icon: null,
      title: "Development & Implementation",
      description:
        "Smart development, immersive interfaces for virtual precision",
    },
  ],
};

const DigitalTwins = () => {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection
        title="Digital Twins & Simulations"
        description=" Create virtual simulations of your physical assets, processes, or systems as digital replicas. Unlocks real-time insights, optimize performance, reduce downtime, predict maintenance needs, and drive proactive innovation."
        linkText="Explore Our Scope of Services"
        linkHref="#solutions"
        backgroundImage="/public/Images/Banner images/Digital Twins & Simulations.webp"
        statsCards={exampleStatsCards}
      />
      <Advantages
        title={ADVANTAGES_CONTENT.title}
        cards={ADVANTAGES_CONTENT.cards}
      />
      <DigitalTwinOfferings
        title={DIGITAL_TWIN_CONTENT.title}
        subtitle={DIGITAL_TWIN_CONTENT.subtitle}
        services={DIGITAL_TWIN_CONTENT.services}
        ctaText={DIGITAL_TWIN_CONTENT.ctaText}
        ctaButtonText={DIGITAL_TWIN_CONTENT.ctaButtonText}
        featuredCards={DIGITAL_TWIN_CONTENT.featuredCards}
      />
      <Methodology
        title="Our Methodology & Technical Architecture"
        description="Our Digital Twins solution is built on a robust methodology that ensures seamless integration between physical and digital realms"
        methodologyData={steps}
      />
      <IndustryExpertise
        title="Industry-Specific Expertise in Digital Twins"
        subtitle="Tailored approaches that address unique challenges in diverse sectors."
        industriesData={industriesData}
      />
      <SuccessStories
        title="Use Cases & Success Stories "
        description="Discover real-world impact as our immersive solutions transform operations across industries "
        testimonialsData={testimonialsData}
      />
    </main>
  );
};

export default DigitalTwins;
