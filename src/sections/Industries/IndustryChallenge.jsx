// src/components/Industrychal.jsx
import { P2, P3 } from "@/components/CustomTags";
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
    <section className="bg-white py-12 px-4">
      <div className=" mx-auto">
        {/* Heading */}
        <h3 className="text-3xl font-bold text-gray-900 pb-8">
          {sectionTitle}
        </h3>
        <h4 className="text-xl text-gray-800 mb-4">{overviewTitle}</h4>
        <P2 className="text-gray-700 pb-8">{overviewDescription}</P2>

        {/* Critical Challenges Section */}
        <div className="flex justify-between items-start gap-8">
          {/* Image Section */}
          <div className="w-full md:w-3/5">
            <img
              src={image}
              alt={imageAlt || "Industry challenges"}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Challenges Section */}
          <div className="w-full md:w-2/5">
            {/* Heading */}
            <h4 className="text-2xl  mb-6">{challengesTitle}</h4>

            {/* Card Grid */}
            <div className="grid grid-cols-2 gap-6">
              {challenges.map(({ id, icon, title, description }) => (
                <div key={id}>
                  <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full inline-block">
                    <img
                      src={icon}
                      alt={title}
                      className="text-xl text-white w-5 h-5"
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
    </section>
  );
};

export default Industrychallenge;
