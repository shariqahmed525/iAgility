import React from "react";
import { HiArrowRight } from "react-icons/hi";

const WhatCanDoBox = ({ name, img, theme, index }) => {
  return (
    <div
      className={`h-52 rounded-3xl hover:bg-theme-${theme} hover:shadow-xl cursor-pointer wrapper`}
    >
      <div
        className={`h-44 w-200px min-w-200px ${
          index === 2 ? "md:w-250px md:min-w-250px" : "w-200px min-w-200px"
        } shadow-xl bg-white rounded-3xl p-5 details-wrapper`}
      >
        <img src={img} className="mb-3 mx-auto w-12" />
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
