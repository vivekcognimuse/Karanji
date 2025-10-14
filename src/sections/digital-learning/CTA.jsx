// Updated CTA.jsx
"use client";
import { P2 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import Link from "next/link";
import React, { useState } from "react";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const CTA = ({ className = "", data }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    title,
    subTitle,
    PrimaryButton,
    secondaryButton,
    // New props for popup
    popupTitle = "Join the Journey",
    popupSubtitle = "Share your details and discover how Karanji can support your goals.",
    popupButtonText = "Submit",
  } = data || {};

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.query.trim()) {
      newErrors.query = "Please tell us how we can help you";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

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
          query: formData.query,
          sourceUrl: sourceUrl,
          pageTitle: pageTitle,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("API error:", result);
        alert(result.message || "Failed to submit form. Please try again.");
        setIsSubmitting(false);
        return;
      }

      console.log("Form submitted successfully:", result);

      // Show thank you message
      setShowThankYou(true);

      // Reset form
      setFormData({ name: "", email: "", query: "" });
      setErrors({});

      // Close popup after 7 seconds
      setTimeout(() => {
        setShowThankYou(false);
        setIsPopupOpen(false);
      }, 7000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setShowThankYou(false);
    setFormData({ name: "", email: "", query: "" });
    setErrors({});
  };

  // Open popup when primary button is clicked
  const handlePrimaryButtonClick = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <>
      <section className={`text-center ${className}`}>
        {/* Title */}
        <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
          <h3>{title}</h3>
        </RevealWrapper>

        {/* Subtitle */}
        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.1}
          threshold={0.2}>
          <P2>{subTitle}</P2>
        </RevealWrapper>

        {/* Buttons */}
        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.2}
          distance={25}
          threshold={0.2}>
          <div className="flex-center flex-col lg:flex-row mt-8 gap-8">
            {PrimaryButton?.name && (
              <Button variant="secondary" onClick={handlePrimaryButtonClick}>
                {PrimaryButton.name}
              </Button>
            )}
            {secondaryButton?.name && secondaryButton?.link && (
              <Link href={secondaryButton.link}>
                <Button href={secondaryButton.link}>
                  {secondaryButton.name}
                </Button>
              </Link>
            )}
          </div>
        </RevealWrapper>
      </section>

      {/* Popup Overlay - No changes */}
      {isPopupOpen && (
        <div className="fixed  inset-0 h-screen bg-black/10 backdrop-blur-md flex items-center justify-center z-[9999] p-4">
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 flex flex-col justify-center max-h-[98vh] rounded-3xl min-h-[60vh] max-w-xl w-full mx-4 p-8 relative">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-6 cursor-pointer right-6 text-black-600 hover:text-gray-800 text-4xl font-light"
              type="button">
              ×
            </button>

            {showThankYou ? (
              // Thank You Message
              <div className="text-center py-8">
                <div className="mb-6">
                  <p className="text-black/80 font-sans text-2xl lg:text-5xl font-medium mb-4 lg:mb-8">
                    Thank you for your interest.
                  </p>
                  <p className="text-black/80 text-xl font-normal mb-8">
                    Our team will review your message and respond within 48
                    hours.
                  </p>
                </div>
              </div>
            ) : (
              // Form
              <>
                <p className="text-black/80 font-sans text-2xl lg:text-5xl font-medium mb-4 lg:mb-4">
                  {popupTitle}
                </p>
                <p className="text-black/80 text-xl font-normal mb-4">
                  {popupSubtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="text-black/80 text-lg font-normal mb-2">
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Alex"
                      className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 ${
                        errors.name ? "border-red-500" : "border-gray-400"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="text-black/80 text-lg font-normal mb-2">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@meta.com"
                      className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 ${
                        errors.email ? "border-red-500" : "border-gray-400"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Query Field */}
                  <div>
                    <label className="text-black/80 text-lg font-normal mb-2">
                      How can we help you?
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="query"
                      value={formData.query}
                      onChange={handleInputChange}
                      placeholder="Your query, interest, or discussion point"
                      rows={2}
                      className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 ${
                        errors.query ? "border-red-500" : "border-gray-400"
                      } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                    />
                    {errors.query && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.query}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className=" disabled:opacity-50 mx-auto px-12 lg:px-12 disabled:cursor-not-allowed ">
                      {popupButtonText}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CTA;
