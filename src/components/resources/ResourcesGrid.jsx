import React from "react";
import Image from "next/image";
import Link from "next/link";
import { P1 } from "../CustomTags";
import { cn } from "@/lib/utils";

// Card Component with background gradient applied individually
const Card = ({ resource, className }) => {
  return (
    <Link
      href={resource.link}
      className={cn(
        "group relative rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]",
        className // Apply the className directly passed in the parent
      )}
      style={{
        background:
          "linear-gradient(83.18deg, #D3C9FF 0.51%, #DCF0FF 48.72%, #FFCFCF 96.92%)",
      }}
    >
      <div className="relative w-full h-52">
        <Image
          src={resource.image}
          alt={resource.title}
          fill
          className="object-cover object-center aspect-square group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-black-950 text-xs px-3 py-1 rounded-full font-medium border border-black-100">
          {resource.domain}
        </span>
      </div>

      {/* Card content with gradient background */}
      <div className="p-6 flex flex-col justify-between min-h-[130px]">
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
  // Group resources into pairs for rows
  const createRows = () => {
    const rows = [];
    for (let i = 0; i < resources.length; i += 2) {
      const pair = resources.slice(i, i + 2);
      rows.push(pair);
    }
    return rows;
  };

  const rows = createRows();

  return (
    <div className="space-y-6">
      {rows.map((row, rowIndex) => {
        const isEvenRow = rowIndex % 2 === 0;

        return (
          <div key={rowIndex} className="grid grid-cols-12 gap-6">
            {row.length === 2 ? (
              // Full row with two cards
              isEvenRow ? (
                // Even rows: Small (30%) + Large (70%)
                <>
                  <Card
                    resource={row[0]}
                    className="col-span-12 md:col-span-5"
                  />
                  <Card
                    resource={row[1]}
                    className="col-span-12 md:col-span-7"
                  />
                </>
              ) : (
                // Odd rows: Large (70%) + Small (30%) - Reversed
                <>
                  <Card
                    resource={row[0]}
                    className="col-span-12 md:col-span-7"
                  />
                  <Card
                    resource={row[1]}
                    className="col-span-12 md:col-span-5"
                  />
                </>
              )
            ) : (
              // Single card in the last row (if odd number of resources)
              <Card
                resource={row[0]}
                className="col-span-12 md:col-span-6 md:col-start-4"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ResourcesGrid;
