import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";

const XRGaming = async () => {
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

  const serviceOfferingsData = [
    {
      title: "VR/AR Experience Development",
      subtitle: null,
      description: "Custom immersive experiences across platforms",
      featured: false,
      icon: "/Icons/VR-AR.svg",
    },
    {
      title: "Interactive Training Simulations",
      subtitle: null,
      description: "Realistic simulations to boost skills and safety",
      featured: false,
      icon: "/Icons/Interactive-Training.svg",
    },
    {
      title: "Game based learning experiences",
      subtitle: null,
      description:
        "Enhanced learner retention through game based eLearning modules",
      featured: false,
      icon: "/Icons/Game-based-learning.svg",
    },
    {
      title: "XR Infrastructure & Integration",
      subtitle: null,
      description: "Seamlessly connect XR capabilities with systems",
      featured: false,
      icon: "/Icons/XRInfrastructure.svg",
    },
  ];

  const data = await fetchFromStrapi("xr-gaming");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }
  console.log("XRGaming data:", data);
  const { hero, methodology, successStories, serviceOffering } = data || {};

  return (
    <main className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={hero} />

      <ServiceOfferings data={serviceOffering} />

      <Methodology data={methodology} />

      <SuccessStories data={successStories} />
    </main>
  );
};

export default XRGaming;
