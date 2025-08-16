import React from "react";
import Image from "next/image";
import Link from "next/link";
import { P1 } from "../CustomTags";

// Card Component with background gradient applied individually
const Card = ({ resource, colSpan }) => {
  return (
    <Link
      href={resource.link}
      className={`group relative col-span-12 md:col-span-${colSpan} rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
      style={{
        background:
          "linear-gradient(83.18deg, #D3C9FF 0.51%, #DCF0FF 48.72%, #FFCFCF 96.92%)",
      }}
    >
      <div className="relative w-full h-52 ">
        <Image
          src={resource.image}
          alt={resource.title}
          fill
          className="object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-black-950 text-xs px-3 py-1 rounded-full font-medium">
          {resource.domain}
        </span>
      </div>

      {/* Card content with gradient background */}
      <div className="p-6 flex flex-col justify-between min-h-[130px] ">
        <P1 className="text-base mb-3 text-gray-800 line-clamp-2 group-hover:text-black-950 transition-colors">
          {resource.title}
        </P1>
        <div className="flex justify-end items-center gap-2">
          <span className="text-lg text-black-900 font-semibold group-hover:text-black-950 transition-colors">
            {resource.cta}
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
  );
};

const ResourcesGrid = ({ resources }) => {
  return (
    <div className="space-y-6">
      {/* First Row: Small (30%) + Large (70%) */}
      <div className="grid grid-cols-12 gap-6">
        <Card resource={resources[0]} colSpan={5} />
        <Card resource={resources[1]} colSpan={7} />
      </div>

      {/* Second Row: Large (70%) + Small (30%) - Reversed */}
      <div className="grid grid-cols-12 gap-6">
        <Card resource={resources[2]} colSpan={7} />
        <Card resource={resources[3]} colSpan={5} />
      </div>
    </div>
  );
};

export default ResourcesGrid;
