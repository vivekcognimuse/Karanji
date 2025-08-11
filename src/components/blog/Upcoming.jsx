// components/blog/Upcoming.jsx
import React from "react";
import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { P2 } from "../CustomTags";

const upcomingItems = [
  {
    title: "Why Extended Reality is the Next Big Thing in Digital Learning",
    date: "06/08/2025",
    type: "Blog",
    link: "/blog-insights/extended-reality-digital-learning", // Updated routing
  },
  {
    title: "Enhancing Manufacturing Efficiency with Digital Twin Technology",
    date: "07/08/2025",
    type: "Case Study",
    link: "/case-studies/digital-twin-manufacturing", // Updated routing
  },
  {
    title:
      "How AI Advisory Services Can Help Your Business Unlock the Full Potential of Artificial Intelligence",
    date: "10/08/2025",
    type: "Webinar",
    link: "/events-webinars/ai-advisory-services", // Updated routing
  },
];

const Upcoming = () => {
  return (
    <div className="bg-gradient-to-br from-white via-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-2xl text-black-950">Upcoming</h4>
        <SlidersHorizontal
          size={18}
          className="text-gray-500 hover:text-black-950 cursor-pointer transition-colors"
        />
      </div>

      <div className="space-y-0">
        {upcomingItems.map((item, idx) => (
          <div key={idx}>
            <Link
              href={item.link}
              className="group block py-4 px-2 rounded-lg hover:bg-white/60 transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <P2 className="text-black-800 group-hover:text-black-950 transition-colors line-clamp-2 flex-1">
                  {item.title}
                </P2>
                <div className="flex items-center gap-4 md:gap-6 shrink-0">
                  <span className="font-medium text-black-800 text-sm md:w-20">
                    {item.date}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-black-800 rounded-full text-xs font-medium md:w-24 md:text-center">
                    {item.type}
                  </span>
                </div>
              </div>
            </Link>
            {idx < upcomingItems.length - 1 && (
              <div className="border-b border-black-800 mx-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
