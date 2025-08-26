"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";
import { usePathname } from "next/navigation"; // Add this import
import { NAV_LINKS } from "@/constant/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSolution, setActiveSolution] = useState(0);
  const [mobileExpandedItems, setMobileExpandedItems] = useState({});
  const pathname = usePathname(); // Use Next.js navigation hook
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [touchTimeout, setTouchTimeout] = useState(null);

  const navRef = useRef(null);
  const timeoutRef = useRef(null);
  const dropdownRefs = useRef({});
  const touchStartRef = useRef(null);
  const lastTouchRef = useRef(null);

  // Helper function to check if a path is active
  const isActive = (href) => pathname === href;

  // Helper function to check if any child link is active
  const isParentActive = (links) =>
    links?.some(
      (link) => pathname === link.href || pathname.startsWith(link.href + "/")
    );

  // Helper function to check if a section is active (including all nested children)
  const isSectionActive = (item) => {
    // Check direct href match
    if (
      item.href &&
      (pathname === item.href || pathname.startsWith(item.href + "/"))
    ) {
      return true;
    }

    // Check if any direct links are active
    if (item.links && isParentActive(item.links)) {
      return true;
    }

    // Check if any subsections or their children are active
    if (item.subSections) {
      return item.subSections.some((section) => {
        // Check section href
        if (
          pathname === section.href ||
          pathname.startsWith(section.href + "/")
        ) {
          return true;
        }
        // Check section's links
        if (section.links) {
          return section.links.some(
            (link) =>
              pathname === link.href || pathname.startsWith(link.href + "/")
          );
        }
        return false;
      });
    }

    return false;
  };

  // Find and set the active solution section on mount and path change
  useEffect(() => {
    // Only for Solutions dropdown (index 1)
    const solutionsItem = NAV_LINKS[1];
    if (solutionsItem.subSections) {
      const activeIndex = solutionsItem.subSections.findIndex((section) => {
        // Check if section or any of its links are active
        if (
          pathname === section.href ||
          pathname.startsWith(section.href + "/")
        ) {
          return true;
        }
        if (section.links) {
          return section.links.some(
            (link) =>
              pathname === link.href || pathname.startsWith(link.href + "/")
          );
        }
        return false;
      });

      if (activeIndex !== -1) {
        setActiveSolution(activeIndex);
      }
    }
  }, [pathname]);

  // Auto-expand mobile menu items based on active route
  useEffect(() => {
    const expandedItems = {};

    NAV_LINKS.forEach((item, index) => {
      if (isSectionActive(item)) {
        expandedItems[`main-${index}`] = true;

        // For solutions, also expand the active subsection
        if (item.subSections) {
          item.subSections.forEach((section, sectionIndex) => {
            if (
              pathname === section.href ||
              pathname.startsWith(section.href + "/")
            ) {
              expandedItems[`section-${index}-${sectionIndex}`] = true;
            }
            if (section.links) {
              section.links.forEach((link) => {
                if (
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/")
                ) {
                  expandedItems[`section-${index}-${sectionIndex}`] = true;
                }
              });
            }
          });
        }
      }
    });

    setMobileExpandedItems(expandedItems);
  }, [pathname]);

  useEffect(() => {
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
        // Reset to active solution based on current path
        const solutionsItem = NAV_LINKS[1];
        if (solutionsItem.subSections) {
          const activeIndex = solutionsItem.subSections.findIndex((section) => {
            if (
              pathname === section.href ||
              pathname.startsWith(section.href + "/")
            ) {
              return true;
            }
            if (section.links) {
              return section.links.some(
                (link) =>
                  pathname === link.href || pathname.startsWith(link.href + "/")
              );
            }
            return false;
          });
          setActiveSolution(activeIndex !== -1 ? activeIndex : 0);
        }
      }
    };

    const handleTouchOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        // Small delay to prevent accidental closes
        setTimeout(() => {
          setActiveDropdown(null);
          // Reset to active solution based on current path
          const solutionsItem = NAV_LINKS[1];
          if (solutionsItem.subSections) {
            const activeIndex = solutionsItem.subSections.findIndex(
              (section) => {
                if (
                  pathname === section.href ||
                  pathname.startsWith(section.href + "/")
                ) {
                  return true;
                }
                if (section.links) {
                  return section.links.some(
                    (link) =>
                      pathname === link.href ||
                      pathname.startsWith(link.href + "/")
                  );
                }
                return false;
              }
            );
            setActiveSolution(activeIndex !== -1 ? activeIndex : 0);
          }
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
  }, [pathname]);

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
          // Set to the active solution or default to 0
          const solutionsItem = NAV_LINKS[1];
          if (solutionsItem.subSections) {
            const activeIndex = solutionsItem.subSections.findIndex(
              (section) => {
                if (
                  pathname === section.href ||
                  pathname.startsWith(section.href + "/")
                ) {
                  return true;
                }
                if (section.links) {
                  return section.links.some(
                    (link) =>
                      pathname === link.href ||
                      pathname.startsWith(link.href + "/")
                  );
                }
                return false;
              }
            );
            setActiveSolution(activeIndex !== -1 ? activeIndex : 0);
          }
        }
      }
    },
    [isTouchDevice, pathname]
  );

  const handleMouseLeave = useCallback(() => {
    if (!isTouchDevice && window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
        // Keep the active solution based on current path
        const solutionsItem = NAV_LINKS[1];
        if (solutionsItem.subSections) {
          const activeIndex = solutionsItem.subSections.findIndex((section) => {
            if (
              pathname === section.href ||
              pathname.startsWith(section.href + "/")
            ) {
              return true;
            }
            if (section.links) {
              return section.links.some(
                (link) =>
                  pathname === link.href || pathname.startsWith(link.href + "/")
              );
            }
            return false;
          });
          setActiveSolution(activeIndex !== -1 ? activeIndex : 0);
        }
      }, 150);
    }
  }, [isTouchDevice, pathname]);

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
        // Reset to active solution
        if (index === 1) {
          const solutionsItem = NAV_LINKS[1];
          if (solutionsItem.subSections) {
            const activeIndex = solutionsItem.subSections.findIndex(
              (section) => {
                if (
                  pathname === section.href ||
                  pathname.startsWith(section.href + "/")
                ) {
                  return true;
                }
                if (section.links) {
                  return section.links.some(
                    (link) =>
                      pathname === link.href ||
                      pathname.startsWith(link.href + "/")
                  );
                }
                return false;
              }
            );
            setActiveSolution(activeIndex !== -1 ? activeIndex : 0);
          }
        }
      } else {
        // Open dropdown
        setActiveDropdown(index);
        if (index === 1) {
          // Set to the active solution or default to 0
          const solutionsItem = NAV_LINKS[1];
          if (solutionsItem.subSections) {
            const activeIndex = solutionsItem.subSections.findIndex(
              (section) => {
                if (
                  pathname === section.href ||
                  pathname.startsWith(section.href + "/")
                ) {
                  return true;
                }
                if (section.links) {
                  return section.links.some(
                    (link) =>
                      pathname === link.href ||
                      pathname.startsWith(link.href + "/")
                  );
                }
                return false;
              }
            );
            setActiveSolution(activeIndex !== -1 ? activeIndex : 0);
          }
        }
      }

      lastTouchRef.current = now;
    },
    [activeDropdown, pathname]
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
        // Set to the active solution or default to 0
        const solutionsItem = NAV_LINKS[1];
        if (solutionsItem.subSections) {
          const activeIndex = solutionsItem.subSections.findIndex((section) => {
            if (
              pathname === section.href ||
              pathname.startsWith(section.href + "/")
            ) {
              return true;
            }
            if (section.links) {
              return section.links.some(
                (link) =>
                  pathname === link.href || pathname.startsWith(link.href + "/")
              );
            }
            return false;
          });
          setActiveSolution(activeIndex !== -1 ? activeIndex : 0);
        }
      }
    }
  };

  const toggleMobileExpanded = (key) => {
    setMobileExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
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
      className="sticky bg-white py-1 top-0 z-[999] shadow-lg"
      role="navigation"
      aria-label="Main navigation flex">
      <div className="max-w-[1580] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Karanji Home">
              <Image
                src="/logo.svg"
                className="h-8  lg:h-11 w-fit"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex text-start lg:items-center lg:space-x-1">
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
                                  pathname === section.href ||
                                  pathname.startsWith(section.href + "/") ||
                                  (section.links &&
                                    section.links.some(
                                      (link) =>
                                        pathname === link.href ||
                                        pathname.startsWith(link.href + "/")
                                    ))
                                    ? "border-r-2 border-purple-600"
                                    : ""
                                }
                                ${isTouchDevice ? "touch-manipulation" : ""}`}
                              role="menuitem">
                              <div className="flex gap-2 items-center justify-start pointer-events-none">
                                <Image
                                  src={section.icon}
                                  alt={section.title + " icon"}
                                  width={40}
                                  height={40}
                                  className={`rounded-full size-9 group-hover:opacity-100 transition-opacity duration-200 ${
                                    pathname === section.href ||
                                    pathname.startsWith(section.href + "/") ||
                                    (section.links &&
                                      section.links.some(
                                        (link) =>
                                          pathname === link.href ||
                                          pathname.startsWith(link.href + "/")
                                      ))
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
                                      pathname === link.href ||
                                      pathname.startsWith(link.href + "/")
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
                                        pathname === link.href ||
                                        pathname.startsWith(link.href + "/")
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
                          className={`block px-4 py-2 text-xl hover:bg-[#F0E4FF]  transition-colors duration-150 select-none
                          ${
                            pathname === link.href ||
                            pathname.startsWith(link.href + "/")
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
                                pathname === link.href ||
                                pathname.startsWith(link.href + "/")
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
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-300 "
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
        <div className="lg:hidden bg-white border-t border-gray-200 animate-slideDown">
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
