import HeroSection from "@/sections/Advisory/Hero";

const heroData = {
  title: "Meet Our Digital Avatars",
  subTitle:
    "At Karanji, we’ve built intelligent clones of our team members to help you understand our services, explore solutions, & get real-time, personalized guidance - all while reflecting the style & expertise of our core team.",
  ctaText: "Talk to an Avatar Now",
  ctaLink: "/", // You can change this to the appropriate link for your services page
  linkIcon: "material-symbols:arrow-forward", // You can change this to the desired icon
  backgroundImage: "/path/to/your/hero-image.jpg", // Provide the background image URL
  stats: [
    {
      text: "MULTILINGUAL",
    },
    {
      text: "MULTIMODAL",
    },
    {
      text: "PERSONALIZED",
    },
    {
      text: "24/7",
    },
  ],
};

export default async function companyLanding() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} bgImage={"/Company/Animation/5.png"} />
    </div>
  );
}
