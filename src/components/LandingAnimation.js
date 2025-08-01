"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContentCard, RightContentCard } from "./home/contentCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const sections = [
  {
    left: {
      badge: "Key Services",
      title: "Immersive AR/VR Experiences",
      description:
        "Leverages narrative immersion to engage learners emotionally and cognitively within virtual environments.",
      actionText: "View Solutions",
    },
    right: {
      title: "Story Driven VR/AR Experiences",
      highlight1: "Creative Learning",
      highlight2: "Immersive Tech",
      imageSrc: "/images/vr-girl.png",
    },
    pieChart: [1, 0, 1],
  },
  {
    left: {
      badge: "Key Services",
      title: "Adaptive Personalized Learnings",
      description:
        "Learners follow optimized paths powered by adaptive systems tailored to their unique goals and pace.",
      actionText: "View Solutions",
    },
    right: {
      title: "Adaptive & Personalized Learning",
      highlight1: "Creative Learning",
      highlight2: "AI Innovation",
      imageSrc: "/images/ai-profile.png",
    },
    pieChart: [1, 1, 0],
  },
  {
    left: {
      badge: "Key Services",
      title: "Intelligent Simulations & Forecasts",
      description:
        "Blends experiential learning with AI-driven insights to enhance outcomes and performance.",
      actionText: "View Solutions",
    },
    right: {
      title: "Intelligent Simulations & Real Time Analytics",
      highlight1: "Immersive Tech",
      highlight2: "AI Innovation",
      imageSrc: "/images/cyber-head.png",
    },
    pieChart: [0, 1, 1],
  },
];

const PieChart = ({ active }) => {
  const colors = ["#f9a8d4", "#93c5fd", "#a78bfa"]; // pink, blue, purple
  const sectors = [
    {
      d: "M 160 160 L 160 30 A 130 130 0 0 1 272.487 200 Z", // Creative
      label: ["CREATIVE", "LEARNING"],
      x: 220,
      y: 90,
    },
    {
      d: "M 160 160 L 272.487 200 A 130 130 0 0 1 47.513 200 Z", // AI
      label: ["AI", "INNOVATION"],
      x: 160,
      y: 250,
    },
    {
      d: "M 160 160 L 47.513 200 A 130 130 0 0 1 160 30 Z", // Immersive
      label: ["IMMERSIVE", "TECH"],
      x: 100,
      y: 90,
    },
  ];

  return (
    <svg
      width="320"
      height="320"
      viewBox="0 0 320 320"
      className="drop-shadow-2xl transition-all duration-500">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8fafc" />
        </radialGradient>
      </defs>

      {/* Background circle */}
      <circle
        cx="160"
        cy="160"
        r="130"
        fill="url(#bgGrad)"
        stroke="#e2e8f0"
        strokeWidth="2"
      />

      {/* Render pie slices with fade in/out */}
      {sectors.map((sector, index) => {
        const isActive = active[index];
        return (
          <g key={index}>
            <path
              d={sector.d}
              fill={colors[index]}
              opacity={isActive ? 1 : 0}
              stroke="white"
              strokeWidth="4"
              style={{ transition: "opacity 0.5s ease" }}
            />
            <text
              x={sector.x}
              y={sector.y}
              textAnchor="middle"
              className="text-xs font-bold fill-gray-700"
              style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}>
              <tspan x={sector.x} dy="0">
                {sector.label[0]}
              </tspan>
              <tspan x={sector.x} dy="14">
                {sector.label[1]}
              </tspan>
            </text>
          </g>
        );
      })}
    </svg>
  );
};

const GSAPScrollAnimation = () => {
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const pieChartRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const leftCard = leftCardRef.current;
    const rightCard = rightCardRef.current;
    const pieChart = pieChartRef.current;

    if (!container || !leftCard || !rightCard || !pieChart) return;

    const sectionCount = sections.length;
    const scrollLength = sectionCount * 1000;

    gsap.set(leftCard, { x: "-100%", opacity: 0 });
    gsap.set(rightCard, { x: "100%", opacity: 0 });
    gsap.set(pieChart, { scale: 0.5, opacity: 0 });

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${scrollLength}`,
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const sectionSize = 1 / sectionCount;
        const sectionIndex = Math.floor(progress / sectionSize);
        const sectionProgress = (progress % sectionSize) / sectionSize;

        const clampedIndex = Math.min(sectionIndex, sectionCount - 1);

        // Set section for progress indicator only
        if (clampedIndex !== currentSection) {
          setCurrentSection(clampedIndex);
        }

        const currentData = sections[clampedIndex];

        let leftX, rightX, pieScale, opacity;

        if (sectionProgress <= 0.3) {
          const entry = sectionProgress / 0.3;
          leftX = gsap.utils.interpolate(-100, 0, entry);
          rightX = gsap.utils.interpolate(100, 0, entry);
          pieScale = gsap.utils.interpolate(0.5, 1, entry);
          opacity = entry;
        } else if (sectionProgress <= 0.7) {
          leftX = 0;
          rightX = 0;
          pieScale = 1;
          opacity = 1;
        } else {
          const exit = (sectionProgress - 0.7) / 0.3;
          leftX = gsap.utils.interpolate(0, -100, exit);
          rightX = gsap.utils.interpolate(0, 100, exit);
          pieScale = gsap.utils.interpolate(1, 0.5, exit);
          opacity = 1 - exit;
        }

        gsap.set(leftCard, { x: `${leftX}%`, opacity });
        gsap.set(rightCard, { x: `${rightX}%`, opacity });
        gsap.set(pieChart, { scale: pieScale, opacity });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [currentSection]);

  const currentData = sections[currentSection];

  return (
    <>
      <div
        ref={containerRef}
        className="py-20 bg-white min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-7xl px-6 w-full">
          <div ref={leftCardRef} className="w-full">
            <ContentCard {...currentData.left} />
          </div>
          <div ref={pieChartRef} className="flex justify-center">
            <PieChart active={currentData.pieChart} />
          </div>
          <div ref={rightCardRef} className="w-full">
            <RightContentCard {...currentData.right} />
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {sections.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  idx === currentSection ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Spacer to allow unpinning */}
      <div className="h-[100vh] bg-white" />
    </>
  );
};

export default GSAPScrollAnimation;
