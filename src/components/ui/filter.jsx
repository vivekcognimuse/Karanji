"use client";
import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

const FilterDropdown = ({
  children,
  selectedValue = "",
  className = "",
  dropdownClassName = "",
  iconClassName = "",
  showSelectedInButton = true,
  buttonText = "Filter",
  position = "left", // "left" | "right" | "center"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChildClick = () => {
    setIsOpen(false);
  };

  // Clone children and add onClick handler to close dropdown
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onClick: (e) => {
          if (child.props.onClick) {
            child.props.onClick(e);
          }
          handleChildClick();
        },
      });
    }
    return child;
  });

  // Determine dropdown positioning classes
  const getPositionClasses = () => {
    switch (position) {
      case "right":
        return "right-0";
      case "center":
        return "left-1/2 -translate-x-1/2";
      case "left":
      default:
        return "left-0";
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Filter Button */}
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-colors ${
          isOpen ? "bg-gray-50" : ""
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Icon icon="lucide:filter" className={`w-4 h-4 ${iconClassName}`} />
        <span className="text-sm font-medium">
          {showSelectedInButton && selectedValue ? selectedValue : buttonText}
        </span>
        <Icon
          icon="lucide:chevron-down"
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div className="fixed inset-0 backdrop-blur-sm bg-black/10  z-40 md:hidden" />

          {/* Dropdown Content */}
          <div
            ref={dropdownRef}
            className={`absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px] max-h-80 overflow-y-auto ${getPositionClasses()} ${dropdownClassName}`}
          >
            <div className="py-2">{enhancedChildren}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterDropdown;
