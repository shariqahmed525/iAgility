import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { RiUser2Line } from "react-icons/ri";
import { BiPlay } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight, FiChevronRight } from "react-icons/fi";
import { AiOutlineLaptop } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import {
  AgilityBox,
  BannerQuote,
  IAgilityWorkBox,
  Navbar,
  Reviewer,
  ThreeDots,
  UserCard
} from "../components";

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

const HowDoesIAgilityBoxes = [
  {
    name: "Learning",
    theme: "theme-yellow",
    image: require("../assets/images/icon-1.png"),
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at aperiam, reprehenderit ut exercitationem nemo praesentium laudantium aut."
  },
  {
    name: "Machine",
    theme: "theme-orange",
    image: require("../assets/images/icon-2.png"),
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at aperiam, reprehenderit ut exercitationem nemo praesentium laudantium aut."
  },
  {
    name: "Connecting",
    theme: "theme-green",
    image: require("../assets/images/icon-3.png"),
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at aperiam, reprehenderit ut exercitationem nemo praesentium laudantium aut."
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
              className="text-sm mt-2 mx-auto lg:mx-0 w-40 font-medium text-center text-white bg-theme-red shadow-red rounded-full py-3 px-4 flex justify-between items-center"
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

const WhatIsiAgility = () => {
  const [active, setActive] = useState(1);

  const iAgilityText = () => {
    return (
      <>
        <p className="text-base text-center xl:text-left font-light py-0 xl:py-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          reprehenderit harum atque, nulla veritatis libero magnam odit
          asperiores eligendi dicta expedita laboriosam deleniti. Inventore
          tempore, adipisci quaerat excepturi aliquam expedita impedit
          voluptatibus porro, aut, sunt ullam. Excepturi autem impedit magni
          sequi quas, omnis, repellendus earum corrupti ipsam quis quaerat
          molestiae!
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
            className="text-sm mt-2 mx-auto lg:mx-0 w-52 font-medium text-center text-white bg-theme-red shadow-red rounded-full py-3 px-4 flex justify-between items-center"
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

  const iAgilityActions = arrow => {
    return (
      <a href="#">
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
      </a>
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
          <div className="w-full flex items-center justify-between">
            {iAgilityActions(<FiArrowLeft className="text-white text-2xl" />)}
            <div className="flex border-t-2 border-theme border-opacity-50 border-dotted flex-1 md:hidden"></div>
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
            <div className="flex border-t-2 border-theme border-opacity-50 border-dotted flex-1 md:hidden"></div>
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
            <div className="hidden xl:block">{iAgilityText()}</div>
          </div>
          <div className="flex flex-1 flex-col">
            <img
              src={require("../assets/images/table-img.jpg")}
              className="w-full"
              alt=""
            />
            <div className="block xl:hidden">{iAgilityText()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const HowDoesIAgility = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="py-16 px-5 lg:px-16 grid grid-cols-12 gap-4 bg-theme bg-opacity-5">
      <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 flex flex-col items-center">
        <img
          src={require("../assets/images/logo-upperside.svg")}
          alt="logo-upper"
        />
        <p className="text-navyblue font-bold text-4xl text-center py-3">
          How Does <span className="text-theme">iAgility?</span> Work
        </p>
        <p className="py-3 font-light text-center max-w-2xl lg:max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. dolorem
          architecto quasi sed ratione consequatur porro? Sit ipsum illum
          dolorem similique voluptate magni{" "}
          <a href="#" className="text-theme font-semibold">
            your own personalized dashboard with ease!
          </a>
        </p>
      </div>
      <div className="col-start-1 col-span-12 md:col-start-3 md:col-span-8 flex flex-1 flex-col xl:flex-row items-center justify-between">
        {HowDoesIAgilityBoxes.map((v, i) => (
          <div
            key={i}
            className={`${active !== i &&
              "hidden"} xl:flex flex-1 flex-col items-center justify-between p-3`}
          >
            <IAgilityWorkBox
              index={i}
              name={v.name}
              text={v.text}
              theme={v.theme}
              image={v.image}
              active={active === i}
            />
          </div>
        ))}
      </div>
      <div className="col-start-1 col-span-12 md:col-start-3 md:col-span-8 flex items-center justify-center my-0 md:my-5">
        <a
          href="#"
          className="text-sm xl:mt-2 mx-auto lg:mx-0 w-56 font-medium text-center text-white bg-theme-red shadow-red rounded-full py-3 px-4 flex justify-between items-center"
        >
          <span className="flex flex-1 justify-center">
            Create Your First Project
          </span>
          <FiChevronRight />
        </a>
      </div>
    </div>
  );
};

const AreYouLooking = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row bg-gradient-to-r from-theme-blue to-theme-darkblue items-center justify-center py-10">
      <p className="text-xl text-white font-medium max-w-xs text-center lg:text-right">
        Are you looking to provide services and become an iAgility?
      </p>
      <a
        href="#"
        className="text-sm mt-5 lg:mt-0 w-36 ml-0 lg:ml-3 font-medium text-center text-white bg-theme-red shadow-red rounded-full py-3 px-4 flex justify-between items-center"
      >
        <span className="flex flex-1 justify-center">Learn More</span>
        <FiChevronRight />
      </a>
    </div>
  );
};

const ClientsFeedBack = () => {
  return (
    <div className="py-16 px-5 lg:px-16 grid grid-cols-12 gap-4 bg-theme bg-opacity-5">
      <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8">
        <p className="text-2xl lg:text-3xl text-navyblue font-bold text-center py-3">
          Our Client's Feedback
        </p>
      </div>
      <div className="col-start-1 col-span-12 xl:col-start-3 xl:col-span-8 lg:col-start-2 lg:col-span-10 flex flex-col-reverse lg:flex-row items-center justify-between py-2">
        {[0, 1].map((_, i) => {
          return (
            <div
              className={`${i === 0 &&
                "hidden "} lg:inline-block bg-white shadow-xl rounded-3xl my-2 p-6 w-full sm:w-80 md:w-80 lg:w-32 flex flex-col items-center lg:items-start`}
            >
              <div className="flex py-2">
                <ThreeDots />
              </div>
              <p className="text-xs font-light py-3 text-center lg:text-left">
                <q>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Similique, adipisci reiciendis. Earum alias voluptatibus harum
                  iusto eius consequatur delectus aliquid totam, corporis
                  nostrum eveniet eaque qui facilis, quam ut pariatur.
                </q>
              </p>
              <div className="py-3">
                <Reviewer name="M. Adnan" text="Best Company" />
              </div>
            </div>
          );
        })}
        <div
          className="bg-white shadow-xl rounded-3xl my-2 p-6 w-full h-56 lg:min-h-90 sm:w-80 md:w-80 relative lg:w-32"
          style={{
            backgroundImage:
              "url(" + require("../assets/images/tutorial.jpg") + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="py-5 flex flex-col-reverse lg:flex-row justify-between items-center absolute w-full bottom-0 px-5 left-0">
            <div className="mt-3 lg:mt-0">
              <p className="text-white text-sm text-center lg:text-left font-medium">
                Mohammad Hashim
              </p>
              <Reviewer video name="M. Adnan" text="Best Company" />
            </div>
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white shadow-lg border-8 border-solid border-red border-opacity-25 flex justify-center items-center"
            >
              <BiPlay className="text-red text-4xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 flex py-2 justify-center items-center">
        <span className="w-2 h-2 mx-1 rounded-full inline-flex bg-theme"></span>
        <span className="w-2 h-2 mx-1 rounded-full inline-flex bg-white"></span>
        <span className="w-2 h-2 mx-1 rounded-full inline-flex bg-white"></span>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white pb-20">
        <Navbar />
        {/* Banner Section */}
        <BannerSection />

        {/* What Is iAgility? Section */}
        <WhatIsiAgility />

        {/* How Does IAgility? Work Section */}
        <HowDoesIAgility />

        {/* Are you looking? Section */}
        <AreYouLooking />

        {/* Our Clients Feedback Section */}
        <ClientsFeedBack />
      </div>
    </div>
  );
};

export default Home;
