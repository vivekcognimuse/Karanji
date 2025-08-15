import MultiCardCarousel from "@/components/animations/MultiCardCarousal";
import { P1, P2, P3 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

/**
 * ELearningSolutions – pixel-aligned Tailwind component matching the provided mock.
 * No motion libs; images supplied via the data prop.
 *
 * Props shape expected:
 * {
 *   title, subtitle,
 *   level1: { label, title, imageSrc, imageAlt },
 *   level2: { label, title, badge, badgeIcon, imageSrc, imageAlt },
 *   cta: { text, buttonText }
 * }
 */
export default function ELearningSolutions({ data }) {
  const { title, subtitle, level1, level2, cta, cards } = data;

  return (
    <section className="relative isolate">
      {/* Header */}
      <div className="mb-16">
        <h3 className="mb-4">{title}</h3>
        <p className="">{subtitle}</p>
      </div>

      {/* Cards */}
      <div className=" w-full  md:min-w-lg  gap-8 mx-auto px-6">
        <MultiCardCarousel>
          {cards.map((card, index) => {
            const { subtitle, description, videoSrc, imageSrc, alt } = card;

            return (
              <div key={index} className="flex flex-wrap gap-4 justify-center">
                <div
                  key={index}
                  className="bg-white max-w-[32rem] w-full aspect-auto rounded-2xl border border-black-300 p-4 flex flex-col">
                  <P1 className="w-fit rounded-full py-2 border border-black-200 mb-4 px-6">
                    {subtitle}
                  </P1>
                  <P3 className="mb-8 flex-grow">{description}</P3>
                  <div className="relative mt-auto aspect-auto border rounded-2xl overflow-hidden flex items-end  w-auto flex-grow">
                    <Image
                      src={imageSrc}
                      alt={alt || description}
                      width={500}
                      height={310}
                      className="w-full   "
                    />

                    <a
                      href={videoSrc}
                      target="_blank"
                      rel="noopener noreferrer">
                      <button className="size-12 cursor-pointer flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 justify-center rounded-full items-center bg-black">
                        <Icon
                          icon="f7:play-fill"
                          className="size-6 text-[#F7D9D9]"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}{" "}
        </MultiCardCarousel>
      </div>
      {/* CTA */}
      <div className="mt-16 flex-col md:flex-row text-center md:text-start flex justify-end items-center gap-4 ">
        <P2 className=" ">{cta.text}</P2>
        <Button size="sm" variant="secondary" className="">
          {cta.buttonText}
        </Button>
      </div>
    </section>
  );
}
