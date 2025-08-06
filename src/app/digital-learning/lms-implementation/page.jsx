// import HeroSection from "@/sections/Advisory/Hero";
// import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
// import CTA from "@/sections/digital-learning/CTA";
// import CustomELearning from "@/sections/digital-learning/CustomELearning";
// import LMSLearning from "@/sections/digital-learning/LMSLearning";
// import SwitchSection from "@/sections/digital-learning/SwitchSection";

// // Static data
// const serviceOfferingsData = [
//   {
//     title: "Built Ground Up",
//     subtitle: "",
//     description:
//       "Tailored for your needs from the very beginning, every feature is customizable.",
//     featured: true,
//     icon: "/Icons/BuiltGroundUp.svg",
//   },
//   {
//     title: "Flexible Deployment",
//     subtitle: "",
//     description:
//       "Choose between cloud-based or on-premise solutions based on your preferences.",
//     featured: false,
//     icon: "/Icons/FlexibleDeployment.svg",
//   },
//   {
//     title: "Value Pricing",
//     subtitle: "",
//     description:
//       "Affordable pay-per-user model with full customization options.",
//     featured: false,
//     icon: "/Icons/ValuePricing.svg",
//   },
//   {
//     title: "Integrate",
//     subtitle: "",
//     description:
//       "Seamlessly connect with any system, regardless of complexity or scale.",
//     featured: false,
//     icon: "/Icons/Integrate.svg",
//   },
// ];

// const lmsLearningData = {
//   title: "Addressing LMS Challenges with K-nest Solutions",
//   description:
//     "Overcome common learning management system hurdles with intuitive navigation, easy content organization, advanced assessments, and simplified user management.",
//   cards: [
//     {
//       title: "Common LMS Challenges",
//       image: null,
//       description: [
//         "Complex navigation frustrates learners",
//         "Difficult content organization",
//         "Limited assessment capabilities",
//         "Poor user management systems",
//       ],
//     },
//     {
//       title: "The K-nest Solution",
//       image: null,
//       description: [
//         "Guided navigation ensures smooth progression",
//         "Easy-to-structure and organize content",
//         "Comprehensive tools to track progress",
//         "Efficient management with streamlined controls",
//       ],
//     },
//   ],
// };

// // ✅ This is now an async component
// export default async function ContentDesign() {
//   const res = await fetch(
//     "http://localhost:1337/api/landing-page?populate=all",
//     {
//       next: { revalidate: 60 },
//     }
//   );
//   const json = await res.json();
//   console.log("Strapi Data:", json);

//   const hero = json.data?.heroSection || null;
//   console.log("Strapi Data:", hero);

//   return (
//     <div className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
//       <HeroSection
//         title={hero?.title}
//         description={hero?.subTitle}
//         linkText={hero?.ctaText}
//         statsCards={hero?.statCard || []}
//       />

//       <ServiceOfferings
//         title=" Discover the Benefits of K-nest LMS"
//         description="Unlock Flexibility, Customization, and Seamless Integration for Your Learning Environment"
//         serviceOfferingsData={serviceOfferingsData}
//       />

//       <LMSLearning
//         cards={lmsLearningData.cards}
//         description={lmsLearningData.description}
//         title={lmsLearningData.title}
//       />

//       <CustomELearning />
//       <SwitchSection />

//       <CTA
//         title="Transform Your Corporate Learning Today"
//         description="Experience the power of a fully-customizable LMS that adapts to your organization’s unique needs"
//         PrimaryButtonText="Take a Demo on K-nest LMS"
//         PrimaryButtonLink="https://knestlms.com/try-demo"
//         SecondaryButtonText="Schedule a Consultation"
//         SecondaryButtonLink="/"
//       />
//     </div>
//   );
// }

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
