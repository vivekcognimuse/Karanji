import { memo } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { P2, P3, P4 } from "../CustomTags";

// Loading Spinner Component
export const LoadingSpinner = memo(function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
    </div>
  );
});

// Stats Display Component
export const StatsDisplay = memo(function StatsDisplay({ stats }) {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-left">
            <div className="text-3xl md:text-4xl lg:text-5xl font-semibold font-sans  text-black">
              {stat.value}
            </div>
            <div className="text-sm md:text-lg font-light text-black/70 uppercase leading-relaxed tracking-wide">
              {stat.label}
            </div>
          </div>
          {index < stats.length - 1 && (
            <div className="hidden md:block w-px h-11 bg-black/30 ml-8 md:ml-16"></div>
          )}
        </div>
      ))}
    </div>
  );
});

export const ServiceCard = memo(function ServiceCard({
  title = "Strategy",
  subTitle = "Strong Foundation",
  description = "...",
  featured,
  index,
  bgImage,
  currentIndex,
  heightDifference = false,
  icon,
  className = "",
  ...props
}) {
  // Calculate the height based on index when heightDifference is true
  const dynamicHeight = heightDifference
    ? `calc(420px + ${index * 70}px)`
    : "450px";

  return (
    <div
      {...props}
      className={`w-full max-w-[20rem] border border-black/10 bg-white  bg-contain bg-bottom bg-no-repeat rounded-2xl shadow-lg p-4  z-0 relative ${className}`}
      style={{
        backgroundImage: heightDifference
          ? `url('/service-offering/ai-advisory/${index + 1}.svg')`
          : `url('${bgImage}')`,
        height: heightDifference ? dynamicHeight : "auto",
        minHeight: heightDifference ? dynamicHeight : "350px",
        flexShrink: 0, // Prevent flex container from shrinking this item
      }}>
      <div
        className={`relative z-10 flex flex-col h-full  transition-all duration-300 hover:scale-105`}>
        {/* Top Section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-start items-center">
            {icon ? (
              <div className="w-15 h-15 flex items-center justify-center rounded-lg">
                <Image
                  src={icon}
                  alt=""
                  width={40}
                  height={40}
                  className="size-14"
                />
              </div>
            ) : (
              <div className="w-10 h-10 relative overflow-hidden">
                <div className="w-8 h-8 left-[2px] top-[7.13px] absolute bg-indigo-400" />
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <h4 className="mb-2">{title}</h4>
            {subTitle && <P3 className="text-black-500 mb-8">{subTitle}</P3>}
          </div>
        </div>

        <div className="mt-auto" />

        <div>
          <P3 className="text-black/50 font-light">{description}</P3>
        </div>
      </div>
    </div>
  );
});

// Methodology Step Component
export const MethodologyStep = memo(function MethodologyStep({
  step,
  title,
  description,
  tags,
  isStepHidden = false,
  column = false,
}) {
  if (column) {
    return (
      <div className={`${"border-b border-black/50 pb-8"}`}>
        <div className="flex flex-col  space-y-6">
          {!isStepHidden && (
            <div className="text-4xl  font-extralight font-sans italic text-black/80">
              {"#"} {step}
            </div>
          )}
          <h4 className="">{title}</h4>
          <div className="flex-1 text-lg md:text-xl font-light text-black/50 tracking-wide">
            {description.split("\n\n").map((line, index) => (
              <P2 key={index}>{line}</P2>
            ))}
          </div>

          <div>
            {tags && (
              <div className="flex  gap-4 flex-wrap">
                {tags.map((tag, index) => (
                  <P3
                    key={index}
                    className="rounded-full bg-white/40 text-nowrap font-light shadow-md border text-black-500 border-black-300 py-1 px-4">
                    {tag.text}
                  </P3>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b -z-1 border-black/50 pb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="flex flex-row items-start sm:items-center gap-4 sm:gap-8">
          {!isStepHidden && (
            <p className="text-3xl w-fit  md:text-4xl lg:text-5xl font-extralight font-sans italic text-black/80 sm:w-32">
              #{step}
            </p>
          )}
          <div
            className={`text-2xl md:text-3xl font-normal font-sans text-black w-full sm:w-32 md:w-56 ${
              isStepHidden && "lg:w-96"
            }`}>
            {title}
          </div>
        </div>
        <div className="flex-1 text-lg md:text-xl font-light text-black/50 tracking-wide">
          {description}
        </div>
      </div>
    </div>
  );
});

// Industry Card Component
export const IndustryCard = memo(function IndustryCard({
  title,
  description,
  icon,
  altTag,
}) {
  return (
    <div className="p-4 sm:p-6 rounded-2xl -z-1 shadow-lg border border-black-200  flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-3" data-reveal data-reveal-dir="up">
        {icon && (
          <div className="w-12 h-12  rounded-lg flex items-center justify-center">
            <Image
              src={icon}
              width={40}
              alt={altTag || { title }}
              height={40}
              className="w-11 h-11 text-white"
            />
          </div>
        )}
      </div>
      <div className="flex-1">
        <h5 className="mb-2" data-reveal data-reveal-dir="up">
          {title}
        </h5>
        <P3 className="text-black-500" data-reveal data-reveal-dir="up">
          {description}
        </P3>
      </div>
    </div>
  );
});
