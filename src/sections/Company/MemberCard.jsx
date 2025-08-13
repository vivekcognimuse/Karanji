"use client";
import React from "react";
import { P1, P3, P4 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";

const MemberCard = ({
  name,
  role,
  company,
  brief,
  image,
  onConnect,
  onTalkToDigitalTwin,
  showTalkButton = false,
}) => {
  return (
    <div className="member-card rounded-2xl p-4 flex flex-row space-x-4 shadow-lg">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <div className="w-28 h-28 bg-white rounded-2xl overflow-hidden shadow-md aspect-square">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between space-y-2">
        {/* Name and Title */}
        <div>
          <P1 className="text-black-950 text-lg mb-1">{name}</P1>
          <P3 className="text-black-800 ">
            {role}
            {company && (
              <>
                ,<br />
                <span className="text-black-800">{company}</span>
              </>
            )}
          </P3>
        </div>

        {/* Brief Description */}
        <P4 className="text-gray-600 leading-relaxed text-xs mb-2">{brief}</P4>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-2">
          <Button onClick={onConnect} variant="secondary" size="sm">
            Connect with {name.split(" ")[0]}
          </Button>

          {showTalkButton && (
            <Button onClick={onTalkToDigitalTwin} variant="secondary" size="sm">
              Talk to My Digital Twin
            </Button>
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
      `}</style>
    </div>
  );
};

export default MemberCard;
