// import HeroSection from "@/sections/Advisory/Hero";
// import Methodology from "@/sections/Advisory/Methodology";
// import SuccessStories from "@/sections/Advisory/SuccessStories";
// import ConsultancyFramework from "@/sections/digital-learning/ConsultancyFramework";
// import ContentFormats from "@/sections/digital-learning/Content-Formats";
// import CTA from "@/sections/digital-learning/CTA";
// import CustomELearning from "@/sections/digital-learning/CustomELearning";
// import CustomELearningSolution from "@/sections/digital-learning/CustomELearningSolution";
// import EcoSystem from "@/sections/digital-learning/Eco-system";
// import Advantages from "@/sections/digital-twin/Advantages";
// import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
// import TechnologyServices from "@/sections/service/Service";
// import React from "react";

// const exampleStatsCards = [
//   {
//     subText: "Complete Learning Solutions",
//   },
//   {
//     subText: "Flexible Talent & Engagement",
//   },
//   {
//     subText: "Modern, Engaging Formats",
//   },
// ];

// const contentFormatsData = [
//   { description: "Custom eLearning", src: null },
//   { description: "Microlearning", src: null },
//   { description: "Short Learning", src: null },
//   { description: "Videos", src: null },
//   { description: "Software Simulations", src: null },
//   { description: "Gamification", src: null },
//   { description: "Comic Strips", src: null },
//   { description: "Story–Tutorials", src: null },
//   { description: "E-books & PDFs", src: null },
// ];

// export const methodologyData = [
//   {
//     step: "#1",
//     title: "Content Creation",
//     description:
//       "We select the ideal content formats, add engaging visuals and animations, and develop interactive learning experiences.",
//     tags: [
//       "Expert SME engagement",
//       "Thorough needs analysis",
//       "Target audience profiling",
//       "Instructional design",
//     ],
//   },
//   {
//     step: "#2",
//     title: "Digitization",
//     description:
//       "We select the ideal content formats, add engaging visuals and animations, and develop interactive learning experiences.",
//     tags: [
//       "Format selection",
//       "Graphic design and visualization",
//       "Animation & interactivity",
//       "Authoring & development",
//     ],
//   },
//   {
//     step: "#3",
//     title: "Localization",
//     description:
//       "We translate and culturally adapt content with voice-overs and rigorous quality checks for a seamless global learning experience.",
//     tags: [
//       "Translation to multiple languages",
//       "Cultural adaptation",
//       "Voice-over and audio production",
//       "Quality assurance",
//     ],
//   },
// ];

// const testimonialsData = [
//   {
//     title: "Custom Content Development",
//     metrics: [
//       { value: "42%", label: "Increase in Course Completion" },
//       { value: "38%", label: "Improved Learner Engagement" },
//     ],
//     description:
//       "Legacy training was replaced with interactive, scenario-based modules and gamified assessments—resulting in significantly higher completion rates and improved learner participation.",
//     link: "Read Full CaseStudy", // optional field if your component uses this
//   },
// ];

// const DIGITAL_TWIN_CONTENT = {
//   title: "Our Digital Twin Offerings",

//   subtitle:
//     "From initial concept to real-world impact, we help you harness Digital Twin technology to drive efficiency, resilience, and innovation",

//   services: [
//     "Consulting & Strategy",
//     "Design & Architecture",
//     "Data Integration & IoT Connectivity",
//     "Development & Implementation",
//     "Deployment & Integration",
//     "Monitoring & Maintenance",
//     "Training & Change Management",
//     "Continuous Improvement & Innovation",
//   ],

//   ctaText: "Get expert guidance tailored to your goals.",
//   ctaButtonText: "Talk to our Digital Avatars",

//   featuredCards: [
//     {
//       icon: "/Icons/Consulting.svg",
//       title: "Consulting & Strategy",
//       description:
//         "Foundations for impactful and scalable digital twin adoption",
//     },
//     {
//       icon: "/Icons/Design.svg",
//       title: "Design & Architecture",
//       description:
//         "Blueprints for intelligent, connected, scalable twin systems",
//     },
//     {
//       icon: "/Icons/Data.svg",
//       title: "Data Integration & IoT Connectivity",
//       description:
//         "Seamless integration for real-time digital twin connectivity",
//     },
//     {
//       icon: "/Icons/Development.svg",
//       title: "Development & Implementation",
//       description:
//         "Smart development, immersive interfaces for virtual precision",
//     },
//   ],
// };
// const ADVANTAGES_CONTENT = {
//   title: "Content library",
//   description:
//     "Accelerate your learning initiatives with our library of pre-built, customizable content. Designed by industry experts, our content is available for immediate deployment, and can be tailored to your brand's needs.",
//   cards: [
//     {
//       id: "01",
//       title: "",
//       description: "Designed by industry experts",
//       icon: null,
//     },
//     {
//       id: "02",
//       title: "",
//       description: "Built on proven instructional principles",
//       icon: null,
//     },
//     {
//       id: "03",
//       title: "",
//       description: "Available for immediate deployment",
//       icon: null,
//     },
//     {
//       id: "04",
//       title: "",
//       description: "Customizable to your brand and specific needs",
//       icon: null,
//     },
//     {
//       id: "05",
//       title: "",
//       description: "Compatible with major LMS platforms",
//       icon: null,
//     },
//   ],
// };

// const ContentDesign = () => {
//   return (
//     <div className="w-full  max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
//       <HeroSection
//         title="End-to-End Digital Learning Solutions"
//         description="From custom content creation to LMS integration and analytics"
//         linkText="Explore Our Services"
//         statsCards={exampleStatsCards}
//       />
//       <CustomELearning />
//       <Methodology
//         column={true}
//         title="Content Development Approach"
//         description="Our streamlined 3-step approach delivers engaging learning content that transforms your training initiatives:"
//         methodologyData={methodologyData}
//       />
//       <ContentFormats
//         content={contentFormatsData}
//         title="Our Content Formats"
//         description="We offer a diverse range of content formats to meet your specific needs, from custom eLearning modules to interactive videos. Each format is designed to keep learners engaged, whether it's for large-scale training or niche subjects."
//       />
//       <CustomELearningSolution />
//       <Advantages
//         title={ADVANTAGES_CONTENT.title}
//         cards={ADVANTAGES_CONTENT.cards}
//       />
//       <DigitalTwinOfferings
//         title={DIGITAL_TWIN_CONTENT.title}
//         subtitle={DIGITAL_TWIN_CONTENT.subtitle}
//         services={DIGITAL_TWIN_CONTENT.services}
//         ctaText={DIGITAL_TWIN_CONTENT.ctaText}
//         ctaButtonText={DIGITAL_TWIN_CONTENT.ctaButtonText}
//         featuredCards={DIGITAL_TWIN_CONTENT.featuredCards}
//       />
//       <SuccessStories
//         title="Success Stories"
//         description="Real results through custom content, scalable libraries, and expert talent—driving faster, smarter learning outcomes."
//         testimonialsData={testimonialsData}
//       />
//       <CTA
//         title="Looking to Enrich Your Learning Content"
//         description="Partner with our experts to craft impactful, learner-centric content through innovative design, agile development, and scalable talent support."
//         SecondaryButtonText="Schedule a Consultation"
//         SecondaryButtonLink="/"
//       />
//     </div>
//   );
// };

// export default ContentDesign;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
