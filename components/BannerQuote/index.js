import React from "react";
import { ThreeDots, Reviewer } from "..";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const BannerQuote = () => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <section>
        <ThreeDots />
      </section>
      <p className="text-gray-500 text-base lg:text-sm max-w-md pt-3 text-center lg:text-left">
        <q>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          dolorem molestias? Recusandae sequi sapiente tenetur vitae, quia,
          labore culpa aut ipsam, nesciunt expedita consectetur.{" "}
        </q>
      </p>
      <div className="py-5">
        <Reviewer name="M. Adnan" text="Best Company" />
      </div>
      <div className="flex flex-row">
        <a href="#" className="text-xl text-theme-gray">
          <FiArrowLeft />
        </a>
        <a href="#" className="ml-1 text-xl text-theme-skyblue">
          <FiArrowRight />
        </a>
      </div>
    </div>
  );
};

export default BannerQuote;
