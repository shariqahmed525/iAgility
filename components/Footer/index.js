import React, { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { CgTwitter } from "react-icons/cg";
import { SiInstagram } from "react-icons/si";
import TextField, { Input } from "@material/react-text-field";

const socialIcons = [
  {
    icon: <ImFacebook className="text-white text-2xl" />,
    link: "#"
  },
  {
    icon: <CgTwitter className="text-white text-2xl" />,
    link: "#"
  },
  {
    icon: <SiInstagram className="text-white text-2xl" />,
    link: "#"
  }
];

const linksArr = [
  {
    name: "How it Works",
    link: "#"
  },
  {
    name: "Talent",
    link: "#"
  },
  {
    name: "Industry",
    link: "#"
  },
  {
    name: "Our Expertise",
    link: "#"
  },
  {
    name: "Who is iAgility?",
    link: "#"
  },
  {
    name: "Why iAgility?",
    link: "#"
  },
  {
    name: "Careers",
    link: "#"
  },
  {
    name: "Insights (blog)",
    link: "#"
  },
  {
    name: "Contact Us",
    link: "#"
  },
  {
    name: "FAQ's",
    link: "#"
  },
  {
    name: "Book an iAgilian?",
    link: "#"
  },
  {
    name: "Login",
    link: "#"
  }
];

const SocialIconsRender = ({ theme }) =>
  socialIcons.map((v, i) => (
    <a
      key={i}
      href={v.link}
      className={`w-14 h-14 flex justify-center items-center rounded-full bg-theme-${theme} mx-1 shadow-xl`}
    >
      {v.icon}
    </a>
  ));

const ContactSection = ({ title, text }) => (
  <p className="text-white text-lg lg:text-sm 2xl:text-base">
    <span className="text-theme-skyblue font-bold">{title}</span>
    <span className="pr-3"></span>
    {text}
  </p>
);

const MobileLayout = () => {
  const [text, setText] = useState("");

  const TextRender = () => (
    <div className="w-full py-5">
      <TextField
        label="Email"
        className="w-full"
        floatingLabelClassName="mdc-text-text-white"
        style={{
          background: "transparent"
        }}
      >
        <Input value={text} onChange={e => setText(e.currentTarget.value)} />
      </TextField>
    </div>
  );

  return (
    <>
      <div className="w-full flex lg:hidden justify-center items-center mt-8 mb-5">
        <SocialIconsRender theme="mediumblue" />
      </div>
      <div className="w-full md:w-5/7 flex flex-col lg:hidden rounded-3xl bg-theme-mediumblue p-10 shadow-xl my-6 relative">
        <p className="text-white font-bold text-2xl">
          Subscribe Our <br />
          <span className="text-theme-skyblue">Newsletter</span>
        </p>
        <p className="text-gray-400 py-2 max-w-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        </p>
        {TextRender()}
        <img
          src={require("../../assets/images/message.png")}
          className="w-16 h-20 absolute top-5 right-5 transform -rotate-45"
        />
      </div>
      <p className="lg:hidden text-white text-center font-light pt-3 text-base sm:text-lg">
        &copy; Copyright 2021 <br /> MicroAgility Consulting Platform LLC.
      </p>
    </>
  );
};

const LaptopLayout = () => (
  <>
    <div className="w-full 2xl:w-47 lg:w-6/7 sm:w-6/7 lg:h-auto hidden lg:flex flex-row justify-between lg:p-8 my-1 lg:my-2">
      <ul>
        <li className="pb-5">
          <a href="#" className="text-theme-skyblue font-medium">
            Learn More
          </a>
        </li>
        {linksArr.slice(0, 4).map((v, i) => (
          <li key={i} className="py-1 text-white">
            <a href={v.link}>{v.name}</a>
          </li>
        ))}
      </ul>
      <ul>
        <li className="pb-5">
          <a href="#" className="text-theme-skyblue font-medium">
            Our Company
          </a>
        </li>
        {linksArr.slice(4, 8).map((v, i) => (
          <li key={i} className="py-1 text-white">
            <a href={v.link}>{v.name}</a>
          </li>
        ))}
      </ul>
    </div>
    <div className="w-full 2xl:w-47 lg:w-6/7 sm:w-6/7 lg:h-auto hidden lg:flex flex-row justify-between lg:p-8 my-1 lg:my-2">
      <ul>
        <li className="pb-5">
          <a href="#" className="text-theme-skyblue font-medium">
            Get Started
          </a>
        </li>
        {linksArr.slice(8, 10).map((v, i) => (
          <li key={i} className="py-1 text-white">
            <a href={v.link}>{v.name}</a>
          </li>
        ))}
      </ul>
      <ul>
        <li className="pt-12 pb-1 text-white">
          <a href="#">Become an iAgilian?</a>
        </li>
        {linksArr.slice(10, 12).map((v, i) => (
          <li key={i} className="py-1 text-white">
            <a href={v.link}>{v.name}</a>
          </li>
        ))}
      </ul>
    </div>
  </>
);

const Footer = () => {
  return (
    <div className="grid grid-cols-12 py-5 lg:py-0 lg:pb-10 px-5 lg:px-16 bg-theme-navyblue footer-dotted-design">
      <div className="col-start-1 2xl:col-start-3 xl:col-start-2 col-span-12 2xl:col-span-8 xl:col-span-10 gap-4 flex flex-col lg:flex-row justify-between xl:justify-around items-center lg:items-start my-4">
        <div className="w-full 2xl:w-47 lg:w-5/7 sm:w-6/7 flex flex-col justify-between items-center lg:items-start lg:p-8 my-1 lg:my-2">
          <img
            src={require("../../assets/images/logo-white.svg")}
            className="hidden pb-5 w-3/7 lg:w-4/7 lg:inline-flex"
          />
          <ContactSection title="Tel:" text="(604) 474-4463" />
          <ContactSection title="Email:" text="support@iAgility.com" />
          <MobileLayout />
        </div>
        <LaptopLayout />
      </div>
      <div className="col-start-1 xl:col-start-3 col-span-12 xl:col-span-8 gap-4 hidden lg:flex items-center justify-between bg-theme-mediumblue rounded-lg py-2 px-5">
        <p className="text-white font-medium">
          Looking to provide service?{" "}
          <a href="#" className="text-theme-skyblue">
            Explore the iAgilian Home
          </a>
        </p>
        <div className="flex justify-center items-center">
          <SocialIconsRender theme="navyblue" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
