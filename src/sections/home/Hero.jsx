import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { P1 } from "@/components/CustomTags";

const HeroSection = () => {
  return (
    <section className="  mt-40 flex flex-col lg:flex-row items-start gap-8">
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <h1 className="">Let's Bring Your Vision to Life</h1>
          <P1 className="">
            We help organizations solve complex business challenges through the
            strategic integration of digital learning, immersive experiences,
            and practical AI implementation.
          </P1>
        </div>

        {/* CTA Buttons */}
        <div className="flex   flex-col sm:flex-row gap-4">
          <Button className="group bg-black lg:py-1 rounded-full overflow-hidden hover:scale-105 transition-transform">
            Explore Our Solutions
          </Button>
          <Button
            variant="secondary"
            className="group rounded-full border border-black overflow-hidden hover:bg-gray-50 transition-colors">
            View Case Studies
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <div className=" w-full h-96  ">
          <Image
            src="/hero.png"
            alt="Karanji Logo"
            className=" rounded-lg"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
