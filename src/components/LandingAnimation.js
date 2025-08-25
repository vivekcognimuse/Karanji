"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PieChartLogo from "./PieChartLogo";
import FinalLogo from "./FinalLogo";
import Button from "./ui/Button";
import { GetLeftContent } from "@/sections/home/LeftContent";
import { GetRightContent } from "@/sections/home/RightContent";

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
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  const [leftContent, setLeftContent] = useState(null);
  const [rightContent, setRightContent] = useState(null);
  const [currentStage, setCurrentStage] = useState(1); // Track current stage

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    const logo = logoRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;
    const leftContentElem = leftContentRef.current;
    const rightContentElem = rightContentRef.current;
    const finalLogo = finalLogoRef.current;
    const progressBar = progressBarRef.current;
    const heading = headingRef.current;
    const button = buttonRef.current;

    if (
      !container ||
      !logo ||
      !section1 ||
      !section2 ||
      !section3 ||
      !leftContentElem ||
      !rightContentElem ||
      !finalLogo ||
      !heading ||
      !button
    ) {
      return;
    }

    // Set initial content for stage 1
    setLeftContent(GetLeftContent(1));
    setRightContent(GetRightContent(1));
    setCurrentStage(1);

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Initial state setup - LEFT AND RIGHT CONTENT HIDDEN
    gsap.set(leftContentElem, {
      opacity: 0,
      x: -120,
      scale: 1,
      rotationY: -20,
    });

    gsap.set(rightContentElem, {
      opacity: 0,
      x: 120,
      scale: 1,
      rotationY: 20,
    });

    gsap.set(finalLogo, {
      opacity: 0,
      scale: 0.7,
      rotation: -360,
    });

    // HIDE HEADING AND BUTTON INITIALLY
    gsap.set(heading, {
      opacity: 0,
      y: 50,
      scale: 0.9,
      visibility: "hidden",
    });

    gsap.set(button, {
      opacity: 0,
      y: 30,
      scale: 0.9,
      visibility: "hidden",
    });

    // ALL SECTIONS VISIBLE AT START
    gsap.set([section1, section2, section3], {
      filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))",
      opacity: 1,
    });

    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=4000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        refreshPriority: -1,
        onUpdate: (self) => {
          updateProgressBar(self.progress);
        },
      },
    });

    // Stage 1: Section 2 hides, left and right content (1) appear
    mainTL
      .call(() => {
        // Ensure content 1 is set
        setLeftContent(GetLeftContent(1));
        setRightContent(GetRightContent(1));
        setCurrentStage(1);
      })
      .to(section2, {
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      })
      .to(
        [leftContentElem, rightContentElem],
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        "-=0.2"
      )

      // Stage 2: Section 2 reappears, left and right content hide (still content 1)
      .to(
        [leftContentElem, rightContentElem],
        {
          opacity: 0,
          x: (index, target) => (target === leftContentElem ? -400 : 400),
          scale: 0.8,
          duration: 0.6,
          ease: "power2.in",
        },
        "+=0.3"
      )
      .to(
        section2,
        {
          duration: 0.3,
          opacity: 1,
          ease: "power2.out",
        },
        "-=0.4"
      )

      // Stage 3: Section 1 hides, left and right content (2) appear
      .to(
        section1,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        "+=0.3"
      )
      .call(() => {
        // Update to content 2
        setLeftContent(GetLeftContent(2));
        setRightContent(GetRightContent(2));
        setCurrentStage(2);
        // Reset position for new content
        gsap.set([leftContentElem, rightContentElem], {
          x: (index, target) => (target === leftContentElem ? -120 : 120),
          scale: 1,
          opacity: 0,
          rotationY: (index, target) => (target === leftContentElem ? -20 : 20),
        });
      })
      .to(
        [leftContentElem, rightContentElem],
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.2)",
        },
        "+=0.1"
      )

      // Stage 4: Section 1 reappears, left and right content hide (still content 2)
      .to(
        [leftContentElem, rightContentElem],
        {
          opacity: 0,
          x: (index, target) => (target === leftContentElem ? -400 : 400),
          scale: 0.8,
          duration: 0.6,
          ease: "power2.in",
        },
        "+=0.3"
      )
      .to(
        section1,
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.4"
      )

      // Stage 5: Section 3 hides, left and right content (3) appear
      .to(
        section3,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        "+=0.3"
      )
      .call(() => {
        // Update to content 3
        setLeftContent(GetLeftContent(3));
        setRightContent(GetRightContent(3));
        setCurrentStage(3);
        // Reset position for new content
        gsap.set([leftContentElem, rightContentElem], {
          x: (index, target) => (target === leftContentElem ? -120 : 120),
          scale: 1,
          opacity: 0,
          rotationY: (index, target) => (target === leftContentElem ? -20 : 20),
        });
      })
      .to(
        [leftContentElem, rightContentElem],
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.2)",
        },
        "+=0.1"
      )

      // Stage 6: Section 3 reappears (all sections unified), left and right content hide, logo spins
      .to(
        [leftContentElem, rightContentElem],
        {
          opacity: 0,
          x: (index, target) => (target === leftContentElem ? -400 : 400),
          scale: 0.8,
          duration: 0.6,
          ease: "power2.in",
        },
        "+=0.3"
      )
      .to(
        section3,
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        [section1, section2, section3],
        {
          filter: "drop-shadow(0 0 15px rgba(99, 102, 241, 0.4))",
          duration: 0.4,
          ease: "power2.inOut",
        },
        "-=0.2"
      )
      .to(
        logo,
        {
          scale: 1.1,
          rotation: 360,
          duration: 0.6,
          ease: "power2.inOut",
        },
        "-=0.4"
      )

      // Stage 7: Final logo transition
      .to(
        logo,
        {
          opacity: 0,
          scale: 0.8,
          rotation: 720,
          duration: 0.8,
          ease: "power2.in",
        },
        "+=0.2"
      )
      .to(
        finalLogo,
        {
          opacity: 1,
          scale: 1,
          rotation: 360,
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        "-=0.4"
      )

      // Stage 8: Beautiful reveal of heading and button
      .set([heading, button], {
        visibility: "visible",
      })
      .fromTo(
        heading,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "expo.out",
        },
        "-=0.3"
      )
      .to(
        heading,
        {
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to(
        heading,
        {
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .fromTo(
        button,
        {
          opacity: 0,
          y: 30,
          scale: 0.8,
          rotationX: -90,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(2)",
        },
        "-=1.2"
      )
      .to(
        button,
        {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "-=0.2"
      )
      .to(button, {
        scale: 1,
        duration: 0.3,
        ease: "elastic.out(1, 0.5)",
      });

    const updateProgressBar = (progress) => {
      if (progressBar) {
        gsap.to(progressBar, {
          scaleX: progress,
          duration: 0.1,
          backgroundColor: `hsl(${progress * 240}, 70%, 60%)`,
        });
      }
    };

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Debug: Log current stage
  useEffect(() => {
    console.log("Current Stage:", currentStage);
  }, [currentStage]);

  return (
    <div>
      <div
        ref={containerRef}
        className="h-screen pt-20 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>
        <div className="flex w-full justify-between">
          <div ref={leftContentRef} className="max-w-96 z-20">
            {leftContent}
          </div>
          <div className="flex items-center mx-auto justify-center relative z-10">
            <PieChartLogo
              logoRef={logoRef}
              section1Ref={section1Ref}
              section2Ref={section2Ref}
              section3Ref={section3Ref}
            />
            <FinalLogo finalLogoRef={finalLogoRef} />
          </div>
          <div ref={rightContentRef} className="z-20 max-w-96">
            {rightContent}
          </div>
        </div>
        <div className="text-center space-y-8 w-full px-8">
          <h3
            ref={headingRef}
            className="text-center w-full justify-start text-black text-6xl font-normal">
            Innovate.Design.Transform
          </h3>
          <div ref={buttonRef}>
            <Button className="">Talk to an Expert</Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center relative overflow-hidden"></div>
    </div>
  );
};

export default LogoStoryAnimation;
