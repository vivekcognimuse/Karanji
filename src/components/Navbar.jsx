"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const NAV_LINKS = [
  {
    title: "Home",
    href: "/",
    links: [],
    description: "Welcome to our homepage, where you can explore our services and solutions.",
  },
  {
    title: "Solutions",
    subSections: [
      {
        title: "Technology Solutions",
        href: "/technology-solutions",
        description: "Innovative technology for your digital needs.",
        links: [
          {
            name: "AI Advisory & Implementation",
            href: "/technology-solutions/ai-advisory",
            description: "Implement AI to drive smarter decisions.",
          },
          {
            name: "XR & Gaming Solutions",
            href: "/technology-solutions/xr-gaming",
            description: "Transform your business with immersive XR.",
          },
          {
            name: "Digital Twins & Simulations",
            href: "/technology-solutions/digital-twins",
            description: "Optimize operations with virtual simulations.",
          },
        ],
      },
      {
        title: "Digital Learning",
        href: "/digital-learning",
        description: "Empowering businesses through cutting-edge digital learning.",
        links: [
          {
            name: "Content Design & Development",
            href: "/digital-learning/content-design",
            description: "Tailored content & expert-led learning.",
          },
          {
            name: "Learning Management Systems",
            href: "/digital-learning/lms-implementation",
            description: "Customizable, & seamlessly integrated learning.",
          },
          {
            name: "Advanced Analytics",
            href: "/digital-learning/analytics",
            description: "Actionable insights for better performance.",
          },
        ],
      },
      {
        title: "Creative Services",
        href: "/creative-services",
        description: "Bringing your ideas to life with creativity & innovation.",
        links: [
          {
            name: "VFX & Animation Services",
            href: "/entertainment/vfx&animation",
            description: "Implement AI to drive smarter decisions.",
          },
          {
            name: "Audio & Podcast Production",
            href: "/entertainment/audio",
            description: "Optimize operations with virtual simulations.",
          },
          {
            name: "Event Production & Management",
            href: "/entertainment/event",
            description: "Transform your business with immersive XR.",
          },
        ],
      },
    ],
  },
  {
    title: "Industries",
    links: [
      {
        name: "Healthcare",
        href: "/healthcare",
        description: "Empowering care with smart technology.",
      },
      {
        name: "Aviation",
        href: "/aviation",
        description: "Transforming aviation with future-ready solutions.",
      },
      {
        name: "Logistics",
        href: "/logistics",
        description: "Streamlining supply chains with precision.",
      },
      {
        name: "Oil & Gas",
        href: "/oil-and-gas",
        description: "Fueling digital innovation & efficiency.",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        href: "/company/about-us",
        description: "Our vision & mission guide everything we do.",
      },
      {
        name: "Our Team",
        href: "/company/our-team",
        description: "Meet the experts driving innovation & success.",
      },
      {
        name: "Careers",
        href: "/company/careers",
        description: "Join our team & make an impact.",
      },
      {
        name: "Contact Us",
        href: "/contact",
        description: "Get in touch for inquiries & support.",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Case Studies",
        href: "/case-studies",
        description: "Explore real-world solutions & success stories.",
      },
      {
        name: "Blog & Insights",
        href: "/blog-insights",
        description: "Stay informed with the latest trends & insights.",
      },
      {
        name: "Webinars",
        href: "/webinar",
        description: "Join us for insightful webinars & events.",
      },
    ],
  },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSolution, setActiveSolution] = useState(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState({});
  const [currentPath, setCurrentPath] = useState("/");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const navRef = useRef(null);
  const timeoutRef = useRef(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setActiveSolution(null);
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setActiveSolution(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = useCallback(
    (index) => {
      if (!isTouchDevice && window.innerWidth >= 768) {
        clearTimeout(timeoutRef.current);
        setActiveDropdown(index);
        if (index !== 1) setActiveSolution(null);
      }
    },
    [isTouchDevice]
  );

  const handleMouseLeave = useCallback(() => {
    if (!isTouchDevice && window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
        setActiveSolution(null);
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

  const handleClick = (index) => {
    if (isTouchDevice || window.innerWidth < 768) {
      setActiveDropdown(activeDropdown === index ? null : index);
      setActiveSolution(null);
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
    const item = dropdownRefs.current[index];
    if (!item) return {};

    const rect = item.getBoundingClientRect();
    const dropdownWidth = 280;
    const megaMenuWidth = 560;

    if (index === 1) {
      // Solutions mega menu
      const spaceOnRight = window.innerWidth - rect.left;
      if (spaceOnRight < megaMenuWidth) {
        return { right: "0", left: "auto" };
      }
    } else {
      const spaceOnRight = window.innerWidth - rect.left;
      if (spaceOnRight < dropdownWidth) {
        return { right: "0", left: "auto" };
      }
    }

    return {};
  };

  return (
    <nav
      ref={navRef}
      className=" sticky top-0 z-50 shadow-lg"
      role="navigation"
      aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-white text-xl font-bold"
              aria-label="Karanji Home">
              Karanji
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {NAV_LINKS.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                ref={(el) => (dropdownRefs.current[index] = el)}>
                <Link
                  href={item.href || "#"}
                  onClick={(e) => {
                    if (!item.href || item.href === "#") {
                      e.preventDefault();
                      handleClick(index);
                    }
                  }}
                  className={`px-4 py-2 text-lg lg:text-xl font-medium transition-colors duration-200 flex items-center gap-1
                    ${
                      isSectionActive(item)
                        ? "text-black "
                        : "text-black/50 hover:text-black"
                    }`}
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
                    className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl overflow-hidden animate-slideDown"
                    style={{ ...getDropdownPosition(index), minWidth: "560px" }}
                    role="menu">
                    <div className="flex">
                      <div className="w-1/2 border-r bg-red-300 border-gray-100">
                        {item.subSections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            onMouseEnter={() =>
                              handleSolutionHover(sectionIndex)
                            }
                            className={`relative ${
                              activeSolution === sectionIndex
                                ? "bg-purple-50"
                                : ""
                            }`}>
                            <Link
                              href={section.href}
                              className={`block px-4 py-3 hover:bg-purple-50 transition-colors duration-150 group
                                ${
                                  isActive(section.href) ||
                                  isParentActive(section.links)
                                    ? "text-black font-medium border-r-2 border-purple-600"
                                    : "text-gray-700"
                                }`}
                              role="menuitem">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-medium flex items-center gap-2">
                                    {sectionIndex === 0 && (
                                      <Icon
                                        icon="mdi:robot"
                                        className="w-5 h-5 text-purple-600"
                                      />
                                    )}
                                    {sectionIndex === 1 && (
                                      <Icon
                                        icon="mdi:school"
                                        className="w-5 h-5 text-purple-600"
                                      />
                                    )}
                                    {sectionIndex === 2 && (
                                      <Icon
                                        icon="mdi:palette"
                                        className="w-5 h-5 text-purple-600"
                                      />
                                    )}
                                    {section.title}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {sectionIndex === 0 &&
                                      "Innovative technology for your digital needs"}
                                    {sectionIndex === 1 &&
                                      "Empowering businesses through cutting-edge digital learning"}
                                    {sectionIndex === 2 &&
                                      "Bringing your ideas to life with creativity & innovation"}
                                  </div>
                                </div>
                                <Icon
                                  icon="mdi:chevron-right"
                                  className="w-5 h-5 text-gray-400 group-hover:text-purple-600"
                                />
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>

                      <div className="w-1/2 py-2">
                        {activeSolution !== null &&
                          item.subSections[activeSolution]?.links.map(
                            (link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.href}
                                className={`block px-4 py-2 text-sm hover:bg-purple-50 transition-colors duration-150
                              ${
                                isActive(link.href)
                                  ? "text-black font-medium border-r-2 border-purple-600"
                                  : "text-gray-600 hover:text-black"
                              }`}
                                role="menuitem">
                                {link.name}
                              </a>
                            )
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
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl py-2 animate-slideDown"
                      style={getDropdownPosition(index)}
                      role="menu">
                      {item.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          className={`block px-4 py-2 text-sm hover:bg-purple-50 transition-colors duration-150
                          ${
                            isActive(link.href)
                              ? "text-black font-medium border-r-2 border-purple-600"
                              : "text-gray-700 hover:text-black"
                          }`}
                          role="menuitem">
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            {/* Get in Touch CTA */}
            <a
              href="/contact"
              className="ml-4 px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
              aria-label="Get in Touch">
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map((item, index) => (
              <div key={index}>
                {/* Main item */}
                <div className="flex items-center justify-between">
                  <a
                    href={item.href || "#"}
                    onClick={(e) => {
                      if (
                        item.links?.length > 0 ||
                        item.subSections?.length > 0
                      ) {
                        if (e.target === e.currentTarget) {
                          window.location.href = item.href || "#";
                        }
                      }
                    }}
                    className={`flex-1 px-3 py-2 text-base font-medium rounded-md
                      ${
                        isSectionActive(item)
                          ? "text-black bg-purple-50 border-l-2 border-purple-600"
                          : "text-gray-700 hover:text-black hover:bg-gray-50"
                      }`}>
                    {item.title}
                  </a>
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
                          <a
                            href={section.href}
                            className={`flex-1 px-3 py-2 text-sm rounded-md
                              ${
                                isActive(section.href) ||
                                isParentActive(section.links)
                                  ? "text-black bg-purple-50 border-l-2 border-purple-600"
                                  : "text-gray-600 hover:text-black hover:bg-gray-50"
                              }`}>
                            {section.title}
                          </a>
                          <button
                            onClick={() =>
                              toggleMobileExpanded(
                                `section-${index}-${sectionIndex}`
                              )
                            }
                            className="p-2 hover:bg-gray-100 rounded"
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
                                className={`block px-3 py-2 text-xs rounded-md
                                  ${
                                    isActive(link.href)
                                      ? "text-black bg-purple-50 border-l-2 border-purple-600"
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
                        className={`block px-3 py-2 text-sm rounded-md
                          ${
                            isActive(link.href)
                              ? "text-black bg-purple-50 border-l-2 border-purple-600"
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
            <a
              href="/contact"
              className="block w-full mt-4 px-4 py-2 bg-black text-white text-center rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
              Get in Touch
            </a>
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
      `}</style>
    </nav>
  );
}
