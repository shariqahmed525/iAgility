import React from "react";
import { FiChevronRight } from "react-icons/fi";

const Button = ({
  text,
  link = "#",
  transparent,
  theme = "red",
  noBorder = false
}) => {
  return (
    <a
      href={link}
      className={`text-sm font-medium text-center rounded-full py-2.5 px-5 flex justify-between items-center ${
        transparent
          ? `bg-transparent ${!noBorder &&
              "border"} border-theme-${theme} border-solid text-theme-${theme}`
          : `text-white bg-theme-red shadow-red`
      }`}
    >
      <span className="pr-3 text-base">{text}</span>
      <FiChevronRight />
    </a>
  );
};

export default Button;
