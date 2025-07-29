"use client";
import { useContactForm } from "@/hooks/contactform";
import { Icon } from "@iconify/react";
import React from "react";

// Enhanced form input component with accessibility
const FormInput = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  type = "text",
  required = true,
  disabled = false,
  maxLength,
  ariaDescribedBy,
}) => {
  const inputId = `input-${name}`;
  const errorId = `${name}-error`;
  const helpId = `${name}-help`;

  return (
    <div className="flex  w-full flex-col justify-start items-start gap-2">
      <label
        htmlFor={inputId}
        className="inline-flex justify-center items-center gap-2.5">
        <span className="justify-start text-black/80 text-lg font-normal font-['Outfit'] tracking-wide">
          {label}{" "}
          {required && (
            <span className="text-red-500" aria-label="required">
              *
            </span>
          )}
        </span>
      </label>

      <div className="self-stretch relative">
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={() => onBlur(name)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={`${error ? errorId : ""} ${
            ariaDescribedBy || ""
          } ${helpId}`.trim()}
          aria-required={required}
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
            className="absolute top-full mt-1 text-black/60 text-xs font-normal font-['Outfit']">
            {value.length}/{maxLength} characters
          </div>
        )}

        {/* Error message */}
        {error && touched && (
          <div
            id={errorId}
            className="absolute top-full mt-1 text-red-500 text-sm font-normal font-['Outfit']"
            role="alert"
            aria-live="polite">
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
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  required = true,
  disabled = false,
  maxLength = 2000,
  rows = 4,
}) => {
  const inputId = `textarea-${name}`;
  const errorId = `${name}-error`;
  const helpId = `${name}-help`;

  return (
    <div className="flex flex-1 w-full flex-col justify-start items-start gap-2">
      <label
        htmlFor={inputId}
        className="inline-flex justify-center items-center gap-2.5">
        <span className="justify-start text-black/80 text-lg font-normal font-['Outfit'] tracking-wide">
          {label}{" "}
          {required && (
            <span className="text-red-500" aria-label="required">
              *
            </span>
          )}
        </span>
      </label>

      <div className="self-stretch relative">
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={() => onBlur(name)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          rows={rows}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={`${error ? errorId : ""} ${helpId}`.trim()}
          aria-required={required}
          className={`w-full py-2 border-b ${
            error && touched
              ? "border-red-500 bg-red-50/20"
              : touched && !error
              ? "border-green-500"
              : "border-neutral-900"
          } bg-transparent text-black/80 text-sm font-normal font-['Outfit'] leading-loose tracking-wide placeholder:text-black/30 focus:outline-none focus:border-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed resize-none`}
        />

        {/* Character count */}
        <div
          id={helpId}
          className={`absolute top-full mt-1 text-xs font-normal font-['Outfit'] ${
            value.length > maxLength * 0.9 ? "text-red-500" : "text-black/60"
          }`}>
          {value.length}/{maxLength} characters
        </div>

        {/* Error message */}
        {error && touched && (
          <div
            id={errorId}
            className="absolute top-full mt-6 text-red-500 text-sm font-normal font-['Outfit']"
            role="alert"
            aria-live="polite">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

// Status message component
const StatusMessage = ({ status }) => {
  if (!status) return null;

  const isSuccess = status.type === "success";
  const isError = status.type === "error";

  return (
    <div
      className={`mt-4 p-4  rounded-md border ${
        isSuccess
          ? "bg-green-50 border-green-200 text-green-800"
          : "bg-red-50 border-red-200 text-red-800"
      }`}
      role="alert"
      aria-live="polite">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {isSuccess ? (
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-2.5 h-1.5 border-l-2 border-b-2 border-white transform rotate-[-45deg] translate-x-[1px] translate-y-[-1px]"></div>
            </div>
          ) : (
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2.5 h-0.5 bg-white"></div>
            </div>
          )}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">{status.message}</p>
          {status.code && (
            <p className="text-xs mt-1 opacity-75">Error code: {status.code}</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Main contact page component
const ContactPage = () => {
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    formState,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useContactForm({
    apiEndpoint: "/api/contact", // Replace with your actual endpoint
    enableRateLimit: true,
    maxAttempts: 5,
    autoSave: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSuccess: (result, data) => {
      console.log("Form submitted successfully:", { result, data });
      // Add any additional success handling here
    },
    onError: (error, data) => {
      console.error("Form submission failed:", { error, data });
      // Add any additional error handling here
    },
  });

  const socialIcons = [
    { name: "Instagram", href: "#", icon: "circum:instagram" },
    { name: "Twitter", href: "#", icon: "bi:twitter-x" },
    { name: "LinkedIn", href: "#", icon: "teenyicons:linkedin-outline" },
    { name: "YouTube", href: "#", icon: "uit:youtube" },
  ];

  const locations = ["India", "UAE", "USA", "Singapore"];

  return (
    <div className=" mt-8 pt-20 w-full py-8 bg-gradient-to-br from-indigo-100 via-blue-200 to-red-100 inline-flex flex-col justify-start items-center overflow-hidden min-h-screen">
      <main className="self-stretch  mx-auto w-full max-w-7xl overflow-hidden p-4 lg:p-10  flex flex-col justify-start items-start gap-16">
        <header className="self-stretch inline-flex justify-between items-center">
          <h1 className="self-stretch justify-start text-black/40 text-xl font-normal font-sans">
            Contact
          </h1>
        </header>

        <div className=" h-auto inline-flex justify-center items-start gap-32">
          <div className="flex-1 self-stretch inline-flex flex-col justify-between items-start">
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch flex flex-col justify-center items-start gap-4">
                  <h2 className="self-stretch justify-start text-black/80 text-5xl font-medium font-sans">
                    Looking for digital learning solutions?
                  </h2>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-center items-start gap-6">
                <p className="self-stretch justify-start text-black/80 text-xl font-normal font-['Outfit'] tracking-wide">
                  We're your one-stop destination! With our expertise in various
                  authoring tools, game development platforms, and AR, VR, and
                  MR technologies, we create engaging and innovative learning
                  content tailored to your needs.
                </p>
                <p className="self-stretch justify-start text-black/50 text-xl font-light font-['Outfit'] tracking-wide">
                  Get in touch today and let's bring your ideas to life!
                </p>
              </div>
            </div>

            <footer className="flex flex-col justify-start items-start gap-4">
              <div className="inline-flex justify-center items-center gap-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 relative overflow-hidden hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-black/20 transition-opacity"
                    aria-label={`Follow us on ${social.name}`}>
                    <Icon icon={social.icon} className="size-6" />
                  </a>
                ))}
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                {locations.map((location, index) => (
                  <React.Fragment key={location}>
                    <span className="justify-start text-black/80 text-sm font-normal font-['Outfit'] leading-loose tracking-wide">
                      {location}
                    </span>
                    {index < locations.length - 1 && (
                      <span
                        className="justify-start text-black/80 text-xs font-normal font-['Inter']"
                        aria-hidden="true">
                        |
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </footer>
          </div>

          <div className="self-stretch inline-flex flex-col justify-start items-start gap-8">
            <div className="w-[494px] flex flex-col justify-start items-start gap-4">
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-8">
                  <FormInput
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name}
                    touched={touched.name}
                    placeholder="Enter your full name"
                    maxLength={50}
                    disabled={isSubmitting}
                  />

                  <FormInput
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.company}
                    touched={touched.company}
                    placeholder="Enter your company name"
                    maxLength={100}
                    disabled={isSubmitting}
                  />
                </div>

                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  touched={touched.email}
                  placeholder="Enter your email address"
                  maxLength={254}
                  disabled={isSubmitting}
                />

                <FormTextarea
                  label="Tell us more about your project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.project}
                  touched={touched.project}
                  placeholder="Describe your project requirements, timeline, and any specific technologies you're interested in..."
                  maxLength={2000}
                  rows={4}
                  disabled={isSubmitting}
                />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!formState.canSubmit}
                  className="bg-black rounded-[32px] inline-flex justify-start items-center gap-6 flex-wrap content-center overflow-hidden hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-describedby="submit-help">
                  <div className="h-12 px-4 py-2 bg-gradient-to-br from-white/5 to-white/5 rounded-md shadow-[0px_1px_4px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-black backdrop-blur-[50px] flex justify-center items-center gap-2.5">
                    <span className="justify-start text-white text-xl font-normal font-['Outfit']">
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </span>
                      ) : (
                        "Contact Us"
                      )}
                    </span>
                  </div>
                </button>

                {/* Form state information */}
                <div
                  id="submit-help"
                  className="text-xs text-black/60 font-normal font-['Outfit']">
                  {/* Form help text can go here if needed */}
                </div>

                {/* Reset button */}
                {false && (
                  <button
                    type="button"
                    onClick={resetForm}
                    disabled={isSubmitting}
                    className="text-black/60 hover:text-black text-sm font-normal font-['Outfit'] underline disabled:opacity-50 transition-colors">
                    Clear form
                  </button>
                )}
              </div>

              <StatusMessage status={submitStatus} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
