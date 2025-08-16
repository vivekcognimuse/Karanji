"use client";
import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./ui/Button";
import Link from "next/link";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollVideoSequence = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      console.log("Video can play");
      setVideoLoaded(true);
    };

    const handleLoadedData = () => {
      console.log("Video data loaded");
      setVideoLoaded(true);
    };

    const handleLoadedMetadata = () => {
      console.log("Video metadata loaded");
      setVideoLoaded(true);
    };

    const handleError = (e) => {
      console.error("Video loading error:", e);
      setVideoLoaded(true);
    };

    const handleLoadStart = () => {
      console.log("Video load started");
    };

    // Add multiple event listeners for better coverage
    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    // Fallback timeout to remove loading state
    const timeoutId = setTimeout(() => {
      console.log("Loading timeout - forcing video ready state");
      setVideoLoaded(true);
    }, 3000); // 3 second timeout

    // Force load the video
    video.load();

    return () => {
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
      clearTimeout(timeoutId);
    };
  }, []);

  useGSAP(
    () => {
      if (!videoLoaded || !containerRef.current || !videoRef.current) return;

      const video = videoRef.current;
      const container = containerRef.current;

      const existingTrigger = ScrollTrigger.getById("videoSequence");
      if (existingTrigger) {
        existingTrigger.kill();
      }

      ScrollTrigger.create({
        id: "videoSequence",
        trigger: container,
        start: "top 80%", // Trigger when top of container is 80% down the viewport
        end: "bottom 20%", // End when bottom of container is 20% down the viewport
        onEnter: () => {
          console.log("Video entering viewport - starting playback");
          video.currentTime = 0;

          // Handle audio autoplay restrictions
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.log("Autoplay prevented:", error);
            });
          }
        },
        onLeave: () => {
          console.log("Video left viewport - staying at end");
          // Keep video at current position when leaving
          video.pause();
        },
        onEnterBack: () => {
          console.log("Video re-entering viewport");
          // Resume muted video playback
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.log("Autoplay failed:", error);
            });
          }
        },
        onLeaveBack: () => {
          console.log("Video leaving viewport backwards");
          video.pause();
          video.currentTime = 0; // Reset to beginning when scrolling back up
        },
      });

      // Handle video end event to show CTA
      const handleVideoEnd = () => {
        console.log("Video finished playing");
        const ctaButton = document.getElementById("ctaButton");
        if (ctaButton) {
          gsap.fromTo(
            ctaButton,
            { opacity: 0, visibility: "hidden", y: 20 },
            { opacity: 1, visibility: "visible", y: 0, duration: 1 }
          );
        }
      };

      // Handle video time update to manage CTA visibility
      const handleTimeUpdate = () => {
        const ctaButton = document.getElementById("ctaButton");
        if (ctaButton && video.duration) {
          // Show CTA in last 10% of video
          if (video.currentTime / video.duration > 0.9) {
            gsap.to(ctaButton, { opacity: 1, visibility: "visible" });
          } else {
            gsap.to(ctaButton, { opacity: 0, visibility: "hidden" });
          }
        }
      };

      video.addEventListener("ended", handleVideoEnd);
      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        const trigger = ScrollTrigger.getById("videoSequence");
        if (trigger) trigger.kill();
        video.removeEventListener("ended", handleVideoEnd);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    },
    { dependencies: [videoLoaded], scope: containerRef, revertOnUpdate: true }
  );

  return (
    <>
      <section ref={containerRef} className="relative h-screen">
        {!videoLoaded && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600">Loading video...</p>
            </div>
          </div>
        )}

        <video
          ref={videoRef}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] object-contain z-0 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
          muted
          playsInline
          preload="metadata"
          crossOrigin="anonymous">
          <source src="/Scaled Animation.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div
          id="ctaButton"
          className="absolute bottom-28 left-1/2 transform -translate-x-1/2 opacity-0 invisible z-20">
          <Link href="/company/digital-twin">
            <Button>Talk to our CEO Now</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ScrollVideoSequence;
