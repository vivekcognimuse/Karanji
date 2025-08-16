"use client";
import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./ui/Button";
import Link from "next/link";

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

  const currentFrame = (index) => `/animate/${index}.jpg`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 80; // Account for 80px navbar
    };

    setCanvasSize();

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
        if (imagesRef.current[0]) {
          drawImage(0);
        }
      } catch (error) {
        console.error("Error loading images:", error);
        setIsLoading(false);
      }
    };

    const drawImage = (frameIndex) => {
      if (!imagesRef.current[frameIndex] || !context) return;

      const img = imagesRef.current[frameIndex];
      context.clearRect(0, 0, canvas.width, canvas.height);

      const cropPixels = 0; // No crop
      const sourceX = cropPixels;
      const sourceY = cropPixels;
      const sourceWidth = img.width - cropPixels * 2;
      const sourceHeight = img.height - cropPixels * 2;

      const scaleFactor = 0.9;

      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = sourceWidth / sourceHeight;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        drawHeight = canvas.height * scaleFactor;
        drawWidth = drawHeight * imgAspect;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.width * scaleFactor;
        drawHeight = drawWidth / imgAspect;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      context.drawImage(
        img,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        offsetX,
        offsetY,
        drawWidth,
        drawHeight
      );
    };

    animationRef.current = { drawImage };

    preloadImages();

    const handleResize = () => {
      setCanvasSize();
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

  useGSAP(
    () => {
      if (!isLoading && animationRef.current && containerRef.current) {
        const existingTrigger = ScrollTrigger.getById("imageSequence");
        if (existingTrigger) {
          existingTrigger.kill();
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            id: "imageSequence",
            trigger: containerRef.current,
            start: "top top",
            end: "+=1800%",
            pin: true,
            scrub: 1,
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

              // Show CTA button after frame 470
              const ctaButton = document.getElementById("ctaButton");
              if (ctaButton) {
                if (frameIndex >= 470) {
                  gsap.to(ctaButton, { opacity: 1, visibility: "visible" });
                } else {
                  gsap.to(ctaButton, { opacity: 0, visibility: "hidden" });
                }
              }
            },
          },
        });

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
      <section ref={containerRef} className="relative h-screen pt-20">
        <canvas
          ref={canvasRef}
          className="absolute top-20 left-0 w-full z-0"
          style={{ height: "calc(100vh - 80px)" }}
        />
        <div
          id="ctaButton"
          className="absolute bottom-28 left-1/2 transform -translate-x-1/2 opacity-0 visibility-hidden">
          <a target="_blank" href="https://linkly.link/2BKPj">
            <Button>Talk to our CEO Now</Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default ScrollImageSequence;
