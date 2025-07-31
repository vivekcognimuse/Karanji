import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { P1, P3 } from "../CustomTags";

// Loading Spinner Component
export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
    </div>
  );
}

// Feature Card Component
export const FeatureCard = memo(function FeatureCard({
  title,
  description,
  img,
}) {
  return (
    <div className="space-y-8 flex flex-col">
      <div className="w-11 h-11">
        {" "}
        {/* Container keeps the fixed size */}
        <Image
          src={img}
          alt={`${title} "icon"`}
          width={40}
          height={40}
          className=""
        />
      </div>
      <div className="space-y-4">
        <h5 className=" text-black/80 ">{title}</h5>
        <P3 className=" text-black/50">{description}</P3>
      </div>
      <div className="border-t mt-auto border-neutral-600/20" />
    </div>
  );
});
// AI Assessment Card Component
export const AIAssessmentCard = memo(function AIAssessmentCard() {
  return (
    <div className=" w-7/12  flex items-center justify-center  bg-no-repeat bg-cover bg-top rounded-2xl border border-black/20 p-8 overflow-hidden">
      {/*  bg-[url(/solutions/assessmentCard-bg.svg)] */}

      <div className="  space-y-8">
        <div className="text-center space-y-4">
          <h4 className="">Not sure how AI-ready your business is?</h4>
          <P3 className="text-black-800">
            Take our quick diagnostic to benchmark your AI maturity and unlock
            tailored insights
          </P3>
        </div>
        <div className="flex justify-center">
          <button className="bg-black rounded-full px-8 py-3 text-white text-xl hover:bg-gray-800 transition-colors">
            Start AI Assessment
          </button>
        </div>
      </div>
    </div>
  );
});

// Service Card Component
export const ServiceCard = memo(function ServiceCard({ title, number, image }) {
  return (
    <div className="h-[500px] bg-white/20 rounded-[32px] shadow-lg border border-indigo-200 overflow-hidden group hover:scale-105 transition-transform duration-300 -z-10 bg-[url('/solutions/technologyCard-bg.svg')] bg-no-repeat bg-cover bg-top">
      <div className="relative h-full w-full px-7 py-5 ">
        <div className="absolute -z-1 bottom-0">
          <Image
            src={image}
            alt={title}
            width={432}
            height={523}
            className="object-contain "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
        <div className="h-full flex flex-col justify-between">
          <h5 className="">{title}</h5>

          <div className="flex  justify-end items-center gap-2.5">
            <span className="text-2xl font-normal text-black/80 leading-9 tracking-wide">
              {number}
            </span>
            <button className="w-12 h-12 p-2 rounded-full border-2 border-black backdrop-blur-sm flex items-center justify-center gap-1 hover:bg-black/10 transition-colors">
              <Icon icon="pepicons-pencil:arrow-up-right" className="size-10" />
            </button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
});

// Case Study Carousel Component
export const CaseStudyCarousel = memo(function CaseStudyCarousel() {
  return (
    <div className="flex items-center justify-center gap-16">
      <button className="w-10 h-10 bg-gradient-to-br from-indigo-200 via-sky-100 to-rose-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
        <Icon icon="mdi:chevron-left" className="w-6 h-6 text-black" />
      </button>

      <div className="max-w-4xl bg-white rounded-[20px] shadow-lg border border-black/20 p-8 space-y-12">
        <h3 className="">AI-Powered Digital Twin for Manufacturing</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-0 h-24 border-l border-black" />
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-semibold text-black">
                25%
              </div>
              <div className="text-xl text-black leading-9 tracking-wide">
                Improved Operational Efficiency
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-0 h-24 border-l border-black" />
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-semibold text-black">
                30%
              </div>
              <div className="text-xl text-black leading-9 tracking-wide">
                Reduced Downtime
              </div>
            </div>
          </div>
        </div>

        <p className="text-xl font-normal text-black/50 leading-9 tracking-wide">
          An integrated solution combining digital twins simulations with AI
          analytics to streamline manufacturing processes, reduce downtime, and
          optimize production efficiency.
        </p>

        <div className="flex justify-end">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-lg text-black tracking-wide hover:opacity-80 transition-opacity">
            Read Full CaseStudy
            <Icon icon="pepicons-pencil:arrow-up-right" className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <button className="w-10 h-10 bg-gradient-to-br from-indigo-200 via-sky-100 to-rose-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
        <Icon icon="mdi:chevron-right" className="w-6 h-6 text-black" />
      </button>
    </div>
  );
});

// Resource Card Component
export const ResourceCard = memo(function ResourceCard({
  type,
  title,
  action,
  image,
}) {
  return (
    <div className="flex flex-col p-5 bg-gradient-to-b from-indigo-200/15 to-indigo-200/30 rounded-2xl shadow-lg border border-black/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300 h-full">
      {/* Image Section */}
      <div className="h-64 p-2 rounded-2xl relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/75 rounded-full shadow text-sm font-normal text-black">
            {type}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 pt-6">
        <P1 className="">{title}</P1>

        {/* Spacer to push button down */}
        <div className="flex-1" />

        {/* Button */}
        <div className="flex justify-end pt-4">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-lg text-black tracking-wide hover:opacity-80 transition-opacity">
            {action}
            <Icon icon="pepicons-pencil:arrow-up-right" className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
});
