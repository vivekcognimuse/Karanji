import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef(null);
  const yearNumberRef = useRef(null);
  const yearTextRef = useRef(null);
  const statsGridRef = useRef(null);
  const yearsContainerRef = useRef(null);
  const [currentYear, setCurrentYear] = useState(1);
  const [countingDone, setCountingDone] = useState(false);

  const stats = [
    { value: "240+", label: "Happy Clients" },
    { value: "2400+", label: "Projects Completed" },
    { value: "21000+", label: "e-Learning Hours Developed" },
  ];

  useEffect(() => {
    // Initial setup
    gsap.set(
      [yearNumberRef.current, yearTextRef.current, statsGridRef.current],
      {
        opacity: 0,
      }
    );

    // Step 1: When section comes to middle - reveal and count
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center center",
      once: true,
      onEnter: () => {
        // Show number
        gsap.to(yearNumberRef.current, {
          opacity: 1,
          duration: 0.5,
          onComplete: () => {
            // Count from 1 to 18
            gsap.to(
              {},
              {
                duration: 2,
                ease: "power2.out",
                onUpdate: function () {
                  const count = Math.ceil(
                    gsap.utils.interpolate(1, 18, this.progress())
                  );
                  setCurrentYear(count);
                },
                onComplete: () => {
                  setCurrentYear(18);
                  // Show text
                  gsap.to(yearTextRef.current, {
                    opacity: 1,
                    duration: 0.5,
                    onComplete: () => {
                      setCountingDone(true);
                      // Show stats
                      gsap.to(statsGridRef.current, {
                        opacity: 1,
                        duration: 0.5,
                      });
                    },
                  });
                },
              }
            );
          },
        });
      },
    });

    // Step 2: After counting - scroll trigger to move left
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        if (countingDone) {
          const progress = self.progress;
          // Move years container to left based on scroll
          gsap.to(yearsContainerRef.current, {
            x: -progress * 300,
            duration: 0.1,
          });
        }
      },
    });
  }, [countingDone]);

  return (
    <section ref={sectionRef} className="w-full h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 h-full pt-20">
        {/* Years in Business */}
        <div
          ref={yearsContainerRef}
          className="w-full lg:w-80 text-center space-y-4 lg:space-y-6">
          <h4
            ref={yearNumberRef}
            className="text-violet-400 text-9xl font-medium font-sans">
            {currentYear}+
          </h4>
          <p
            ref={yearTextRef}
            className="text-violet-400 text-3xl font-bold font-outfit uppercase leading-9">
            Years in Business
          </p>
        </div>

        {/* Other Stats */}
        <div
          ref={statsGridRef}
          className="flex-1 my-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
