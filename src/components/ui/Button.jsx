"use client";
import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Utility function for className merging

// Button variants using CVA (Class Variance Authority)
const buttonVariants = cva(
  // Base styles
  "inline-flex flex-center items-center  justify-center transition cursor-pointer gap-2 whitespace-nowrap rounded-full text-base font-normal font-outfit tracking-wide transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "bg-black text-white border border-black  hover:scale-105 focus-visible:bg-gray-800",
        secondary:
          "bg-transparent text-black border border-black hover:bg-gray-50 hover:scale-105 focus-visible:bg-gray-50",
        ghost:
          "border-transparent text-black hover:bg-gray-100 hover:scale-105 focus-visible:bg-gray-100",
        text: "inline-flex mx-auto items-center gap-2 text-lg text-black tracking-wide hover:opacity-80 transition-opacity",
        destructive:
          "bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:scale-105 focus-visible:bg-red-700",
      },
      size: {
        sm: "px-3 py-2 text-sm lg:text-base",
        md: "px-4 py-3 text-base lg:text-lg lg:px-5 lg:py-3.5",
        lg: "px-6 py-4 text-lg lg:text-xl lg:px-7 lg:py-4.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

// Button component with full accessibility
const Button = forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      disabled,
      loading,
      loadingText = "Loading...",
      leftIcon,
      rightIcon,
      children,
      type = "button",
      onClick,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    // Handle keyboard navigation
    const handleKeyDown = (e) => {
      if (onKeyDown) {
        onKeyDown(e);
      }

      // Enter and Space key handling
      if ((e.key === "Enter" || e.key === " ") && !disabled && !loading) {
        e.preventDefault();
        onClick?.(e);
      }
    };

    // Handle click with loading state
    const handleClick = (e) => {
      if (!disabled && !loading && onClick) {
        onClick(e);
      }
    };

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isDisabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...props}>
        {/* Loading spinner */}
        {loading && (
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {/* Left icon */}
        {leftIcon && !loading && (
          <span className="flex-shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}

        {/* Button text */}
        <span className="flex-1">{loading ? loadingText : children}</span>

        {/* Right icon */}
        {rightIcon && !loading && (
          <span className="flex-shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

// Utility function for className merging (if you don't have it)
// Add this to your utils file: @/lib/utils.js

export default Button;
