import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { HiOutlineChevronRight } from "react-icons/hi";

const IAgilityWorkBox = ({ image, name, text, theme, active, index }) => {
  return (
    <>
      {index !== 2 && (
        <img
          alt=""
          src={require("../../assets/images/gradient-arrow-1.png")}
          className="arrow-img"
        />
      )}
      <div
        className={`hidden xl:inline-flex  
          p-5 xl:bg-${theme} hover:bg-${theme} border-2 border-${theme} border-solid rounded-full
          cursor-pointer xl:cursor-default
        `}
      >
        <img alt="" src={image} className="w-24 h-24" />
      </div>
      {/* Will show on mobile devices */}
      <div
        className={`${index !== 0 &&
          "hidden"} flex xl:hidden justify-center w-full`}
      >
        <div
          className={`
          ${index === 0 ? `bg-theme-yellow` : "bg-transparent"}
          p-4 sm:p-7 md:p-7 xl:bg-theme-yellow hover:bg-theme-yellow border-2 border-theme-yellow border-solid rounded-full
          cursor-pointer xl:cursor-default
        `}
        >
          <img
            alt=""
            src={require("../../assets/images/icon-1.png")}
            className="w-12 h-12"
          />
        </div>
        <div className="flex items-center justify-center">
          <HiOutlineChevronRight className="text-yellow text-4xl" />
        </div>
        <div
          className={`
          ${index === 1 ? `bg-theme-orange` : "bg-transparent"}
          p-4 sm:p-7 md:p-7 xl:bg-theme-orange hover:bg-theme-orange border-2 border-theme-orange border-solid rounded-full
          cursor-pointer xl:cursor-default
        `}
        >
          <img
            alt=""
            src={require("../../assets/images/icon-2.png")}
            className="w-12 h-12"
          />
        </div>
        <div className="flex items-center justify-center">
          <HiOutlineChevronRight className="text-orange text-4xl" />
        </div>
        <div
          className={`
          ${index === 2 ? `bg-theme-green` : "bg-transparent"}
          p-4 sm:p-7 md:p-7 xl:bg-theme-green hover:bg-theme-green border-2 border-theme-green border-solid rounded-full
          cursor-pointer xl:cursor-default
        `}
        >
          <img
            alt=""
            src={require("../../assets/images/icon-3.png")}
            className="w-12 h-12"
          />
        </div>
      </div>

      <p
        className={`
          ${!active && "hidden"} 
          xl:inline-flex 
          text-xl font-semibold py-5 text-center
        `}
      >
        {name}
      </p>
      <p className={`${!active && "hidden"}  xl:inline-flex  text-center pb-5`}>
        {text}
      </p>
      <a
        href="#"
        className={`
          ${!active && "hidden"}
          xl:inline-flex
          text-sm mt-2 w-36 font-medium text-center text-theme border border-solid border-theme rounded-full py-2.5 px-4 flex justify-between items-center mx-auto
        `}
      >
        <span className="flex flex-1 justify-center">Read More</span>
        <FiChevronRight />
      </a>
    </>
  );
};

export default IAgilityWorkBox;
