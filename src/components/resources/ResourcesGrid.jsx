import React from "react";
import Image from "next/image";
import Link from "next/link";
import { P1 } from "../CustomTags";

const ResourcesGrid = ({ resources }) => {
  return (
    <div className="space-y-6">
      {/* First Row: Small (30%) + Large (70%) */}
      <div className="grid grid-cols-12 gap-6">
        {/* First card - smaller */}
        <Link
          href={resources[0].link}
          className="group relative col-span-12 md:col-span-5 rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="relative w-full h-52">
            <Image
              src={resources[0].image}
              alt={resources[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 left-3 bg-white/90 text-black-950 text-xs px-3 py-1 rounded-full font-medium">
              {resources[0].type}
            </span>
          </div>
          <div className="p-6 flex flex-col justify-between min-h-[130px]">
            <P1 className="text-base mb-3 text-gray-800 line-clamp-2 group-hover:text-black-950 transition-colors">
              {resources[0].title}
            </P1>
            <div className="flex justify-end items-center gap-2">
              <span className="text-lg text-black-900 font-semibold group-hover:text-black-950 transition-colors">
                {resources[0].cta}
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

        {/* Second card - larger */}
        <Link
          href={resources[1].link}
          className="group relative col-span-12 md:col-span-7 rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="relative w-full h-52">
            <Image
              src={resources[1].image}
              alt={resources[1].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 left-3 bg-white/90 text-black-950 text-xs px-3 py-1 rounded-full font-medium">
              {resources[1].type}
            </span>
          </div>
          <div className="p-6 flex flex-col justify-between min-h-[130px]">
            <P1 className="text-base mb-3 text-gray-800 line-clamp-2 group-hover:text-black-950 transition-colors">
              {resources[1].title}
            </P1>
            <div className="flex justify-end items-center gap-2">
              <span className="text-lg text-black-900 font-semibold group-hover:text-black-950 transition-colors">
                {resources[1].cta}
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
      </div>

      {/* Second Row: Large (70%) + Small (30%) - Reversed */}
      <div className="grid grid-cols-12 gap-6">
        {/* Third card - larger */}
        <Link
          href={resources[2].link}
          className="group relative col-span-12 md:col-span-7 rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="relative w-full h-52">
            <Image
              src={resources[2].image}
              alt={resources[2].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 left-3 bg-white/90 text-black-950 text-xs px-3 py-1 rounded-full font-medium">
              {resources[2].type}
            </span>
          </div>
          <div className="p-6 flex flex-col justify-between min-h-[130px]">
            <P1 className="text-base mb-3 text-gray-800 line-clamp-2 group-hover:text-black-950 transition-colors">
              {resources[2].title}
            </P1>
            <div className="flex justify-end items-center gap-2">
              <span className="text-lg text-black-900 font-semibold group-hover:text-black-950 transition-colors">
                {resources[2].cta}
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

        {/* Fourth card - smaller */}
        <Link
          href={resources[3].link}
          className="group relative col-span-12 md:col-span-5 rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="relative w-full h-52">
            <Image
              src={resources[3].image}
              alt={resources[3].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 left-3 bg-white/90 text-black-950 text-xs px-3 py-1 rounded-full font-medium">
              {resources[3].type}
            </span>
          </div>
          <div className="p-6 flex flex-col justify-between min-h-[130px]">
            <P1 className="text-base mb-3 text-gray-800 line-clamp-2 group-hover:text-black-950 transition-colors">
              {resources[3].title}
            </P1>
            <div className="flex justify-end items-center gap-2">
              <span className="text-lg text-black-900 font-semibold group-hover:text-black-950 transition-colors">
                {resources[3].cta}
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
      </div>
    </div>
  );
};

export default ResourcesGrid;
