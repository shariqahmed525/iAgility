import React from "react";

const Navbar = () => {
  return (
    <header className="flex flex-1 items-center shadow-xl px-10 py-3 justify-between">
      <a href="#" className="p-2 inline-flex items-center xl:mr-48 ">
        <img src={require("../../assets/images/logo.svg")} alt="logo" />
      </a>
      <nav className="flex flex-1 justify-between">
        <ul className="flex items-center flex-wrap">
          <li className="px-4">
            <a href="#" className="text-sm font-semibold">
              Become A Talent
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-sm font-semibold">
              Browse Talents
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-sm font-light">
              Why iAgility?
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-sm font-light">
              Industry
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-sm font-light">
              Services
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-sm font-light">
              Pricing
            </a>
          </li>
        </ul>
        <ul className="flex items-center flex-wrap">
          <li className="px-4">
            <a href="#" className="text-sm font-light">
              Who is iAgility
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-sm font-light">
              Support
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-sm font-medium text-red">
              Login
            </a>
          </li>
          <li className="px-4">
            <a
              href="#"
              className="text-sm font-medium text-white bg-red shadow-xl rounded-full py-3 px-6"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
