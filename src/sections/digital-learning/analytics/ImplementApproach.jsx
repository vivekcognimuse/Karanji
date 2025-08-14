import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";

// 📦 Data object

const ImplementApproach = ({ data }) => {
  const { title, description, image, sections } = data;

  return (
    <div>
      <h3 className="mb-4">{title}</h3>
      <P2 className="mb-16">{description}</P2>

      <div>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />

        <div className="flex mt-16 gap-8 flex-col md:flex-row">
          {/* Section 1 */}
          <div>
            <h4 className="mb-4">{sections[0].title}</h4>
            <P3 className="text-black-500">{sections[0].content}</P3>
          </div>

          {/* Section 2 */}
          <div className="border-l-2 pl-4 border-[#B15252]">
            <h4 className="mb-4">{sections[1].title}</h4>
            <P3 className="text-black-500">{sections[1].contentTop}</P3>
            {sections[1].divider && <hr className="mt-3 mb-8" />}
            <P3 className="text-black-500">{sections[1].contentBottom}</P3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementApproach;
