import React from "react";
import { ThreeDots } from "..";

const UserCard = ({ name, expertise, img }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white shadow-xl py-5 px-5 sm:px-10 m-1.5 rounded-2xl">
      <img
        alt="Loading failed..."
        src={img || require("../../assets/images/userimg.jpeg")}
        className="rounded-full h-20 w-20 sm:h-24 sm:w-24 shadow-2xl"
      />
      <div className="flex justify-center my-4 items-center">
        <ThreeDots />
      </div>
      <p className="py-1 font-medium text-center text-xs md:text-sm">{name}</p>
      <p className="py-1 font-medium text-center text-xs md:text-sm text-theme-skyblue">
        {expertise}
      </p>
    </div>
  );
};

export default UserCard;
