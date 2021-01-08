import React from "react";

const getClasses = key => {
  switch (key) {
    case 0:
      return {
        parentDiv: "shadow-yellow border-theme-yellow bg-theme-yellow",
        childDiv: "bg-white border-theme-yellow"
      };
    case 1:
      return {
        parentDiv: "shadow-orange border-theme-orange bg-theme-orange",
        childDiv: "bg-white border-theme-orange"
      };
    case 2:
      return {
        parentDiv: "shadow-green border-theme-green bg-theme-green",
        childDiv: "bg-white border-theme-green"
      };
  }
};

const AgilityBox = ({ name, icon, active, index, setActive }) => {
  return (
    <div
      className={`
        ${
          active
            ? `${getClasses(index).parentDiv} cursor-default`
            : "hidden shadow-xl border-gray-100 bg-white cursor-pointer"
        } border 
        border-solid rounded-full md:w-32 md:h-20 md:flex flex-row justify-content items-center p-5 md:p-3
      `}
      onClick={() => !active && setActive(index)}
    >
      <div
        className={`
          w-24 h-24 md:w-14 md:h-14 
          ${
            active
              ? getClasses(index).childDiv
              : "bg-theme-darkgray border-gray"
          } 
          border-12 md:border-6 border-opacity-75
          rounded-full flex items-center justify-center
        `}
        style={{ minWidth: "3.5rem" }}
      >
        {icon(active)}
      </div>
      <p
        className={`
          ${active ? "hidden text-white" : "text-themedarkgray"} 
          md:flex flex-1 justify-center px-1 text-center font-semibold text-sm xl:text-base 
        `}
      >
        {name}
      </p>
    </div>
  );
};

export default AgilityBox;
