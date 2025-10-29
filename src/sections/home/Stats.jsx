"use client";
import React from "react";

const StatsSection = ({ data }) => {
  const { cards } = data || {};

  return (
    <section className="w-full">
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(
            120deg,
            #9e87ff 0%,
            #6dbffe 30%,
            #ff8f8f 50%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="flex flex-col mt-16 lg:mt-0 lg:flex-row items-center justify-between gap-8 text-center px-4 lg:px-0">
        {cards.map((stat, index) =>
          index === 0 ? (
            <div key={index} className="space-y-2">
              <p className="gradient-text text-5xl sm:text-7xl md:text-7xl lg:text-9xl   tracking-wider">
                {stat.num}
              </p>
              <p className="gradient-text text-xl md:text-3xl lg:text-3xl font-light uppercase leading-7 sm:leading-8 md:leading-8 lg:leading-9 tracking-wide">
                {stat.title}
              </p>
            </div>
          ) : (
            <div key={index} className="space-y-2">
              <h4 className="text-black/80 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold tracking-wider">
                {stat.num}
              </h4>
              <p className="text-black/70 text-base sm:text-lg md:text-lg lg:text-lg font-light uppercase leading-7 sm:leading-8 md:leading-8 lg:leading-9 tracking-wide">
                {stat.title}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default StatsSection;
