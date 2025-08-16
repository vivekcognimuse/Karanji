"use client";

import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollImageSequence = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const imagesRef = useRef([]);
  const animationRef = useRef(null);

  const frameCount = 480;

  // Function to get current frame path
  const currentFrame = (index) => `/animate/${index}.jpg`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext("2d");

    // Set canvas size to window size minus navbar
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 80; // Account for 80px navbar
    };

    setCanvasSize();

    // Preload all images
    const preloadImages = async () => {
      const imagePromises = [];

      for (let i = 1; i <= frameCount; i++) {
        const promise = new Promise((resolve, reject) => {
          const img = new Image();
          img.src = currentFrame(i);

          img.onload = () => {
            imagesRef.current[i - 1] = img;
            const progress = Math.round((i / frameCount) * 100);
            setLoadingProgress(progress);
            resolve();
          };

          img.onerror = () => {
            console.error(`Failed to load image: ${currentFrame(i)}`);
            reject();
          };
        });

        imagePromises.push(promise);
      }

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
        // Draw the first frame once all images are loaded
        if (imagesRef.current[0]) {
          drawImage(0);
        }
      } catch (error) {
        console.error("Error loading images:", error);
        setIsLoading(false);
      }
    };

    // Function to draw image on canvas
    const drawImage = (frameIndex) => {
      if (!imagesRef.current[frameIndex] || !context) return;

      const img = imagesRef.current[frameIndex];

      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // CROP SETTINGS - Adjust these to remove borders from source images
      const cropPixels = 0; // Change this to crop borders (e.g., 10 for 10px border)
      // Or use percentage: const cropPercent = 0.02; // 2% crop from each side

      // Calculate source image dimensions after cropping
      const sourceX = cropPixels; // Start X position in source image
      const sourceY = cropPixels; // Start Y position in source image
      const sourceWidth = img.width - cropPixels * 2; // Width to grab from source
      const sourceHeight = img.height - cropPixels * 2; // Height to grab from source

      // SCALE FACTOR - Adjust this to control image size (0.5 = 50%, 0.7 = 70%, etc.)
      const scaleFactor = 0.9; // Change this value to make images smaller/larger

      // Calculate dimensions to maintain aspect ratio and FIT the image within canvas
      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = sourceWidth / sourceHeight; // Use cropped dimensions for aspect ratio

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        // Canvas is wider than image - fit by height
        drawHeight = canvas.height * scaleFactor;
        drawWidth = drawHeight * imgAspect;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        // Canvas is taller than image - fit by width
        drawWidth = canvas.width * scaleFactor;
        drawHeight = drawWidth / imgAspect;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      // Optional: Add a background color or gradient
      // context.fillStyle = '#111111';
      // context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the image with cropping (9 parameters version of drawImage)
      context.drawImage(
        img,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight, // Source rectangle (cropped)
        offsetX,
        offsetY,
        drawWidth,
        drawHeight // Destination rectangle
      );
    };

    // Store drawImage function for GSAP animation
    animationRef.current = { drawImage };

    // Start preloading images
    preloadImages();

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
      // Redraw current frame on resize
      const trigger = ScrollTrigger.getById("imageSequence");
      if (trigger) {
        const currentProgress = trigger.progress || 0;
        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(currentProgress * frameCount)
        );
        drawImage(frameIndex);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // GSAP Animation with ScrollTrigger
  useGSAP(
    () => {
      if (!isLoading && animationRef.current && containerRef.current) {
        // Kill any existing ScrollTrigger with the same ID first
        const existingTrigger = ScrollTrigger.getById("imageSequence");
        if (existingTrigger) {
          existingTrigger.kill();
        }

        // Create new timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            id: "imageSequence",
            trigger: containerRef.current,
            start: "top top",
            end: "+=1800%", // Increased from 400% to 800% for slower animation
            pin: true,
            scrub: 1, // Increased from 0.5 to 1 for smoother, slower scrubbing
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(self.progress * (frameCount - 1))
              );

              if (animationRef.current?.drawImage) {
                animationRef.current.drawImage(frameIndex);
              }
            },
          },
        });

        // Cleanup function
        return () => {
          if (tl.scrollTrigger) {
            tl.scrollTrigger.kill();
          }
          tl.kill();
        };
      }
    },
    { dependencies: [isLoading], scope: containerRef, revertOnUpdate: true }
  );

  return (
    <>
      {/* Image Sequence Animation Section */}
      <section ref={containerRef} className="relative h-screen pt-20">
        <canvas
          ref={canvasRef}
          className="absolute top-20 left-0 w-full"
          style={{ height: "calc(100vh - 80px)" }}
        />
      </section>
    </>
  );
};

export default ScrollImageSequence;
