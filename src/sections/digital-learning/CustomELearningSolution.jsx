"use client";
import { P2, P3 } from "@/components/CustomTags";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function CustomELearningSolution({ data, activeTab }) {
  const tabs = data.tabs;
  const tabData = tabs[activeTab];

  return (
    <div className="">
      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Image Section */}
        <div className="flex-shrink-0 lg:col-span-5">
          <Image
            src={tabData.img}
            alt={tabData.title}
            width={256}
            height={160}
            unoptimized
            className="object-cover max-h-[300px] sm:max-h-[400px] lg:max-h-[476px] h-full w-full rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 lg:col-span-7">
          <P2 className="mb-3 lg:mb-4 text-lg sm:text-xl lg:text-2xl">
            {tabData.title}
          </P2>
          <P3 className="text-black-500 mb-4 lg:mb-6 text-sm sm:text-base">
            {tabData.description}
          </P3>
          <div className="flex flex-wrap gap-3 lg:gap-6">
            {tabData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-black-500 bg-white px-4 sm:px-6 border border-black-200 py-2 rounded-full text-xs sm:text-sm">
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Level indicator */}
      <div className="lg:flex hidden justify-center lg:justify-end mt-4">
        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
          <Icon
            icon="iconamoon:mouse"
            className="size-4 sm:size-5 animate-bounce"
          />
          <span>Scroll</span>
        </div>
      </div>
    </div>
  );
}
