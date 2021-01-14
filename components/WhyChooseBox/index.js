import React from "react";
import { CgCheckO } from "react-icons/cg";
import { BsFillPlusCircleFill } from "react-icons/bs";

const WhyChooseBox = ({ name, coloredText, text, theme }) => {
  return (
    <div
      className={`bg-white shadow-xl rounded-3xl my-2 p-6 w-full sm:w-80 md:w-80 lg:w-64 flex flex-row sm:flex-col items-center lg:items-start`}
    >
      <CgCheckO
        className={`my-2 ml-1 self-start text-4xl sm:text-2xl text-theme-${theme}`}
      />
      <p className="text-base xs:text-lg px-3 sm:px-0 font-bold w-full sm:text-left">
        {name} <span className={`text-theme-${theme}`}> {coloredText}</span>
      </p>
      <p className="hidden sm:inline-block text-xs font-light py-3">
        <q>{text}</q>
      </p>
      <BsFillPlusCircleFill
        className={`inline sm:hidden my-2 ml-1 text-4xl text-theme-skyblue cursor-pointer`}
      />
    </div>
  );
};

export default WhyChooseBox;
