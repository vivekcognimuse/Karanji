import DigitalTwinHeroSection from "@/sections/Company/digital-twin/DigitalTwinHero";
import CTA from "@/sections/digital-learning/CTA";
import ChooseAvatarSection from "@/sections/Company/digital-twin/ChooseAvatarSection";
import RealImpactResults from "@/sections/Company/digital-twin/RealImpactResults";
const heroData = {
  title: "Meet Our Digital Avatars",
  subTitle:
    "At Karanji, we've built intelligent clones of our team members to help you understand our services, explore solutions, & get real-time, personalized guidance - all while reflecting the style & expertise of our core team.",
  PrimaryButtonLink: "/",
  PrimaryButtonText: "Talk to an Avatar Now",
  SecondaryButtonLink: "/",
  SecondaryButtonText: "Create your Avatar",
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
      subText: "Available online",
    },
  ],
};
const ctaData = {
  title: "Ready to create a custom digital avatar for your business?",
  description:
    "Let’s collaborate to create a powerful digital avatar tailored to your business needs for maximum impact.",
  PrimaryButtonText: "Create your Avatar",
  PrimaryButtonLink: "/",
};
const avatarData = {
  title: "Choose Your Expert Avatar",
  description:
    "Each avatar brings unique expertise & can assist with different aspects of your business transformation",
  avatars: [
    {
      name: "Prakash",
      role: "CEO, Karanji",
      image: "/Company/Digital Twins/Prakash digital twin.webp",
      expertise: [
        "Know About the Company",
        "Explore Our Services",
        "How Karanji solves your problem",
      ],
      ctaText: "Talk to Our CEO",
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
      subtitle:
        "Freed up 30% of the weekly calendar & increased partner engagement.",
    },
    {
      title: "Engagement Increase",
      subtitle:
        "Increased client interaction without scaling team load or compromising quality",
    },
    {
      title: "24/7 Problem Solving",
      subtitle:
        "Helps our team understand & solve AI implementation challenges continuously",
    },
  ],
};
export default async function companyLanding() {
  return (
    <div className="w-full  mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <DigitalTwinHeroSection data={heroData} bgImage={"/hero/Avatars.webp"} />
      <ChooseAvatarSection data={avatarData} />
      <RealImpactResults sectionData={sectionData} />
      <CTA data={ctaData} />
    </div>
  );
}
