import { P2 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import { getMetadata } from "@/lib/metadata";
import { fetchFromStrapi } from "@/lib/strapi";

import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";

import ContentFormats from "@/sections/digital-learning/Content-Formats";
import CTA from "@/sections/digital-learning/CTA";

import CustomELearningSolution from "@/sections/digital-learning/CustomELearningSolution";
import ELearningCustomELearningSolutionDeepDive from "@/sections/digital-learning/CustomELearningSolutionDeepDive";

import LearningChallenges from "@/sections/digital-learning/LearningChallenges";
import Advantages from "@/sections/digital-twin/Advantages";
import DigitalTwinOfferings from "@/sections/digital-twin/Offering";
import Link from "next/link";
import React from "react";

export async function generateMetadata() {
  return await getMetadata("content-design");
}
const ContentDesign = async ({ searchParams }) => {
  const activeTab = searchParams?.tab || "custom";

  const data = await fetchFromStrapi("content-design");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }

  const {
    hero,
    eLearningSolutions,

    customContentSolutions,

    readySolutions,

    successStories,
    cta,
  } = data || {};
  // const [activeTab, setActiveTab] = useState("custom");

  const tabs = [
    { key: "custom", buttonLabel: customContentSolutions.title },
    { key: "ready", buttonLabel: readySolutions.title },
  ];

  const eLearning = {
    tabs: {
      custom: {
        buttonSubTitle: customContentSolutions.title,
        title: customContentSolutions.title,
        img: "/digital-learning/content-solution/CustomContentSolutions.webp",
        alt: "Custom Content Solutions",
        description: customContentSolutions.subTitle,
        stats: customContentSolutions.tags,
      },
      ready: {
        buttonSubTitle: readySolutions.title,
        title: readySolutions.title,
        img: "/digital-learning/content-solution/Readysolutionsandresources.webp",
        alt: "Ready Solutions",
        description: readySolutions.subTitle,
        stats: readySolutions.tags,
      },
    },
    defaultTab: "custom", // optional, defaults to first tab
  };

  return (
    <main className="w-full max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32 ">
      {" "}
      <HeroSection bgImage="/hero/Content-design.webp" data={hero} />
      <div className="space-y-16 lg:space-y-32">
        <div id="eLearning-solutions">
          <LearningChallenges
            icons="/digital-learning/content-solution/eSolutions"
            data={eLearningSolutions}
          />
        </div>
        {/* Toggle Buttons */}
        <div
          id="solutions-and-resources"
          className="flex justify-center gap-2 mb-8">
          {tabs.map(({ key, buttonLabel }) => (
            <Link
              key={key}
              href={`?tab=${key}#solutions-and-resources`}
              className={`px-6 py-2 rounded-full p2 shadow-lg duration-300 cursor-pointer transition-colors ${
                activeTab === key
                  ? "bg-[#F0B8B8] text-gray-800"
                  : "bg-white text-gray-600 hover:bg-pink-100"
              }`}>
              {buttonLabel}
            </Link>
          ))}
        </div>
        <div className="p-8 bg-[#FCE8E8] border border-black-200 space-y-16 lg:space-y-32 rounded-2xl">
          {/* Tab Content */}
          <CustomELearningSolution data={eLearning} activeTab={activeTab} />

          {/* Conditional Content */}
          {activeTab === "custom" ? (
            <>
              <Methodology
                column={true}
                data={customContentSolutions.contentDevelopmentApproach}
              />
              <ContentFormats
                cardImage="/digital-learning/content-format"
                data={customContentSolutions.contentFormats}
              />
              <ELearningCustomELearningSolutionDeepDive
                data={customContentSolutions.solutionsDeepDive}
              />
            </>
          ) : (
            <>
              <Advantages data={readySolutions.contentLibrary} />
              <DigitalTwinOfferings
                CtaClassName="lg:-mt-24"
                bgImageCard="/service-offering/digital-learning/content-catalogue.svg"
                data={readySolutions.categories}
                thankYouPopup={true}
              />{" "}
              <ServiceOfferings
                data={readySolutions.talentAugmentation}
                bgImage="/service-offering/digital-learning/default.svg"
                icon="/digital-learning/lms-discover"
              />
              <div className="mt-16 flex-col md:flex-row text-center md:text-start flex justify-end items-center gap-4 ">
                <P2 className=" ">
                  {readySolutions.talentAugmentation.ctaText ??
                    "Looking for something more tailored?"}
                </P2>

                <Link href="?tab=custom#solutions-and-resources">
                  <Button size="sm" variant="secondary" className="">
                    {readySolutions.talentAugmentation.ctaButtonText ??
                      "View Custom Content Solutions"}
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
        <SuccessStories data={successStories} />
        <CTA data={cta} />
      </div>
    </main>
  );
};

export default ContentDesign;
