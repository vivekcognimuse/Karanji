"use client";
import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Button from "./Button";
import { P1, P3, P4 } from "../CustomTags";
import CarouselContainer from "../animations/Carousal";

export const ServiceCard = memo(function ServiceCard({
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
            key={i + service.title}
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
              key={i + service.title}
              data={service}
              index={i}
              image={service.image}
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

        /* Default width transition for all cards */
        .single-service-card {
          transition: width 0.5s ease-out, z-index 0s;
          width: 350px; /* Default width for mobile */
        }

        /* Desktop widths */
        @media (min-width: 1024px) {
          .single-service-card {
            width: 450px; /* Default width for desktop */
          }
        }

        /* When any card is hovered, reduce siblings width */
        .service-cards-container:hover .single-service-card:not(:hover) {
          width: 315px; /* 0.9x of 350px for mobile */
        }

        @media (min-width: 1024px) {
          .service-cards-container:hover .single-service-card:not(:hover) {
            width: 405px; /* 0.9x of 450px for desktop */
          }
        }

        /* Increase the hovered card width */
        .service-cards-container:hover .single-service-card:hover {
          width: 420px; /* 1.2x of 350px for mobile */
          z-index: 20;
        }

        @media (min-width: 1024px) {
          .service-cards-container:hover .single-service-card:hover {
            width: 540px; /* 1.2x of 450px for desktop */
          }
        }

        /* Blur animations only during transitions */
        .default-content {
          transition: opacity 0.3s ease-in-out, filter 0.15s ease-in-out;
        }

        .hover-content {
          transition: opacity 0.3s ease-in-out 0.1s,
            transform 0.3s ease-in-out 0.1s, filter 0.15s ease-in-out;
        }

        /* Apply blur only during opacity transitions */
        .single-service-card:hover .default-content {
          filter: blur(10px);
          transition: opacity 0.3s ease-in-out, filter 0.15s ease-in-out;
        }

        .single-service-card:not(:hover) .hover-content {
          filter: blur(10px);
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
            filter 0.15s ease-in-out;
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
    <div
      {...props}
      className="single-service-card relative  h-[580px] md:h-[540px] rounded-[32px] shadow-lg border border-[#D3CAFD] overflow-hidden z-10 backdrop-blur-sm group">
      {/* Background layer with CSS transitions */}
      <div className="absolute inset-0 rounded-[32px] backdrop-blur-sm  transition-all duration-300 ease-in-out" />

      <div className="relative h-full w-full px-8 py-8">
        {/* Background Image - hidden on hover */}
        <div
          className="absolute z-0 bottom-0  bg-cover bg-no-repeat w-full h-full top-0 right-0 left-0 group-hover:opacity-0 transition-opacity duration-300"
          style={{ backgroundImage: `url('${bgImage}')` }}>
          <Image
            src={image || `/technologySolutions/card${index + 1}.webp`}
            alt={title}
            width={180}
            height={180}
            unoptimized
            className="object-contain object-bottom  w-full h-full"
          />
        </div>

        {/* Default Content */}
        <div className="default-content absolute inset-0 px-8 py-8 h-full flex flex-col justify-between opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out">
          <div>
            <h4 className="text-slate-800 text-xl md:text-2xl font-semibold leading-tight mb-4">
              {title}
            </h4>
          </div>

          <div className="flex justify-end items-center gap-2.5">
            <button className="w-12 h-12 p-2 rounded-full border-2 border-slate-400 backdrop-blur-sm flex items-center justify-center hover:bg-slate-100 transition-colors">
              <Icon
                icon="pepicons-pencil:arrow-up-right"
                className="size-6 text-slate-600"
              />
            </button>
          </div>
        </div>

        {/* Hover Content */}
        <div className="hover-content absolute inset-0 px-8 py-8 h-full flex flex-col justify-between opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-300 ease-in-out delay-100 group-hover:delay-100">
          <div className="flex-1">
            {description && (
              <P1 className="text-black-800 mb-6">{description}</P1>
            )}

            {/* Features list - 2 columns for better use of space */}
            {list && list.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-6">
                {list.map((item, i) => (
                  <div key={i} className=" border-b  border-black-200 pb-4 p-3">
                    <P4 className="text-black-500 ">{item.text}</P4>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end items-end">
            {ctaText && ctaLink && (
              <Link href={ctaLink}>
                <Button className="">{ctaText}</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
