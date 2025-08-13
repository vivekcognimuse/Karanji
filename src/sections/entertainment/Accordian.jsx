"use client";
import { P2, P3 } from "@/components/CustomTags";
import { Icon } from "@iconify/react";
import React from "react";

const Accordion = ({ data }) => {
  const { title, subtitle, questions } = data;

  return (
    <>
      <div className="">
        {/* Header */}
        <div className="mb-16">
          <h3 className=" mb-4">{title}</h3>
          {subtitle && <P2 className="">{subtitle}</P2>}
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {questions.map((item, index) => (
            <details
              key={index}
              className="accordion-item group border border-gray-200 rounded-lg overflow-hidden bg-[#F4F2FE] shadow-sm hover:shadow-md transition-shadow duration-200">
              <summary className="accordion-summary w-full px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray[#D3CAFD40]/50 transition-colors duration-200 focus:outline-none focus:ring-2  ">
                <span className="text-gray-900 font-medium text-sm md:text-base pr-4">
                  {item.question}
                </span>

                {/* Custom Chevron */}
                <div className="accordion-chevron flex-shrink-0 w-5 h-5 text-gray-500">
                  <Icon icon="heroicons:chevron-up" className="w-full h-full" />
                </div>
              </summary>

              {/* Answer Content with Grid Animation */}
              <div className="accordion-content border-t border-black-200">
                <div className="accordion-inner p-4 ">
                  <P3 className="text-black-800">{item.answer}</P3>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Remove default details markers */
        .accordion-summary {
          list-style: none;
        }
        .accordion-summary::-webkit-details-marker {
          display: none;
        }

        /* Chevron animation - Ultra smooth */
        .accordion-chevron {
          transform: rotate(0deg);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center;
          will-change: transform;
        }

        .accordion-item[open] .accordion-chevron {
          transform: rotate(180deg);
        }

        /* Content animation using CSS Grid - Buttery smooth */
        .accordion-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s
            cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: grid-template-rows;
        }

        .accordion-item[open] .accordion-content {
          grid-template-rows: 1fr;
        }

        .accordion-inner {
          overflow: hidden;
          opacity: 0;
          transform: translateY(-12px);
          transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s,
            transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s;
          will-change: opacity, transform;
        }

        .accordion-item[open] .accordion-inner {
          opacity: 1;
          transform: translateY(0);
        }

        /* Additional smoothness enhancements */
        .accordion-item {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .accordion-summary {
          transition: background-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Prevent text selection on summary */
        .accordion-summary {
          user-select: none;
          -webkit-user-select: none;
        }

        /* Focus styles */
        .accordion-summary:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: -2px;
        }

        /* Enhanced hover effect with smooth transition */
        .accordion-item:hover {
          box-shadow: 0 8px 25px -5px rgb(0 0 0 / 0.1);
          transform: translateY(-1px);
        }

        /* Smooth focus ring */
        .accordion-summary:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: -2px;
          transition: outline 0.2s ease;
        }

        /* Ultra-smooth opening animation with spring effect */
        @keyframes springOpen {
          0% {
            opacity: 0;
            transform: translateY(-15px) scale(0.98);
          }
          60% {
            opacity: 0.8;
            transform: translateY(2px) scale(1.01);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .accordion-item[open] .accordion-inner {
          animation: springOpen 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Prevent animation on page load */
        .accordion-item:not([open]) .accordion-inner {
          animation: none;
        }
      `}</style>
    </>
  );
};

export default Accordion;
