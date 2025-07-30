import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { P4, P5 } from "./CustomTags";
const Footer = () => {
  const footerSections = [
    {
      title: "Technology Solutions",
      links: [
        "AI Advisory & Implementation",
        "Digital Twins & Simulations",
        "XR & Gaming Solutions",
      ],
    },
    {
      title: "Creative & Entertainment",
      links: ["VFX & Animation", "Event Production", "Audio & Podcast"],
    },
    {
      title: "Digital Learning",
      links: [
        "eLearning Development",
        "MicroLearning",
        "Interactive Experiences",
        "LMS Implementation",
      ],
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Contact"],
    },
  ];

  const socialIcons = [
    { icon: "mdi:linkedin", href: "#" },
    { icon: "mdi:twitter", href: "#" },
    { icon: "mdi:facebook", href: "#" },
    { icon: "mdi:instagram", href: "#" },
  ];

  return (
    <footer className="w-full max-w-7xl mx-auto space-y-16 lg:space-y-32 mt-16 lg:mt-32">
      {/* Footer Links */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
        {/* Logo */}
        <div className="flex  gap-2">
          <div className="w-10 h-10 bg-black rounded" />
          <span className="text-2xl lg:text-3xl font-light font-outfit tracking-wide text-black">
            Karanji
          </span>
        </div>

        {/* Footer Navigation */}
        <nav className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <P4 className="text-black ">{section.title}</P4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-black  font-normal font-outfit leading-loose tracking-wide">
                      <P5>{link}</P5>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-black/10">
        {/* Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <Icon icon="mdi:copyright" className="w-4 h-4 text-black/70" />
            <span className="text-sm font-light font-outfit leading-relaxed tracking-wide text-black/80">
              2025 Karanji. All rights reserved.
            </span>
          </div>
          {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-light font-outfit underline leading-relaxed tracking-wide text-black/80 hover:text-black transition-colors">
                {item}
              </a>
            )
          )}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform text-black hover:text-gray-700">
              <Icon icon={social.icon} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
