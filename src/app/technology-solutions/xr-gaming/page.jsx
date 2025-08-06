// "use client";

// import Advantages from "@/sections/digital-twin/Advantages";
// import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
// import HeroSection from "@/sections/Advisory/Hero";
// import IndustryExpertise from "@/sections/Advisory/IndustryExpertise";
// import Methodology from "@/sections/Advisory/Methodology";
// import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
// import SuccessStories from "@/sections/Advisory/SuccessStories";

// const DigitalTwins = () => {
//   const ADVANTAGES_CONTENT = {
//     title: "Advantages",
//     cards: [
//       {
//         id: "01",
//         title: "Real-Time Monitoring",
//         description:
//           "Provides up-to-date data and insights about assets, systems, or processes, allowing for better decision-making.",
//         icon: null,
//       },
//       {
//         id: "02",
//         title: "Predictive Maintenance",
//         description:
//           "Identifies potential failures or maintenance needs before they occur, reducing unplanned downtime and repair costs.",
//         icon: null,
//       },
//       {
//         id: "03",
//         title: "Performance Optimization",
//         description:
//           "Helps optimize operations and resource usage by simulating different scenarios and identifying the most efficient strategies.",
//         icon: null,
//       },
//       {
//         id: "04",
//         title: "Cost Savings",
//         description:
//           "Reduces expenses related to maintenance, energy consumption, and operational inefficiencies.",
//         icon: null,
//       },
//       {
//         id: "05",
//         title: "Enhanced Product Development",
//         description:
//           "Allows testing and validating new designs or processes virtually before physical implementation, speeding up innovation and reducing risks.",
//         icon: null,
//       },
//       {
//         id: "06",
//         title: "Remote Monitoring and Control",
//         description:
//           "Enables operators to monitor and manage physical systems from anywhere, improving flexibility and responsiveness.",
//         icon: null,
//       },
//       {
//         id: "07",
//         title: "Increased Safety",
//         description:
//           "Identifies and mitigates potential safety risks by simulating hazardous scenarios in a virtual environment.",
//         icon: null,
//       },
//       {
//         id: "08",
//         title: "Improved Collaboration",
//         description:
//           "Facilitates better communication and collaboration among teams by providing a shared, up-to-date digital representation of assets and processes.",
//         icon: null,
//       },
//       {
//         id: "09",
//         title: "Sustainability",
//         description:
//           "Supports environmental goals by optimizing resource usage and reducing waste.",
//         icon: null,
//       },
//       {
//         id: "10",
//         title: "Historical Analysis",
//         description:
//           "Maintains a complete digital record of an asset's lifecycle, useful for compliance, audits, and continuous improvement.",
//         icon: null,
//       },
//     ],
//   };

//   const serviceOfferingsData = [
//     {
//       title: "VR/AR Experience Development",
//       subtitle: null,
//       description: "Custom immersive experiences across platforms",
//       featured: false,
//       icon: "/Icons/VR-AR.svg",
//     },
//     {
//       title: "Interactive Training Simulations",
//       subtitle: null,
//       description: "Realistic simulations to boost skills and safety",
//       featured: false,
//       icon: "/Icons/Interactive-Training.svg",
//     },
//     {
//       title: "Game based learning experiences",
//       subtitle: null,
//       description:
//         "Enhanced learner retention through game based eLearning modules",
//       featured: false,
//       icon: "/Icons/Game-based-learning.svg",
//     },
//     {
//       title: "XR Infrastructure & Integration",
//       subtitle: null,
//       description: "Seamlessly connect XR capabilities with systems",
//       featured: false,
//       icon: "/Icons/XRInfrastructure.svg",
//     },
//   ];

//   const exampleStatsCards = [
//     {
//       mainText: "30%",
//       subText: "COST REDUCTION",
//     },
//     {
//       mainText: "90%",
//       subText: "LEARNING RETENTION THROUGH VR",
//     },
//     {
//       mainText: "40%",
//       subText: "FASTER ONBOARDING",
//     },
//     {
//       mainText: "25%",
//       subText: "EFFICIENCY IMPROVEMENT",
//     },
//   ];
//   const industriesData = [
//     {
//       title: "Aerospace & Defense",
//       description:
//         "Optimize maintenance turnaround and reduce testing costs with AI-driven predictive models.",
//       icon: null,
//     },
//     {
//       title: "Healthcare",
//       description:
//         "From predictive analytics to patient management solutions that enhance outcomes.",
//       icon: null,
//     },
//     {
//       title: "Smart Cities & Construction",
//       description:
//         "Leverage real-time simulation to reduce project delivery time and energy consumption in construction.",
//       icon: null,
//     },
//     {
//       title: "Transportation & Logistics",
//       description:
//         "Enhance fleet utilization, improve delivery accuracy, and optimize fuel efficiency with advanced AI solutions.",
//       icon: null,
//     },
//     {
//       title: "Manufacturing",
//       description:
//         "Leveraging digital twin-driven optimization and predictive maintenance, manufacturing solutions enhance efficiency & reduce downtime.",
//       icon: null,
//     },
//     {
//       title: "Energy & Utilities",
//       description:
//         "Utilize advanced and actionable predictive analytics to extend equipment lifespan and significantly enhance grid reliability.",
//       icon: null,
//     },
//   ];

//   const METHODOLOGY = [
//     {
//       step: "#1",
//       title: "Discover",
//       description: "Identify requirements & opportunities",
//     },
//     {
//       step: "#2",
//       title: "Design",
//       description: "Create engaging user experiences",
//     },
//     {
//       step: "#3",
//       title: "Develop",
//       description: "Build and refine prototypes",
//     },
//     {
//       step: "#4",
//       title: "Testing",
//       description: "Validate and optimize usability",
//     },
//   ];

//   const testimonialsData = [
//     {
//       title: "AI-Powered Digital Twin for Manufacturing",
//       metrics: [
//         { value: "25%", label: "Improved Operational Efficiency" },
//         { value: "30%", label: "Reduced Downtime" },
//       ],
//       description:
//         "An integrated solution combining digital twins simulations with AI analytics to streamline manufacturing processes, reduce downtime, and optimize production efficiency.",
//     },
//     {
//       title: "Immersive XR Training with AI Personalization",
//       metrics: [
//         { value: "60%", label: "Increase in training effectiveness" },
//         { value: "40%", label: "Faster onboarding" },
//       ],
//       description:
//         "A customized XR training program tailored with AI-driven insights transforming traditional training methods.",
//     },
//   ];

//   return (
//     <main className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
//       <HeroSection
//         title="XR & Gaming Solutions"
//         description="Transforming business operations with immersive XR & Gaming solutions that drive engagement, efficiency, and measurable outcomes."
//         linkText="Explore Our Approach"
//         linkHref="#solutions"
//         backgroundImage="/public/Images/Banner images/Webinar.webp"
//         statsCards={exampleStatsCards}
//       />

//       <ServiceOfferings
//         className="grid-cols-1 md:grid-cols-4 justify-between lg:grid-cols-4"
//         heightDifference={false}
//         title="Our XR & Gaming Offerings"
//         serviceOfferingsData={serviceOfferingsData}
//       />

//       <Methodology
//         title="Our Methodology & Technical Architecture"
//         description="Our Digital Twins solution is built on a robust methodology that ensures seamless integration between physical and digital realms"
//         methodologyData={METHODOLOGY}
//       />

//       <SuccessStories
//         title="Use Cases & Success Stories "
//         description="Discover real-world impact as our immersive solutions transform operations across industries "
//         testimonialsData={testimonialsData}
//       />
//     </main>
//   );
// };

// export default DigitalTwins;
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
