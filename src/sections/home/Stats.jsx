import React from "react";

const StatsSection = () => {
  const stats = [
    { title: "18+", subTitle: "years in Business" },
    { title: "240+", subTitle: "Happy Clients" },
    { title: "2400+", subTitle: "Projects Completed" },
    { title: "21000+", subTitle: "e-Learning Hours Developed" },
  ];

  return (
    <section className="w-full py-16">
      <div className="flex justify-center items-center gap-8 h-full pt-20">
        <div className="my-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-8 gap-y-12 text-center px-4 lg:px-0">
          {stats.map((stat, index) =>
            index === 0 ? (
              <div
                key={index}
                className="w-full lg:w-80 text-center space-y-4 lg:space-y-6">
                <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium font-sans bg-gradient-to-br from-[#9E87FF] via-[#6DBFFE] to-[#FF8F8F] text-transparent bg-clip-text">
                  18+
                </p>
                <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold font-outfit uppercase leading-7 sm:leading-8 md:leading-8 lg:leading-9 bg-gradient-to-br from-[#9E87FF] via-[#6DBFFE] to-[#FF8F8F] text-transparent bg-clip-text">
                  Years in Business
                </p>
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
      </div>
    </section>
  );
};

export default StatsSection;
