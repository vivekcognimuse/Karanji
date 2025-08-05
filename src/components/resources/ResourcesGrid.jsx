// components/resources/ResourcesGrid.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const resources = [
  {
    type: "Casestudy",
    title: "Enhancing Product Exploration with VR Factory Walkthrough",
    image: "/caseStudies/Casestudy 3.webp",
    link: "/casestudies/201",
    cta: "View CaseStudy",
  },
  {
    type: "Webinar",
    title: "Future of Automotive Engineering Training",
    image: "/caseStudies/Casestudy 1.webp",
    link: "/webinars/future-automotive",
    cta: "Register for Webinar",
  },
  {
    type: "Blog",
    title: "Immersive Healthcare Education: Bridging the Skill Gap through VR",
    image: "/blog/Casestudy 2.webp",
    link: "/blog/healthcare-skill-gap",
    cta: "Read Blog",
  },
  {
    type: "Blog",
    title: "Immersive Healthcare Education: Bridging the Skill Gap through VR",
    image: "/blog/Casestudy 2.webp",
    link: "/blog/healthcare-skill-gap-2",
    cta: "Read Blog",
  },
];

const ResourcesGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {resources.map((item, idx) => (
        <Link
          href={item.link}
          key={idx}
          className="group relative rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow"
        >
          <div className="relative w-full h-52">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded-md opacity-90">
              {item.type}
            </span>
          </div>
          <div className="p-4 flex flex-col justify-between min-h-[130px]">
            <p className="font-medium text-sm mb-2 text-black/80">
              {item.title}
            </p>
            <span className="text-sm text-black font-semibold group-hover:underline inline-flex items-center gap-1">
              {item.cta} <span aria-hidden>↗</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResourcesGrid;
