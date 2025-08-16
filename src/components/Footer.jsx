"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { P5 } from "./CustomTags";
import Image from "next/image";

const Footer = () => {
  const footerSections = [
    {
      title: "Technology Solutions",
      href: "/technology-solutions",
      links: [
        {
          name: "AI Advisory & Implementation",
          href: "/technology-solutions/ai-advisory",
        },
        {
          name: "Digital Twins & Simulations",
          href: "/technology-solutions/digital-twins",
        },
        {
          name: "XR & Gaming Solutions",
          href: "/technology-solutions/xr-gaming",
        },
      ],
    },
    {
      title: "Digital Learning",
      href: "/digital-learning",
      links: [
        {
          name: "Content Design & Development",
          href: "/digital-learning/content-design",
        },
        {
          name: "Learning Management Systems",
          href: "/digital-learning/lms-implementation",
        },
        {
          name: "Advanced Analytics",
          href: "/digital-learning/analytics",
        },
      ],
    },
    {
      title: "Creative Services", // Updated from Entertainment Services to Creative Services
      href: "/creative-services",
      links: [
        {
          name: "VFX & Animation Services",
          href: "/creative-services/vfx-animation",
        },
        {
          name: "Audio & Podcast Production",
          href: "/creative-services/audio",
        },
        {
          name: "Event Production & Management",
          href: "/creative-services/event",
        },
      ],
    },
    {
      title: "Industries",
      href: "/industries",
      links: [
        {
          name: "Healthcare",
          href: "/healthcare",
        },
        {
          name: "Aviation",
          href: "/aviation",
        },
        {
          name: "Logistics",
          href: "/logistics",
        },
        {
          name: "Oil & Gas",
          href: "/oil-and-gas",
        },
      ],
    },
    {
      title: "Company",
      href: "/company",
      links: [
        {
          name: "About Us",
          href: "/company/about-us",
        },
        {
          name: "Our Team",
          href: "/company/our-team",
        },
        {
          name: "Careers",
          href: "/company/careers",
        },
        {
          name: "Contact",
          href: "/contact",
        },
      ],
    },
    {
      title: "Resources",
      href: "/resources",
      links: [
        {
          name: "Case Studies",
          href: "/case-studies",
        },
        {
          name: "Blog & Insights",
          href: "/blog-insights",
        },
        {
          name: "Webinars",
          href: "/webinar",
        },
      ],
    },
  ];

  const socialIcons = [
    {
      icon: "mdi:linkedin",
      href: "https://www.linkedin.com/company/karanji-infotech-pvt-ltd/",
    },
    // { icon: "mdi:twitter", href: "#" },
    // { icon: "mdi:facebook", href: "#" },
    // { icon: "mdi:instagram", href: "#" },
  ];

  return (
    <footer className="w-full max-w-[1580px] pb-10 px-8 mx-auto space-y-16 lg:space-y-32 mt-8 lg:mt-8">
      {/* Top */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
        <Image
          src="/logo.svg"
          className="h-8 w-fit"
          alt="Logo"
          width={100}
          height={100}
        />

        {/* Nav */}
        <nav className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4   mb-4 min-w-0">
              <Link href={section.href}>
                <P5 className="text-black cursor-pointer hover:underline break-words">
                  {section.title}
                </P5>
              </Link>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name} className="min-w-0">
                    <Link
                      href={link.href}
                      className="text-black hover:underline font-normal font-outfit leading-relaxed tracking-wide break-words">
                      <P5 className="break-words">{link.name}</P5>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      {/* Bottom */}
      <div>
        <p className="mt-auto font-light text-sm text-black-500">
          The quantitative metrics presented here are based on research and
          comparable implementations. These figures serve as directional
          indicators of potential magnitude rather than guaranteed outcomes. The
          actual impact may vary due to a multitude of factors.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 ">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Icon icon="mdi:copyright" className="w-4 h-4 text-black/70" />
              <span className="text-sm font-light font-outfit leading-relaxed tracking-wide text-black/80">
                2025 Karanji. All rights reserved.
              </span>
            </div>
            {["Terms of Service"].map((item) => (
              <Link
                key={item}
                href="/terms-policies"
                className="text-sm font-light font-outfit underline leading-relaxed tracking-wide text-black/80 hover:text-black transition-colors">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                href={social.href}
                className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform text-black hover:text-gray-700">
                <Icon icon={social.icon} className="size-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
