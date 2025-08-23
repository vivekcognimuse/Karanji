import { Icon } from "@iconify/react";
import Image from "next/image";

const contentDataRight = {
  1: {
    title: "Story Driven VR/AR Experiences",
    bgImage: "/technologySolutions/card4.webp",
    description: (
      <span>
        Where <strong> Creative Learninge</strong> meets{" "}
        <strong>Immersive Tech</strong>
      </span>
    ),
  },
  2: {
    title: "Adaptive & Personalized Learning",
    bgImage: "/technologySolutions/card4.webp",
    description: (
      <span>
        Where <strong> Creative Learninge</strong> meets{" "}
        <strong>Creative Learning</strong>
      </span>
    ),
  },
  3: {
    title: "Intelligent Simulations & Real Time Analytics",
    bgImage: "/technologySolutions/card4.webp",
    description: (
      <span>
        Where <strong> Immersive Tech </strong> meets{" "}
        <strong>Innovation</strong>
      </span>
    ),
  },
};

export const GetRightContent = (stage) => {
  const content = contentDataRight[stage];
  if (!content) return null;

  return (
    <div className="single-service-card relative  cursor-pointer  h-[408px] w-[400px] rounded-[32px] shadow-lg border border-[#D3CAFD] overflow-hidden z-10 group">
      {/* Background layer with CSS transitions */}
      <div className="absolute inset-0 rounded-[32px]  transition-all duration-300 ease-in-out" />

      <div className="relative h-full w-full px-8 py-8">
        {/* Background Image - hidden on hover */}
        <div
          className="absolute z-0 bottom-0  bg-cover bg-no-repeat w-full h-full top-0 right-0 left-0  transition-opacity duration-300"
          style={{ backgroundImage: `url('${content.bgImage}')` }}>
          <Image
            src={content.bgImage}
            alt={content.title}
            width={180}
            unoptimized
            height={220}
            className="object-cover object-bottom  w-full h-full"
          />
        </div>

        {/* Default Content */}
        <div className="default-content absolute inset-0 px-8 py-8 h-full flex flex-col justify-between opacity-100  transition-all duration-300 ease-in-out">
          <div>
            <h4 className="text-black font-sans text-[1.75rem] font-medium">
              {content.title}
            </h4>
            <p className="text-black mt-2 text-xl font-normal font-sans">
              {content.description}
            </p>
          </div>

          <div className="flex justify-end items-center gap-2.5">
            <div className="w-12 h-12 p-2 rounded-full border-2 border-black/80 flex items-center justify-center transition-colors">
              <Icon
                icon="pepicons-pencil:arrow-up-right"
                className="size-6 text-black/80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
