import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { HiOutlineChevronRight } from "react-icons/hi";

const IAgilityWorkBox = ({
  image,
  arrowImg,
  name,
  text,
  theme,
  active,
  setActive,
  index
}) => {
  return (
    <>
      {arrowImg && (
        <img src={arrowImg} className="hidden xl:inline-block arrow-img" />
      )}
      <div
        className={`hidden xl:inline-flex  
          p-5 xl:bg-${theme} hover:bg-${theme} border-2 border-${theme} border-solid rounded-full
          cursor-pointer xl:cursor-default`}
      >
        <img alt="icon" src={image} className="w-24 h-24" />
      </div>
      {/* Will show on mobile devices */}
      <div className={"flex xl:hidden justify-center w-full"}>
        <div
          onClick={() => setActive(0)}
          className={`${index === 0 ? `bg-theme-yellow` : "bg-transparent"}
            p-4 sm:p-7 md:p-7 xl:bg-theme-yellow hover:bg-theme-yellow border-2 border-theme-yellow border-solid rounded-full
            cursor-pointer xl:cursor-default`}
        >
          <img
            alt="icon"
            className="w-11 h-11 sm:w-14 sm:h-14"
            src={require("../../assets/images/icon-1.png")}
          />
        </div>
        <div className="flex items-center justify-center">
          <HiOutlineChevronRight className="text-theme-yellow text-4xl" />
        </div>
        <div
          onClick={() => setActive(1)}
          className={`
          ${index === 1 ? `bg-theme-orange` : "bg-transparent"}
            p-4 sm:p-7 md:p-7 xl:bg-theme-orange hover:bg-theme-orange border-2 border-theme-orange border-solid rounded-full
            cursor-pointer xl:cursor-default`}
        >
          <img
            alt="logo"
            className="w-11 h-11 sm:w-14 sm:h-14"
            src={require("../../assets/images/icon-2.png")}
          />
        </div>
        <div className="flex items-center justify-center">
          <HiOutlineChevronRight className="text-theme-orange text-4xl" />
        </div>
        <div
          onClick={() => setActive(2)}
          className={`
          ${index === 2 ? `bg-theme-green` : "bg-transparent"}
            p-4 sm:p-7 md:p-7 xl:bg-theme-green hover:bg-theme-green border-2 border-theme-green border-solid rounded-full
            cursor-pointer xl:cursor-default`}
        >
          <img
            alt="logo"
            className="w-11 h-11 sm:w-14 sm:h-14"
            src={require("../../assets/images/icon-3.png")}
          />
        </div>
      </div>

      <p
        className={`${!active &&
          "hidden"} xl:inline-flex text-xl font-semibold py-5 text-center`}
      >
        {name}
      </p>
      <p className={`${!active && "hidden"}  xl:inline-flex  text-center pb-5`}>
        {text}
      </p>
      <a
        href="#"
        className={`
          ${!active && "hidden"} xl:inline-flex
          text-sm mt-2 w-36 font-medium text-center text-theme-skyblue border border-solid border-theme-skyblue rounded-full py-2.5 px-4 flex justify-between items-center mx-auto`}
      >
        <span className="flex flex-1 justify-center">Read More</span>
        <FiChevronRight />
      </a>
    </>
  );
};

export default IAgilityWorkBox;
