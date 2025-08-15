import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { P1 } from "@/components/CustomTags";

const HeroSection = ({ data }) => {
  const { title, Subtitles, cta1_text, cta1_link, cta2_text, cta2_link, logo } =
    data || {};
  return (
    <section className="  mt-40 flex flex-col lg:flex-row items-start gap-8">
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <h1 className="">{title}</h1>
          <P1 className="">{Subtitles}</P1>
        </div>

        {/* CTA Buttons */}
        <div className="flex   flex-col sm:flex-row gap-4">
          <Button className="group bg-black lg:py-1 rounded-full overflow-hidden hover:scale-105 transition-transform">
            {cta1_text}
          </Button>
          <Button
            variant="secondary"
            className="group rounded-full border border-black overflow-hidden hover:bg-gray-50 transition-colors">
            {cta2_text}
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <div className=" w-full h-96">
          <Image
            src={logo || "/home/logo.webp"}
            alt="Karanji Logo"
            className=" "
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
