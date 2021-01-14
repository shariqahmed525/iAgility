import React from "react";
import { HiArrowRight } from "react-icons/hi";

const WhatCanDoBox = ({ name, img, theme, index }) => {
  return (
    <div
      className={`
          rounded-3xl
          h-52
          hover:shadow-xl
          cursor-pointer
          hover:bg-theme-${theme}
          wrapper
      `}
    >
      <div
        className={`
        p-5
        shadow-xl
        bg-white rounded-3xl
        h-44
        w-200px
        min-w-200px
        details-wrapper
        ${index === 2 ? "md:w-250px md:min-w-250px" : "w-200px min-w-200px"}
      `}
      >
        <img alt="" src={img} className="mb-3 mx-auto w-12" />
        <p
          className={`text-center text-base md:text-lg font-semibold text-theme-${theme}`}
        >
          {name}
        </p>
      </div>
      <div className={`hidden arrow-div h-8 px-2 justify-center`}>
        <HiArrowRight className="text-white text-xl mt-1" />
      </div>
    </div>
  );
};

export default WhatCanDoBox;
