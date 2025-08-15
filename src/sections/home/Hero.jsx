import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { P1 } from "@/components/CustomTags";
import Link from "next/link";

const HeroSection = ({ data }) => {
  const { title, Subtitles, cta1_text, cta1_link, cta2_text, cta2_link, logo } =
    data || {};
  return (
    <section className="  mt-40 flex flex-col lg:flex-row items-start gap-8">
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <h1 className="">Let’s Bring Your Vision to Life</h1>
          <P1 className="">
            We help organizations solve complex business challenges through the
            strategic integration of digital learning, immersive experiences, &
            practical AI implementation.
          </P1>
        </div>

        {/* CTA Buttons */}
        <div className="flex   flex-col sm:flex-row gap-4">
          <Link href="/technology-solutions">
            <Button className="">Explore Our Solutions</Button>
          </Link>
          <Link href="/resources">
            <Button variant="secondary" className="">
              View Case Studies
            </Button>
          </Link>
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
