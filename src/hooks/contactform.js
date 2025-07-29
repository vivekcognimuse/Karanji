// hooks/useContactForm.js
import { useState, useCallback, useMemo } from "react";

// Zod-like validation implementation (since we can't import external Zod)
// This provides the same API and functionality as Zod
class ZodSchema {
  constructor(validator, errorMap = {}) {
    this.validator = validator;
    this.errorMap = errorMap;
    this._optional = false;
    this._nullable = false;
    this._default = undefined;
  }

  parse(value) {
    const result = this.safeParse(value);
    if (!result.success) {
      throw new Error(result.error);
    }
    return result.data;
  }

  safeParse(value) {
    try {
      if (value === undefined && this._default !== undefined) {
        value =
          typeof this._default === "function" ? this._default() : this._default;
      }

      if (value === null && !this._nullable) {
        return { success: false, error: "Value cannot be null" };
      }

      if (value === undefined && !this._optional) {
        return { success: false, error: "Value is required" };
      }

      if (value === undefined || value === null) {
        return { success: true, data: value };
      }

      const result = this.validator(value);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  optional() {
    const newSchema = new ZodSchema(this.validator, this.errorMap);
    newSchema._optional = true;
    newSchema._nullable = this._nullable;
    newSchema._default = this._default;
    return newSchema;
  }

  nullable() {
    const newSchema = new ZodSchema(this.validator, this.errorMap);
    newSchema._optional = this._optional;
    newSchema._nullable = true;
    newSchema._default = this._default;
    return newSchema;
  }

  default(defaultValue) {
    const newSchema = new ZodSchema(this.validator, this.errorMap);
    newSchema._optional = this._optional;
    newSchema._nullable = this._nullable;
    newSchema._default = defaultValue;
    return newSchema;
  }
}

// Zod-like string schema
class ZodString extends ZodSchema {
  constructor() {
    super((value) => {
      if (typeof value !== "string") {
        throw new Error("Expected string");
      }
      return value;
    });
    this._min = null;
    this._max = null;
    this._regex = null;
    this._email = false;
    this._trim = false;
    this._transforms = [];
  }

  min(length, message) {
    const newSchema = Object.create(ZodString.prototype);
    Object.assign(newSchema, this);
    newSchema._min = {
      length,
      message: message || `String must be at least ${length} characters`,
    };
    newSchema.validator = (value) => {
      if (typeof value !== "string") {
        throw new Error("Expected string");
      }

      let processedValue = value;

      // Apply transforms
      this._transforms.forEach((transform) => {
        processedValue = transform(processedValue);
      });

      if (this._trim) {
        processedValue = processedValue.trim();
      }

      if (this._min && processedValue.length < this._min.length) {
        throw new Error(this._min.message);
      }

      if (this._max && processedValue.length > this._max.length) {
        throw new Error(this._max.message);
      }

      if (this._regex && !this._regex.pattern.test(processedValue)) {
        throw new Error(this._regex.message);
      }

      if (this._email) {
        const emailRegex =
          /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
        if (!emailRegex.test(processedValue)) {
          throw new Error("Invalid email format");
        }
      }

      return processedValue;
    };
    return newSchema;
  }

  max(length, message) {
    const newSchema = Object.create(ZodString.prototype);
    Object.assign(newSchema, this);
    newSchema._max = {
      length,
      message: message || `String must be at most ${length} characters`,
    };
    return newSchema.min(this._min?.length || 0);
  }

  regex(pattern, message) {
    const newSchema = Object.create(ZodString.prototype);
    Object.assign(newSchema, this);
    newSchema._regex = { pattern, message: message || "Invalid format" };
    return newSchema.min(this._min?.length || 0);
  }

  email(message) {
    const newSchema = Object.create(ZodString.prototype);
    Object.assign(newSchema, this);
    newSchema._email = true;
    return newSchema.min(this._min?.length || 0);
  }

  trim() {
    const newSchema = Object.create(ZodString.prototype);
    Object.assign(newSchema, this);
    newSchema._trim = true;
    return newSchema;
  }

  transform(fn) {
    const newSchema = Object.create(ZodString.prototype);
    Object.assign(newSchema, this);
    newSchema._transforms = [...this._transforms, fn];
    return newSchema;
  }

  refine(validator, message) {
    const newSchema = Object.create(ZodString.prototype);
    Object.assign(newSchema, this);
    const originalValidator = newSchema.validator;
    newSchema.validator = (value) => {
      const result = originalValidator(value);
      if (!validator(result)) {
        throw new Error(
          typeof message === "string" ? message : message.message
        );
      }
      return result;
    };
    return newSchema;
  }
}

// Zod-like object schema
class ZodObject extends ZodSchema {
  constructor(shape) {
    super((value) => {
      if (typeof value !== "object" || value === null || Array.isArray(value)) {
        throw new Error("Expected object");
      }

      const result = {};
      const errors = {};

      for (const [key, schema] of Object.entries(shape)) {
        const parseResult = schema.safeParse(value[key]);
        if (parseResult.success) {
          result[key] = parseResult.data;
        } else {
          errors[key] = parseResult.error;
        }
      }

      if (Object.keys(errors).length > 0) {
        const error = new Error("Validation failed");
        error.errors = errors;
        throw error;
      }

      return result;
    });
    this.shape = shape;
  }

  partial() {
    const newShape = {};
    for (const [key, schema] of Object.entries(this.shape)) {
      newShape[key] = schema.optional();
    }
    return new ZodObject(newShape);
  }

  safeParse(value) {
    try {
      const result = this.validator(value);
      return { success: true, data: result };
    } catch (error) {
      return {
        success: false,
        error: error.errors || error.message,
        issues: error.errors
          ? Object.entries(error.errors).map(([path, message]) => ({
              path: [path],
              message,
            }))
          : [{ path: [], message: error.message }],
      };
    }
  }
}

// Zod-like factory functions
const z = {
  string: () => new ZodString(),
  object: (shape) => new ZodObject(shape),
  literal: (value) =>
    new ZodSchema((input) => {
      if (input !== value) {
        throw new Error(`Expected literal value: ${value}`);
      }
      return input;
    }),
  union: (schemas) =>
    new ZodSchema((input) => {
      for (const schema of schemas) {
        const result = schema.safeParse(input);
        if (result.success) {
          return result.data;
        }
      }
      throw new Error("No union type matched");
    }),
};

// Contact form validation schema using our Zod implementation
const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
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
      (value) => value.split(" ").filter((word) => word.length > 0).length <= 5,
      "Name cannot contain more than 5 words"
    )
    .refine(
      (value) => !/^\s*$/.test(value),
      "Name cannot be empty or contain only spaces"
    ),

