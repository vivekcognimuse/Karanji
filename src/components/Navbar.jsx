"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import { navigationData } from "@/constant/navigation";
import Image from "next/image";

// ===== UTILITY FUNCTIONS =====
const getDropdownPosition = (navItem, dropdownWidth = 512, padding = 16) => {
  if (!navItem) return { left: 0, right: "auto" };

  const navItemRect = navItem.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const itemCenter = navItemRect.left + navItemRect.width / 2;
  const idealLeft = itemCenter - dropdownWidth / 2;

  let finalLeft = Math.max(padding, idealLeft);
  if (idealLeft + dropdownWidth > viewportWidth - padding) {
    finalLeft = viewportWidth - dropdownWidth - padding;
  }

  return { left: finalLeft, right: "auto" };
};

const getDropdownTopPosition = (navContainer) => {
  if (!navContainer) return 0;
  const navRect = navContainer.getBoundingClientRect();
  return navRect.bottom + 2;
};

const GetInTouchButton = ({ mobile = false }) => (
  <a
    href="/contact"
    className={`${
      mobile ? "px-4 py-2 text-sm text-center w-full" : "px-6 py-3 text-sm"
    } bg-purple-600 rounded-full text-white font-medium tracking-wide hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg`}>
    Request a Consultation
  </a>
);

