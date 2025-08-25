import HeroSection from "@/sections/Advisory/Hero";
import CTA from "@/sections/digital-learning/CTA";
import TeamSections from "@/sections/Company/about/teamSections";
import Head from "next/head";

const heroData = {
  title: "Meet the Experts",
  subTitle:
    "Driven by innovation & over 18 years of experience, our leadership team combines creativity, strategy, & technology to deliver transformative digital learning experiences & next-gen tech solutions.",
  ctaText: "Scroll down",
  ctaLink: "team-section", // You can change this to the appropriate link for your services page
  linkIcon: "mdi:arrow-down", // Default icon for "Scroll down"
  backgroundImage: "/path/to/your/hero-image.jpg", // Provide the background image URL
};

const ctaData = {
  title: "Join Our Team",
  description:
    "Be part of a passionate group of innovators building impactful tech solutions & redefining digital learning. If you're driven by curiosity, creativity, and purpose-we'd love to hear from you.",
  PrimaryButtonText: "Explore Careers",
  PrimaryButtonLink: "/company/careers",
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
    showTalkButton: false, // For execution team
    members: [
      {
        name: "Praveen Kumar Kalbavi",
        role: "Executive Director",
        brief:
          "Praveen has over 30 years of experience in program management & client engagement. As a co-founder of Novigo Solutions, he drives global growth & digital transformation.",
        image: "/Company/Team/Advisory-leaders/Praveen-Kumar-Kalbavi.webp",
        linkedin: "https://www.linkedin.com/in/praveen-kumar-kalbhavi-3908285",
      },
      {
        name: "Mohammed Hanif",
        role: "Executive Director",
        brief:
          "Mohammed specializes in AI automation & business strategy to optimize processes. He plays a key role in expanding Novigo’s partnerships & driving client success.",
        image: "/Company/Team/Advisory-leaders/Mohammed-Hanif.webp",
        linkedin: "https://www.linkedin.com/in/hanifkulai",
      },
      {
        name: "Shihab Kalandar",
        role: "Executive Director",
        brief:
          "Shihab focuses on developing AI-driven solutions that help businesses transform & optimize operations for greater efficiency & productivity.",
        image: "/Company/Team/Advisory-leaders/Shihab-Kalandar.webp",
        linkedin: "https://www.linkedin.com/in/shihab-kalandar-5228b315",
      },
      {
        name: "Mohammed Jarood",
        role: "Executive Director",
        brief:
          "With deep expertise in Microsoft technologies, Mohammed co-founded Novigo Solutions to deliver innovative IT solutions to Fortune 1000 companies.",
        image: "/Company/Team/Advisory-leaders/Mohammed-Jarood.webp",
        linkedin: "https://www.linkedin.com/in/mohammed-jarood-86024424",
      },
    ],
  },
  {
    title: "Our Execution & Management Collective",
    description:
      "Our Execution & Management team turns strategy into reality, focusing on delivering seamless, AI-driven solutions & immersive learning experiences. From growth & strategy to operational excellence, our experts ensure projects are executed efficiently, driving innovation across industries & organizations.",

    members: [
      {
        name: "Krishna Prakash",
        role: "CEO",
        company: "Karanji",
        brief:
          "Prakash's leadership focuses on transforming how businesses approach learning & technology.",
        image: "/Company/Team/Management-collective/Krishna-Prakash.webp",
        linkedin: "https://www.linkedin.com/in/krishnaprakash-d-2374977/",
        twinlink: "https://linkly.link/2BKPj",
        showTalkButton: true,
      },
      {
        name: "Ryan Lobo",
        role: "Senior Director - Growth & Strategy & Human Resources",
        brief:
          "Ryan accelerates business growth through strategic HR solutions & growth-driven technologies.",
        image: "/Company/Team/Management-collective/Ryan.webp",
        linkedin: "https://www.linkedin.com/in/ryan-l-5091389/",
        showTalkButton: false,
      },

      {
        name: "Vikram Kemmai",
        role: "Senior Director",
        company: "Operations",
        brief:
          "Vikram ensures operational excellence, focusing on technology integration & process optimization.",
        image: "/Company/Team/Management-collective/Vikram-kemmai.webp",
        linkedin: "https://www.linkedin.com/in/vikram-kemmai-086196108/",
        showTalkButton: false,
      },
      {
        name: "Sandhya",
        role: "Director",
        company: "GenAI Solutions",
        brief:
          "Sandhya leads Generative AI solutions, delivering innovative AI-powered learning & transformation services.",
        image: "/Company/Team/Management-collective/Sandhya.webp",
        linkedin: "https://www.linkedin.com/in/sandhya-a-rao/",
        showTalkButton: false,
      },
      {
        name: "Srikant",
        role: "Consultant",
        company: "Gen AI & Strategy",
        brief:
          "Srikant advises on AI strategies & implementation, helping businesses innovate & stay ahead of industry trends.",
        image: "/Company/Team/Management-collective/Srikant.webp",
        linkedin: "https://www.linkedin.com/in/srikantrajan/",
        twinlink: "https://2ly.link/28kzS",
        showTalkButton: true,
      },
      {
        name: "Sudhir Bhandarkar Bantwal",
        role: "Delivery Transformation Specialist",
        brief:
          "Sudhir specializes in delivery transformation, leveraging technology to enhance business & customer experiences.",
        image:
          "/Company/Team/Management-collective/Sudhir-Bhandarkar-Bantwal.webp",
        linkedin:
          "https://www.linkedin.com/in/sudhir-bhandarkar-bantwal-1287885/",
        showTalkButton: false,
      },
    ],
  },
];

export default async function teampage() {
  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      {" "}
      <HeroSection data={heroData} bgImage="/hero/team.png" />
      <CTA data={teamData} />
      <div id="team-section">
        <TeamSections sections={teamSectionData} />
      </div>
      <CTA data={ctaData} />
    </main>
  );
}
