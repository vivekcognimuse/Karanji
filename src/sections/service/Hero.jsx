// Updated Hero.jsx
"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import useCMSStore from "@/stores/cmsStore";

export default function HeroSection() {
  const { heroData } = useCMSStore();

  return (
    <section
      className="flex flex-col -z-1 min-h-screen lg:flex-row items-center gap-12 py-10
      before:content-[''] before:absolute before:inset-0
      before:bg-contain before:bg-center before:bg-no-repeat
      before:opacity-20 before:-z-1"
      style={{
        "--bg-image": `url('${heroData.backgroundImage}')`,
      }}>
      <div className="flex-1 text-center lg:text-left space-y-8">
        <div className="space-y-4">
          <h1 className="text-black text-center leading-tight text-6xl font-normal">
            {heroData.title}
          </h1>
          <p className="text-black text-2xl font-normal text-center leading-9 tracking-wide">
            {heroData.description}
          </p>
        </div>
        <div className="flex">
          <Link
            href={heroData.ctaLink}
            className="inline-flex mx-auto items-center gap-2 text-lg text-black tracking-wide hover:opacity-80 transition-opacity">
            {heroData.ctaText}
            <Icon icon="carbon:arrow-up-right" className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
