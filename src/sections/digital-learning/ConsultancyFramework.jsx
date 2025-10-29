import { P2 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";
import Accordion from "./Accordian";

const ConsultancyFramework = ({ data }) => {
  return (
    <section>
      <h3>Training Landscape Consultancy Framework (TLCF)</h3>
      <P2 className="mb-16">
        A structured 4-quadrant methodology designed to assess, strategize,
        implement, and optimize training programs. It ensures a holistic,
        data-driven approach to enhance organizational learning and development.
      </P2>
      <div className="hidden md:flex justify-center">
        <Image
          src="/digital-learning/ConsultancyFramework.svg"
          alt="Consultancy Framework"
          height={196}
          width={1062}
        />
      </div>
      <div className=" md:hidden ">
        <Accordion data={data} />
      </div>
    </section>
  );
};
export default ConsultancyFramework;
