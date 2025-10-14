// Updated EcoSystem.jsx
import { P2 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const EcoSystem = () => {
  return (
    <section>
      <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
        <h3>Integration Ecosystem Visualization</h3>
      </RevealWrapper>

      <RevealWrapper direction="up" duration={0.6} delay={0.1} threshold={0.2}>
        <P2 className="mb-16">
          Seamlessly connecting learning, analytics, and enterprise systems for
          a smarter, secure learning experience.
        </P2>
      </RevealWrapper>

      {/* Desktop Image */}
      <RevealWrapper
        direction="fade"
        duration={0.8}
        delay={0.2}
        distance={20}
        threshold={0.15}
        className="hidden md:flex justify-center">
        <Image
          src="/digital-learning/ecosystem.svg"
          alt="ecosystem visualisation"
          height={196}
          width={1062}
        />
      </RevealWrapper>

      {/* Mobile Image */}
      <RevealWrapper
        direction="fade"
        duration={0.8}
        delay={0.2}
        distance={20}
        threshold={0.15}
        className="md:hidden flex justify-center">
        <Image
          src="/digital-learning/ecosystemMbl.svg"
          alt="ecosystem visualisation"
          className="w-full max-w-[60vw]"
          height={196}
          width={1062}
        />
      </RevealWrapper>
    </section>
  );
};

export default EcoSystem;