  company: z
    .string()
    .trim()
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
    ),

  email: z
    .string()
    .trim()
    .min(1, "Email address is required")
    .max(254, "Email address is too long")
    .email("Please enter a valid email address")
    .transform((email) => email.toLowerCase())
    .refine((email) => {
      const domain = email.split("@")[1];
      return domain && !domain.includes("..") && /\.[a-zA-Z]{2,}$/.test(domain);
    }, "Email domain is invalid")
    .refine((email) => {
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

  project: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters about your project")
    .max(2000, "Project description must not exceed 2000 characters")
    .refine((value) => {
      const words = value.split(/\s+/).filter((word) => word.length > 0);
      return words.length >= 2;
    }, "Project description must contain at least 2 words"),
});

// Rate limiting utility
class RateLimiter {
  constructor(maxAttempts = 5, windowMs = 15 * 60 * 1000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    this.attempts = new Map();
  }

  isAllowed(identifier = "global") {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];

    // Remove old attempts outside the window
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

  getRemainingAttempts(identifier = "global") {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    const validAttempts = userAttempts.filter(
      (time) => now - time < this.windowMs
    );
    return Math.max(0, this.maxAttempts - validAttempts.length);
  }
}

// Main contact form hook
export const useContactForm = (options = {}) => {
  const {
    onSuccess,
    onError,
    apiEndpoint = "/api/contact",
    enableRateLimit = true,
    maxAttempts = 5,
    rateLimitWindowMs = 15 * 60 * 1000,
    autoSave = false,
    autoSaveKey = "contactForm_v1",
    validateOnChange = true,
    validateOnBlur = true,
    debounceMs = 300,
  } = options;

  // Initialize rate limiter
  const rateLimiter = useMemo(
    () => new RateLimiter(maxAttempts, rateLimitWindowMs),
    [maxAttempts, rateLimitWindowMs]
  );

  // Load saved data from localStorage
  const getInitialData = useCallback(() => {
    if (autoSave && typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(autoSaveKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          const result = contactFormSchema.partial().safeParse(parsed);
          if (result.success) {
            return { ...getDefaultData(), ...result.data };
          }
        }
      } catch (error) {
        console.warn("Failed to load saved form data:", error);
        // Clear corrupted data
        localStorage.removeItem(autoSaveKey);
      }
    }
    return getDefaultData();
  }, [autoSave, autoSaveKey]);

  const getDefaultData = () => ({
    name: "",
    company: "",
    email: "",
    project: "",
  });

  // State management
  const [formData, setFormData] = useState(getInitialData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitCount, setSubmitCount] = useState(0);
  const [validationDebounce, setValidationDebounce] = useState({});

  // Auto-save functionality
  const saveToStorage = useCallback(
    (data) => {
      if (autoSave && typeof window !== "undefined") {
        try {
          localStorage.setItem(autoSaveKey, JSON.stringify(data));
        } catch (error) {
          console.warn("Failed to save form data:", error);
        }
      }
    },
    [autoSave, autoSaveKey]
  );

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

  // Validate single field
  const validateField = useCallback((name, value) => {
    const fieldSchema = contactFormSchema.shape[name];
    if (!fieldSchema) return null;

    const result = fieldSchema.safeParse(value);
    return result.success ? null : result.error;
  }, []);

  // Validate entire form
  const validateForm = useCallback(() => {
    const result = contactFormSchema.safeParse(formData);

    if (result.success) {
      setErrors({});
      return true;
    }

    const newErrors = {};
    if (result.issues) {
      result.issues.forEach((issue) => {
        if (issue.path.length > 0) {
          newErrors[issue.path[0]] = issue.message;
        }
      });
    } else if (typeof result.error === "object") {
      Object.assign(newErrors, result.error);
    }

    setErrors(newErrors);
    return false;
  }, [formData]);

  // Handle field changes with debounced validation
  const handleChange = useCallback(
    (name, value) => {
      setFormData((prev) => {
        const newData = { ...prev, [name]: value };
        saveToStorage(newData);
        return newData;
      });

      // Clear field error immediately
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: null }));
      }

      // Debounced validation
      if (validateOnChange && touched[name]) {
        // Clear existing timeout
        if (validationDebounce[name]) {
          clearTimeout(validationDebounce[name]);
        }

        // Set new timeout
        const timeoutId = setTimeout(() => {
          const error = validateField(name, value);
          if (error) {
            setErrors((prev) => ({ ...prev, [name]: error }));
          }
          setValidationDebounce((prev) => ({ ...prev, [name]: null }));
        }, debounceMs);

        setValidationDebounce((prev) => ({ ...prev, [name]: timeoutId }));
      }
    },
    [
      errors,
      touched,
      validateOnChange,
      saveToStorage,
      validateField,
      validationDebounce,
      debounceMs,
    ]
  );

  // Handle field blur
  const handleBlur = useCallback(
    (name) => {
      setTouched((prev) => ({ ...prev, [name]: true }));

      if (validateOnBlur) {
        const error = validateField(name, formData[name]);
        if (error) {
          setErrors((prev) => ({ ...prev, [name]: error }));
        }
      }
    },
    [formData, validateOnBlur, validateField]
  );

  // Get field validation state
  const getFieldState = useCallback(
    (name) => {
      return {
        value: formData[name] || "",
        error: errors[name] || null,
        touched: touched[name] || false,
        valid: !errors[name] && touched[name],
        invalid: !!errors[name] && touched[name],
      };
    },
    [formData, errors, touched]
  );

  // Reset form
  const resetForm = useCallback(() => {
    setFormData(getDefaultData());
    setErrors({});
    setTouched({});
    setSubmitStatus(null);
    clearSavedData();

    // Clear any pending validations
    Object.values(validationDebounce).forEach((timeoutId) => {
      if (timeoutId) clearTimeout(timeoutId);
    });
    setValidationDebounce({});
  }, [clearSavedData, validationDebounce]);

  // Submit form
  const handleSubmit = useCallback(async () => {
    // Check rate limiting
    if (enableRateLimit && !rateLimiter.isAllowed()) {
      const remainingTime = rateLimiter.getRemainingTime();
      setSubmitStatus({
        type: "error",
        message: `Too many attempts. Please try again in ${remainingTime} minutes.`,
        code: "RATE_LIMITED",
      });
      return;
    }

    // Mark all fields as touched for validation display
    setTouched({ name: true, company: true, email: true, project: true });

    // Validate form
    if (!validateForm()) {
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors above before submitting.",
        code: "VALIDATION_ERROR",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Record rate limit attempt
      if (enableRateLimit) {
        rateLimiter.recordAttempt();
      }

      // Prepare submission data
      const validatedData = contactFormSchema.parse(formData);
      const submissionData = {
        ...validatedData,
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

      // Submit to API
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
          errorData.message || `HTTP ${response.status}: ${response.statusText}`
        );
      }

      const result = await response.json();

      setSubmitStatus({
        type: "success",
        message:
          result.message ||
          "Thank you for your message! We'll get back to you soon.",
        code: "SUCCESS",
      });

      setSubmitCount((prev) => prev + 1);

      // Call success callback
      if (onSuccess) {
        onSuccess(result, validatedData);
      }

      // Reset form after successful submission
      setTimeout(() => {
        resetForm();
      }, 3000);
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
        onError(error, formData);
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [
    enableRateLimit,
    rateLimiter,
    validateForm,
    formData,
    submitCount,
    apiEndpoint,
    onSuccess,
    onError,
    resetForm,
  ]);

  // Form state summary
  const formState = useMemo(() => {
    const hasErrors = Object.keys(errors).length > 0;
    const allFieldsFilled = Object.values(formData).every(
      (value) => value.trim().length > 0
    );
    const hasData = Object.values(formData).some(
      (value) => value.trim().length > 0
    );
    const isValid = !hasErrors && allFieldsFilled;

    return {
      isValid,
      hasErrors,
      hasData,
      allFieldsFilled,
      canSubmit: isValid && !isSubmitting,
      isDirty: hasData,
    };
  }, [errors, formData, isSubmitting]);

  return {
    // Form data
    formData,
    errors,
    touched,

    // Form state
    isSubmitting,
    submitStatus,
    submitCount,
    formState,

    // Handlers
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,

    // Utilities
    validateField,
    validateForm,
    getFieldState,
    clearSavedData,

    // Schema for external use
    schema: contactFormSchema,
  };
};
