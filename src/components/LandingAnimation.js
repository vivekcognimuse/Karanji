"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./ui/Button";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LogoStoryAnimation = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const finalLogoRef = useRef(null);
  const progressBarRef = useRef(null);
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    const logo = logoRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;
    const leftContent = leftContentRef.current;
    const rightContent = rightContentRef.current;
    const finalLogo = finalLogoRef.current;
    const progressBar = progressBarRef.current;

    if (
      !container ||
      !logo ||
      !section1 ||
      !section2 ||
      !section3 ||
      !leftContent ||
      !rightContent ||
      !finalLogo ||
      !progressBar
    ) {
      return;
    }

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Initial state - hide everything except the logo
    gsap.set(leftContent, {
      opacity: 0,
      x: -120,
      scale: 1,
      rotationY: -20,
    });

    gsap.set(rightContent, {
      opacity: 0,
      x: 120,
      scale: 1,
      rotationY: 20,
    });

    gsap.set(finalLogo, {
      opacity: 0,
      x: 0,
      scale: 0.7,
      rotation: -360, // Start rotated so it can spin in
    });

    // Add subtle glow effect to logo sections initially - all at full opacity
    gsap.set([section1, section2, section3], {
      filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))",
      opacity: 1, // Ensure all start at full opacity
    });

    // Create main timeline with multiple stages
    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=4000", // Increased scroll distance
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        refreshPriority: -1,
        onUpdate: (self) => {
          updateProgressAndContent(self.progress);
        },
      },
    });

    // Stage 1: Focus on Creative Learning (0% - 20%)
    mainTL
      // Highlight section 1, hide AI Innovation completely
      .to(section1, {
        filter: "drop-shadow(0 0 20px rgba(251, 182, 206, 0.8))",

        duration: 0.3,
        ease: "power2.out",
      })
      .to(
        section2,
        {
          opacity: 0, // Completely hide AI Innovation

          duration: 0.3,
        },
        "<"
      )
      .to(
        section3,
        {
          opacity: 1,

          duration: 0.3,
        },
        "<"
      )
      // Bring in left content
      .to(
        leftContent,
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        "-=0.1"
      )

      // Stage 2: Transition to AI Innovation (20% - 45%)
      .to(section1, {
        filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))",
        scale: 1,
        opacity: 0, // Completely hide Creative Learning
        duration: 0.3,
      })
      .to(
        section2,
        {
          filter: "drop-shadow(0 0 20px rgba(191, 219, 254, 0.8))",

          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        section3,
        {
          opacity: 1,

          duration: 0.3,
        },
        "<"
      )
      // Bring in right content
      .to(
        rightContent,
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        "-=0.1"
      )

      // Stage 3: Focus on Immersive Tech (45% - 70%)
      .to(section2, {
        filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))",
        scale: 1,
        opacity: 1,
        duration: 0.3,
      })
      .to(
        section3,
        {
          filter: "drop-shadow(0 0 20px rgba(196, 181, 253, 0.8))",

          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        section1,
        {
          opacity: 0, // Completely hide Creative Learning

          duration: 0.3,
        },
        "<"
      )

      // Stage 4: Unify all sections (70% - 85%)
      .to([section1, section2, section3], {
        opacity: 1,
        scale: 1,
        filter: "drop-shadow(0 0 15px rgba(99, 102, 241, 0.4))",
        duration: 0.4,
        ease: "power2.inOut",
      })
      .to(
        logo,
        {
          scale: 1.1,
          rotation: 360,
          duration: 0.6,
          ease: "power2.inOut",
        },
        "<"
      )
      // Clear side content during unification - completely hide
      .to(
        [leftContent, rightContent],
        {
          opacity: 0,
          x: (index, target) => (target === leftContent ? -400 : 400),
          scale: 0.8,
          duration: 0.6,
          ease: "power2.in",
        },
        "<"
      )

      // Stage 5: Transform to final logo with spinning transition (85% - 100%)
      .to(logo, {
        opacity: 0,
        scale: 0.8,
        rotation: 720, // Extra spin during exit
        duration: 0.8,
        ease: "power2.in",
      })
      .to(
        finalLogo,
        {
          opacity: 1,
          scale: 1,
          rotation: 360, // Spin in while appearing
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        "-=0.4" // Overlap the transitions
      );

    const updateProgressAndContent = (progress) => {
      // Update progress bar
      if (progressBar) {
        gsap.to(progressBar, { scaleX: progress, duration: 0.1 });
      }

      // Determine current stage and update content
      let stage = 0;
      if (progress < 0.2) stage = 0; // Initial
      else if (progress < 0.45) stage = 1; // Creative Learning
      else if (progress < 0.7) stage = 2; // AI Innovation
      else if (progress < 0.85) stage = 3; // Immersive Tech
      else stage = 4; // Final unified

      if (stage !== currentStage) {
        setCurrentStage(stage);
        updateContentWithTransition(stage);
      }
    };

    const updateContentWithTransition = (stage) => {
      // Smooth content transitions
      const leftEl = leftContentRef.current;
      const rightEl = rightContentRef.current;

      if (leftEl && rightEl) {
        // For stage 4 and above, completely hide content with more distance
        if (stage >= 4) {
          gsap.to([leftEl, rightEl], {
            opacity: 0,
            x: (index, target) => (target === leftEl ? -500 : 500),
            scale: 0.7,
            duration: 0.5,
            ease: "power2.in",
          });
          return;
        }

        gsap.to([leftEl, rightEl], {
          opacity: 0.7,
          y: 10,
          duration: 0.2,
          onComplete: () => {
            leftEl.innerHTML = getLeftContent(stage);
            rightEl.innerHTML = getRightContent(stage);
            gsap.to([leftEl, rightEl], {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
      }
    };

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getLeftContent = (stage) => {
    const contents = {
      0: "", // Initial state
      1: `
        <div class="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg border border-pink-200">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
            <span class="inline-block px-3 py-1 bg-pink-100 rounded-full text-sm font-medium text-pink-800">Creative Learning Focus</span>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Immersive AR/VR Experiences</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">Leverages narrative immersion to engage learners emotionally and cognitively within virtual environments.</p>
          <div class="flex items-center gap-2 text-pink-600 font-medium cursor-pointer hover:text-pink-700 transition-colors">
            <span class="border-b-2 border-pink-400 pb-1">View Solutions</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      `,
      2: `
        <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-200">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <span class="inline-block px-3 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-800">AI Innovation Focus</span>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Intelligent Analytics Platform</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">Advanced AI algorithms analyze learning patterns and optimize educational outcomes in real-time.</p>
          <div class="flex items-center gap-2 text-blue-600 font-medium cursor-pointer hover:text-blue-700 transition-colors">
            <span class="border-b-2 border-blue-400 pb-1">Explore Technology</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      `,
      3: `
        <div class="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg border border-purple-200">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <span class="inline-block px-3 py-1 bg-purple-100 rounded-full text-sm font-medium text-purple-800">Immersive Tech Focus</span>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Intelligent Simulations & Forecasts</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">Blends experiential learning with AI-driven insights to drive measurable performance and learning outcomes.</p>
          <div class="flex items-center gap-2 text-purple-600 font-medium cursor-pointer hover:text-purple-700 transition-colors">
            <span class="border-b-2 border-purple-400 pb-1">View Simulations</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      `,
      4: `
        <div class="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-xl border border-indigo-200">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
            <span class="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm font-medium text-gray-800">Complete Ecosystem</span>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Unified Learning Platform</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">Integrating creative learning, immersive technology, and AI innovation for transformative educational experiences.</p>
          <div class="flex items-center gap-2 text-indigo-600 font-medium cursor-pointer hover:text-indigo-700 transition-colors">
            <span class="border-b-2 border-indigo-400 pb-1">Discover Platform</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      `,
    };
    return contents[stage] || "";
  };

  const getRightContent = (stage) => {
    const contents = {
      0: "", // Initial state
      1: "", // Only left content in stage 1
      2: `
        <div class="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg border border-cyan-200">
          <h3 class="text-xl font-bold mb-2 text-gray-800">Intelligent Simulations & Real Time Analytics</h3>
          <p class="text-sm text-gray-600 mb-4">Where <strong class="text-blue-600">Immersive Tech</strong> meets <strong class="text-cyan-600">AI Innovation</strong></p>
          <div class="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <div class="w-10 h-10 bg-white rounded-lg opacity-90 flex items-center justify-center">
              <div class="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded"></div>
            </div>
          </div>
          <div class="mt-4 flex items-center text-cyan-600">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span class="text-sm font-medium">Real-time Processing</span>
          </div>
        </div>
      `,
      3: `
        <div class="p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl shadow-lg border border-rose-200">
          <h3 class="text-xl font-bold mb-2 text-gray-800">Story Driven VR/AR Experiences</h3>
          <p class="text-sm text-gray-600 mb-4">Where <strong class="text-purple-600">Creative Learning</strong> meets <strong class="text-pink-600">Immersive Tech</strong></p>
          <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
            <div class="w-10 h-10 bg-white rounded-lg opacity-90 flex items-center justify-center">
              <div class="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded"></div>
            </div>
          </div>
          <div class="mt-4 flex items-center text-purple-600">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span class="text-sm font-medium">Immersive Storytelling</span>
          </div>
        </div>
      `,
      4: `
        <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-xl border border-emerald-200">
          <h3 class="text-xl font-bold mb-2 text-gray-800">Complete Solution Integration</h3>
          <p class="text-sm text-gray-600 mb-4">Where all <strong class="text-emerald-600">three pillars</strong> converge for maximum impact</p>
          <div class="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <div class="w-10 h-10 bg-white rounded-lg opacity-90 flex items-center justify-center">
              <div class="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded"></div>
            </div>
          </div>
          <div class="mt-4 flex items-center text-emerald-600">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            <span class="text-sm font-medium">Unified Experience</span>
          </div>
        </div>
      `,
    };
    return contents[stage] || "";
  };

  return (
    <div className="">
      {/* Empty div above for viewport entry */}

      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div ref={progressBarRef} className="h-full  origin-left scale-x-0" />
      </div>

      {/* Main container - pinned section */}
      <div
        ref={containerRef}
        className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/90 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>

        {/* Left content */}
        <div
          ref={leftContentRef}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 w-80 z-20"
        />

        {/* Logo container - centered */}
        <div className="flex items-center justify-center relative z-10">
          {/* Main pie chart logo */}
          <div ref={logoRef} className="relative">
            <svg
              width="320"
              height="320"
              viewBox="0 0 320 320"
              className="drop-shadow-2xl">
              {/* Background circle with subtle gradient */}
              <defs>
                <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f8fafc" stopOpacity="1" />
                </radialGradient>
              </defs>
              <circle
                cx="160"
                cy="160"
                r="130"
                fill="url(#bgGrad)"
                stroke="#e2e8f0"
                strokeWidth="2"
              />

              {/* Section 1 - Creative Learning (120 degrees, pink) */}
              <g ref={section1Ref}>
                <path
                  d="M 160 160 L 160 30 A 130 130 0 0 1 272.487 200 Z"
                  fill="#f9a8d4"
                  stroke="white"
                  strokeWidth="4"
                />
                <text
                  x="220"
                  y="90"
                  textAnchor="middle"
                  className="text-xs font-bold fill-gray-700">
                  <tspan x="220" dy="0">
                    CREATIVE
                  </tspan>
                  <tspan x="220" dy="14">
                    LEARNING
                  </tspan>
                </text>
              </g>

              {/* Section 2 - AI Innovation (120 degrees, blue) */}
              <g ref={section2Ref}>
                <path
                  d="M 160 160 L 272.487 200 A 130 130 0 0 1 47.513 200 Z"
                  fill="#93c5fd"
                  stroke="white"
                  strokeWidth="4"
                />
                <text
                  x="160"
                  y="250"
                  textAnchor="middle"
                  className="text-xs font-bold fill-gray-700">
                  <tspan x="160" dy="-7">
                    AI
                  </tspan>
                  <tspan x="160" dy="14">
                    INNOVATION
                  </tspan>
                </text>
              </g>

              {/* Section 3 - Immersive Tech (120 degrees, purple) */}
              <g ref={section3Ref}>
                <path
                  d="M 160 160 L 47.513 200 A 130 130 0 0 1 160 30 Z"
                  fill="#a78bfa"
                  stroke="white"
                  strokeWidth="4"
                />
                <text
                  x="100"
                  y="90"
                  textAnchor="middle"
                  className="text-xs font-bold fill-gray-700">
                  <tspan x="100" dy="0">
                    IMMERSIVE
                  </tspan>
                  <tspan x="100" dy="14">
                    TECH
                  </tspan>
                </text>
              </g>
            </svg>
          </div>

          {/* Final detailed logo */}
          <div
            ref={finalLogoRef}
            className="absolute inset-0 flex items-center justify-center">
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              className="drop-shadow-2xl">
              <defs>
                <linearGradient
                  id="finalGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%">
                  <stop offset="0%" stopColor="#f9a8d4" />
                  <stop offset="33%" stopColor="#a78bfa" />
                  <stop offset="66%" stopColor="#93c5fd" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
                <filter id="finalGlow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <circle
                cx="200"
                cy="200"
                r="150"
                fill="url(#finalGrad)"
                filter="url(#finalGlow)"
                opacity="0.95"
              />

              {/* Overlapping geometric shapes representing integration */}
              <circle cx="170" cy="170" r="40" fill="white" opacity="0.4" />
              <circle cx="230" cy="170" r="40" fill="white" opacity="0.4" />
              <circle cx="200" cy="230" r="40" fill="white" opacity="0.4" />

              {/* Central unified element */}
              <circle cx="200" cy="200" r="30" fill="white" opacity="0.9" />
              <circle cx="200" cy="200" r="22" fill="#6366f1" />
              <circle cx="200" cy="200" r="12" fill="white" opacity="0.8" />

              {/* Text around the logo */}
              <text
                x="200"
                y="70"
                textAnchor="middle"
                className="text-base font-bold fill-gray-700">
                CREATIVE LEARNING
              </text>
              <text
                x="300"
                y="210"
                textAnchor="middle"
                className="text-base font-bold fill-gray-700">
                AI INNOVATION
              </text>
              <text
                x="100"
                y="290"
                textAnchor="middle"
                className="text-base font-bold fill-gray-700">
                IMMERSIVE TECH
              </text>

              {/* Unity indicator */}
              <text
                x="200"
                y="350"
                textAnchor="middle"
                className="text-sm font-medium fill-gray-600">
                UNIFIED ECOSYSTEM
              </text>
            </svg>
          </div>
        </div>

        {/* Right content */}
        <div
          ref={rightContentRef}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 w-80 z-20"
        />
      </div>

      {/* Final section - scrollable after animation completes */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-indigo-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-purple-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center space-y-8  w-full px-8 ">
          <h3 className=" text-center w-full justify-start text-black text-6xl font-normal ">
            Innovate.Design.Transform{" "}
          </h3>

          <Button className="">Talk to an Expert</Button>
        </div>
      </div>
    </div>
  );
};

export default LogoStoryAnimation;
