"use client";
import { P2 } from "../CustomTags";
import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

export default function MeetSpeakers({ speakers }) {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto">
        {/* Title with Reveal Animation */}
        <RevealWrapper direction="up" duration={0.5} threshold={0.3}>
          <h3 className="mb-4">{speakers.title}</h3>
        </RevealWrapper>

        {/* Description with Reveal Animation */}
        <RevealWrapper
          direction="up"
          duration={0.5}
          delay={0.1}
          threshold={0.3}
        >
          <P2 className="mx-auto mb-16">{speakers.description}</P2>
        </RevealWrapper>

        {/* Speaker List */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.list.map((speaker, index) => (
            <RevealWrapper
              key={index}
              direction="up"
              duration={0.5}
              delay={0.2 + index * 0.12}
              distance={30}
              threshold={0.3}
            >
              <Link
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-all duration-300 cursor-pointer block"
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
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
