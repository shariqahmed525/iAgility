import React from "react";

const AgilityBox = ({ title, icon, active }) => {
  return (
    <div
      className={`hidden shadow-xl border 
      ${active ? "border-orange" : "border-gray-100"} border-solid 
      ${active ? "bg-orange" : "bg-white"} 
      rounded-full w-32 h-20 md:flex flex-row justify-content items-center p-3`}
    >
      <div
        className={`w-14 h-14 ${
          active ? "bg-white" : "bg-themedarkgray"
        } rounded-full flex items-center justify-center`}
        style={{ minWidth: "3.5rem" }}
      >
        {icon}
      </div>
      <p
        className={`text-center flex flex-1 justify-center px-1 font-semibold text-base lg:text-xl ${
          active ? "text-white" : "text-themedarkgray"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default AgilityBox;
