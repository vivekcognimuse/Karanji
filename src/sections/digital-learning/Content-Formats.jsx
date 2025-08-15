import CarouselContainer from "@/components/animations/Carousal";
import { P2 } from "@/components/CustomTags";
import { Car } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContentFormats = ({ data }) => {
  const { title, description, content, image } = data || {};

  return (
    <div>
      <h3>{title}</h3>
      <P2>{description}</P2>
      {image && (
        <div className="mt-8 rounded-2xl h-auto max-h-96 bg-purple-200 overflow-hidden">
          <Image
            src={image}
            alt="Content Formats"
            width={600}
            height={400}
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      )}

      <div className="mt-16 hidden lg:grid gap-4 grid-cols-1 lg:grid-cols-3">
        {content.map((item, index) => (
          <div
            key={index}
            className="mb-8  border border-black-200 shadow-md px-4 py-2 gap-4 rounded-2xl flex items-center ">
            {item.src && (
              <Image
                src={item.src}
                alt={item.alt || item.description}
                width={40}
                height={40}
                className="size-10 "
              />
            )}
            <h5 className="mb-0">{item.description}</h5>
          </div>
        ))}
      </div>

      <div className="mt-16 lg:hidden ">
        <CarouselContainer>
          {content.map((item, index) => (
            <div
              key={index}
              className="mb-8 w-full  border border-black-200 shadow-md px-4 py-2 gap-4 rounded-2xl flex items-center ">
              {item.src && (
                <Image
                  src={item.src}
                  alt={item.alt || item.description}
                  width={40}
                  height={40}
                  className="size-10"
                />
              )}
              <h5 className="mb-0">{item.description}</h5>
            </div>
          ))}
        </CarouselContainer>
      </div>
    </div>
  );
};

export default ContentFormats;
