import React, { useEffect, useRef, useState } from "react";

const StatsSection = () => {
  const sectionRef = useRef(null);
  const yearNumberRef = useRef(null);
  const yearTextRef = useRef(null);
  const statsGridRef = useRef(null);
  const yearsContainerRef = useRef(null);

  const stats = [
    { title: "18+", subTitle: "years in Business" },
    { title: "240+", subTitle: "Happy Clients" },
    { title: "2400+", subTitle: "Projects Completed" },
    { title: "21000+", subTitle: "e-Learning Hours Developed" },
  ];

  return (
    <section ref={sectionRef} className="w-full py-16">
      <div className="flex    justify-center items-center gap-8 h-full pt-20">
        <div
          ref={statsGridRef}
          className="  my-auto flex items-center gap-8 text-center">
          {stats.map((stat, index) =>
            index === 0 ? (
              <div
                key={index}
                ref={yearsContainerRef}
                className="w-full lg:w-80 text-center space-y-4 lg:space-y-6">
                <p
                  ref={yearNumberRef}
                  className="text-9xl font-medium font-sans bg-gradient-to-br from-[#9E87FF] via-[#6DBFFE] to-[#FF8F8F] text-transparent bg-clip-text">
                  18+
                </p>
                <p
                  ref={yearTextRef}
                  className="text-3xl font-bold font-outfit uppercase leading-9 bg-gradient-to-br from-[#9E87FF] via-[#6DBFFE] to-[#FF8F8F] text-transparent bg-clip-text">
                  Years in Business
                </p>
              </div>
            ) : (
              <div key={index} className="space-y-2">
                <h4 className="text-black/80 text-5xl font-semibold tracking-wider">
                  {stat.title}
                </h4>
                <p className="text-black/70 text-lg font-light uppercase leading-9 tracking-wide">
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
