"use client";
import { P2, P3 } from "@/components/CustomTags";
import React, { useState } from "react";

const DigitalAdoption = ({ data }) => {
  const { sectionTitle, sectionDescription, digitalCards } = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const showArrows = digitalCards.length > 4;
  const visibleCards = digitalCards.slice(currentIndex, currentIndex + 4);

  const handlePrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(digitalCards.length - 4, currentIndex + 1));
  };

  return (
    <section className="">
      <div className="mx-auto text-left mb-16">
        <h4 className="mb-8">{sectionTitle}</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto relative">
          {visibleCards.map(({ id, title, icon, description }) => (
            <div
              key={id}
              className={`bg-white rounded-xl shadow-md p-6 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                hoveredCard === id ? "scale-110 z-10" : "hover:scale-105"
              }`}
              onMouseEnter={() => setHoveredCard(id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Front Face (Default) */}
              <div
                className={`transition-opacity duration-300 ${
                  hoveredCard === id ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="flex mb-4">
                  <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
                    <img
                      src={icon}
                      alt={title}
                      className="h-6 w-6 text-white"
                    />
                  </div>
                </div>
                <h5 className="mb-3 font-medium">{title}</h5>
                <P3 className="text-sm text-gray-500">{description}</P3>
              </div>

              {/* Back Face (Hover) */}
              <div
                className={`absolute inset-0 p-6 transition-opacity duration-300 ${
                  hoveredCard === id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="h-full flex flex-col justify-between">
                  <div className="border-t border-gray-200 pt-4">
                    <P3 className="text-sm text-gray-600">{description}</P3>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
                      <img
                        src={icon}
                        alt={title}
                        className="h-6 w-6 text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && (
          <div className="flex justify-end mt-6 space-x-2">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background:
                  "linear-gradient(83.18deg, #D3C9FF 0.51%, #DCF0FF 48.72%, #FFCFCF 96.92%)",
              }}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= digitalCards.length - 4}
              className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background:
                  "linear-gradient(83.18deg, #D3C9FF 0.51%, #DCF0FF 48.72%, #FFCFCF 96.92%)",
              }}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Section Description */}
        <P2 className="mt-8 text-gray-600">{sectionDescription}</P2>
      </div>
    </section>
  );
};

export default DigitalAdoption;
