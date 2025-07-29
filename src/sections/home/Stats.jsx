import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "240+", label: "Happy Clients" },
    { value: "2400+", label: "Projects Completed" },
    { value: "21000+", label: "e-Learning Hours Developed" },
  ];

  return (
    <section className="w-full ">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
        {/* Years in Business */}
        <div className="w-full lg:w-80 text-center space-y-4 lg:space-y-6">
          <h4 className="text-violet-400  text-9xl font-medium font-sans ">
            18+
          </h4>
          <p className="text-violet-400  text-3xl font-bold font-outfit uppercase leading-9">
            Years in Business
          </p>
        </div>

        {/* Other Stats */}
        <div className="flex-1 my-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h4 className="text-black/80 text-5xl font-semibold tracking-wider">
                {stat.value}
              </h4>
              <p className="text-black/70 text-lg font-light uppercase leading-9 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
