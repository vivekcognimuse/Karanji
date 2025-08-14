import { P3 } from "@/components/CustomTags";
import React from "react";

const StrategicPriorities = ({ data }) => {
  const { sectionTitle, topRowCards, bottomRowCards } = data;

  return (
    <section className="py-12 px-4">
      <div className=" mx-auto space-y-6 ">
        <h4 className="mb-16">{sectionTitle}</h4>

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topRowCards.map(({ id, value, title, subtitle }) => (
            <div
              key={id}
              className="bg-white rounded-xl border border-gray-300 shadow-md p-6 text-center w-full"
            >
              <h3 className="text-6xl font-thick bg-gradient-to-b from-orange-400 to-purple-600 bg-clip-text text-transparent mb-2">
                {value}
              </h3>
              <h5 className="text-gray-800 font-medium">{title}</h5>
              <P3 className="text-sm text-gray-500">{subtitle}</P3>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-24 mt-6">
          {bottomRowCards.map(({ id, value, title, subtitle }) => (
            <div
              key={id}
              className="bg-white rounded-xl border border-gray-300 shadow-md p-6 text-center w-full"
            >
              <h3 className="text-6xl font-thick bg-gradient-to-b from-orange-400 to-purple-600 bg-clip-text text-transparent mb-2">
                {value}
              </h3>
              <h5 className="text-gray-800 font-medium">{title}</h5>
              <P3 className="text-sm text-gray-500">{subtitle}</P3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPriorities;
