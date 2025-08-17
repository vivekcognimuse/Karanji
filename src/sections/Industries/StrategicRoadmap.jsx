import { P2, P3 } from "@/components/CustomTags";
import React from "react";

const StrategicRoadmap = ({ data }) => {
  const { sectionTitle, sectionDescription, roadmapData } = data;

  return (
    <section className="">
      <div className="mx-auto">
        <h3 className=" pb-4">{sectionTitle}</h3>
        <P2 className="text-gray-600 mb-16">{sectionDescription}</P2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapData.map(({ title, timeframe, intro, points, note }, idx) => (
            <div key={idx}>
              <h4 className=" mb-1">{title}</h4>
              <P3 className=" text-black-500">{timeframe}</P3>
              <div className="border-b border-gray-300 mb-3 mt-1"></div>

              {intro && <P3 className=" text-black-500 mb-2">{intro}</P3>}

              <ul className=" text-black-700 px-2 list-disc list-inside space-y-1">
                {points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <P3 className="mt-4  font-medium text-black-900">{note}</P3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicRoadmap;
