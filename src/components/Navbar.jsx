"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";

const NAV_LINKS = [
  {
    title: "Home",
    href: "/",
    links: [],
    description:
      "Welcome to our homepage, where you can explore our services and solutions.",
  },
  {
    title: "Solutions",
    subSections: [
      {
        title: "Technology Solutions",
        href: "/technology-solutions",
        icon: "/nav/technology-solutions.svg",
        description: "Innovative technology for your digital needs.",
        links: [
          {
            name: "AI Advisory & Implementation",
            href: "/technology-solutions/ai-advisory",
            icon: "/nav/ai-advisory-implementation.svg",
            description: "Implement AI to drive smarter decisions.",
          },
          {
            name: "XR & Gaming Solutions",
            href: "/technology-solutions/xr-gaming",
            icon: "/nav/xr-gaming-solutions.svg",
            description: "Transform your business with immersive XR.",
          },
          {
            name: "Digital Twins & Simulations",
            href: "/technology-solutions/digital-twins",
            icon: "/nav/digital-twins-simulations.svg",
            description: "Optimize operations with virtual simulations.",
          },
        ],
      },
      {
        title: "Digital Learning",
        href: "/digital-learning",
        icon: "/nav/digital-learning.svg",
        description:
          "Empowering businesses through cutting-edge digital learning.",
        links: [
          {
            name: "Content Design & Development",
            href: "/digital-learning/content-design",
            icon: "/nav/content-design-development.svg",
            description: "Tailored content & expert-led learning.",
          },
          {
            name: "Learning Management Systems",
            href: "/digital-learning/lms-implementation",
            icon: "/nav/learning-management-systems.svg",
            description: "Customizable, & seamlessly integrated learning.",
          },
          {
            name: "Advanced Analytics",
            href: "/digital-learning/analytics",
            icon: "/nav/advanced-analytics.svg",
            description: "Actionable insights for better performance.",
          },
        ],
      },
      {
        title: "Creative Services",
        href: "/creative-services",
        icon: "/nav/creative-services.svg",
        description:
          "Bringing your ideas to life with creativity & innovation.",
        links: [
          {
            name: "VFX & Animation Services",
            href: "/creative-services/vfx-animation",
            icon: "/nav/vfx-animation-services.svg",
            description: "Stunning visual effects and animations.",
          },
          {
            name: "Audio & Podcast Production",
            href: "/creative-services/audio",
            icon: "/nav/audio-podcast-production.svg",
            description: "Professional audio and podcast solutions.",
          },
          {
            name: "Event Production & Management",
            href: "/creative-services/event",
            icon: "/nav/event-production-management.svg",
            description: "Transform your events with expert management.",
          },
        ],
      },
    ],
  },
  {
    title: "Industries",
    href: "/Industries",
    links: [
      {
        name: "Healthcare",
        href: "/Industries/healthcare",
        icon: "/nav/healthcare.svg",
        description: "Empowering care with smart technology.",
      },
      {
        name: "Aviation",
        href: "/Industries/aviation",
        icon: "/nav/aviation.svg",
        description: "Transforming aviation with future-ready solutions.",
      },
      {
        name: "Logistics",
        href: "/Industries/logistics",
        icon: "/nav/logistics.svg",
        description: "Streamlining supply chains with precision.",
      },
      {
        name: "Oil & Gas",
        href: "/Industries/oil-and-gas",
        icon: "/nav/oil-gas.svg",
        description: "Fueling digital innovation & efficiency.",
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
        icon: "/nav/about-us.svg",
        description: "Our vision & mission guide everything we do.",
      },
      {
        name: "Our Team",
        href: "/company/our-team",
        icon: "/nav/our-team.svg",
        description: "Meet the experts driving innovation & success.",
      },
      {
        name: "Careers",
        href: "/company/careers",
        icon: "/nav/careers.svg",
        description: "Join our team & make an impact.",
      },
      {
        name: "Digital Twin",
        href: "/company/digital-twin",
        icon: "/nav/digital-twins-simulations.svg",
        description: "Discover what it's like to work at Karanji.",
      },
      {
        name: "Contact Us",
        href: "/contact",
        icon: "/nav/contact-us.svg",
        description: "Get in touch for inquiries & support.",
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
        icon: "/nav/case-studies.svg",
        description: "Explore real-world solutions & success stories.",
      },
      {
        name: "Blog & Insights",
        href: "/blog-insights",
        icon: "/nav/blog-insights.svg",
        description: "Stay informed with the latest trends & insights.",
      },
      {
        name: "Webinars",
        href: "/webinar",
        icon: "/nav/webinars.svg",
        description: "Join us for insightful webinars & events.",
      },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSolution, setActiveSolution] = useState(0);
  const [mobileExpandedItems, setMobileExpandedItems] = useState({});
  const [currentPath, setCurrentPath] = useState("/");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [touchTimeout, setTouchTimeout] = useState(null);

  const navRef = useRef(null);
  const timeoutRef = useRef(null);
  const dropdownRefs = useRef({});
  const touchStartRef = useRef(null);
  const lastTouchRef = useRef(null);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setActiveSolution(0);
      }
    };

    const handleClickOutside = (e) => {
      // Don't close on touch events to prevent premature closing
      if (e.type === "touchstart") {
        return;
      }

      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setActiveSolution(0);
      }
    };

    const handleTouchOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        // Small delay to prevent accidental closes
        setTimeout(() => {
          setActiveDropdown(null);
          setActiveSolution(0);
        }, 100);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleTouchOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, []);

  // Clear timeout on cleanup
  useEffect(() => {
    return () => {
      if (touchTimeout) {
        clearTimeout(touchTimeout);
      }
    };
  }, [touchTimeout]);

  const handleMouseEnter = useCallback(
    (index) => {
      if (!isTouchDevice && window.innerWidth >= 768) {
        clearTimeout(timeoutRef.current);
        setActiveDropdown(index);
        if (index === 1) {
          setActiveSolution(0);
        }
      }
    },
    [isTouchDevice]
  );

  const handleMouseLeave = useCallback(() => {
    if (!isTouchDevice && window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
        setActiveSolution(0);
      }, 150);
    }
  }, [isTouchDevice]);

  const handleSolutionHover = useCallback(
    (index) => {
      if (!isTouchDevice && window.innerWidth >= 768) {
        clearTimeout(timeoutRef.current);
        setActiveSolution(index);
      }
    },
    [isTouchDevice]
  );

  // Enhanced touch handling for main nav items
  const handleNavTouch = useCallback(
    (e, index, item) => {
      e.preventDefault();
      e.stopPropagation();

      const now = Date.now();
      const timeSinceLastTouch = now - (lastTouchRef.current || 0);

      // If dropdown is already open for this item
      if (activeDropdown === index) {
        // Double tap detection (within 300ms)
        if (timeSinceLastTouch < 300 && item.href && item.href !== "#") {
          // Navigate on double tap
          window.location.href = item.href;
          return;
        }

        // Single tap - close dropdown
        setActiveDropdown(null);
        setActiveSolution(0);
      } else {
        // Open dropdown
        setActiveDropdown(index);
        if (index === 1) {
          setActiveSolution(0);
        }
      }

      lastTouchRef.current = now;
    },
    [activeDropdown]
  );

  // Touch handling for solution sections
  const handleSolutionTouch = useCallback((e, sectionIndex) => {
    e.stopPropagation();
    setActiveSolution(sectionIndex);
  }, []);

  const handleClick = (e, index, item) => {
    // For touch devices or mobile screens
    if (isTouchDevice || window.innerWidth < 768) {
      // If item has dropdown content
      if (item.links?.length > 0 || item.subSections?.length > 0) {
        e.preventDefault();
        handleNavTouch(e, index, item);
      }
      // Otherwise allow normal navigation
    } else {
      // Desktop behavior
      if (!item.href || item.href === "#") {
        e.preventDefault();
      }
      setActiveDropdown(activeDropdown === index ? null : index);
      if (index === 1) {
        setActiveSolution(0);
      }
    }
  };

  const toggleMobileExpanded = (key) => {
    setMobileExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isActive = (href) => currentPath === href;
  const isParentActive = (links) =>
    links?.some((link) => currentPath === link.href);
  const isSectionActive = (item) => {
    if (item.href && currentPath === item.href) return true;
    if (item.links && isParentActive(item.links)) return true;
    if (item.subSections) {
      return item.subSections.some(
        (section) =>
          currentPath === section.href || isParentActive(section.links)
      );
    }
    return false;
  };

  const getDropdownPosition = (index) => {
    if (typeof window === "undefined") return {};

    if (index === 1) {
      return {};
    } else {
      const item = dropdownRefs.current[index];
      if (!item) return {};

      const rect = item.getBoundingClientRect();
      const dropdownWidth = 320;
      const spaceOnRight = window.innerWidth - rect.left;

      if (spaceOnRight < dropdownWidth) {
        return { right: "0" };
      }
      return {};
    }
  };

  return (
    <nav
      ref={navRef}
      className="sticky bg-white top-0 z-[999] shadow-lg"
      role="navigation"
      aria-label="Main navigation flex">
      <div className="max-w-[1580] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Karanji Home">
              <Image
                src="/logo.svg"
                className="h-12 w-fit"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex text-start md:items-center md:space-x-1">
            {NAV_LINKS.map((item, index) => (
              <div
                key={index}
                className="relative text-nowrap"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onTouchStart={(e) => {
                  if (item.links?.length > 0 || item.subSections?.length > 0) {
                    handleNavTouch(e, index, item);
                  }
                }}
                ref={(el) => (dropdownRefs.current[index] = el)}>
                <Link
                  href={item.href || "#"}
                  onClick={(e) => handleClick(e, index, item)}
                  className={`px-4 py-2 lg:text-xl transition-colors duration-200 flex items-center gap-1 select-none
                    ${
                      isSectionActive(item)
                        ? "text-black"
                        : "text-black/50 hover:text-black"
                    }
                    ${isTouchDevice ? "touch-manipulation" : ""}`}
                  aria-expanded={activeDropdown === index}
                  aria-haspopup={
                    item.links?.length > 0 || item.subSections?.length > 0
                  }>
                  {item.title}
                  {(item.links?.length > 0 || item.subSections?.length > 0) && (
                    <Icon
                      icon="mdi:chevron-down"
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </Link>

                {/* Solutions Mega Menu */}
                {item.subSections && activeDropdown === index && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-lg shadow-xl overflow-hidden animate-slideDown w-[790px]"
                    role="menu"
                    onTouchStart={(e) => e.stopPropagation()}>
                    <div className="flex">
                      <div className="w-1/2 border-r border-gray-100">
                        {item.subSections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            onMouseEnter={() =>
                              handleSolutionHover(sectionIndex)
                            }
                            onTouchStart={(e) =>
                              handleSolutionTouch(e, sectionIndex)
                            }
                            className={`relative ${
                              activeSolution === sectionIndex
                                ? "bg-[#F0E4FF]"
                                : ""
                            }`}>
                            <Link
                              href={section.href}
                              className={`block px-4 py-3 text-black hover:bg-[#F0E4FF] transition-colors duration-150 group select-none
                                ${
                                  isActive(section.href) ||
                                  isParentActive(section.links)
                                    ? "border-r-2 border-purple-600"
                                    : ""
                                }
                                ${isTouchDevice ? "touch-manipulation" : ""}`}
                              role="menuitem">
                              <div className="flex gap-2 items-center justify-start pointer-events-none">
                                <Image
                                  src={section.icon}
                                  alt={section.name + " icon"}
                                  width={40}
                                  height={40}
                                  className={`rounded-full size-9 group-hover:opacity-100 transition-opacity duration-200 ${
                                    isActive(section.href)
                                      ? "opacity-100"
                                      : "opacity-60"
                                  }`}
                                />
                                <div className="space-y-2">
                                  <p className="text-lg gap-2">
                                    {section.title}
                                  </p>
                                  <p className="text-xs font-light">
                                    {section.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>

                      <div className="w-1/2 space-y-2 py-2">
                        {item.subSections[activeSolution]?.links.map(
                          (link, linkIndex) => {
                            return (
                              <Link key={linkIndex} href={link.href}>
                                <div
                                  className={`block px-4 py-2 hover:bg-[#F0E4FF] transition-colors duration-150 select-none
                                    ${
                                      isActive(link.href)
                                        ? "border-r-2 border-purple-600"
                                        : ""
                                    }
                                    ${
                                      isTouchDevice ? "touch-manipulation" : ""
                                    }`}
                                  role="menuitem">
                                  <div className="flex gap-2 items-center justify-start pointer-events-none">
                                    <Image
                                      src={link.icon}
                                      alt={link.name + " icon"}
                                      width={40}
                                      height={40}
                                      unoptimized
                                      className={`rounded-full size-9 group-hover:opacity-100 transition-opacity duration-200 ${
                                        isActive(link.href)
                                          ? "opacity-100"
                                          : "opacity-60"
                                      }`}
                                    />
                                    <div className="space-y-2">
                                      <p className="text-lg gap-2">
                                        {link.name}
                                      </p>
                                      <p className="text-xs font-light">
                                        {link.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Regular Dropdown */}
                {item.links &&
                  item.links.length > 0 &&
                  activeDropdown === index && (
                    <div
                      className="absolute top-full left-0 mt-1 w-[22rem] bg-white rounded-lg shadow-xl py-2 animate-slideDown"
                      role="menu"
                      onTouchStart={(e) => e.stopPropagation()}>
                      {item.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className={`block px-4 py-2 text-xl hover:bg-[#F0E4FF] transition-colors duration-150 select-none
                          ${
                            isActive(link.href)
                              ? "text-black border-r-2 border-purple-600"
                              : "text-gray-700 hover:text-black"
                          }
                          ${isTouchDevice ? "touch-manipulation" : ""}`}
                          role="menuitem">
                          <div className="flex gap-2 items-center justify-start pointer-events-none">
                            <Image
                              src={link.icon}
                              alt={link.name + " icon"}
                              width={40}
                              height={40}
                              unoptimized
                              className={`rounded-full size-9 group-hover:opacity-100 transition-opacity duration-200 ${
                                isActive(link.href)
                                  ? "opacity-100"
                                  : "opacity-60"
                              }`}
                            />
                            <div className="space-y-2">
                              <p className="text-lg">{link.name}</p>
                              <p className="text-xs font-light">
                                {link.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            {/* Get in Touch CTA */}
            <Link href="/contact" className="" aria-label="Get in Touch">
              <Button size="sm" className="px-4 text-xl">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              aria-expanded={isOpen}
              aria-label="Toggle mobile menu">
              <Icon
                icon={isOpen ? "mdi:close" : "mdi:menu"}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - unchanged */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map((item, index) => (
              <div key={index}>
                {/* Main item */}
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href || "#"}
                    onClick={(e) => {
                      if (
                        item.href &&
                        item.href !== "#" &&
                        !item.links?.length &&
                        !item.subSections?.length
                      ) {
                        setIsOpen(false);
                      } else if (
                        item.links?.length > 0 ||
                        item.subSections?.length > 0
                      ) {
                        if (
                          e.target === e.currentTarget &&
                          item.href &&
                          item.href !== "#"
                        ) {
                          setIsOpen(false);
                        } else {
                          e.preventDefault();
                        }
                      }
                    }}
                    className={`flex-1 px-3 py-2 text-base rounded-md
                      ${
                        isSectionActive(item)
                          ? "text-black bg-[#F0E4FF] "
                          : "text-gray-700 hover:text-black hover:bg-gray-50"
                      }`}>
                    {item.title}
                  </Link>
                  {(item.links?.length > 0 || item.subSections?.length > 0) && (
                    <button
                      onClick={() => toggleMobileExpanded(`main-${index}`)}
                      className="p-2 hover:bg-gray-100 rounded"
                      aria-label={`Toggle ${item.title} submenu`}
                      aria-expanded={mobileExpandedItems[`main-${index}`]}>
                      <Icon
                        icon="mdi:chevron-down"
                        className={`w-5 h-5 transition-transform duration-200 ${
                          mobileExpandedItems[`main-${index}`]
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Solutions SubSections */}
                {item.subSections && mobileExpandedItems[`main-${index}`] && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.subSections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <div className="flex items-center justify-between">
                          <Link
                            href={section.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex-1 px-3 py-2 lg:text-xl rounded-md
                              ${
                                isActive(section.href) ||
                                isParentActive(section.links)
                                  ? "text-black bg-[#F0E4FF] b"
                                  : "text-gray-600 hover:text-black hover:bg-gray-50"
                              }`}>
                            {section.title}
                          </Link>
                          <button
                            onClick={() =>
                              toggleMobileExpanded(
                                `section-${index}-${sectionIndex}`
                              )
                            }
                            className="px-3"
                            aria-label={`Toggle ${section.title} submenu`}
                            aria-expanded={
                              mobileExpandedItems[
                                `section-${index}-${sectionIndex}`
                              ]
                            }>
                            <Icon
                              icon={
                                mobileExpandedItems[
                                  `section-${index}-${sectionIndex}`
                                ]
                                  ? "mdi:minus"
                                  : "mdi:plus"
                              }
                              className="w-4 h-4"
                            />
                          </button>
                        </div>

                        {mobileExpandedItems[
                          `section-${index}-${sectionIndex}`
                        ] && (
                          <div className="ml-4 mt-1 space-y-1">
                            {section.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 text-sm rounded-md
                                  ${
                                    isActive(link.href)
                                      ? "text-black bg-[#F0E4FF] border-l-2 border-purple-600"
                                      : "text-gray-500 hover:text-black hover:bg-gray-50"
                                  }`}>
                                {link.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Regular Links */}
                {item.links && mobileExpandedItems[`main-${index}`] && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 lg:text-xl rounded-md
                          ${
                            isActive(link.href)
                              ? "text-black bg-[#F0E4FF] border-l-2 border-purple-600"
                              : "text-gray-600 hover:text-black hover:bg-gray-50"
                          }`}>
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Get in Touch CTA */}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="">Get in Touch</Button>
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }

        /* Touch-specific styles */
        .touch-manipulation {
          touch-action: manipulation;
        }

        /* Increase touch target size on touch devices */
        @media (pointer: coarse) {
          .select-none {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
          }
        }
      `}</style>
    </nav>
  );
}
