import React, { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { CgTwitter } from "react-icons/cg";
import { SiInstagram } from "react-icons/si";
import TextField, { Input } from "@material/react-text-field";

const socialIcons = [
  {
    icon: <ImFacebook className="text-white text-2xl" />
  },
  {
    icon: <CgTwitter className="text-white text-2xl" />
  },
  {
    icon: <SiInstagram className="text-white text-2xl" />
  }
];

const Footer = () => {
  const [text, setText] = useState("");
  return (
    <div className="py-5 lg:py-0 lg:pb-10 px-5 lg:px-16 grid grid-cols-12 bg-theme-navyblue footer-dotted-design">
      <div className="col-start-1 col-span-12 2xl:col-start-3 2xl:col-span-8 xl:col-start-2 xl:col-span-10 gap-4 flex flex-col lg:flex-row justify-between xl:justify-around items-center lg:items-start my-4">
        <div className="w-full 2xl:w-47 lg:w-5/7 sm:w-6/7 flex flex-col justify-between items-center lg:items-start lg:p-8 my-1 lg:my-2">
          <img
            src={require("../../assets/images/logo-white.svg")}
            className="hidden pb-5 w-3/7 lg:w-4/7 lg:inline-flex"
            alt="logo-white"
          />
          <p className="text-white text-lg lg:text-sm 2xl:text-base">
            <span className="text-theme font-bold">Tel: </span>
            <span className="pr-2"></span>
            (604) 474-4463
          </p>
          <p className="text-white text-lg lg:text-sm 2xl:text-base">
            <span className="text-theme font-bold">Email: </span>
            <span className="pr-2"></span>
            support@iAgility.com
          </p>
          <div className="flex w-full lg:hidden justify-center items-center mt-8 mb-5">
            {socialIcons.map(v => (
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-theme-mediumblue flex justify-center items-center mx-1 shadow-xl"
              >
                {v.icon}
              </a>
            ))}
          </div>
          <div className="flex w-full md:w-5/7 lg:hidden rounded-3xl bg-theme-mediumblue flex-col p-10 shadow-xl my-6 relative">
            <p className="text-white font-bold text-2xl">
              Subscribe Our <br />
              <span className="text-theme">Newsletter</span>
            </p>
            <p className="text-gray-400 py-2 max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus
            </p>
            <div className="w-full py-5">
              <TextField
                label="Email"
                floatingLabelClassName="mdc-text-text-white"
                className="w-full"
                style={{
                  background: "transparent"
                }}
              >
                <Input
                  value={text}
                  className="text-white"
                  onChange={e => setText(e.currentTarget.value)}
                />
              </TextField>
            </div>
            <img
              src={require("../../assets/images/message.png")}
              className="absolute top-5 right-5 w-16 h-20 transform -rotate-45"
              alt=""
            />
          </div>
          <p className="lg:hidden text-white text-center font-light pt-3 text-base sm:text-lg">
            &copy; Copyright 2021 <br /> MicroAgility Consulting Platform LLC.
          </p>
        </div>
        <div className="hidden w-full 2xl:w-47 lg:w-6/7 sm:w-6/7 lg:flex flex-row justify-between lg:p-8 lg:h-auto my-1 lg:my-2">
          <ul className="">
            <li className="pb-5">
              <a href="#" className="text-theme font-medium">
                Learn More
              </a>
            </li>
            <li className="py-1 text-white">
              <a href="#">How it Works</a>
            </li>
            <li className="py-1 text-white">
              <a href="#">Talent</a>
            </li>
            <li className="py-1 text-white">
              <a href="#">Industry</a>
            </li>
            <li className="py-1 text-white">
              <a href="#">Our Expertise</a>
            </li>
          </ul>
          <ul>
            <li className="pb-5">
              <a href="#" className="text-theme font-medium">
                Our Company
              </a>
            </li>
            <li className="py-1 text-white">
              <a href="#">Who is iAgility?</a>
            </li>
            <li className="py-1 text-white">
              <a href="#">Why iAgility?</a>
            </li>
            <li className="py-1 text-white">
              <a href="#">Careers</a>
            </li>
            <li className="py-1 text-white">
              <a href="#">Insights (blog)</a>
            </li>
          </ul>
        </div>
        <div className="hidden w-full 2xl:w-47 lg:w-6/7 sm:w-6/7 lg:flex flex-row justify-between lg:p-8 lg:h-auto my-1 lg:my-2">
          <ul className="">
            <li className="pb-5">
              <a href="#" className="text-theme font-medium">
                Get Started
              </a>
            </li>
            <li className="py-1 text-white">
              <a href="#">Contact Us</a>
            </li>
            <li className="py-1 text-white">
              <a href="#">FAQ's</a>
            </li>
          </ul>
          <ul>
            <li className="pt-12 pb-1 text-white">
              <a href="#">Become an iAgilian?</a>
            </li>
            <li className="py-1 text-white">
              <a href="#">Book an iAgilian?</a>
            </li>
            <li className="py-1 text-white">
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden col-start-1 col-span-12 xl:col-start-3 xl:col-span-8 lg:flex gap-4 py-2 px-5 items-center justify-between bg-theme-mediumblue rounded-lg">
        <p className="text-white font-medium">
          Looking to provide service?{" "}
          <a href="#" className="text-theme">
            Explore the iAgilian Home
          </a>
        </p>
        <div className="flex justify-center items-center">
          {socialIcons.map((v, i) => (
            <a
              key={i}
              href="#"
              className="w-14 h-14 rounded-full bg-theme-navyblue flex justify-center items-center mx-1 shadow-xl"
            >
              {v.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
