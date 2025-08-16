"use client";
import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Button from "./Button";
import { P1, P3, P4 } from "../CustomTags";
import CarouselContainer from "../animations/Carousal";

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
      className="service-cards-container  gap-8 lg:gap-4 xl:gap-6  overflow-x-auto lg:overflow-x-visible"
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
        /* Container for service cards to handle sibling width changes */
        .service-cards-container {
          /* Container styles handled by Tailwind classes above */
        }

        /* Default width and scale transition for all cards */
        .single-service-card {
          transition: transform 0.3s ease-out;
          width: 350px; /* Default width for mobile */
        }

        /* Desktop widths */
        @media (min-width: 1024px) {
          .single-service-card {
            width: 450px; /* Default width for desktop */
          }
        }

        /* Scale effect on hover instead of width changes */
        .single-service-card:hover {
          transform: scale(1.05);
          z-index: 20;
        }

        /* Blur animations only during transitions */
        .default-content {
          transition: opacity 0.3s ease-in-out, filter 0.15s ease-in-out;
        }

        /* Additional CSS for more reliable hover detection */
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

  const CardContent = (
    <div
      {...props}
      className="single-service-card relative h-[580px] md:h-[540px] rounded-[32px] shadow-lg border border-[#D3CAFD] overflow-hidden z-10 backdrop-blur-sm group cursor-pointer">
      {/* Background layer with CSS transitions */}
      <div className="absolute inset-0 rounded-[32px] backdrop-blur-sm  transition-all duration-300 ease-in-out" />

      <div className="relative h-full w-full px-8 py-8">
        {/* Background Image - hidden on hover */}
        <div
          className="absolute z-0 bottom-0  bg-cover bg-no-repeat w-full h-full top-0 right-0 left-0 transition-opacity duration-300"
          style={{ backgroundImage: `url('${bgImage}')` }}>
          <Image
            src={image || `/technologySolutions/card${index + 1}.webp`}
            alt={title}
            width={180}
            unoptimized
            height={220}
            className="object-cover object-left w-full h-full"
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
            <button className="w-12 h-12 p-2 rounded-full border-2 border-white  cursor-pointer flex items-center justify-center  transition-colors">
              <Icon
                icon="pepicons-pencil:arrow-up-right"
                className="size-6 text-white"
              />
            </button>
          </div>
        </div>

        {/* Hover Content */}
      </div>
    </div>
  );

  // Wrap in Link if ctaLink exists, otherwise return the card as is
  return ctaLink ? (
    <Link href={ctaLink} className="block">
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
});
