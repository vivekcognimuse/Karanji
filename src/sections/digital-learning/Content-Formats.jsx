import { P2 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";

const ContentFormats = ({ title, description, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <P2>{description}</P2>
      <Image
        src="/path/to/your/image.jpg"
        alt="Content Formats"
        width={600}
        height={400}
        className="w-full mt-8 rounded-2xl h-auto max-h-96 bg-purple-200"
      />
      <div className="mt-16 grid gap-4 grid-cols-3">
        {content.map((item, index) => (
          <div
            key={index}
            className="mb-8 bg-white  shadow-md px-4 py-2 gap-4 rounded-2xl flex items-center ">
            {item.src && (
              <Image
                src={item.src}
                alt={item.alt}
                width={40}
                height={40}
                className="size-10 mb-2"
              />
            )}
            <p className="font-sans text-[1.375rem] sm:text-2xl  ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentFormats;
