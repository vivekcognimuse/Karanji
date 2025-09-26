import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import TeamSections from "@/sections/Company/about/teamSections";
import Head from "next/head";
import { fetchFromStrapi } from "@/lib/strapi";

const heroData = {
  title: "Meet the Experts",
  subTitle:
    "Driven by innovation and over 18 years of experience, our leadership team combines creativity, strategy, and technology to deliver transformative digital learning experiences and next-gen tech solutions.",
  ctaText: "Scroll down",
  ctaLink: "team-section", // You can change this to the appropriate link for your services page
  linkIcon: "mdi:arrow-down", // Default icon for "Scroll down"
  backgroundImage: "/path/to/your/hero-image.jpg", // Provide the background image URL
};

const ctaData = {
  title: "Join Our Team",
  description:
    "Be part of a passionate group of innovators building impactful tech solutions and redefining digital learning. If you're driven by curiosity, creativity, and purpose-we'd love to hear from you.",
  SecondaryButtonText: "Explore Careers",
  SecondaryButtonLink: "/company/careers",
};

const teamData = {
  title: "Our Team",
  description:
    "At Karanji, our team is the backbone of everything we do. From executive leadership to technical experts, we bring together a diverse group of professionals who specialize in AI, VR, digital learning, and business transformation. Each team member contributes to our mission of delivering cutting-edge solutions that reshape how businesses and learners engage with technology. Whether it’s through innovative strategies, immersive experiences, or AI-powered solutions, our team is dedicated to pushing the boundaries of what's possible.",
};
const teamSectionData = [
  {
    title: "Meet Our Strategy and Advisory Leaders",
    description:
      "Our Strategy and Advisory team combines deep expertise in AI, VR, and digital learning to provide cutting-edge solutions that drive business transformation. With a focus on innovation and growth, our leaders guide businesses through complex challenges, helping them integrate the latest technologies for maximum impact.",
    showTalkButton: false, // For execution team
    members: [
      {
        name: "Praveen Kumar Kalbavi",
        role: "Executive Director",
        brief:
          "Praveen has over 30 years of experience in program management and client engagement. As a co-founder of Novigo Solutions, he drives global growth and digital transformation.",
        image: "/Company/Team/Advisory-leaders/Praveen-Kumar-Kalbavi.webp",
        linkedin: "https://www.linkedin.com/in/praveen-kumar-kalbhavi-3908285",
      },
      {
        name: "Hanif",
        role: "Executive Director",
        brief:
          "Mohammed specializes in AI automation and business strategy to optimize processes. He plays a key role in expanding Novigo’s partnerships and driving client success.",
        image: "/Company/Team/Advisory-leaders/Mohammed-Hanif.webp",
        linkedin: "https://www.linkedin.com/in/hanifkulai",
      },
      {
        name: "Shihab Kalandar",
        role: "Executive Director",
        brief:
          "Shihab focuses on developing AI-driven solutions that help businesses transform and optimize operations for greater efficiency and productivity.",
        image: "/Company/Team/Advisory-leaders/Shihab-Kalandar.webp",
        linkedin: "https://www.linkedin.com/in/shihab-kalandar-5228b315",
      },
      {
        name: "Jarood",
        role: "Executive Director",
        brief:
          "With deep expertise in Microsoft technologies, Jarood co-founded Novigo Solutions to deliver innovative IT solutions to Fortune 1000 companies.",
        image: "/Company/Team/Advisory-leaders/Mohammed-Jarood.webp",
        linkedin: "https://www.linkedin.com/in/mohammed-jarood-86024424",
      },
    ],
  },
  {
    title: "Our Execution and Management Collective",
    description:
      "Our Execution and Management team turns strategy into reality, focusing on delivering seamless, AI-driven solutions and immersive learning experiences. From growth and strategy to operational excellence, our experts ensure projects are executed efficiently, driving innovation across industries and organizations.",

    members: [
      {
        name: "Krishna Prakash",
        role: "CEO",
        company: "Karanji",
        brief:
          "Prakash's leadership focuses on transforming how businesses approach learning and technology.",
        image: "/Company/Team/Management-collective/Krishna-Prakash.webp",
        linkedin: "https://www.linkedin.com/in/krishnaprakash-d-2374977/",
        twinlink: "https://linkly.link/2BKPj",
        showTalkButton: true,
      },
      {
        name: "Ryan Lobo",
        role: "Senior Director - Growth, Strategy and Human Resources",
        brief:
          "Ryan accelerates business growth through strategic HR solutions and growth-driven technologies.",
        image: "/Company/Team/Management-collective/Ryan.webp",
        linkedin: "https://www.linkedin.com/in/ryan-l-5091389/",
        showTalkButton: false,
      },

      {
        name: "Vikram Kemmai",
        role: "Senior Director",
        company: "Operations",
        brief:
          "Vikram ensures operational excellence, focusing on technology integration and process optimization.",
        image: "/Company/Team/Management-collective/Vikram-kemmai.webp",
        linkedin: "https://www.linkedin.com/in/vikram-kemmai-086196108/",
        showTalkButton: false,
      },
      {
        name: "Sandhya",
        role: "Director",
        company: "GenAI Solutions",
        brief:
          "Sandhya leads Generative AI solutions, delivering innovative AI-powered learning and transformation services.",
        image: "/Company/Team/Management-collective/Sandhya.webp",
        linkedin: "https://www.linkedin.com/in/sandhya-a-rao/",
        showTalkButton: false,
      },
      {
        name: "Srikant",
        role: "Consultant",
        company: "Gen AI and Strategy",
        brief:
          "Srikant advises on AI strategies and implementation, helping businesses innovate and stay ahead of industry trends.",
        image: "/Company/Team/Management-collective/Srikant.webp",
        linkedin: "https://www.linkedin.com/in/srikantrajan/",
        twinlink: "https://2ly.link/28kzS",
        showTalkButton: true,
      },
      {
        name: "Sudhir Bhandarkar Bantwal",
        role: "Delivery Transformation Specialist",
        brief:
          "Sudhir specializes in delivery transformation, leveraging technology to enhance business and customer experiences.",
        image: "/Company/Team/Management-collective/Sudhir.webp",
        linkedin:
          "https://www.linkedin.com/in/sudhir-bhandarkar-bantwal-1287885/",
        showTalkButton: false,
      },
    ],
  },
];
export const metadata = {
  title:
    "Meet Our Experts: Karanji's AI, VR and Digital Learning Leadership Team",
  description:
    "Meet Karanji's expert team of AI, VR and digital learning professionals. With 18+ years of experience, our leaders deliver transformative technology solutions and immersive learning experiences.",
};
export default async function teampage() {
  const data = await fetchFromStrapi("our-team");
  if (!data) {
    console.error("No data object provided for our-team.");
    return null; // Or return a fallback UI component
  }
  const { heroData, teamData, teamSectionData, ctaData } = data || {};
  console.log("Fetched team data:", teamSectionData);
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection data={heroData} bgImage="/hero/team.png" />
      <CTA data={teamData} />
      <div id="team-section">
        <TeamSections data={teamSectionData} />
      </div>
      <CTA data={ctaData} />
    </main>
  );
}
