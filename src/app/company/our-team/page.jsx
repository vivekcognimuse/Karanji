import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import TeamSections from "@/sections/Company/teamSections";
const heroData = {
  title: "Meet the Experts",
  subTitle:
    "Driven by innovation & over 18 years of experience, our leadership team combines creativity, strategy, & technology to deliver transformative digital learning experiences & next-gen tech solutions.",
  linkText: "Scroll down",
  linkHref: "/", // You can change this to the appropriate link for your services page
  linkIcon: "mdi:arrow-down", // You can change this to the desired icon
  backgroundImage: "/path/to/your/hero-image.jpg", // Provide the background image URL
};

const ctaData = {
  title: "Join Our Team",
  description:
    "Be part of a passionate group of innovators building impactful tech solutions & redefining digital learning. If you're driven by curiosity, creativity, and purpose-we'd love to hear from you.",
  PrimaryButtonText: "Explore Careers",
  PrimaryButtonLink: "https://knestlms.com/try-demo",
};

const teamData = {
  title: "Our Team",
  description:
    "At Karanji, our team is the backbone of everything we do. From executive leadership to technical experts, we bring together a diverse group of professionals who specialize in AI, VR, digital learning, and business transformation. Each team member contributes to our mission of delivering cutting-edge solutions that reshape how businesses & learners engage with technology. Whether it’s through innovative strategies, immersive experiences, or AI-powered solutions, our team is dedicated to pushing the boundaries of what's possible.",
};
const teamSectionData = [
  {
    title: "Meet Our Strategy & Advisory Leaders",
    description:
      "Our Strategy & Advisory team combines deep expertise in AI, VR, & digital learning to provide cutting-edge solutions that drive business transformation. With a focus on innovation & growth, our leaders guide businesses through complex challenges, helping them integrate the latest technologies for maximum impact.",
  },
  {
    title: "Our Execution & Management Collective",
    description:
      "Our Execution & Management team turns strategy into reality, focusing on delivering seamless, AI-driven solutions & immersive learning experiences. From growth & strategy to operational excellence, our experts ensure projects are executed efficiently, driving innovation across industries & organizations.",
  },
  // Add more sections as needed
];
export default async function teampage() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} />
      <CTA data={teamData} />
      <TeamSections sections={teamSectionData} />

      <CTA data={ctaData} />
    </div>
  );
}
