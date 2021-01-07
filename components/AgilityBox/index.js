import React from "react";

const AgilityBox = ({ title, icon, active }) => {
  return (
    <div
      className={`
        ${
          active
            ? "shadow-orange border-orange bg-orange"
            : "hidden shadow-xl border-gray-100 bg-white"
        } border 
        border-solid rounded-full md:w-32 md:h-20 md:flex flex-row justify-content items-center p-5 md:p-3
      `}
    >
      <div
        className={`
          w-24 h-24 md:w-14 md:h-14 
          ${active ? "bg-white border-orange" : "bg-themedarkgray border-gray"} 
          border-12 md:border-6 border-opacity-75
          rounded-full flex items-center justify-center
        `}
        style={{ minWidth: "3.5rem" }}
      >
        {icon}
      </div>
      <p
        className={`
          ${active ? "hidden text-white" : "text-themedarkgray"} 
          md:flex flex-1 justify-center px-1 text-center font-semibold text-base xl:text-lg 
        `}
      >
        {title}
      </p>
    </div>
  );
};

export default AgilityBox;
