"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image"; // Assuming you're using Next.js
import { P2, P3, P4 } from "@/components/CustomTags";

// New reusable CardContent component
const CardContent = ({ icon, title, description, altTag }) => (
  <div className="flex flex-col h-full">
    {/* Icon */}
    <div className="flex justify-start items-center mb-4">
      {icon && (
        <div className="w-12 h-12 flex items-center justify-center rounded-lg">
          <Image
            src={icon}
            alt={altTag || title}
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </div>
      )}
    </div>

    {/* Title */}
    <h4 className=" text-gray-900 mb-2">{title}</h4>

    {/* Description */}
    <P2 className="text-gray-600 text-sm mb-2 flex-1">{description}</P2>
  </div>
);

const IndustryCard = ({
  title,
  description,
  image,
  details,
  icon,
  altTag,
  buttonText = "Learn More",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-[20rem] border border-black/10 bg-white rounded-2xl shadow-lg p-4 z-0 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Content - Persistent Front Side (Icon, Title, Description) */}
      <div className="flex flex-col h-full">
        <CardContent
          icon={icon}
          title={title}
          description={description}
          altTag={altTag}
        />

        {/* Image (Only on hover, replace with details and button) */}
        <div className="relative flex-1">
          {!isHovered && image && (
            <div className="relative h-56 overflow-hidden rounded-lg">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          )}

          {/* Hover State - Show Details and Button */}
          {isHovered && (
            <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-between bg-white bg-opacity-80 rounded-lg overflow-hidden">
              {/* Details Section: Flexible space with a max height */}
              <div className="flex-1 overflow-y-auto max-h-[calc(100%-3rem)]">
                {details?.map((detail, index) => (
                  <P4
                    key={index}
                    className="text-sm text-gray-700 border-b border-black-500"
                  >
                    {detail}
                  </P4>
                ))}
              </div>

              {/* Button: Ensured at the bottom without overflow */}
              <div className="mt-2 flex-shrink-0">
                <Button variant="secondary" size="sm" className="w-full">
                  {buttonText}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
