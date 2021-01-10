import React from "react";
import { HiArrowRight } from "react-icons/hi";

const BlogBox = ({ img, date, month, year, name, text }) => {
  return (
    <div className="w-full sm:w-1/2 flex flex-row lg:flex-col justify-between lg:p-8 bg-white shadow-xl h-40 lg:h-auto rounded-3xl my-1 lg:my-2">
      <img
        src={img}
        className="w-1/3 sm:w-3/7 lg:w-full rounded-l-3xl lg:rounded-3xl max-h-48 object-cover"
        alt=""
      />
      <div className="p-4 lg:p-0 justify-start">
        <p className="w-36 lg:mt-m-15 lg:mb-2 mx-0 lg:mx-auto text-left lg:text-center font-semibold bg-white py-1 px-0 text-sm font-light rounded-full">
          <span className="text-theme">{date}</span> {month}, {year}
        </p>
        <p className="font-bold text-xl text-navyblue text-base py-1">{name}</p>
      </div>
      <p className="hidden lg:inline-flex font-light text-gray-500 text-sm py-1">
        {text}
      </p>
      <div className="hidden relative w-full lg:flex justify-center">
        <div className="w-11 h-11 cursor-pointer shadow-theme bg-theme rounded-full mx-auto flex justify-center items-center absolute bottom-0 mb-m-53">
          <HiArrowRight className="text-white text-xl" />
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
