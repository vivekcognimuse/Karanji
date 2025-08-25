import Button from "@/components/ui/Button";
import Link from "next/link";

const contentData = {
  1: {
    title: "Immersive AR/VR Experiences",
    description:
      "Leverages narrative immersion to engage learners emotionally & cognitively within virtual environments.",

    buttonLink: "/technology-solutions",
  },
  2: {
    title: "Adaptive Personalized Learnings",
    description:
      "Learners follow optimized paths powered by intelligent systems tailored to their unique goals & pace.",

    buttonLink: "/digital-learning",
  },
  3: {
    title: "Intelligent Simulations & Forecasts",
    description:
      "Blends experiential learning with AI-driven insights to drive measurable performance & learning outcomes.",

    buttonLink: "/creative-services",
  },
};

export const GetLeftContent = (stage) => {
  const content = contentData[stage];
  if (!content) return null;

  return (
    <div className={` `}>
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`inline-block px-3 py-1 bg-[#DEC2FE] rounded-full text-black/70 text-xl font-normal`}>
          Key Services
        </div>
      </div>
      <h3 className="text-black font-sans text-3xl font-normal">
        {content.title}
      </h3>
      <p className="text-black/70 text-xl font-normal">{content.description}</p>
      <div className="flex justify-start items-start">
        <Link href={content.buttonLink}>
          <Button variant="text" className="px-0 -ml-5">
            View Solutions
          </Button>
        </Link>
      </div>
    </div>
  );
};
