"use client";
import React from "react";
import { P1, P3, P4 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import Image from "next/image";
const MemberCard = ({
  name,
  role,
  company,
  brief,
  image,
  onConnect,
  onTalkToDigitalTwin,
  showTalkButton = false,
  linkedin,
  twinlink,
}) => {
  return (
    <div className="member-card rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 shadow-lg">
      {/* Profile Image */}
      <div className="flex-shrink-0 mx-auto sm:mx-0">
        <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-68 xl:w-80 xl:h-80 bg-white rounded-2xl overflow-hidden shadow-md">
          <Image
            src={image}
            alt={name}
            height={400}
            width={400}
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between space-y-2 text-center sm:text-left px-4">
        {/* Name and Title */}
        <div>
          <P1 className="text-black-950 text-base sm:text-lg mb-1">{name}</P1>
          <P3 className="text-black-800 text-sm sm:text-base">
            {role}
            {company && (
              <>
                ,<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span className="text-black-800">{company}</span>
              </>
            )}
          </P3>
        </div>

        {/* Brief Description */}
        <P4 className="text-gray-600 leading-relaxed text-xs sm:text-sm mb-2 px-2 sm:px-0">
          {brief}
        </P4>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-2 px-2 sm:px-0">
          <Button
            onClick={() => window.open(linkedin, "_blank")}
            variant="secondary"
            size="sm"
            className="w-full sm:w-auto"
          >
            Connect with {name.split(" ")[0]}
          </Button>
          {showTalkButton && twinlink && (
            <a
              href={twinlink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full" // Make anchor tag a block-level element and take full width
            >
              <Button
                onClick={onTalkToDigitalTwin}
                variant="secondary"
                size="sm"
                className="w-full" // Ensure the button takes full width
              >
                Talk to My Digital Twin
              </Button>
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        .member-card {
          background: linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .member-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        /* Mobile specific adjustments */
        @media (max-width: 639px) {
          .member-card {
            min-height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default MemberCard;
