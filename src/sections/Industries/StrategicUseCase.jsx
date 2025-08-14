import { P2, P3, P4, P5 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import React from "react";

const StrategicUseCase = ({ data }) => {
  const { sectionTitle, sectionDescription, filterButtons, useCaseCards } =
    data;

  return (
    <section className="py-16 px-6 ">
      <div className=" mx-auto">
        <h3 className=" mb-2 ">{sectionTitle}</h3>
        <P2 className=" mb-8">{sectionDescription}</P2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap  gap-4 mb-10">
          {filterButtons.map((button, idx) => (
            <Button
              key={idx}
              size="sm"
              variant="secondary"
              className={
                button.active
                  ? "bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] text-white px-4 py-2 rounded-full text-sm"
                  : ""
              }
            >
              {button.label}
            </Button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCaseCards.map(
            ({
              id,
              icon,
              category,
              title,
              description,
              duration,
              complexity,
            }) => (
              <div
                key={id}
                className="border border-black-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2 text-sm font-semibold">
                  <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
                    <img
                      src={icon}
                      alt={title}
                      className="text-xl text-white w-5 h-5"
                    />
                  </div>
                  <P5 className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent border border-gray-300 px-2 py-1 rounded-sm">
                    {category}
                  </P5>
                </div>

                <P2 className=" mb-2 border-b border-gray-300">{title}</P2>

                <P3 className="text-black-500 mb-3">{description}</P3>

                <div className="flex justify-between  text-black-500">
                  <P4>{duration}</P4>
                  <P4>{complexity}</P4>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default StrategicUseCase;
