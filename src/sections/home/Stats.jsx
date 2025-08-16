import Image from "next/image";
import React from "react";

const StatsSection = () => {
  const stats = [
    { title: "18+", subTitle: "years in Business" },
    { title: "240+", subTitle: "Happy Clients" },
    { title: "2400+", subTitle: "Projects Completed" },
    { title: "21000+", subTitle: "e-Learning Hours Developed" },
  ];

  return (
    <section className="w-full">
      <div className=" flex flex-col mt-16 lg:mt-0  lg:flex-row items-center justify-between gap-8  text-center px-4 lg:px-0">
        {stats.map((stat, index) =>
          index === 0 ? (
            <div
              key={index}
              className="w-full lg:w-80 text-center space-y-4 lg:space-y-6">
              <Image
                src="stat.svg"
                alt="Stat Image"
                width={100}
                height={100}
                className="mx-auto w-40 sm:w-48 md:w-56 lg:w-72  h-fit"
              />
            </div>
          ) : (
            <div key={index} className="space-y-2">
              <h4 className="text-black/80 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold tracking-wider">
                {stat.title}
              </h4>
              <p className="text-black/70 text-base sm:text-lg md:text-lg lg:text-lg font-light uppercase leading-7 sm:leading-8 md:leading-8 lg:leading-9 tracking-wide">
                {stat.subTitle}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default StatsSection;
