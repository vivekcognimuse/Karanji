import React from "react";

const QuoteBlock = ({ quote }) => (
  <blockquote className="border-l-2 border-black-950/80 pl-4 italic text-gray-700 my-6 ">
    “{quote}”
  </blockquote>
);

export default QuoteBlock;
