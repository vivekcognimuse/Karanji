"use client";
import Button from "@/components/ui/Button";
import { useContactForm } from "@/hooks/contactform";

import { Icon } from "@iconify/react";
import Head from "next/head";
import React, { useEffect } from "react";

// Enhanced form input component with accessibility
const FormInput = ({
  label,
  name,
  error,
  touched,
  placeholder,
  type = "text",
  required = true,
  disabled = false,
  maxLength,
  ariaDescribedBy,
  register,
  watch,
}) => {
  const inputId = `input-${name}`;
  const errorId = `${name}-error`;
  const helpId = `${name}-help`;

  // Get current value from watch
  const value = watch(name) || "";

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} className="flex items-center gap-2.5">
        <span className="text-black-800 text-lg font-normal font-['Outfit'] tracking-wide">
          {label}{" "}
          {required && (
            <span className="text-red-500" aria-label="required">
              *
            </span>
          )}
        </span>
      </label>

      <div className="relative">
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={`${error ? errorId : ""} ${
            ariaDescribedBy || ""
          } ${helpId}`.trim()}
          aria-required={required}
          {...register(name)}
          className={`w-full py-2 border-b ${
            error && touched
              ? "border-red-500 bg-red-50/20"
              : touched && !error
              ? "border-green-500"
              : "border-neutral-900"
          } bg-transparent text-black/80 text-sm font-normal font-['Outfit'] leading-loose tracking-wide placeholder:text-black/30 focus:outline-none focus:border-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        />

        {/* Character count for longer fields */}
        {maxLength && value.length > maxLength * 0.8 && (
          <div
            id={helpId}
            className="absolute top-full mt-1 text-black/60 text-xs font-normal font-['Outfit']"
          >
            {value.length}/{maxLength} characters
          </div>
        )}

        {/* Error message */}
        {error && touched && (
          <div
            id={errorId}
            className="absolute top-full mt-1 text-red-500 text-sm font-normal font-['Outfit']"
            role="alert"
            aria-live="polite"
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

// Enhanced textarea component for project description
const FormTextarea = ({
  label,
  name,
  error,
  touched,
  placeholder,
  required = true,
  disabled = false,
  maxLength = 2000,
  rows = 4,
  register,
  watch,
}) => {
  const inputId = `textarea-${name}`;
  const errorId = `${name}-error`;
  const helpId = `${name}-help`;

  // Get current value from watch
  const value = watch(name) || "";

  return (
    <div className="flex flex-1 w-full flex-col gap-2">
      <label htmlFor={inputId} className="flex items-center gap-2.5">
        <span className="text-black/80 text-lg font-normal font-['Outfit'] tracking-wide">
          {label}{" "}
          {required && (
            <span className="text-red-500" aria-label="required">
              *
            </span>
          )}
        </span>
      </label>

      <div className="relative">
        <textarea
          id={inputId}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          rows={rows}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={`${error ? errorId : ""} ${helpId}`.trim()}
          aria-required={required}
          {...register(name)}
          className={`w-full py-2 border-b ${
            error && touched
              ? "border-red-500 bg-red-50/20"
              : touched && !error
              ? "border-green-500"
              : "border-neutral-900"
          } bg-transparent text-black/80 text-sm font-normal font-['Outfit'] leading-loose tracking-wide placeholder:text-black/30 focus:outline-none focus:border-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed resize-none`}
        />

        {/* Character count for longer fields - show when getting close to limit */}
        {maxLength && value.length > maxLength * 0.8 && (
          <div
            id={helpId}
            className="absolute top-full mt-1 text-black/60 text-xs font-normal font-['Outfit']"
          >
            {value.length}/{maxLength} characters
          </div>
        )}

        {/* Error message */}
        {error && touched && (
          <div
            id={errorId}
            className="absolute top-full mt-1 text-red-500 text-sm font-normal font-['Outfit']"
            role="alert"
            aria-live="polite"
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

// Error message component
const ErrorMessage = ({ status }) => {
  if (!status || status.type === "success") return null;

  return (
    <div
      className="mt-4 p-4 rounded-md border bg-red-50 border-red-200 text-red-800"
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-2.5 h-0.5 bg-white"></div>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">{status.message}</p>
        </div>
      </div>
    </div>
  );
};

// Thank You Popup Component
const ThankYouPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md bg-gradient-to-br from-indigo-100 via-blue-200 to-red-100 rounded-2xl shadow-2xl overflow-hidden transform animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto mb-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-7 h-4 border-l-3 border-b-3 border-white transform rotate-[-45deg] translate-x-[2px] translate-y-[-2px]"></div>
          </div>

          {/* Thank You Message */}
          <div className="flex flex-col gap-4">
            <h2 className="text-black/80 text-3xl font-medium font-sans">
              Thank You!
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-black/80 text-lg font-normal font-['Outfit'] tracking-wide">
                We've received your message and will get back to you within 24
                hours.
              </p>
              <p className="text-black/50 text-base font-light font-['Outfit'] tracking-wide">
                We're excited to learn more about your digital learning project!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8">
          <Button type="button" onClick={onClose} className="w-full">
            <span className=" text-lg font-normal font-['Outfit']">Close</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Main contact page component
const ContactPage = () => {
  const [showThankYou, setShowThankYou] = React.useState(false);

  const {
    register,
    formState: { errors, touchedFields },
    watch,
    handleSubmit,
    isSubmitting,
    submitStatus,
    resetForm,
  } = useContactForm({
    onSuccess: (result, data) => {
      console.log("Form submitted successfully:", { result, data });
      setShowThankYou(true);
    },
    onError: (error, data) => {
      console.error("Form submission failed:", { error, data });
    },
  });
  useEffect(() => {
    resetForm();
  }, []);

  const socialIcons = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/karanji-infotech-pvt-ltd/",
      icon: "teenyicons:linkedin-outline",
    },
  ];

  const locations = ["India", "UAE", "USA", "Singapore"];

  const handleCloseThankYou = () => {
    setShowThankYou(false);
    resetForm(); // Reset form after closing thank you popup
  };

  return (
    <>
      <div className="pt-20 w-full py-8 bg-gradient-to-br from-indigo-100 via-blue-200 to-red-100 flex flex-col items-center overflow-hidden min-h-screen">
        {" "}
        <main className="w-full max-w-[1580px] overflow-hidden p-4 lg:p-10 flex flex-col gap-8">
          <header className="flex justify-between items-center">
            <h4 className="text-black/40 text-xl font-normal font-sans">
              Contact
            </h4>
          </header>

          <div className="flex flex-col flex-1  lg:flex-row lg:justify-center lg:items-stretch gap-8 lg:gap-32">
            {/* Left Content Section */}
            <div className="flex-1  h-full flex flex-col  justify-between">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-black/80 font-sans">
                    Your Technology Translation Partner
                  </h3>
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-black/80 text-lg sm:text-xl font-normal font-['Outfit'] tracking-wide">
                    Bridging creative storytelling, immersive technologies, and
                    artificial intelligence (AI) innovation—Karanji is your
                    one-stop integrated partner for next-generation digital
                    experiences.
                  </p>
                  <p className="text-black/50 text-lg sm:text-xl font-light font-['Outfit'] tracking-wide">
                    Get in touch today and let's bring your ideas to life!
                  </p>
                </div>
              </div>

              <footer className="hidden lg:flex  mt-16 flex-col gap-4">
                <div className="flex items-center gap-4">
                  {socialIcons.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 relative overflow-hidden hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-black/20 transition-opacity"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Icon icon={social.icon} className="size-6" />
                    </a>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {locations.map((location, index) => (
                    <React.Fragment key={location}>
                      <span className="text-black/80 text-sm font-normal font-['Outfit'] leading-loose tracking-wide">
                        {location}
                      </span>
                      {index < locations.length - 1 && (
                        <span
                          className="text-black/80 text-xs font-normal font-['Inter']"
                          aria-hidden="true"
                        >
                          |
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </footer>
            </div>

            {/* Right Form Section */}
            <div className="w-full lg:w-[494px] flex flex-col gap-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-8">
                    <FormInput
                      label="Name"
                      name="name"
                      register={register}
                      watch={watch}
                      error={errors.name?.message}
                      touched={touchedFields.name}
                      placeholder="Enter your full name"
                      maxLength={50}
                      disabled={isSubmitting}
                    />

                    <FormInput
                      label="Company"
                      name="company"
                      register={register}
                      watch={watch}
                      error={errors.company?.message}
                      touched={touchedFields.company}
                      placeholder="Enter your company name"
                      maxLength={100}
                      disabled={isSubmitting}
                    />
                  </div>

                  <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    register={register}
                    watch={watch}
                    error={errors.email?.message}
                    touched={touchedFields.email}
                    placeholder="Enter your email address"
                    maxLength={254}
                    disabled={isSubmitting}
                  />

                  <FormTextarea
                    label="Tell us more about your project"
                    name="project"
                    register={register}
                    watch={watch}
                    error={errors.project?.message}
                    touched={touchedFields.project}
                    placeholder="Describe your project requirements, timeline, and any specific technologies you're interested in..."
                    maxLength={2000}
                    rows={2}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="mt-10 flex flex-col gap-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    aria-describedby="submit-help"
                  >
                    <span className="">
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          Submitting...
                        </span>
                      ) : (
                        "Submit"
                      )}
                    </span>
                  </Button>

                  {/* Form state information */}
                  <div
                    id="submit-help"
                    className="text-xs text-black/60 font-normal font-['Outfit']"
                  >
                    {/* Form help text can go here if needed */}
                  </div>
                </div>

                <ErrorMessage status={submitStatus} />
              </form>
            </div>

            <footer className="lg:hidden  mt-16 flex-col gap-4">
              <div className="flex items-center gap-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 relative overflow-hidden hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-black/20 transition-opacity"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon icon={social.icon} className="size-6" />
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {locations.map((location, index) => (
                  <React.Fragment key={location}>
                    <span className="text-black/80 text-sm font-normal font-['Outfit'] leading-loose tracking-wide">
                      {location}
                    </span>
                    {index < locations.length - 1 && (
                      <span
                        className="text-black/80 text-xs font-normal font-['Inter']"
                        aria-hidden="true"
                      >
                        |
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </footer>
          </div>
        </main>
      </div>

      {/* Thank You Popup */}
      <ThankYouPopup isOpen={showThankYou} onClose={handleCloseThankYou} />
    </>
  );
};

export default ContactPage;
