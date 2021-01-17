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
      className={`text-sm font-medium text-center rounded-full py-3 pl-6 pr-4 flex justify-between items-center ${
        transparent
          ? `bg-transparent ${!noBorder &&
              `border border-theme-${theme} border-solid text-theme-${theme}`}`
          : `text-white bg-theme-${theme} shadow-${theme}`
      }`}
    >
      <span className="pr-3 text-sm">{text}</span>
      <FiChevronRight />
    </a>
  );
};

export default Button;
