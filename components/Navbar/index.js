import React, { useRef } from "react";

const Navbar = () => {
  const navRef = useRef(null);

  const toggleMenu = () => {
    if (navRef?.current?.classList) {
      if (navRef?.current?.classList?.contains("show-menu")) {
        navRef.current.classList.remove("show-menu");
      } else {
        navRef.current.classList.add("show-menu");
      }
    }
  };

  return (
    <header className="flex flex-1 flex-col lg:flex-row items-center shadow-xl lg:px-16 py-3 justify-between">
      <div
        onClick={toggleMenu}
        className="flex w-full lg:w-auto lg:inline-flex lg:flex-grow items-center lg:px-0 px-10 justify-between"
      >
        <a href="#" className="py-2 items-center">
          <img src={require("../../assets/images/logo.svg")} alt="logo" />
        </a>
        {/* Glyph Icon */}
        <div className="xl:hidden lg:hidden md:block">
          <span className="w-10 rounded-md h-1 bg-red-500 block my-1.5"></span>
          <span className="w-8 rounded-md h-1 bg-red-500 block my-1.5"></span>
          <span className="w-10 rounded-md h-1 bg-red-500 block my-1.5"></span>
        </div>
      </div>

      <nav
        ref={navRef}
        className="hidden top-nav w-full lg:flex lg:justify-between md:pl-0"
      >
        <ul className="lg:flex items-center flex-wrap">
          <li className="lg:px-4 py-3 lg:py-2 lg:border-b-0 border-b border-solid border-gray-200">
            <a
              href="#"
              className="lg:px-0 px-10 text-sm text-center font-semibold"
            >
              Become A Talent
            </a>
          </li>
          <li className="lg:px-4 py-3 lg:py-2 lg:border-b-0 border-b border-solid border-gray-200">
            <a
              href="#"
              className="lg:px-0 px-10 text-sm text-center font-semibold"
            >
              Browse Talents
            </a>
          </li>
          <li className="lg:px-4 py-3 lg:py-2 lg:border-b-0 border-b border-solid border-gray-200">
            <a
              href="#"
              className="lg:px-0 px-10 text-sm text-center font-light"
            >
              Why iAgility?
            </a>
          </li>
          <li className="lg:px-4 py-3 lg:py-2 lg:border-b-0 border-b border-solid border-gray-200">
            <a
              href="#"
              className="lg:px-0 px-10 text-sm text-center font-light"
            >
              Industry
            </a>
          </li>
          <li className="lg:px-4 py-3 lg:py-2 lg:border-b-0 border-b border-solid border-gray-200">
            <a
              href="#"
              className="lg:px-0 px-10 text-sm text-center font-light"
            >
              Services
            </a>
          </li>
          <li className="lg:px-4 py-3 lg:py-2 lg:border-b-0 border-b border-solid border-gray-200">
            <a
              href="#"
              className="lg:px-0 px-10 text-sm text-center font-light"
            >
              Pricing
            </a>
          </li>
        </ul>
        <ul className="lg:flex items-center flex-wrap lg:justify-end">
          <li className="lg:px-4 py-3 lg:py-2 lg:border-b-0 border-b border-solid border-gray-200">
            <a
              href="#"
              className="lg:px-0 px-10 text-sm text-center font-light"
            >
              Who is iAgility
            </a>
          </li>
          <li className="lg:px-4 py-3 lg:py-2 lg:border-b-0 border-b border-solid border-gray-200">
            <a
              href="#"
              className="lg:px-0 px-10 text-sm text-center font-light"
            >
              Support
            </a>
          </li>
          <li className="lg:px-4 py-3 lg:py-2 lg:border-b-0 border-b border-solid border-gray-200">
            <a
              href="#"
              className="lg:px-0 px-10 text-sm text-center font-medium text-red"
            >
              Login
            </a>
          </li>
          <li className="lg:px-4 py-3 lg:py-2 mt-2">
            <a
              href="#"
              className="lg:mx-0 mx-8 text-sm font-medium text-center text-white bg-red shadow-red rounded-full py-3 px-7"
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
