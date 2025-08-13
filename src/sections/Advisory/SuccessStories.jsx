"use client";
import { P2, P3 } from "@/components/CustomTags";
import { TestimonialCarousel } from "@/components/ui/successStoriesCorousal";

import { useState } from "react";

export default function SuccessStories({ data }) {
  const { cards: testimonialsData = [], title, description } = data || {};

  return (
    <section className="">
      <div className="max-w-[1580px] mx-auto">
        <div className="mb-16">
          <h3>{title}</h3>
          <P2 className="text-black mb-8">{description}</P2>
        </div>

        <TestimonialCarousel
          testimonials={testimonialsData}
          autoPlay={true}
          autoPlayDelay={6000}
        />
      </div>
    </section>
  );
}
// import SectionReveal from '@/components/animations/sectionReveal';
// import { P2 } from "@/components/CustomTags";
// import { TestimonialCarousel } from "@/components/ui/successStoriesCorousal";

// export default function SuccessStories({ data }) {
//   const { cards: testimonialsData = [], title, description } = data || {};

//   return (
//     <section
//       // optional per-section tuning
//       data-reveal-amount="0.3" // section enters ~30% to start
//       data-reveal-duration="0.5" // per-item duration
//       data-reveal-stagger="0.12" // delay between items (top→bottom)
//     >
//       <div className="max-w-[1580px] mx-auto">
//         <div className="mb-16">
//           {/* title */}
//           <h3
//             className="opacity-0 will-change-transform"
//             data-reveal
//             data-reveal-dir="up">
//             {title}
//           </h3>

//           {/* description */}
//           <P2
//             className="text-black mb-8 opacity-0 will-change-transform"
//             data-reveal
//             data-reveal-dir="up">
//             {description}
//           </P2>
//         </div>

//         {/* carousel wrapper */}
//         <div
//           className="opacity-0 will-change-transform"
//           data-reveal
//           data-reveal-dir="up">
//           <TestimonialCarousel
//             testimonials={testimonialsData}
//             autoPlay={true}
//             autoPlayDelay={6000}
//           />
//         </div>
//       </div>

//       {/* client-only animator (your code) */}
//       <SectionReveal />
//     </section>
//   );
// }
