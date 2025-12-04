import { draftMode } from "next/headers";
import { getMetadata } from "@/lib/metadata";
import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";
import CTA from "@/sections/digital-learning/CTA";
import LearningChallenges from "@/sections/digital-learning/LearningChallenges";
import LMSLearning from "@/sections/digital-learning/LMSLearning";
import SwitchSection from "@/sections/digital-learning/SwitchSection";

export async function generateMetadata() {
  return await getMetadata("k-nest-lms");
}
const IMAGE_MAPPING = {
  "Learning Experience": {
    "Course Navigation":
      "/digital-learning/switchSection/Learning experience/Course Navigation.webp",
    "Gamification and Engagement":
      "/digital-learning/switchSection/Learning experience/Gamification & Engagement (1).webp",
    "Mobile Learning":
      "/digital-learning/switchSection/Learning experience/Mobile Learning (1).webp",
  },
  "Content Management": {
    "Course Structure":
      "/digital-learning/switchSection/Content management/Course Structure.webp",
    "Assessment Tools":
      "/digital-learning/switchSection/Content management/Assessment Tools.webp",
    Certification:
      "/digital-learning/switchSection/Content management/Certification.webp",
  },
  "Administration and Reporting": {
    "User Management":
      "/digital-learning/switchSection/Administration and supporting/User Management.png",
    "Reporting and Analytics":
      "/digital-learning/switchSection/Administration and supporting/Reporting & Analytics.webp",
    "System Administration":
      "/digital-learning/switchSection/Administration and supporting/System Administration.png",
  },
};

function transformSwitchSectionData(apiSwitchSection) {
  if (!apiSwitchSection || !Array.isArray(apiSwitchSection)) {
    return { tabs: [], content: {} };
  }

  // Extract tab titles
  const tabs = apiSwitchSection.map((section) => section.title);

  // Build content object
  const content = {};

  apiSwitchSection.forEach((section) => {
    const sectionTitle = section.title;

    // Transform cards into sections format
    const sections = section.cards.map((card) => {
      // Get the image URL from the mapping
      const imageUrl = IMAGE_MAPPING[sectionTitle]?.[card.title] || "";

      // Extract non-null tags
      const tags = card.tags
        .filter((tag) => tag.title !== null)
        .map((tag) => tag.title);

      return {
        title: card.title,
        image: imageUrl,
        content: card.subTitle,
        tags: tags,
      };
    });

    content[sectionTitle] = { sections };
  });

  return { tabs, content };
}

export default async function LMSImplementation() {
  const { isEnabled: isPreview } = await draftMode();

  const data = await fetchFromStrapi("k-nest-lms", { preview: isPreview });

  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }

  const {
    hero,
    successStories,
    benefits,
    lmsChallenge,
    switchSection,
    metaData,
    learningPlatform,
    cta,
  } = data || {};

  // Transform the switchSection data from API
  const switchSectionData = transformSwitchSectionData(switchSection);

  return (
    <main className="w-full max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={hero} bgImage="/hero/1.LMS banner.webp" />
      <div className="space-y-16 lg:space-y-32">
        <div id="lms-services">
          <ServiceOfferings
            bgImage="/service-offering/digital-learning/default.svg"
            data={benefits}
            icon="/digital-learning/lms-discover"
          />
        </div>
        <LMSLearning data={lmsChallenge} />
        <LearningChallenges data={learningPlatform} />
        <SwitchSection data={switchSectionData} />
        <SuccessStories data={successStories} />
        <CTA data={cta} />
      </div>
    </main>
  );
}
