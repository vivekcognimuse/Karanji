import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";

const Industrychallenge = ({ data }) => {
  const {
    sectionTitle,
    overviewTitle,
    overviewDescription,
    challengesTitle,
    challenges,
    image,
    imageAlt,
  } = data;

  return (
    <section className="">
      <div className="mx-auto">
        {/* Heading */}
        <h3 className="text-3xl font-bold text-gray-900 pb-8">
          {sectionTitle}
        </h3>
        <h4 className="text-xl text-gray-800 mb-4">{overviewTitle}</h4>
        <P2 className="text-gray-700 pb-8">{overviewDescription}</P2>

        {/* Critical Challenges Section */}
        <div className="flex justify-between  items-stretch gap-8">
          {/* Wrapper to hold image and challenges with equal height */}
          <div className="w-full flex gap-8 overflow-hidden">
            {/* Image Section */}
            <div className="w-full md:w-3/5 flex">
              <div className="relative py-4 w-full aspect-[2/1] h-full">
                <Image
                  width={600}
                  height={400}
                  src={image}
                  alt={imageAlt || "Industry  challenges"}
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Challenges Section */}
            <div className="w-full md:w-2/5 flex flex-col justify-between">
              {/* Heading */}
              <h4 className="text-2xl mb-6">{challengesTitle}</h4>

              {/* Card Grid */}
              <div className="grid grid-cols-2 gap-6 flex-grow">
                {challenges.map(({ id, icon, title, description }) => (
                  <div key={id}>
                    <div className=" p-2 rounded-full inline-block">
                      <Image
                        src={icon}
                        alt={title}
                        width={20}
                        height={20}
                        className="text-xl text-white w-12 h-12"
                      />
                    </div>
                    <h5 className="text-lg font-semibold text-black-800 mt-4">
                      {title}
                    </h5>
                    <P3 className="text-sm text-black-500">{description}</P3>
                  </div>
                ))}

                {/* Divider spanning two columns */}
                <div className="col-span-2 my-4">
                  <hr className="border-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industrychallenge;
