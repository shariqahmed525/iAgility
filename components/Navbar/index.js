import React, { useRef } from "react";

const navLeftItems = [
  {
    name: "Why",
    link: "#"
  },
  {
    name: "Talent",
    link: "#"
  },
  {
    name: "Insights",
    link: "#"
  },
  {
    name: "About Us",
    link: "#"
  }
];

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
    <header className="flex flex-col lg:flex-row items-center justify-between px-0 lg:px-16 py-3 shadow-xl">
      <div className="flex w-full lg:w-auto lg:inline-flex items-center justify-between px-10 lg:px-0">
        {/* Logo */}
        <a href="#" className="py-2">
          <img
            alt="logo"
            className="w-10/12 lg:w-full"
            src={require("../../assets/images/logo.svg")}
          />
        </a>

        {/* Menu Icon */}
        <div onClick={toggleMenu} className="block lg:hidden cursor-pointer">
          <span className="w-10 rounded-md h-1 bg-theme-skyblue block my-1.5"></span>
          <span className="w-8 rounded-md h-1 bg-theme-skyblue block my-1.5"></span>
          <span className="w-10 rounded-md h-1 bg-theme-skyblue block my-1.5"></span>
        </div>
      </div>

      {/* It contains both navbars */}
      <nav
        ref={navRef}
        className="hidden w-full lg:flex lg:justify-between pl-0 2xl:pl-36 lg:pl-10"
      >
        {/* left navbar */}
        <ul className="lg:flex items-center flex-wrap">
          {navLeftItems.map((v, i) => {
            return (
              <li
                key={i}
                className="lg:px-4 py-3 lg:py-2 lg:border-b-0 border-b border-solid border-gray-200"
              >
                <a
                  href={v.link}
                  className="lg:px-0 px-10 text-sm text-center font-light"
                >
                  {v.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* right navbar */}
        <ul className="lg:flex lg:justify-end items-center flex-wrap">
          <li className="lg:px-4 py-3 lg:py-2 lg:border-b-0 border-b border-solid border-gray-200">
            <a
              href="#"
              className="lg:px-0 px-10 text-sm text-center font-medium text-theme-red"
            >
              Book an iAgilian!
            </a>
          </li>
          <li className="lg:px-2 py-5 lg:py-2 lg:border-b-0 border-b border-solid border-gray-200">
            <a
              href="#"
              className="lg:mx-0 mx-8 text-sm font-medium text-center text-white bg-theme-skyblue shadow-theme rounded-full py-3 px-7"
            >
              Login
            </a>
          </li>
          <li className="lg:px-2 py-5 lg:py-2">
            <a
              href="#"
              className="lg:mx-0 mx-8 text-sm font-medium text-center text-white bg-theme-red shadow-red rounded-full py-3 px-7"
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
