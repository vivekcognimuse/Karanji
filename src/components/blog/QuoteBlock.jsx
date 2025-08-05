import React from "react";

const QuoteBlock = ({ quote }) => (
  <blockquote className="font-outfit font-normal text-lg border-l-2 border-black-950/70 pl-4  text-black-950/70 my-6 ">
    “{quote}”
  </blockquote>
);

export default QuoteBlock;
