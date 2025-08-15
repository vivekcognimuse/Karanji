import { P2, P3, P4 } from "@/components/CustomTags";
import React from "react";

const DigitalTransformation = ({ data }) => {
  const { sectionTitle, sectionSubtitle, digitalCards } = data;

  return (
    <section className="">
      <div className=" mx-auto text-left mb-16">
        <h3 className="">{sectionTitle}</h3>
        <P2 className="mt-2">{sectionSubtitle}</P2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
        {digitalCards.map(({ id, title, icon, points }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow p-6 hover:shadow-md transition"
          >
            <div className="flex mb-4">
              <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)]  rounded-full">
                <img src={icon} alt={title} className="h-8 w-8 text-white" />
              </div>
            </div>
            <h4 className=" mb-3 ">{title}</h4>
            <ul className="text-sm text-black-500 space-y-2">
              {points.map((point, idx) => (
                <P4 key={idx} className="border-t pt-2">
                  {point}
                </P4>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalTransformation;
