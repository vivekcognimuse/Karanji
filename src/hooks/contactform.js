// hooks/useForm.js
import { useEffect, useCallback, useState, useRef } from "react";
import { useForm as useHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// ============================================================================
// VALIDATION SCHEMAS - Reusable across different forms
// ============================================================================

// Common field validators that can be reused
export const fieldValidators = {
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required")
    .transform((val) => val?.trim())
    .pipe(
      z
        .string()
        .min(2, "Name must be at least 2 characters long")
        .max(50, "Name must not exceed 50 characters")
        .regex(
          /^[a-zA-Z\s\u00C0-\u017F\u0100-\u024F\u1E00-\u1EFF'-]+$/,
          "Name can only contain letters, spaces, hyphens, and apostrophes"
        )
        .refine(
          (value) => !value.startsWith(" ") && !value.endsWith(" "),
          "Name cannot start or end with spaces"
        )
        .refine(
          (value) => !/\s{2,}/.test(value),
          "Name cannot contain multiple consecutive spaces"
        )
        .refine(
          (value) =>
            value.split(" ").filter((word) => word.length > 0).length <= 5,
          "Name cannot contain more than 5 words"
        )
    ),

  company: z
    .string({ required_error: "Company name is required" })
    .min(1, "Company name is required")
    .transform((val) => val?.trim())
    .pipe(
      z
        .string()
        .min(2, "Company name must be at least 2 characters long")
        .max(100, "Company name must not exceed 100 characters")
        .regex(
          /^[a-zA-Z0-9\s\u00C0-\u017F\u0100-\u024F\u1E00-\u1EFF&.,'\-()]+$/,
          "Company name contains invalid characters"
        )
        .refine(
          (value) => !value.startsWith(" ") && !value.endsWith(" "),
          "Company name cannot start or end with spaces"
        )
        .refine(
          (value) => !/\s{2,}/.test(value),
          "Company name cannot contain multiple consecutive spaces"
        )
    ),

  email: z
    .string({ required_error: "Email address is required" })
    .min(1, "Email address is required")
    .email("Please enter a valid email address")
    .max(254, "Email address is too long")
    .transform((email) => email?.toLowerCase().trim())
    .refine((email) => {
      if (!email) return false;
      const domain = email.split("@")[1];
      return domain && !domain.includes("..") && /\.[a-zA-Z]{2,}$/.test(domain);
    }, "Email domain is invalid")
    .refine((email) => {
      if (!email) return true;
      // Check for common typos in popular domains
      const domain = email.split("@")[1];
      const commonTypos = {
        "gmial.com": "gmail.com",
        "gmai.com": "gmail.com",
        "yahooo.com": "yahoo.com",
        "hotmial.com": "hotmail.com",
        "outlok.com": "outlook.com",
      };
      return !commonTypos[domain];
    }, "Did you mean a different email domain? Please check for typos"),

  projectDescription: z
    .string({ required_error: "Project description is required" })
    .min(1, "Project description is required")
    .transform((val) => val?.trim())
    .pipe(
      z
        .string()
        .min(10, "Please provide at least 10 characters about your project")
        .max(2000, "Project description must not exceed 2000 characters")
        .refine((value) => {
          const words = value.split(/\s+/).filter((word) => word.length > 0);
          return words.length >= 2;
        }, "Project description must contain at least 2 words")
    ),

  phone: z
    .string()
    .transform((val) => val?.trim())
    .pipe(
      z
        .string()
        .regex(
          /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
          "Please enter a valid phone number"
        )
        .optional()
    ),

  url: z
    .string()
    .transform((val) => val?.trim())
    .pipe(z.string().url("Please enter a valid URL").optional()),

  textarea: (minLength = 10, maxLength = 500) =>
    z
      .string({ required_error: "This field is required" })
      .min(1, "This field is required")
      .transform((val) => val?.trim())
      .pipe(
        z
          .string()
          .min(minLength, `Must be at least ${minLength} characters`)
          .max(maxLength, `Must not exceed ${maxLength} characters`)
      ),
};

// ============================================================================
// RATE LIMITER UTILITY
// ============================================================================

class RateLimiter {
  constructor(maxAttempts = 5, windowMs = 15 * 60 * 1000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    this.attempts = new Map();
  }

  isAllowed(identifier = "global") {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    const validAttempts = userAttempts.filter(
      (time) => now - time < this.windowMs
    );
    this.attempts.set(identifier, validAttempts);
    return validAttempts.length < this.maxAttempts;
  }

  recordAttempt(identifier = "global") {
    const userAttempts = this.attempts.get(identifier) || [];
    userAttempts.push(Date.now());
    this.attempts.set(identifier, userAttempts);
  }

  getRemainingTime(identifier = "global") {
    const userAttempts = this.attempts.get(identifier) || [];
    if (userAttempts.length === 0) return 0;
    const oldestAttempt = Math.min(...userAttempts);
    const remainingTime = this.windowMs - (Date.now() - oldestAttempt);
    return Math.max(0, Math.ceil(remainingTime / 1000 / 60));
  }
}

// ============================================================================
// GENERIC useForm HOOK - Reusable for any form
// ============================================================================

export const useForm = ({ schema, defaultValues = {}, options = {} }) => {
  const {
    onSuccess,
    onError,
    apiEndpoint,
    enableRateLimit = false,
    maxAttempts = 5,
    rateLimitWindowMs = 15 * 60 * 1000,
    autoSave = false,
    autoSaveKey = "formData",
    debounceMs = 300,
  } = options;

  // Initialize rate limiter
  const rateLimiter = useRef(
    enableRateLimit ? new RateLimiter(maxAttempts, rateLimitWindowMs) : null
  ).current;

  // State for submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitCount, setSubmitCount] = useState(0);

  // Load saved data from localStorage
  const getInitialValues = useCallback(() => {
    if (autoSave && typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(autoSaveKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          // Merge with default values
          return { ...defaultValues, ...parsed };
        }
      } catch (error) {
        console.warn("Failed to load saved form data:", error);
        localStorage.removeItem(autoSaveKey);
      }
    }
    return defaultValues;
  }, [autoSave, autoSaveKey, defaultValues]);

  // Initialize react-hook-form
  const form = useHookForm({
    resolver: zodResolver(schema),
    defaultValues: getInitialValues(),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const { watch, reset, handleSubmit: handleFormSubmit } = form;

  // Auto-save functionality
  useEffect(() => {
    if (!autoSave) return;

    const subscription = watch((data) => {
      if (typeof window !== "undefined") {
        try {
          // Debounce the save
          clearTimeout(window.autoSaveTimeout);
          window.autoSaveTimeout = setTimeout(() => {
            localStorage.setItem(autoSaveKey, JSON.stringify(data));
          }, debounceMs);
        } catch (error) {
          console.warn("Failed to save form data:", error);
        }
      }
    });

    return () => {
      subscription.unsubscribe();
      if (window.autoSaveTimeout) {
        clearTimeout(window.autoSaveTimeout);
      }
    };
  }, [watch, autoSave, autoSaveKey, debounceMs]);

  // Clear saved data
  const clearSavedData = useCallback(() => {
    if (autoSave && typeof window !== "undefined") {
      try {
        localStorage.removeItem(autoSaveKey);
      } catch (error) {
        console.warn("Failed to clear saved form data:", error);
      }
    }
  }, [autoSave, autoSaveKey]);

  // Reset form with saved data clearing
  const resetForm = useCallback(() => {
    reset(defaultValues);
    setSubmitStatus(null);
    clearSavedData();
  }, [reset, defaultValues, clearSavedData]);

  // Submit handler
  const onSubmit = useCallback(
    async (data) => {
      // Check rate limiting
      if (enableRateLimit && rateLimiter && !rateLimiter.isAllowed()) {
        const remainingTime = rateLimiter.getRemainingTime();
        setSubmitStatus({
          type: "error",
          message: `Too many attempts. Please try again in ${remainingTime} minutes.`,
          code: "RATE_LIMITED",
        });
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        // Record rate limit attempt
        if (enableRateLimit && rateLimiter) {
          rateLimiter.recordAttempt();
        }

        // Prepare submission data with metadata
        const submissionData = {
          ...data,
          metadata: {
            timestamp: new Date().toISOString(),
            userAgent:
              typeof window !== "undefined" ? window.navigator.userAgent : "",
            submitCount: submitCount + 1,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            language:
              typeof window !== "undefined" ? window.navigator.language : "",
          },
        };

        // If apiEndpoint is provided, submit to API
        if (apiEndpoint) {
          const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify(submissionData),
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
              errorData.message ||
                `HTTP ${response.status}: ${response.statusText}`
            );
          }

          const result = await response.json();

          setSubmitStatus({
            type: "success",
            message: result.message || "Form submitted successfully!",
            code: "SUCCESS",
          });

          setSubmitCount((prev) => prev + 1);

          // Call success callback
          if (onSuccess) {
            await onSuccess(result, data);
          }

          // Reset form after successful submission
          setTimeout(() => {
            resetForm();
          }, 3000);
        } else {
          // No API endpoint, just call success callback
          if (onSuccess) {
            await onSuccess(submissionData, data);
          }
          setSubmitStatus({
            type: "success",
            message: "Form submitted successfully!",
            code: "SUCCESS",
          });
        }
      } catch (error) {
        console.error("Form submission error:", error);

        const errorMessage =
          error.message || "An unexpected error occurred. Please try again.";
        setSubmitStatus({
          type: "error",
          message: errorMessage,
          code: "SUBMISSION_ERROR",
        });

        // Call error callback
        if (onError) {
          onError(error, data);
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      enableRateLimit,
      rateLimiter,
      submitCount,
      apiEndpoint,
      onSuccess,
      onError,
      resetForm,
    ]
  );

  return {
    // React Hook Form methods
    ...form,

    // Custom submission handling
    handleSubmit: handleFormSubmit(onSubmit),
    isSubmitting,
    submitStatus,
    submitCount,

    // Utility functions
    resetForm,
    clearSavedData,
  };
};

// ============================================================================
// CONTACT FORM SPECIFIC HOOK
// ============================================================================

// Contact form schema
export const contactFormSchema = z.object({
  name: fieldValidators.name,
  company: fieldValidators.company,
  email: fieldValidators.email,
  project: fieldValidators.projectDescription,
});

// Contact form hook with specific configuration
export const useContactForm = (customOptions = {}) => {
  const defaultOptions = {
    apiEndpoint: "/api/contact",
    enableRateLimit: true,
    maxAttempts: 5,
    autoSave: true,
    autoSaveKey: "contactForm_v1",
  };

  return useForm({
    schema: contactFormSchema,
    defaultValues: {
      name: "",
      company: "",
      email: "",
      project: "",
    },
    options: { ...defaultOptions, ...customOptions },
  });
};
