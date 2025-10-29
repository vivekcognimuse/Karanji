"use client";
import { memo, useState } from "react";
import { P1, P3 } from "../CustomTags";
import Button from "./Button";
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";

// Placeholder components - replace with your actual components

export const AIAssessmentCard = memo(function AIAssessmentCard({
  data,
  noPopup = false,
  thankYouPopup = false,
  bgImage = "",
  className = "",
}) {
  const { title, subTitle, ctaLink, ctaText } = data || {};
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const router = useRouter();

  const handleButtonClick = () => {
    if (noPopup) {
      router.push(ctaLink);
    } else {
      setShowForm(true);
      // Show popup logic here
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      // Get current URL and page title
      const sourceUrl = window.location.href;
      const pageTitle = document.title;

      // Send data to API
      const response = await fetch("/api/cta-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          query: `CTA: Request Content Catalogue - ${
            ctaText || "Assessment Request"
          }`,
          sourceUrl: sourceUrl,
          pageTitle: "Content Design",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("API error:", result);
        alert(result.message || "Failed to submit form. Please try again.");
        return;
      }

      if (thankYouPopup) {
        // Show thank you message
        setShowThankYou(true);
        setShowForm(false);
      } else {
        // Redirect to ctaLink if provided
        if (ctaLink) {
          window.open(ctaLink, "_blank", "noopener,noreferrer");
        }
        setShowForm(false);
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleBack = () => {
    setShowForm(false);
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
    // Redirect to ctaLink if provided after showing thank you
  };

  // Check if both fields are filled
  const isFormValid =
    formData.name.trim() !== "" && formData.email.trim() !== "";

  return (
    <div
      className={cn(
        "w-full   flex items-center justify-center   bg-no-repeat bg-cover bg-top rounded-2xl border bg-white/80 border-black/20 p-8 overflow-hidden",
        className
      )}
      style={{
        backgroundImage: bgImage
          ? `url('${bgImage}')`
          : "url(/solutions/assessmentCard-bg.svg)",
      }}>
      <div className="w-full max-w-md space-y-8">
        {showThankYou ? (
          // Thank you state
          <>
            <div className="relative py-8">
              <button
                onClick={handleThankYouClose}
                className="absolute -top-4 -right-4 w-8 h-8  rounded-full flex items-center justify-center transition-colors">
                <svg
                  className="w-6 h-6 text-black/60 hover:text-black cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="text-center space-y-4">
                <h4 className="">Thank you for your interest.</h4>
                <P1 className="text-black/80">
                  Your information has been submitted successfully. We'll get
                  back to you soon.
                </P1>
              </div>
            </div>
          </>
        ) : !showForm ? (
          // Initial state - matching your original design
          <>
            <div className="text-center space-y-4">
              <h4 className="">{title || "AI Assessment"}</h4>
              {subTitle && <P3 className="text-black/80">{subTitle}</P3>}
            </div>
            <div className="flex justify-center">
              <Button onClick={handleButtonClick}>
                {ctaText === "/" ? "Take the AI Diagnostic Now" : ctaText}
              </Button>
            </div>
          </>
        ) : (
          // Form state - similar to your image
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-black/20  focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-black/20  focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 bg-gray-100 text-black hover:bg-gray-200">
                  Back
                </Button>

                <Button
                  type="submit"
                  className={cn(
                    "flex-1",
                    !isFormValid && "opacity-50 cursor-not-allowed"
                  )}
                  disabled={!isFormValid}>
                  {thankYouPopup ? "Submit" : ctaText}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
});
