import React from "react";
import { FiChevronRight } from "react-icons/fi";

const Button = ({ text, transparent, theme = "red" }) => {
  return (
    <a
      href="#"
      className={`text-sm font-medium text-center rounded-full py-2.5 px-5 flex justify-between items-center ${
        transparent
          ? `bg-transparent border border-theme-${theme} border-solid text-${theme}`
          : `text-white bg-theme-red shadow-red`
      }`}
    >
      <span className="pr-3 text-base">{text}</span>
      <FiChevronRight />
    </a>
  );
};

export default Button;
