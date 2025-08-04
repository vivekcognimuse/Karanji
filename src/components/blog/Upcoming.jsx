// components/blog/Upcoming.jsx
import React from "react";
import { SlidersHorizontal } from "lucide-react";

const upcomingItems = [
  {
    title: "Why Extended Reality is the Next Big Thing in Digital Learning",
    date: "06/08/2025",
    type: "Blog",
  },
  {
    title: "Enhancing Manufacturing Efficiency with Digital Twin Technology",
    date: "07/08/2025",
    type: "Case Study",
  },
  {
    title:
      "How AI Advisory Services Can Help Your Business Unlock the Full Potential of Artificial Intelligence",
    date: "10/08/2025",
    type: "Webinar",
  },
];

const Upcoming = () => {
  return (
    <div className="bg-gradient-to-tr from-white to-purple-50 p-6 rounded-xl ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="">Upcoming</h2>
        <SlidersHorizontal size={16} className="text-gray-600" />
      </div>

      <ul className="divide-y divide-black-950/70">
        {upcomingItems.map((item, idx) => (
          <li key={idx} className="py-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <span className="text-sm text-black font-medium">
                {item.title}
              </span>
              <div className="flex gap-6 text-sm text-gray-500">
                <span>{item.date}</span>
                <span>{item.type}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Upcoming;
