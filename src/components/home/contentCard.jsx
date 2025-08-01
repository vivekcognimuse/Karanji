import React from "react";

export const ContentCard = ({ badge, title, description, actionText }) => {
  return (
    <div className="p-2  w-full">
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
          {badge}
        </span>
      )}
      <h3 className="text-3xl font-sans mb-2">{title}</h3>
      <p className="text-black/70 text-xl">{description}</p>
      {actionText && (
        <a
          href="#"
          className="text-xl text-black-700 hover:underline mt-4 inline-block">
          {actionText}
        </a>
      )}
    </div>
  );
};

export const RightContentCard = ({
  title,
  highlight1,
  highlight2,
  imageSrc,
}) => {
  return (
    <div className="relative bg-purple-200 rounded-xl shadow-sm border border-gray-200 overflow-hidden max-w-sm">
      <div className="p-6 pb-4  font-sans">
        <h3 className="text-3xl  mb-1">{title}</h3>
        <p className="text-xl text-black-950 ">
          Where <span className="font-semibold  ">{highlight1}</span> meets{" "}
          <span className="font-semibold ">{highlight2}</span>
        </p>
      </div>
      <div className="w-full h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full bg-white shadow-sm">
        <svg
          className="w-4 h-4 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 7l-10 10M17 17V7H7"
          />
        </svg>
      </div>
    </div>
  );
};
