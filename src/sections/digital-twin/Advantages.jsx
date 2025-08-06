import React from "react";
import Image from "next/image";
import { P2, P3 } from "@/components/CustomTags";

// Content constant - matching the exact content from the image

const Advantages = ({ className = "", data }) => {
  const { title, list } = data || {};
  console.log("Fetched Advantages data:", data);
  return (
    <div className={className}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8 items-end">
          {list.map((card, index) => (
            <div
              key={card.id}
              className="border-l-2 border-gray-300 pl-4 flex flex-col justify-end min-h-fit">
              {/* ID Number - positioned at top right of content */}
              <p className="text-5xl font-[100] text-black font-sans mb-3 text-left">
                {(index + 1).toString().padStart(2, "0")}
              </p>

              {/* Title */}
              <P2 className="">{card.title}</P2>

              {/* Description */}
              <P3 className="text-black-500 font-light">{card.description}</P3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
