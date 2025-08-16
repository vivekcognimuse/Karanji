"use client";
import React from "react";
import { P2 } from "@/components/CustomTags";
import AvatarCard from "./PrakashAvatarCard";
import AvatarCardsContainer from "./PrakashAvatarCard";
import AvatarCardsContainer2 from "./ShrikantAvatarCard";

export default function ChooseAvatarSection({ data }) {
  const { title = "", description = "", avatars = [] } = data;

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-6 sm:mb-8 md:mb-12 max-w-4xl">
          <h3 className="text-black mb-2 sm:mb-3 md:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h3>
          {description && (
            <P2 className="text-gray-700 text-sm sm:text-base">
              {description}
            </P2>
          )}
        </div>

        {/* Avatar Grid */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-4 sm:gap-6 md:gap-8">
          <AvatarCardsContainer />
          <AvatarCardsContainer2 />
        </div>
      </div>

      <style jsx>{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        /* Additional responsive styles for better mobile experience */
        @media (max-width: 640px) {
          .flex-col .relative {
            margin-bottom: 1rem;
          }

          .flex-col .relative:last-child {
            margin-bottom: 0;
          }
        }

        /* Ensure proper spacing on tablet */
        @media (min-width: 641px) and (max-width: 1024px) {
          .flex-row {
            flex-wrap: wrap;
            justify-content: center;
          }

          .flex-row .relative {
            flex: 0 0 calc(50% - 1rem);
            max-width: calc(50% - 1rem);
          }
        }

        /* Desktop and larger - maintain original layout */
        @media (min-width: 1025px) {
          .flex-row .relative {
            flex: 0 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
