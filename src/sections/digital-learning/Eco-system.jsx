import { P2 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";

const EcoSystem = () => {
  return (
    <section>
      <h3>Integration Ecosystem Visualization</h3>
      <P2 className="mb-16">
        Seamlessly connecting learning, analytics, and enterprise systems for a
        smarter, secure learning experience
      </P2>{" "}
      <div className="hidden md:flex   justify-center">
        <Image
          src="/digital-learning/ecosystem.svg"
          alt="ecosystem visualisation"
          height={196}
          width={1062}
        />
      </div>
      <div className="md:hidden flex justify-center">
        <Image
          src="/digital-learning/ecosystemMbl.svg"
          alt="ecosystem visualisation"
          height={196}
          width={1062}
        />
      </div>
    </section>
  );
};

export default EcoSystem;
