// components/blog/Upcoming.jsx
import React from "react";
import Link from "next/link";
import { P2 } from "../CustomTags";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

// Accept items as a prop from the page
const Upcoming = ({ items = [] }) => {
  // You can sort here if not sorted already
  const sorted = [...items].sort((a, b) => {
    const da = a._date ? new Date(a._date).getTime() : 0;
    const db = b._date ? new Date(b._date).getTime() : 0;
    return db - da;
  });

  return (
    <RevealWrapper
      direction="up"
      duration={0.7}
      delay={0.2}
      distance={40}
      threshold={0.15}
    >
      <div className="bg-gradient-to-br from-white via-purple-50 to-blue-50 px-4 py-6 sm:p-6 md:p-8 rounded-2xl border border-purple-100 shadow-sm">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h4 className="text-2xl text-black-950">Upcoming</h4>
        </div>

        <div className="space-y-0">
          {sorted.map((item, idx) => (
            <div key={`${item.type}-${item.link}-${idx}`}>
              <Link
                href={item.link}
                aria-label={`Open ${item.title} (${item.type})`}
                className="group block py-3 sm:py-4 px-0 sm:px-2 rounded-lg hover:bg-white/60 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <P2 className="text-black-800 group-hover:text-black-950 transition-colors line-clamp-2 flex-1">
                    {item.title}
                  </P2>

                  <div className="flex items-center gap-3 sm:gap-4 md:gap-6 shrink-0 flex-wrap sm:flex-nowrap">
                    <span className="text-gray-500 text-sm sm:text-base truncate max-w-[220px] sm:max-w-none">
                      {item.domain || item.type}
                    </span>
                    <span className="font-medium text-black-800 text-sm md:w-20">
                      {item._date
                        ? new Date(item._date).toLocaleDateString()
                        : ""}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-black-800 rounded-full text-xs font-medium md:w-24 md:text-center">
                      {item.type}
                    </span>
                  </div>
                </div>
              </Link>

              {idx < sorted.length - 1 && (
                <div className="border-b border-black-800 mx-0 sm:mx-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </RevealWrapper>
  );
};

export default Upcoming;
