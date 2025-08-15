import React, { useEffect, useRef } from "react";

const StickyVideoScroll = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    // Dynamically load GSAP and ScrollTrigger
    const loadGSAP = async () => {
      const gsapScript = document.createElement("script");
      gsapScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      document.head.appendChild(gsapScript);

      const scrollTriggerScript = document.createElement("script");
      scrollTriggerScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
      document.head.appendChild(scrollTriggerScript);

      // Wait for scripts to load
      await new Promise((resolve) => {
        let loaded = 0;
        const checkLoaded = () => {
          loaded++;
          if (loaded === 2) resolve();
        };
        gsapScript.onload = checkLoaded;
        scrollTriggerScript.onload = checkLoaded;
      });

      // Initialize GSAP animations after scripts are loaded
      initializeAnimations();
    };

    const initializeAnimations = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const video = videoRef.current;
      const container = containerRef.current;

      if (!video || !container) return;

      // Ensure video metadata is loaded before accessing duration
      video.addEventListener("loadedmetadata", () => {
        console.log("Video duration:", video.duration); // Log the video duration
        const videoDuration = video.duration;

        // Create ScrollTrigger for video playback control
        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "+=300%", // Adjust this value to control scroll length
          pin: true,
          scrub: 1, // This makes scroll position map directly to video time
          onUpdate: (self) => {
            // Update video time based on scroll progress
            const progress = self.progress;
            video.currentTime = videoDuration * progress;
          },
          onEnter: () => {
            // Ensure video is ready to play when it enters the view
            video
              .play()
              .then(() => {
                video.pause(); // Pause immediately as we control via scroll
              })
              .catch((e) => console.log("Video play error:", e));
          },
        });

        // Animate overlay text elements using GSAP
        textRefs.current.forEach((el, index) => {
          if (el) {
            gsap.fromTo(
              el,
              {
                opacity: 0,
                y: 50,
                scale: 0.9,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                scrollTrigger: {
                  trigger: container,
                  start: `top+=${index * 25}% top`,
                  end: `top+=${index * 25 + 20}% top`,
                  scrub: 1,
                  toggleActions: "play reverse play reverse",
                },
              }
            );
          }
        });
      });

      // Clean up function to remove ScrollTriggers
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    loadGSAP();

    // Cleanup
    return () => {
      const triggers = window.ScrollTrigger?.getAll();
      if (triggers) {
        triggers.forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* First Section - Hero */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Welcome to Our Site
          </h1>
          <p className="text-xl text-gray-300">
            Scroll down to experience the magic
          </p>
          <div className="mt-8 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Second Section - Sticky Video */}
      <section
        ref={containerRef}
        className="relative h-screen overflow-hidden bg-black">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          playsInline
          muted
          preload="auto">
          <source src="/video.mp4" type="video/mp4" />
          {/* Replace with your video path: "/path/to/your/video.mp4" */}
        </video>

        {/* Overlay Content (Optional) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white z-10">
            <h2
              ref={(el) => (textRefs.current[0] = el)}
              className="text-5xl font-bold mb-4 drop-shadow-2xl">
              Immersive Experience
            </h2>
            <p
              ref={(el) => (textRefs.current[1] = el)}
              className="text-xl drop-shadow-lg">
              Controlled by your scroll
            </p>
          </div>
        </div>

        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
      </section>

      {/* Third Section - Continue scrolling */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="text-center text-white max-w-3xl px-6">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Continue Your Journey
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The video section above was controlled entirely by your scroll. This
            technique creates engaging, interactive experiences.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition-transform">
            Explore More
          </button>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">More Content Below</h2>
          <p className="text-xl text-gray-400">
            Keep scrolling to discover more...
          </p>
        </div>
      </section>
    </div>
  );
};

export default StickyVideoScroll;
