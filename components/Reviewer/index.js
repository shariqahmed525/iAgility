import React from "react";

const Reviewer = ({ name, text, video }) => {
  return (
    <>
      <span
        className={`text-xs ${video ? "text-white" : "text-theme-skyblue"}`}
      >
        {name}
      </span>
      <span className={`px-3  ${video ? "text-white" : "text-gray-200"}`}>
        |
      </span>
      <span className={`text-xs ${video ? "text-white" : "text-gray-400"}`}>
        {text}
      </span>
    </>
  );
};

export default Reviewer;
