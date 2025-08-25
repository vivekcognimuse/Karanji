import React from "react";

// Base input component
export const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  error,
  touched,
  onChange,
  onBlur,
  maxLength,
  disabled = false,
  required = true,
  as: Component = "input",
  rows,
  className = "",
}) => {
  const hasError = error && touched;
  const isValid = touched && !error && value.length > 0;

  const baseClasses = `
    w-full px-4 py-3 border border-gray-300 rounded-lg
    bg-white text-gray-900 placeholder-gray-500
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
    ${hasError ? "border-red-500 bg-red-50 focus:ring-red-500" : ""}
    ${isValid ? "border-green-500" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const inputProps = {
    id: name,
    name,
    value,
    onChange: (e) => onChange(e.target.value),
    onBlur,
    placeholder,
    disabled,
    maxLength,
    className: baseClasses,
    "aria-invalid": hasError,
    "aria-describedby": hasError ? `${name}-error` : undefined,
  };

  if (Component === "input") {
    inputProps.type = type;
  } else if (Component === "textarea") {
    inputProps.rows = rows || 4;
  }

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="relative">
        <Component {...inputProps} />

        {/* Character count for longer fields */}
        {maxLength && value.length > maxLength * 0.7 && (
          <div className="absolute top-full mt-1 right-0 text-xs text-gray-500">
            {value.length}/{maxLength}
          </div>
        )}
      </div>

      {/* Error message */}
      {hasError && (
        <p id={`${name}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

// Specialized input components
export const TextInput = (props) => <FormField {...props} />;

export const EmailInput = (props) => (
  <FormField {...props} type="email" autoComplete="email" />
);

export const TextArea = (props) => <FormField {...props} as="textarea" />;

// Submit button component
export const SubmitButton = ({
  isSubmitting,
  disabled,
  children,
  onClick,
  className = "",
}) => {
  const baseClasses = `
    w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg
    transition-all duration-200 ease-in-out
    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isSubmitting}
      className={baseClasses}>
      {isSubmitting ? (
        <span className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Sending...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

// Status message component
export const StatusMessage = ({ status }) => {
  if (!status) return null;

  const isError = status.type === "error";
  const baseClasses = `
    p-4 rounded-lg flex items-start gap-3
    ${
      isError
        ? "bg-red-50 border border-red-200 text-red-800"
        : "bg-green-50 border border-green-200 text-green-800"
    }
  `;

  const IconComponent = isError ? (
    <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className={baseClasses} role="alert">
      {IconComponent}
      <p className="text-sm font-medium">{status.message}</p>
    </div>
  );
};
