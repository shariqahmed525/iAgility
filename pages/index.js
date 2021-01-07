import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { RiUser2Line } from "react-icons/ri";
import { FiArrowLeft, FiArrowRight, FiChevronRight } from "react-icons/fi";
import { AiOutlineLaptop } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AgilityBox, BannerQuote, Navbar, UserCard } from "../components";

const iAgilityBoxes = [
  {
    name: "Your New Competitve Advantage",
    icon: <AiOutlineLaptop className="text-4xl md:text-2xl text-white" />
  },
  {
    name: "Online Consulting Platform",
    icon: <RiUser2Line className="text-4xl md:text-2xl text-orange" />
  },
  {
    name: "Relationship Building",
    icon: <HiOutlineLightBulb className="text-4xl md:text-2xl text-white" />
  }
];

const BannerSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-16">
      <div className="grid justify-center lg:justify-end pt-10 pb-3 lg:pt-32">
        <div>
          {/* Text Section */}
          <div>
            <p className="text-2xl text-navyblue text-center lg:text-left font-semibold">
              Hire an iAgilian
            </p>
            <p className="text-2xl text-navyblue text-center lg:text-left font-light pt-0.5 pb-1">
              &amp; Transform the way you work with an
            </p>
            <p className="text-5xl text-navyblue text-center lg:text-left font-bold pt-1">
              Independent <span className="text-theme">Consultant</span>
            </p>
            <p className="text-sm text-navyblue text-center lg:text-left font-light py-5">
              For Sophisticated Clients and Consultants
            </p>
            <a
              href="#"
              className="text-sm mt-2 mx-auto lg:mx-0 w-40 font-medium text-center text-white bg-red shadow-red rounded-full py-3 px-4 flex justify-between items-center"
            >
              <span className="flex flex-1 justify-center">Hire A Talent</span>
              <FiChevronRight />
            </a>
          </div>
          {/* Quote Slider, only show on large devices */}
          <div className="hidden py-10 lg:flex">
            <BannerQuote />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-1 lg:pt-32">
        <div>
          <UserCard name="Mohammad Adnan" expertise="Finance Expert" />
          <UserCard name="Mohammad Adnan" expertise="Finance Expert" />
        </div>
        <div className="mt-12 lg:mt-32">
          <UserCard name="Mohammad Adnan" expertise="Finance Expert" />
          <UserCard name="Mohammad Adnan" expertise="Finance Expert" />
        </div>
      </div>
      {/* Quote Slider, show on medium or smaller devices */}
      <div className="py-3 lg:hidden">
        <BannerQuote />
      </div>
    </div>
  );
};

const IAgilityText = () => {
  return (
    <>
      <p className="text-base text-center xl:text-left font-light py-0 xl:py-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        reprehenderit harum atque, nulla veritatis libero magnam odit asperiores
        eligendi dicta expedita laboriosam deleniti. Inventore tempore, adipisci
        quaerat excepturi aliquam expedita impedit voluptatibus porro, aut, sunt
        ullam. Excepturi autem impedit magni sequi quas, omnis, repellendus
        earum corrupti ipsam quis quaerat molestiae!
        <span className="hidden xl:inline-block">
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          non nesciunt esse beatae asperiores. Provident eaque dolorem
          architecto quasi sed ratione consequatur porro? Sit ipsum illum
          dolorem similique voluptate magni{" "}
          <a href="#" className="text-theme font-semibold">
            your own personalized dashboard with ease!
          </a>
        </span>
      </p>
      <div className="flex flex-col xl:flex-row items-center pt-5">
        <a
          href="#"
          className="text-sm mt-2 mx-auto lg:mx-0 w-52 font-medium text-center text-white bg-red shadow-red rounded-full py-3 px-4 flex justify-between items-center"
        >
          <span className="flex flex-1 justify-center">
            Contact iAgility Today
          </span>
          <FiChevronRight />
        </a>
        <a
          href="#"
          className="text-sm mt-2 mx-auto lg:mx-0 w-36 font-medium text-center text-red rounded-full py-3 px-4 flex justify-between items-center"
        >
          <span className="flex flex-1 justify-center">Read More</span>
          <FiChevronRight className="text-red" />
        </a>
      </div>
    </>
  );
};

const WhatIsiAgility = () => {
  const [active, setActive] = useState(1);

  const iAgilityActions = arrow => {
    return (
      <div className={"flex md:hidden flex-row justify-content items-center"}>
        <div
          className={
            "w-16 h-16 bg-theme border border-theme shadow-theme border-opacity-75 rounded-full flex items-center justify-center"
          }
          style={{ minWidth: "3.5rem" }}
        >
          {arrow}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="py-10 px-5 lg:px-16 grid grid-cols-12 gap-4">
        <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 flex flex-col items-center">
          <img
            src={require("../assets/images/logo-upperside-light.svg")}
            alt="logo-upper"
          />
          <p className="text-navyblue font-bold text-4xl text-center py-3">
            What Is <span className="text-theme">iAgility?</span>
          </p>
          <p className="py-3 font-light text-center max-w-2xl lg:max-w-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            et facilis, vel quos pariatur eius amet rerum! Quas eveniet eius
            recusandae aspernatur sunt, at pariatur? Earum dolor eaque debitis?
            Porro commodi labore at? Saepe itaque ipsa nobis natus,
            necessitatibus architecto dolor, dignissimos, eius voluptate error
            perspiciatis. Aperiam ipsa totam minus?
          </p>
        </div>
      </div>
      <div className="px-5 lg:px-16 grid grid-cols-12 gap-4">
        <div className="col-start-1 col-span-12 xl:col-start-3 xl:col-span-8 flex flex-col items-center pt-1">
          <div className="w-full flex justify-between">
            {iAgilityActions(<FiArrowLeft className="text-white text-2xl" />)}
            {iAgilityBoxes.map((v, i) => {
              return (
                <AgilityBox
                  key={i}
                  icon={v.icon}
                  title={v.name}
                  active={active === i}
                />
              );
            })}
            {iAgilityActions(<FiArrowRight className="text-white text-2xl" />)}
          </div>
        </div>
      </div>
      <div className="py-10 px-5 lg:px-16 grid grid-cols-12 gap-4">
        <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 flex flex-col xl:flex-row items-center">
          <div className="flex flex-1 flex-col">
            <h3 className="font-bold text-3xl text-center xl:text-left py-2">
              Online Consultanting Platform
            </h3>
            <div className="hidden xl:block">
              <IAgilityText />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <img
              src={require("../assets/images/table-img.jpg")}
              className="w-full"
              alt=""
            />
            <div className="block xl:hidden">
              <IAgilityText />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        <Navbar />
        {/* Banner Section */}
        <BannerSection />

        {/* What Is iAgility? Section */}
        <WhatIsiAgility />
      </div>
    </div>
  );
};

export default Home;
