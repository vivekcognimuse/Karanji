import React from "react";
import Button from "@/components/ui/Button";
import { P3 } from "../CustomTags";

const DownloadSection = ({
  title,
  intro,
  description,
  audienceNote,
  encouragementNote,
  buttonLabel,
}) => {
  return (
    <section className="bg-white rounded-md  space-y-6  mt-24">
      {/* Outside the box */}
      <h3 className="text-black ">{title}</h3>
      {intro && <P3 className="text-black-950/50">{intro}</P3>}
      {description && <P3 className="text-black-950/50 ">{description}</P3>}

      {/* Inside the gradient box */}
      <div className="p-4 shadow-sm  rounded-md border border-black/20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className=" text-black-950/50 leading-relaxed">
          {audienceNote && <P3>{audienceNote}</P3>}
          {encouragementNote && <P3 className="mt-1">{encouragementNote}</P3>}
        </div>

        <Button className="group bg-black lg:py-1 rounded-full overflow-hidden hover:scale-105 transition-transform">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
};

export default DownloadSection;