// ===== DROPDOWN COMPONENTS =====
const ThirdLevelDropdown = ({ items, isVisible, parentTitle, position }) => {
  if (!items?.length) return null;

  return (
    <div
      className={`absolute left-full top-0 ml-2 w-80 bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden z-[10001] transition-all duration-300 ${
        isVisible
          ? "opacity-100 visible transform translate-x-0"
          : "opacity-0 invisible transform -translate-x-4"
      }`}
      style={{ willChange: "transform, opacity", top: position?.top || 0 }}>
      <div className="p-4">
        <div className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-3 px-1">
          {parentTitle}
        </div>
        <div className="space-y-1">
          {items.map((subItem, index) => (
            <a
              key={index}
              href={subItem.href}
              className="flex items-start gap-3 p-3 hover:bg-purple-50 rounded-lg transition-all duration-200 group/subitem">
              <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full mt-2 opacity-60 group-hover/subitem:opacity-100 transition-opacity duration-200" />
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 text-sm font-medium tracking-tight mb-1 group-hover/subitem:text-purple-700 transition-colors duration-200">
                  {subItem.title}
                </p>
                <p className="text-gray-600 text-xs font-light tracking-tight leading-4">
                  {subItem.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const SecondLevelMenuItem = ({
  item,
  category,
  index,
  activeThirdLevel,
  setActiveThirdLevel,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [thirdLevelPosition, setThirdLevelPosition] = useState({ top: 0 });
  const itemRef = useRef(null);
  const hasSubItems = item.subItems?.length > 0;
  const isThirdLevelActive = activeThirdLevel === `${category}-${index}`;

  const handleMouseEnter = useCallback(
    (e) => {
      if (hasSubItems && itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        const dropdownContainer = itemRef.current.closest(
          "[data-dropdown-container]"
        );

        if (dropdownContainer) {
          const containerRect = dropdownContainer.getBoundingClientRect();
          const relativeTop = rect.top - containerRect.top;
          setThirdLevelPosition({ top: Math.max(0, relativeTop) });
        }

        setActiveThirdLevel(`${category}-${index}`);
      }
      onMouseEnter?.(e);
    },
    [hasSubItems, category, index, setActiveThirdLevel, onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e) => {
      const relatedTarget = e.relatedTarget;
      const isMovingToThirdLevel = relatedTarget?.closest("[data-third-level]");

      if (!isMovingToThirdLevel) {
        setActiveThirdLevel(null);
      }
      onMouseLeave?.(e);
    },
    [setActiveThirdLevel, onMouseLeave]
  );

  return (
    <div
      ref={itemRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-second-level>
      <a
        href={item.href}
        className="flex items-start gap-3 p-4 hover:bg-purple-50 border-r-2 border-transparent hover:border-purple-500 transition-all duration-200 group/item">
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-lg text-gray-600">
          <Icon icon={item.icon} className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <p className="text-gray-900 text-base font-medium tracking-tight">
              {item.title}
            </p>
            {hasSubItems && (
              <Icon
                icon="mdi:chevron-right"
                className="w-4 h-4 text-gray-400 group-hover/item:text-purple-500 transition-colors duration-200"
              />
            )}
          </div>
          <p className="text-gray-600 text-sm font-light tracking-tight leading-5">
            {item.description}
          </p>
        </div>
      </a>

      {hasSubItems && (
        <div data-third-level>
          <ThirdLevelDropdown
            items={item.subItems}
            isVisible={isThirdLevelActive}
            parentTitle={item.title}
            position={thirdLevelPosition}
          />
        </div>
      )}
    </div>
  );
};

const DropdownContainer = ({
  dropdownContainerRef,
  dropdownContentRef,
  activeDropdown,
  activeThirdLevel,
  setActiveThirdLevel,
}) => {
  const handleMouseLeave = useCallback(
    (e) => {
      const relatedTarget = e.relatedTarget;
      const isStayingInDropdown =
        relatedTarget?.closest("[data-dropdown-container]") ||
        relatedTarget?.closest("[data-third-level]");

      if (!isStayingInDropdown) {
        setActiveThirdLevel(null);
      }
    },
    [setActiveThirdLevel]
  );

  return (
    <div
      ref={dropdownContainerRef}
      data-dropdown-container
      className="fixed w-full max-w-lg bg-white rounded-lg border border-gray-200 shadow-xl overflow-visible z-[10000]"
      style={{
        willChange: "transform, opacity",
        left: 0,
        top: 0,
        visibility: "hidden",
      }}
      onMouseLeave={handleMouseLeave}>
      <div
        ref={dropdownContentRef}
        className="p-2 space-y-1"
        style={{ willChange: "transform, opacity" }}>
        {activeDropdown &&
          navigationData[activeDropdown]?.subItems?.map((subItem, index) => (
            <SecondLevelMenuItem
              key={`${activeDropdown}-${index}`}
              item={subItem}
              category={activeDropdown}
              index={index}
              activeThirdLevel={activeThirdLevel}
              setActiveThirdLevel={setActiveThirdLevel}
            />
          ))}
      </div>
    </div>
  );
};

// ===== MOBILE COMPONENTS =====
const MobileThirdLevel = ({ items, isExpanded }) => {
  if (!items?.length) return null;

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
      <div className="pl-8 space-y-1 pt-2 border-l-2 border-purple-100 ml-4">
        {items.map((subItem, index) => (
          <a
            key={index}
            href={subItem.href}
            className="flex items-start gap-2 p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200">
            <div className="flex-shrink-0 w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 opacity-60" />
            <div className="flex-1">
              <div className="font-medium text-xs mb-1">{subItem.title}</div>
              <div className="text-xs text-gray-500 leading-4">
                {subItem.description}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const MobileSecondLevel = ({
  item,
  index,
  expandedItems,
  toggleExpanded,
  categoryKey,
}) => {
  const hasSubItems = item.subItems?.length > 0;
  const itemKey = `${categoryKey}-${index}`;
  const isExpanded = expandedItems.includes(itemKey);

  const handleItemClick = (e) => {
    if (hasSubItems) {
      e.preventDefault(); // Prevent navigation for items with subItems
      toggleExpanded(itemKey);
    }
    // If no subItems, allow normal navigation
  };

  return (
    <div className="border-l-2 border-gray-100 ml-2">
      <div className="flex items-center justify-between">
        <a
          href={hasSubItems ? "#" : item.href}
          onClick={handleItemClick}
          className="flex-1 flex items-center gap-3 p-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200">
          <Icon icon={item.icon} className="w-4 h-4 text-gray-500" />
          <div className="flex-1">
            <div className="font-medium text-sm mb-1">{item.title}</div>
            <div className="text-xs text-gray-500 leading-4">
              {item.description}
            </div>
          </div>
        </a>
        {hasSubItems && (
          <button
            onClick={() => toggleExpanded(itemKey)}
            className="p-2 text-gray-400 hover:text-purple-600 transition-colors duration-200"
            aria-label={`Toggle ${item.title} submenu`}>
            <Icon
              icon={isExpanded ? "mdi:chevron-up" : "mdi:chevron-down"}
              className="w-4 h-4"
            />
          </button>
        )}
      </div>
      {hasSubItems && (
        <MobileThirdLevel items={item.subItems} isExpanded={isExpanded} />
      )}
    </div>
  );
};

const MobileMenuItem = ({
  category,
  items,
  expandedCategories,
  toggleCategory,
  expandedItems,
  toggleExpanded,
}) => {
  const isCategoryExpanded = expandedCategories.includes(category);
  const hasItems = items?.length > 0;

  const handleCategoryClick = (e) => {
    if (hasItems) {
      e.preventDefault(); // Prevent navigation for categories with items
      toggleCategory(category);
    }
    // If no items, allow normal navigation
  };

  if (!hasItems) {
    return (
      <a
        href={navigationData[category]?.href || "#"}
        className="block text-gray-900 text-base font-medium tracking-tight hover:text-purple-600 transition-colors duration-300 py-2">
        {category}
      </a>
    );
  }

  return (
    <div className="border-b border-gray-100 pb-3">
      <div className="flex items-center justify-between">
        <button
          onClick={handleCategoryClick}
          className="flex-1 text-left text-gray-900 text-base font-medium tracking-tight hover:text-purple-600 transition-colors duration-300 py-2">
          {category}
        </button>
        <button
          onClick={() => toggleCategory(category)}
          className="p-1 text-gray-400 hover:text-purple-600 transition-colors duration-200"
          aria-label={`Toggle ${category} menu`}>
          <Icon
            icon={isCategoryExpanded ? "mdi:chevron-up" : "mdi:chevron-down"}
            className="w-5 h-5"
          />
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isCategoryExpanded
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0"
        }`}>
        <div className="space-y-2 pt-2">
          {items.map((subItem, index) => (
            <MobileSecondLevel
              key={index}
              item={subItem}
              index={index}
              categoryKey={category}
              expandedItems={expandedItems}
              toggleExpanded={toggleExpanded}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileMenu = ({
  mobileMenuRef,
  navigationKeys,
  expandedCategories,
  toggleCategory,
  expandedItems,
  toggleExpanded,
}) => (
  <div
    ref={mobileMenuRef}
    className="mobile-menu lg:hidden w-full bg-white border border-gray-200 rounded-lg shadow-xl mt-4 p-4 max-h-[70vh] overflow-y-auto"
    style={{ willChange: "transform, opacity" }}>
    <div className="flex flex-col space-y-4">
      {navigationKeys.map((item) => (
        <MobileMenuItem
          key={item}
          category={item}
          items={navigationData[item]?.subItems || []}
          expandedCategories={expandedCategories}
          toggleCategory={toggleCategory}
          expandedItems={expandedItems}
          toggleExpanded={toggleExpanded}
        />
      ))}
      <div className="pt-4 border-t border-gray-200">
        <GetInTouchButton mobile />
      </div>
    </div>
  </div>
);

// ===== DESKTOP COMPONENTS =====
const NavigationItem = ({ item, navItemsRef, chevronRefs, onMouseEnter }) => {
  const hasSubItems = navigationData[item]?.subItems?.length > 0;

  return (
    <div className="relative" onMouseEnter={() => onMouseEnter(item)}>
      <a
        ref={(el) => (navItemsRef.current[item] = el)}
        href={navigationData[item]?.href || "#"}
        className="p-3 rounded-t-lg flex items-center gap-1 transition-all duration-300 text-gray-900 hover:text-purple-600">
        <span className="text-base font-medium tracking-tight">{item}</span>
        {hasSubItems && (
          <Icon
            ref={(el) => (chevronRefs.current[item] = el)}
            icon="mdi:chevron-down"
            className="w-4 h-4 transition-transform duration-200"
          />
        )}
      </a>
    </div>
  );
};

const DesktopNavigation = ({
  navContainerRef,
  dropdownHooks,
  onMouseLeave,
}) => {
  const navigationKeys = Object.keys(navigationData);

  return (
    <div
      ref={navContainerRef}
      data-navigation-area
      className="hidden lg:flex items-center gap-6 relative"
      onMouseLeave={onMouseLeave}>
      {/* Active Indicator */}
      <div
        ref={dropdownHooks.activeIndicatorRef}
        className="absolute bottom-0 h-0.5 bg-purple-500 transform origin-left"
        style={{ willChange: "transform" }}
      />

      {navigationKeys.map((item) => (
        <NavigationItem
          key={item}
          item={item}
          navItemsRef={dropdownHooks.navItemsRef}
          chevronRefs={dropdownHooks.chevronRefs}
          onMouseEnter={dropdownHooks.handleDropdownEnter}
        />
      ))}

      <GetInTouchButton />

      <DropdownContainer {...dropdownHooks} />
    </div>
  );
};

// ===== CUSTOM HOOKS =====
const useDropdownAnimations = (navContainerRef) => {
  const dropdownContainerRef = useRef(null);
  const dropdownContentRef = useRef(null);
  const activeIndicatorRef = useRef(null);
  const chevronRefs = useRef({});
  const navItemsRef = useRef({});

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeThirdLevel, setActiveThirdLevel] = useState(null);

  const navigationKeys = Object.keys(navigationData);

  // Initialize GSAP
  useEffect(() => {
    if (dropdownContainerRef.current) {
      gsap.set(dropdownContainerRef.current, {
        autoAlpha: 0,
        y: -10,
        force3D: true,
      });
    }

    if (activeIndicatorRef.current) {
      gsap.set(activeIndicatorRef.current, {
        scaleX: 0,
        force3D: true,
      });
    }
  }, []);

  const updateActiveIndicator = useCallback((itemName) => {
    const navItem = navItemsRef.current[itemName];
    const indicator = activeIndicatorRef.current;
    const navContainer = navContainerRef.current;

    if (navItem && indicator && navContainer) {
      const navItemRect = navItem.getBoundingClientRect();
      const navContainerRect = navContainer.getBoundingClientRect();

      const left = navItemRect.left - navContainerRect.left;
      const width = navItemRect.width;

      gsap.to(indicator, {
        x: left,
        width: width,
        scaleX: 1,
        duration: 0.25,
        ease: "power2.out",
        force3D: true,
      });
    }
  }, []);

  const hideActiveIndicator = useCallback(() => {
    if (activeIndicatorRef.current) {
      gsap.to(activeIndicatorRef.current, {
        scaleX: 0,
        duration: 0.15,
        ease: "power2.in",
        force3D: true,
      });
    }
  }, []);

  const slideToContent = useCallback(
    (itemName) => {
      if (dropdownContentRef.current && activeDropdown !== itemName) {
        const direction =
          navigationKeys.indexOf(itemName) >
          navigationKeys.indexOf(activeDropdown)
            ? 1
            : -1;

        gsap.to(dropdownContentRef.current, {
          x: direction * -50,
          autoAlpha: 0,
          duration: 0.15,
          ease: "power2.inOut",
          force3D: true,
          onComplete: () => {
            setActiveDropdown(itemName);
            setActiveThirdLevel(null);
            gsap.fromTo(
              dropdownContentRef.current,
              { x: direction * 50, autoAlpha: 0, force3D: true },
              {
                x: 0,
                autoAlpha: 1,
                duration: 0.2,
                ease: "power2.out",
                force3D: true,
              }
            );
          },
        });
      } else if (!activeDropdown) {
        setActiveDropdown(itemName);
        setActiveThirdLevel(null);
        gsap.fromTo(
          dropdownContentRef.current,
          { x: 0, autoAlpha: 0, force3D: true },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.2,
            ease: "power2.out",
            force3D: true,
          }
        );
      }
    },
    [activeDropdown, navigationKeys]
  );

  const handleDropdownEnter = useCallback(
    (itemName) => {
      const hasSubItems = navigationData[itemName]?.subItems?.length > 0;

      if (!hasSubItems) return;

      const chevron = chevronRefs.current[itemName];

      updateActiveIndicator(itemName);

      if (!isDropdownOpen) {
        setIsDropdownOpen(true);
        setActiveDropdown(itemName);
        setActiveThirdLevel(null);

        if (dropdownContainerRef.current) {
          const position = getDropdownPosition(navItemsRef.current[itemName]);
          const topPosition = getDropdownTopPosition(navContainerRef.current);

          gsap.set(dropdownContainerRef.current, {
            left: position.left,
            right: position.right,
            top: topPosition,
            autoAlpha: 0,
            y: -10,
          });

          gsap.to(dropdownContainerRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            force3D: true,
          });
        }
      } else {
        slideToContent(itemName);

        if (dropdownContainerRef.current) {
          const position = getDropdownPosition(navItemsRef.current[itemName]);
          gsap.to(dropdownContainerRef.current, {
            left: position.left,
            right: position.right,
            duration: 0.25,
            ease: "power2.out",
            force3D: true,
          });
        }
      }

      if (chevron) {
        gsap.to(chevron, {
          rotation: 180,
          duration: 0.15,
          ease: "power1.inOut",
          force3D: true,
        });
      }

      Object.keys(chevronRefs.current).forEach((key) => {
        if (key !== itemName && chevronRefs.current[key]) {
          gsap.to(chevronRefs.current[key], {
            rotation: 0,
            duration: 0.15,
            ease: "power1.inOut",
            force3D: true,
          });
        }
      });
    },
    [isDropdownOpen, slideToContent, updateActiveIndicator]
  );

  const handleDropdownLeave = useCallback(() => {
    setIsDropdownOpen(false);
    setActiveDropdown(null);
    setActiveThirdLevel(null);

    hideActiveIndicator();

    if (dropdownContainerRef.current) {
      gsap.to(dropdownContainerRef.current, {
        autoAlpha: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        force3D: true,
      });
    }

    Object.values(chevronRefs.current).forEach((chevron) => {
      if (chevron) {
        gsap.to(chevron, {
          rotation: 0,
          duration: 0.15,
          ease: "power1.inOut",
          force3D: true,
        });
      }
    });
  }, [hideActiveIndicator]);

  return {
    dropdownContainerRef,
    dropdownContentRef,
    activeIndicatorRef,
    chevronRefs,
    navItemsRef,
    activeDropdown,
    isDropdownOpen,
    activeThirdLevel,
    setActiveThirdLevel,
    handleDropdownEnter,
    handleDropdownLeave,
  };
};

const useMobileMenuAnimations = () => {
  const mobileMenuRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleMobileMenu = useCallback(() => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    if (mobileMenuRef.current) {
      if (newState) {
        gsap.fromTo(
          mobileMenuRef.current,
          { autoAlpha: 0, y: -20, force3D: true },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            force3D: true,
          }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          autoAlpha: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.in",
          force3D: true,
        });
      }
    }
  }, [isMobileMenuOpen]);

  const toggleCategory = useCallback((category) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  }, []);

  const toggleExpanded = useCallback((itemId) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  }, []);

  return {
    mobileMenuRef,
    isMobileMenuOpen,
    expandedCategories,
    expandedItems,
    toggleMobileMenu,
    toggleCategory,
    toggleExpanded,
  };
};

// ===== MAIN COMPONENT =====
const Navigation = () => {
  const navContainerRef = useRef(null);
  const navigationKeys = Object.keys(navigationData);

  const dropdownHooks = useDropdownAnimations(navContainerRef);
  const mobileHooks = useMobileMenuAnimations();

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownHooks.dropdownContainerRef.current &&
        !dropdownHooks.dropdownContainerRef.current.contains(event.target) &&
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target)
      ) {
        dropdownHooks.handleDropdownLeave();
      }
    };

    if (dropdownHooks.isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dropdownHooks.isDropdownOpen, dropdownHooks.handleDropdownLeave]);

  // Handle escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        if (dropdownHooks.isDropdownOpen) {
          dropdownHooks.handleDropdownLeave();
        }
        if (mobileHooks.isMobileMenuOpen) {
          mobileHooks.toggleMobileMenu();
        }
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [
    dropdownHooks.isDropdownOpen,
    mobileHooks.isMobileMenuOpen,
    dropdownHooks.handleDropdownLeave,
    mobileHooks.toggleMobileMenu,
  ]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileHooks.isMobileMenuOpen) {
        mobileHooks.toggleMobileMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileHooks.isMobileMenuOpen, mobileHooks.toggleMobileMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileHooks.isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileHooks.isMobileMenuOpen]);

  return (
    <>
      <div className="fixed left-0 flex w-full top-0 z-[9998]">
        <header className="w-full relative bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-row justify-between items-center gap-4 py-4">
              <Image
                src="/logo.svg"
                className="h-8 w-fit"
                alt="Logo"
                width={100}
                height={100}
              />

              <DesktopNavigation
                navContainerRef={navContainerRef}
                dropdownHooks={dropdownHooks}
                onMouseLeave={dropdownHooks.handleDropdownLeave}
              />

              <button
                onClick={mobileHooks.toggleMobileMenu}
                className="lg:hidden p-2 text-gray-900 hover:text-purple-600 transition-colors duration-300 rounded-lg hover:bg-purple-50"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileHooks.isMobileMenuOpen}>
                <Icon
                  icon={mobileHooks.isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
                  className="w-6 h-6"
                />
              </button>
            </nav>
          </div>
        </header>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileHooks.isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={mobileHooks.toggleMobileMenu}
          />
          <div className="relative bg-white h-full overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <Image
                  src="/logo.svg"
                  className="h-8 w-fit"
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <button
                  onClick={mobileHooks.toggleMobileMenu}
                  className="p-2 text-gray-900 hover:text-purple-600 transition-colors duration-300"
                  aria-label="Close mobile menu">
                  <Icon icon="mdi:close" className="w-6 h-6" />
                </button>
              </div>
            </div>
            <MobileMenu
              mobileMenuRef={mobileHooks.mobileMenuRef}
              navigationKeys={navigationKeys}
              expandedCategories={mobileHooks.expandedCategories}
              toggleCategory={mobileHooks.toggleCategory}
              expandedItems={mobileHooks.expandedItems}
              toggleExpanded={mobileHooks.toggleExpanded}
            />
          </div>
        </div>
      )}

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-20" />
    </>
  );
};

export default Navigation;
// "use client";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   const links = [
//     { href: "/technology-solutions", subtitle: "Technology Solutions" },
//     { href: "/technology-solutions/ai-advisory", subtitle: "AI Advisory" },
//     { href: "/technology-solutions/xr-gaming", subtitle: "XR Gaming" },
//     { href: "/technology-solutions/digital-twins", subtitle: "Digital Twins" },
//     { href: "/blog-insights", subtitle: "Blog Insights" },
//     { href: "/case-studies", subtitle: "Case Studies" },
//     { href: "/webinar", subtitle: "Webinar" },
//     { href: "/resources", subtitle: "Resources" },
//     { href: "/contact", subtitle: "Contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
//       <div className="max-w-[1580px] mx-auto px-4 py-3 flex items-center justify-between">
//         <div className="text-lg font-semibold">
//           <Image
//             src="/logo.svg"
//             className="h-8 w-fit"
//             alt="Logo"
//             unoptimized
//             width={100}
//             height={100}
//           />
//         </div>
//         <ul className="flex gap-6">
//           {links.map((link) => (
//             <li key={link.href}>
//               <Link
//                 href={link.href}
//                 className="text-gray-800 hover:text-blue-600 transition-colors">
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
