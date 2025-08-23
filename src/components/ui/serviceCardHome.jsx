"use client";
import { memo } from "react";
import Image from "next/image";

import { Icon } from "@iconify/react";

import CarouselContainer from "../animations/Carousal";
import { P1 } from "../CustomTags";
import Link from "next/link";

export const ServiceCardHome = memo(function ServiceCard({
  cards = [],
  image,
  bgImage,
  ...props
}) {
  const dirForIndex = (i) =>
    i % 3 === 0 ? "right" : i % 3 === 1 ? "up" : "left";

  return (
    <div
      className="service-cards-container px-4  gap-8 lg:gap-4 xl:gap-6  overflow-x-auto lg:overflow-x-visible"
      {...props}>
      <div className="hidden justify-between gap-8 lg:flex">
        {cards.map((service, i) => (
          <SingleServiceCard
            bgImage={bgImage}
            data={service}
            key={service.id || i}
            index={i}
            data-reveal
            image={service.image}
            data-reveal-dir={dirForIndex(i)}
            className="opacity-0 will-change-transform flex-shrink-0"
          />
        ))}
      </div>
      <div className="lg:hidden carousel-mode" {...props}>
        <CarouselContainer
          autoPlay={false} // autoplay is optional; disable if you like
          showDots
          showArrows
          className="w-full">
          {cards.map((service, i) => (
            <SingleServiceCard
              key={service?.id ?? i}
              data={service}
              index={i}
              data-reveal
              data-reveal-dir={dirForIndex(i)}
              className="w-full opacity-100" // ensure visible in slides
            />
          ))}
        </CarouselContainer>
      </div>
      <style jsx global>{`
        /* Default styles for the card */
        .single-service-card {
          transition: width 0.5s ease-out, z-index 0s,
            transform 0.3s ease-in-out;
          width: 280px; /* Default width for mobile */
        }

        /* Desktop widths */
        @media (min-width: 1024px) {
          .single-service-card {
            width: 375px; /* Default width for desktop */
          }
        }

        /* Apply scale transition during hover */
        .single-service-card:hover {
          transform: scale(1.05); /* Slight scale-up effect */
          z-index: 10; /* Ensure the hovered card stays on top */
        }

        /* Ensure the backdrop blur effect on the button stays when hovered */
        .single-service-card .default-content {
          transition: opacity 0.3s ease-in-out, filter 0.15s ease-in-out;
        }

        /* Keep the backdrop filter effect for the button visible */
        .single-service-card .group-hover\\:opacity-100 {
          opacity: 1;
        }

        .single-service-card .group-hover\\:opacity-0 {
          opacity: 0;
        }

        /* Apply the blur effect to the button only */

        /* Maintain the blur on hover for the button */
        .single-service-card .hover-content:hover {
          filter: none;
        }

        /* Additional CSS for more reliable hover detection */
        @media (hover: hover) {
          .single-service-card:hover .group-hover\\:opacity-100 {
            opacity: 1;
          }
          .single-service-card:hover .group-hover\\:opacity-0 {
            opacity: 0;
          }
          .single-service-card:hover .group-hover\\:scale-100 {
            transform: scale(1);
          }
          .single-service-card:hover .group-hover\\:bg-white\\/95 {
            background-color: rgba(255, 255, 255, 0.95);
          }
        }
      `}</style>
    </div>
  );
});

const SingleServiceCard = memo(function SingleServiceCard({
  data,
  index,
  image,
  bgImage,
  ...props
}) {
  const { title, description, list, ctaText, ctaLink, id } = data || {};
  console.log("index of technology soliution:", index);
  return (
    <Link href={ctaLink}>
      <div
        {...props}
        className="single-service-card relative  cursor-pointer  h-[580px] md:h-[540px] rounded-[32px] shadow-lg border border-[#D3CAFD] overflow-hidden z-10 group">
        {/* Background layer with CSS transitions */}
        <div className="absolute inset-0 rounded-[32px]  transition-all duration-300 ease-in-out" />

        <div className="relative h-full w-full px-8 py-8">
          {/* Background Image - hidden on hover */}
          <div
            className="absolute z-0 bottom-0  bg-cover bg-no-repeat w-full h-full top-0 right-0 left-0  transition-opacity duration-300"
            style={{ backgroundImage: `url('${bgImage}')` }}>
            <Image
              src={image || `/technologySolutions/card${index + 1}.webp`}
              alt={title}
              width={180}
              unoptimized
              height={220}
              className="object-cover object-bottom  w-full h-full"
            />
          </div>

          {/* Default Content */}
          <div className="default-content absolute inset-0 px-8 py-8 h-full flex flex-col justify-between opacity-100  transition-all duration-300 ease-in-out">
            <div>
              <h4 className="text-slate-800 text-xl md:text-2xl font-semibold leading-tight mb-4">
                {title}
              </h4>
            </div>

            <div className="flex justify-end items-center gap-2.5">
              <P1 className="text-white">{index + 1}</P1>
              <div className="w-12 h-12 p-2 rounded-full border-2 border-white/80 flex items-center justify-center transition-colors">
                <Icon
                  icon="pepicons-pencil:arrow-up-right"
                  className="size-6 text-white/80"
                />
              </div>
            </div>
          </div>

          {/* Hover Content */}
        </div>
      </div>
    </Link>
  );
});
