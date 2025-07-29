import React from "react";
import { Icon } from "@iconify/react";

const InteractiveDesignSection = () => {
  return (
    <section className="py-10 space-y-8 lg:space-y-16">
      <div className="relative min-h-[400px] lg:min-h-[600px] flex flex-col justify-center items-center">
        {/* Animated Radial Lines */}
        <div className="absolute inset-0 flex justify-center items-center">
          {Array.from({ length: 30 }).map((_, i) => {
            const angle = (i - 15) * 6;
            const width =
              Math.abs(i - 15) < 5
                ? 128
                : Math.abs(i - 15) < 10
                ? 192
                : Math.abs(i - 15) < 15
                ? 256
                : 320;
            return (
              <div
                key={i}
                className="absolute border-t border-neutral-200"
                style={{
                  width: `${width}px`,
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: "center",
                }}
              />
            );
          })}
        </div>

        {/* Center Content */}
      </div>
    </section>
  );
};

export default InteractiveDesignSection;
