"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [dropdownAlignment, setDropdownAlignment] = useState({});
  const dropdownRefs = useRef({});

  const navItems = [
    {
      title: "Technology Solutions",
      href: "/technology-solutions",
      dropdown: [
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
      dropdown: [
        {
          name: "Content Design & Development",
          href: "/digital-learning/content-design",
        },
        {
          name: "Learning Management Systems",
          href: "/digital-learning/lms-implementation",
        },
        { name: "Advanced Analytics", href: "/digital-learning/analytics" },
      ],
    },
    {
      title: "Entertainment",
      href: "/entertainment",
      dropdown: [
        {
          name: "VFX & Animation Services",
          href: "/entertainment/vfx-animation",
        },
        { name: "Audio & Podcast Production", href: "/entertainment/audio" },
        { name: "Event Production & Management", href: "/entertainment/event" },
      ],
    },
    {
      title: "Industries",
      href: "/industries",
      dropdown: [
        { name: "Healthcare", href: "/healthcare" },
        { name: "Aviation", href: "/aviation" },
        { name: "Logistics", href: "/logistics" },
        { name: "Oil & Gas", href: "/oil-and-gas" },
      ],
    },
    {
      title: "Company",
      href: "/company",
      dropdown: [
        { name: "About Us", href: "/company/about-us" },
        { name: "Our Team", href: "/company/our-team" },
        { name: "Careers", href: "/company/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      href: "/resources",
      dropdown: [
        { name: "Blog", href: "/blog-insights" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Webinars", href: "/webinar" },
      ],
    },
  ];

  // Calculate dropdown position to prevent viewport overflow
  useEffect(() => {
    if (activeDropdown !== null && dropdownRefs.current[activeDropdown]) {
      const dropdown = dropdownRefs.current[activeDropdown];
      const rect = dropdown.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      let alignment = "left";

      // Check if dropdown would overflow on the right
      if (rect.right > viewportWidth - 20) {
        alignment = "right";
      }

      // Check if dropdown would overflow on the left
      if (rect.left < 20) {
        alignment = "left";
      }

      setDropdownAlignment((prev) => ({
        ...prev,
        [activeDropdown]: alignment,
      }));
    }
  }, [activeDropdown]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav-item")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              <Image
                src="/logo.svg"
                className="h-8 w-fit"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="nav-item relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">
                  {item.title}
                  {item.dropdown && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Desktop Dropdown */}
                {item.dropdown && activeDropdown === index && (
                  <div
                    ref={(el) => (dropdownRefs.current[index] = el)}
                    className={`absolute top-full mt-1 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ${
                      dropdownAlignment[index] === "right"
                        ? "right-0"
                        : "left-0"
                    }`}>
                    <div className="py-1">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleMobileDropdown(index)}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                  {item.title}
                  {item.dropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeMobileDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item.dropdown && activeMobileDropdown === index && (
                  <div className="pl-4">
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
