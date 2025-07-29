import Link from "next/link";
import { Icon } from "@iconify/react";

export default function HeroSection() {
  return (
    <section
      className=" flex flex-col -z-1 min-h-screen lg:flex-row items-center gap-12 py-10
  before:content-[''] before:absolute before:inset-0
  before:bg-[url('/advisory/hero.png')] before:bg-contain before:bg-center before:bg-no-repeat
  before:opacity-12 before:-z-1">
      <div className="flex-1 text-center  lg:text-left space-y-8">
        <div className="space-y-4">
          <h1 className="text-black text-center leading-tight text-6xl font-normal">
            AI Advisory & Implementation
          </h1>
          <p className="text-black text-2xl font-normal text-center leading-9 tracking-wide">
            As a leading artificial intelligence consulting firm, we specialize
            in creating custom strategies that generate results-measurable,
            scalable, and built for the real world.
          </p>
        </div>
        <div className="flex">
          <Link
            href="#solutions"
            className="inline-flex mx-auto items-center gap-2 text-lg text-black tracking-wide hover:opacity-80 transition-opacity">
            Explore Our Offerings
            <Icon icon="carbon:arrow-up-right" className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
