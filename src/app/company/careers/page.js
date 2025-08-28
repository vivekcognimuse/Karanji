// app/company/careers/page.jsx
import CTA from "@/sections/digital-learning/CTA";
import WhyWorkWithUsSection from "@/sections/Company/careers/WhyWorkWithUsSection";
// ⬇️ Import the careers table + default data
import CareersTable, {
  defaultCareers,
} from "@/sections/Company/careers/CareersTable";
import Head from "next/head";

const teamData = {
  title: "Your Next Chapter Starts Here",
  description:
    "Build your career with us and help shape the future of [Industry/Field]. We value innovation, diversity, and collaborative growth.",
  SecondaryButtonText: "View Open Roles",
  // Scrolls to the roles section below
  SecondaryButtonLink: "#open-roles",
};

const sectionData = {
  title: "Why Work With Us?",
  description:
    "Join a company where creativity meets cutting-edge technology. At Karanji, we blend innovation, collaboration, & personal growth to shape the future of learning, entertainment, & AI-driven solutions. We're not just building products – we're building meaningful experiences, & it all starts with our people.",
};

const cardsData = [
  {
    icon: "/Company/Team/icons/culture.svg",
    title: "Culture",
    description:
      "We foster a collaborative environment built on trust & innovation.",
    image: "/Company/Culture.webp",
  },
  {
    icon: "/Company/Team/icons/learning.svg",
    title: "Learning",
    description:
      "Continuous development opportunities to foster personal growth.",
    image: "/Company/Learning.webp",
  },
  {
    icon: "/Company/Team/icons/growth.svg",
    title: "Growth",
    description:
      "Opportunities for advancement & career paths based on performance.",
    image: "/Company/growth.webp",
  },
];

const ctaData = {
  title: "Don't see a role that fits?",
  description:
    "We’d love to hear from you! Send us an email at recruitment@karanji.com with the subject line ‘Application | Role Title’, along with your profile and areas of interest. We’re always on the lookout for exceptional talent to join our team.",
  SecondaryButtonText: "Send us an Email",
  SecondaryButtonLink:
    "mailto:recruitment@karanji.com?subject=Application%20%7C%20Role%20Title",
};

export default function careersPage() {
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16 lg:space-y-32">
      {/* Wrapper for all components except the last CTA */}
      <div
        className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 mb-30 my-auto rounded-[32px]"
        style={{
          background:
            "linear-gradient(93.27deg, rgba(158, 135, 255, 0.1) 8.1%, rgba(109, 191, 254, 0.1) 41.6%, rgba(255, 143, 143, 0.1) 95.33%, rgba(255, 255, 255, 0.1) 127.34%)",
          backdropFilter: "blur(28.100000381469727px)",
          boxShadow: "0px 4px 4px 0px rgba(204, 204, 204, 0.25)",
        }}>
        <div className="space-y-16 lg:space-y-32">
          <CTA
            data={teamData}
            className="
              !text-left
              [&>h3]:!text-4xl sm:[&>h3]:!text-5xl lg:[&>h3]:!text-[4rem] [&>h3]:!font-normal
              [&>.p2]:!text-[1.375rem] sm:[&>.p2]:!text-2xl
              [&_.flex-center]:justify-start [&_.flex-center]:items-start
              [&_.flex-center>button]:!px-6 [&_.flex-center>button]:!py-4 [&_.flex-center>button]:!text-lg
              lg:[&_.flex-center>button]:!px-7 lg:[&_.flex-center>button]:!py-[1.125rem] lg:[&_.flex-center>button]:!text-xl
              [&_.flex-center>a]:!px-6 [&_.flex-center>a]:!py-4 [&_.flex-center>a]:!text-lg
              lg:[&_.flex-center>a]:!px-7 lg:[&_.flex-center>a]:!py-[1.125rem] lg:[&_.flex-center>a]:!text-xl
            "
          />

          {/* Why Work With Us */}
          <WhyWorkWithUsSection
            title={sectionData.title}
            description={sectionData.description}
            cards={cardsData}
          />

          {/* Open Roles */}
          <section id="open-roles">
            <CareersTable
              jobs={defaultCareers}
              detailBasePath="/company/careers"
            />
          </section>
        </div>
      </div>

      {/* Final CTA - Outside the wrapper */}
      <CTA data={ctaData} />
    </main>
  );
}