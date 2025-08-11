// components/resources/ResourcesGrid.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { P1 } from "../CustomTags";

const resources = [
  {
    type: "Case Study",
    title: "Enhancing Product Exploration with VR Factory Walkthrough",
    image: "/caseStudies/Casestudy 3.webp",
    link: "/case-studies/", // Updated to match your routing
    cta: "View Case Study",
  },
  {
    type: "Webinar",
    title: "Future of Automotive Engineering Training",
    image: "/caseStudies/Casestudy 1.webp",
    link: "/events-webinars/", // Updated to match your routing
    cta: "Register for Webinar",
  },
  {
    type: "Blog",
    title: "Immersive Healthcare Education: Bridging the Skill Gap through VR",
    image: "/blog/Casestudy 2.webp",
    link: "/blog-insights/", // Updated to match your routing
    cta: "Read Blog",
  },
  {
    type: "Blog",
    title: "Advanced VR Applications in Medical Training",
    image: "/blog/Casestudy 2.webp",
    link: "/blog-insights/", // Updated to match your routing
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
          className="group relative rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="relative w-full h-52">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 left-3 bg-white/90 text-black-950 text-xs px-3 py-1 rounded-full font-medium">
              {item.type}
            </span>
          </div>
          <div className="p-6 flex flex-col justify-between min-h-[130px]">
            <P1 className="text-base mb-3 text-gray-800 line-clamp-2 group-hover:text-black-950 transition-colors">
              {item.title}
            </P1>
            <div className="flex justify-end items-center gap-2">
              <span className="text-lg text-black-900 font-semibold group-hover:text-black-950 transition-colors">
                {item.cta}
              </span>
              <Image
                src="/Icons/clarity_arrow-line.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResourcesGrid;
