"use client";
import React from "react";
import { P2 } from "@/components/CustomTags";
import AvatarCard from "./AvatarCard";

export default function ChooseAvatarSection({ data }) {
  const { title = "", description = "", avatars = [] } = data;

  return (
    <section className="w-full py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12 max-w-4xl">
          <h3 className="text-black mb-4">{title}</h3>
          {description && <P2 className="text-gray-700">{description}</P2>}
        </div>

        {/* Avatar Grid */}
        <div className="flex justify-center gap-8">
          {avatars.map((avatar, index) => (
            <AvatarCard key={index} avatar={avatar} />
          ))}
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
      `}</style>
    </section>
  );
}
