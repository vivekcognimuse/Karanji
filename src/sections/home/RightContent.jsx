import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const contentDataRight = {
  1: {
    title: "Story Driven VR/AR Experiences",
    link: "/technology-solutions",
    bgImage: "/home/4a4b75f1bb78bb49dedd9594cf6151ba117329c3.png",
    description: (
      <span>
        Where <strong> Creative Learning</strong> meets{" "}
        <strong>Immersive Tech</strong>
      </span>
    ),
  },
  2: {
    title: "Adaptive & Personalized Learning",
    link: "/digital-learning",
    bgImage: "/home/68ca4dd5e9e1ae775f7ba7bc8669ce2063c77d1f.png",
    description: (
      <span>
        Where <strong> Creative Learning</strong> meets{" "}
        <strong>AI Innovation</strong>
      </span>
    ),
  },
  3: {
    title: "Intelligent Simulations & Real Time Analytics",
    link: "/creative-services",
    bgImage: "/home/5d900e531beab307f837ab2fe6f6ea7976fb7b0f.png",
    description: (
      <span>
        Where <strong> Immersive Tech </strong> meets{" "}
        <strong>AI Innovation</strong>
      </span>
    ),
  },
};

export const GetRightContent = (stage) => {
  const content = contentDataRight[stage];
  if (!content) return null;

  return (
    <div className="single-service-card relative  cursor-pointer  h-[408px] bg-cover bg-[url('/home/bg.svg')] bg-no-repeat w-[400px] rounded-[32px]  overflow-hidden z-10 group">
      <Link href={content.link}>
        {/* shadow-lg border border-[#D3CAFD] */}
        <div className="relative  h-full w-full px-8 pt-8">
          {/* Background Image - hidden on hover */}

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
            <div className="  w-full h-full  transition-opacity duration-300">
              <Image
                src={content.bgImage}
                alt={content.title}
                width={180}
                unoptimized
                height={220}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div className="flex absolute bottom-4 right-4 justify-end items-center gap-2.5">
              <div className="w-12 h-12 p-2 rounded-full border-2 border-black/80 flex items-center justify-center transition-colors">
                <Icon
                  icon="pepicons-pencil:arrow-up-right"
                  className="size-6 text-black/80"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
