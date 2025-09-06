"use client";
import { P2 } from "../CustomTags";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

export default function MeetSpeakers({ speakers }) {
  return (
    <section
      className="py-20 px-6"
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
    >
      <div className="mx-auto">
        {/* Title with Reveal Animation */}
        <h3 className="mb-4" data-reveal data-reveal-dir="up">
          {speakers.title}
        </h3>

        {/* Description with Reveal Animation */}
        <P2 className="mx-auto mb-16" data-reveal data-reveal-dir="up">
          {speakers.description}
        </P2>

        {/* Speaker List */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.list.map((speaker, index) => (
            <Link
              key={index}
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-all duration-300 cursor-pointer block"
              data-reveal
              data-reveal-dir="up" // Added reveal animation for each speaker
            >
              <div className="mb-6">
                <Image
                  height={80}
                  width={80}
                  unoptimized
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="px-4 text-left">
                <div className="flex items-center justify-between mb-2">
                  <h4>{speaker.name}</h4>
                  <svg
                    className="w-6 h-6 text-black-950"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </div>
                <p className="text-black-500 text-xl max-w-2xs leading-relaxed">
                  {speaker.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </section>
  );
}
