import { P2, P3, P4 } from "@/components/CustomTags";
import React from "react";
import Image from "next/image";
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
            className="bg-white rounded-xl w-full max-w-[20rem] border border-black/10 bg-[url('/gradients/Card default.svg')] bg-contain bg-bottom bg-no-repeat rounded-2xl shadow-lg p-4  z-10 relative"
          >
            <div className="flex mb-4">
              <div className="rounded-full">
                <Image
                  src={icon}
                  alt={title}
                  width={32}
                  height={32}
                  className="h-16 w-16 text-white"
                />
              </div>
            </div>
            <h4 className=" mb-3 ">{title}</h4>
            <ul className="text-sm text-black-500 space-y-2">
              {points.map((point, idx) => (
                <P3 key={idx} className="border-b border-black-200 pt-2 p-4">
                  {point}
                </P3>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalTransformation;
