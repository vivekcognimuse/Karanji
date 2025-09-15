// import HeroSection from "@/sections/Advisory/Hero";
// import CTA from "@/sections/digital-learning/CTA";
// import Industrychallenge from "@/sections/digital-learning/analytics/Deliverables";
// import StrategicPriorities from "@/sections/Industries/StrategicPriorities";
// import DigitalTransformation from "@/sections/Industries/DigitalTransformation";
// import StrategicRoadmap from "@/sections/Industries/StrategicRoadmap";
// import StrategicUseCase from "@/sections/Industries/StrategicUseCase";
// import Methodology from "@/sections/Advisory/Methodology";

// import { fetchFromStrapi } from "@/lib/strapi";
// import { getMetadata } from "@/lib/metadata";
// export async function generateMetadata() {
//   return await getMetadata("healthcare");
// }
// export default async function HealthCare() {
//   const data = await fetchFromStrapi("healthcare");
//   if (!data) {
//     console.error("No data object provided for healthcare.");
//     return null; // Or return a fallback UI component
//   }
//   const {
//     heroData,
//     industryData,
//     strategicPrioritiesData,
//     digitalTransformationData,
//     strategicFramework,
//     strategicRoadmapData,
//     strategicUseCaseData,
//     ctaData,
//   } = data || {};
//   return (
//     <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
//       <HeroSection
//         data={heroData}
//         bgImage={"/Industries & its pages/Healthcare/Healthcare banner.webp"}
//       />

//       <Industrychallenge data={industryData} />
//       <StrategicPriorities data={strategicPrioritiesData} />
//       <div id="digital-transformation-landscape">
//         <DigitalTransformation
//           data={digitalTransformationData}
//           bgImage="/gradients/Card default.svg"
//         />
//       </div>
//       <Methodology data={strategicFramework} />
//       <StrategicRoadmap data={strategicRoadmapData} />
//       <StrategicUseCase
//         data={strategicUseCaseData}
//         icon="/Industries & its pages/Healthcare/usecase"
//       />
//       <CTA data={ctaData} />
//     </main>
//   );
// }

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
