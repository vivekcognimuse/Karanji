import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { P1 } from "@/components/CustomTags";
import Link from "next/link";
import Spline from "@splinetool/react-spline/next";
import ScrollButton from "@/components/ScrollButton copy";

const HeroSection = ({ data }) => {
  const { title, Subtitles, cta1_text, cta1_link, cta2_text, cta2_link, logo } =
    data || {};
  return (
    <section className=" min-h-[calc(100vh-5rem)] pt-20  flex flex-col lg:flex-row items-start gap-8">
      <div className="flex-1  space-y-8">
        <div className="space-y-4">
          <h1 className="">Let’s Bring Your Vision to Life</h1>
          <P1 className="">
            We help organizations solve complex business challenges through the
            strategic integration of digital learning, immersive experiences, &
            practical AI implementation.
          </P1>
        </div>
        <div className="w-full lg:hidden lg:w-1/3">
          <div className=" w-full  flex justify-center ">
            <Image
              src={logo || "/home/logo.webp"}
              alt="Karanji Logo"
              className=" w-[50vw] h-full aspect-auto lg:w-full "
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
        {/* CTA Buttons */}
        <div className="flex   flex-col sm:flex-row gap-4">
          <ScrollButton
            variant="primary"
            ctaLink="our-services"
            ctaText="Explore Our Solutions"
          />
          <Link href="/resources">
            <Button variant="secondary" className="w-full md:w-fit">
              View Case Studies
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <Spline
          scene="https://prod.spline.design/4dInLviYPsBE8Zqz/scene.splinecode"
          style={{
            width: "100%",
            height: "500px", // Set explicit height
            maxWidth: "600px",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
