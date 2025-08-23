import { P2 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const EcoSystem = () => {
  return (
    <section
      data-reveal-amount="0.25"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      {/* Title */}
      <div
        className="opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        <h3>Integration Ecosystem Visualization</h3>
        <P2 className="mb-16">
          Seamlessly connecting learning, analytics, and enterprise systems for
          a smarter, secure learning experience
        </P2>
      </div>

      {/* Image Sections */}
      <div
        className="hidden md:flex justify-center opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        <Image
          src="/digital-learning/ecosystem.svg"
          alt="ecosystem visualisation"
          height={196}
          width={1062}
        />
      </div>

      <div
        className="md:hidden flex justify-center opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        <Image
          src="/digital-learning/ecosystemMbl.svg"
          alt="ecosystem visualisation"
          height={196}
          width={1062}
        />
      </div>

      {/* Run the animation for this section */}
      <SectionReveal />
    </section>
  );
};

export default EcoSystem;
