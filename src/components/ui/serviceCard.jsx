import { memo, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export const ServiceCard = memo(function ServiceCard({
  title,
  number,
  image,
  description,
  features = [],
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className="relative h-[400px] lg:h-[500px] bg-white/20 rounded-[32px] shadow-lg border border-indigo-200 overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[url('/solutions/technologyCard-bg.svg')] bg-no-repeat bg-cover bg-top"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${title} - Click to ${isFlipped ? "hide" : "show"} details`}>
      {/* Original Front Card */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isFlipped ? "opacity-0 invisible" : "opacity-100 visible"
        }`}>
        <div className="relative h-full w-full px-7 py-5">
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <Image
              src={image}
              alt={title}
              width={432}
              height={523}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <h5 className="">{title}</h5>
            <div className="flex justify-end items-center gap-2.5">
              <span className="text-2xl font-normal text-black/80 leading-9 tracking-wide">
                {number}
              </span>
              <button
                className="w-12 h-12 p-2 rounded-full border-2 border-black backdrop-blur-sm flex items-center justify-center gap-1 hover:bg-black/10 transition-colors pointer-events-none"
                tabIndex={-1}>
                <Icon
                  icon="pepicons-pencil:arrow-up-right"
                  className="size-10"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back Card - Desktop Hover + Click */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isFlipped ? "opacity-100 visible" : "opacity-0 invisible"
        } md:group-hover:opacity-100 md:group-hover:visible`}>
        <div className="absolute inset-0 p-7 rounded-[32px]">
          <div className="h-full flex flex-col ">
            {/* Top Section - Description */}
            <div className="flex-1 flex flex-col justify-start pt-4">
              <p className=" text-base leading-relaxed">{description}</p>
            </div>

            {/* Middle Section - Features in 2x2 Grid */}
            <div className="flex-1 flex items-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {features.slice(0, 4).map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10  rounded-2xl p-4 min-h-[80px] flex items-center">
                    <span className=" text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section - Learn More Button */}
            <div className="flex justify-center pb-4">
              <button
                className="bg-black  px-8 py-3 rounded-full font-medium text-sm hover:bg-black/80 transition-colors pointer-events-none"
                tabIndex={-1}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Click indicator for mobile/tablet */}
      <div className="absolute top-4 right-4 md:hidden">
        <div className="w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Icon
            icon={isFlipped ? "mdi:close" : "mdi:information-outline"}
            className="size-5 "
          />
        </div>
      </div>
    </div>
  );
});
