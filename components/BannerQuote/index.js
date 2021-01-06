import React from "react";
import { ThreeDots } from "..";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const BannerQuote = () => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <div>
        <ThreeDots />
      </div>
      <p className="text-gray-500 text-sm max-w-md pt-3 text-center lg:text-left">
        <q>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          dolorem molestias? Recusandae sequi sapiente tenetur vitae, quia,
          labore culpa aut ipsam, nesciunt expedita consectetur.{" "}
        </q>
      </p>
      <div className="py-5">
        <span className="text-xs text-theme">M. Adnan</span>
        <span className="px-2 text-themegray">|</span>
        <span className="text-xs text-gray-400">Best Company</span>
      </div>
      <div className="flex flex-row">
        <a href="#" className="text-xl text-themegray">
          <FiArrowLeft />
        </a>
        <a href="#" className="ml-1 text-xl text-theme">
          <FiArrowRight />
        </a>
      </div>
    </div>
  );
};

export default BannerQuote;
