"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
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
  const [videoState, setVideoState] = useState({
    loaded: false,
    error: false,
    progress: 0,
  });
  const [showCTA, setShowCTA] = useState(false);
  const scrollTriggerRef = useRef(null);

  // Optimized video loading with better error handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isComponentMounted = true;
    let loadTimeout;

    const updateState = (updates) => {
      if (isComponentMounted) {
        setVideoState((prev) => ({ ...prev, ...updates }));
      }
    };

    // Single handler for successful load events
    const handleLoaded = () => {
      clearTimeout(loadTimeout);
      updateState({ loaded: true, error: false });
      console.log("Video successfully loaded");
    };

    const handleError = (e) => {
      clearTimeout(loadTimeout);
      updateState({ loaded: true, error: true });
      console.error("Video loading error:", e);
    };

    const handleProgress = (e) => {
      if (e.lengthComputable) {
        const progress = (e.loaded / e.total) * 100;
        updateState({ progress });
      }
    };

    // Set up event listeners
    video.addEventListener("canplaythrough", handleLoaded);
    video.addEventListener("error", handleError);
    video.addEventListener("progress", handleProgress);

    // More aggressive loading strategy
    loadTimeout = setTimeout(() => {
      if (!videoState.loaded) {
        console.log("Force loading video after timeout");
        updateState({ loaded: true });
      }
    }, 5000);

    // Preload video more aggressively
    video.preload = "auto";
    video.load();

    return () => {
      isComponentMounted = false;
      clearTimeout(loadTimeout);
      video.removeEventListener("canplaythrough", handleLoaded);
      video.removeEventListener("error", handleError);
      video.removeEventListener("progress", handleProgress);
    };
  }, []);

  // Handle video playback with better error recovery
  const playVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      // Reset if needed
      if (video.ended) {
        video.currentTime = 0;
      }

      await video.play();
      console.log("Video playing successfully");
    } catch (error) {
      console.log("Autoplay prevented, attempting muted playback:", error);
      video.muted = true;
      try {
        await video.play();
      } catch (retryError) {
        console.error("Failed to play video even when muted:", retryError);
      }
    }
  }, []);

  const pauseVideo = useCallback(() => {
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
    }
  }, []);

  // GSAP ScrollTrigger setup
  useGSAP(
    () => {
      if (
        !videoState.loaded ||
        videoState.error ||
        !containerRef.current ||
        !videoRef.current
      )
        return;

      const video = videoRef.current;
      const container = containerRef.current;

      // Clean up existing triggers
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          console.log("Video entering viewport");
          video.currentTime = 0;
          playVideo();
        },
        onLeave: () => {
          console.log("Video leaving viewport");
          pauseVideo();
        },
        onEnterBack: () => {
          console.log("Video re-entering viewport");
          playVideo();
        },
        onLeaveBack: () => {
          console.log("Video leaving viewport backwards");
          pauseVideo();
          video.currentTime = 0;
        },
      });

      // Handle video progress for CTA
      const handleTimeUpdate = () => {
        if (video.duration) {
          const progress = video.currentTime / video.duration;
          setShowCTA(progress > 0.9);
        }
      };

      const handleVideoEnd = () => {
        console.log("Video ended");
        setShowCTA(true);
      };

      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("ended", handleVideoEnd);

      return () => {
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
        }
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("ended", handleVideoEnd);
      };
    },
    {
      dependencies: [
        videoState.loaded,
        videoState.error,
        playVideo,
        pauseVideo,
      ],
      scope: containerRef,
    }
  );

  // CTA animation
  useEffect(() => {
    const ctaButton = document.getElementById("ctaButton");
    if (!ctaButton) return;

    if (showCTA) {
      gsap.to(ctaButton, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    } else {
      gsap.to(ctaButton, {
        opacity: 0,
        y: 20,
        duration: 0.3,
      });
    }
  }, [showCTA]);

  return (
    <section
      ref={containerRef}
      className="lg:min-h-screen flex flex-col items-center justify-center py-8">
      {/* Loading state with progress */}
      {!videoState.loaded && !videoState.error && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/80">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 mb-2">Loading video...</p>
            {videoState.progress > 0 && (
              <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${videoState.progress}%` }}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Video container - no absolute positioning */}
      <div className="w-full max-w-[90vw] mx-auto">
        <video
          ref={videoRef}
          className={`w-full h-auto ${
            videoState.loaded && !videoState.error ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
          muted
          playsInline
          preload="auto"
          poster="/video-poster.jpg" // Add a poster image for better UX
        >
          <source src="/Scaled Animation.webm" type="video/webm" />
          <source src="/Scaled Animation.mp4" type="video/mp4" />{" "}
          {/* Fallback format */}
          Your browser does not support the video tag.
        </video>

        {/* CTA Button - positioned below video */}
        <div
          id="ctaButton"
          className="mt-8 text-center opacity-0 translate-y-5">
          <Link href="/company/digital-twin">
            <Button>Talk to our CEO Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScrollVideoSequence;
