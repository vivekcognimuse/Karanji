import DigitalTwinHeroSection from "@/sections/Company/digital-twin/DigitalTwinHero";
import CTA from "@/sections/digital-learning/CTA";
import ChooseAvatarSection from "@/sections/Company/digital-twin/ChooseAvatarSection";
import RealImpactResults from "@/sections/Company/digital-twin/RealImpactResults";
import Head from "next/head";
const heroData = {
  title: "Meet Our Digital Avatars",
  subTitle:
    "At Karanji, we’ve built intelligent digital avatars of our team members to help you understand our services, explore solutions, and receive real-time personalized guidance, while reflecting the style and expertise of our core team.",
  PrimaryButtonLink: "choose-avatar-section",
  PrimaryButtonText: "Talk to an Avatar Now",

  backgroundImage: "/path/to/your/hero-image.jpg",
  stats: [
    {
      text: "MULTILINGUAL",
      subText: "English | Hindi | Tamil",
    },
    {
      text: "MULTIMODAL",
      subText: "Voice | Chat",
    },
    {
      text: "PERSONALIZED",
      subText: "AI-Powered Responses",
    },
    {
      text: "24/7",
      subText: "Available Online",
    },
  ],
};
const ctaData = {
  title: "Ready to create a custom digital avatar for your business?",
  description:
    "Let’s collaborate to create a powerful digital avatar tailored to your business needs for maximum impact.",
  PrimaryButtonText: "Create your Avatar",
  PrimaryButtonLink: "/contact",
};
const avatarData = {
  title: "Choose Our Expert Avatar",
  description:
    "Each avatar brings unique expertise and supports different aspects of business transformation.",
  avatars: [
    {
      name: "Prakash",
      role: "CEO, Karanji",
      image: "/Company/Digital Twins/Prakash digital twin.webp",
      expertise: [
        "Know About the Company",
        "Explore Our Services",
        "How Karanji Solves Your Problem",
      ],
      ctaText: "Talk to Our CEO",
      ctaLink: "https://linkly.link/2BKPj",
    },
    {
      name: "Srikant",
      role: "Solution Architect, Karanji",
      image: "/Company/Digital Twins/Srikant Digital Twin.webp",
      expertise: [
        "Solves AI Implementation Challenges",
        "Explore Industry Use Cases",
        "Get Tailored Frameworks",
        "Get Actionable Templates",
      ],
      ctaText: "Talk to Our Solution Architect",
      ctaLink: "https://2ly.link/28kzS",
    },
  ],
};
const sectionData = {
  heading: "Real Impact & Results",
  description:
    "Our digital avatars deliver measurable business value through intelligent automation & enhanced customer engagement.",
  impactItems: [
    {
      title: "30% Calendar Time Saved",
      subTitle:
        "Freed up 30% of the weekly calendar & increased partner engagement.",
    },
    {
      title: "Engagement Increase",
      subTitle:
        "Increased client interaction without scaling team load or compromising quality.",
    },
    {
      title: "24/7 Problem Solving",
      subTitle:
        "Helps our team understand & solve AI implementation challenges continuously.",
    },
  ],
};
export default async function companyLanding() {
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <DigitalTwinHeroSection data={heroData} bgImage={"/hero/Avatars.webp"} />
      <div id="choose-avatar-section">
        <ChooseAvatarSection data={avatarData} />
      </div>
      <RealImpactResults sectionData={sectionData} />
      <CTA data={ctaData} />
    </main>
  );
}
