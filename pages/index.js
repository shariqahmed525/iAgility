import React, { useState } from "react";
import Head from "next/head";
import { BiPlay } from "react-icons/bi";
import { RiUser2Line } from "react-icons/ri";
import { AiOutlineLaptop } from "react-icons/ai";
import { HiArrowRight, HiOutlineLightBulb } from "react-icons/hi";
import { FiArrowLeft, FiArrowRight, FiChevronRight } from "react-icons/fi";
import {
  Navbar,
  Button,
  Footer,
  BlogBox,
  UserCard,
  Reviewer,
  ThreeDots,
  AgilityBox,
  BannerQuote,
  WhyChooseBox,
  WhatCanDoBox,
  IAgilityWorkBox
} from "../components";

const iAgilityBoxes = [
  {
    name: "Your New Competitve Advantage",
    icon: active => (
      <AiOutlineLaptop
        className={`text-4xl md:text-2xl ${
          active ? "text-theme-yellow" : "text-white"
        }`}
      />
    ),
    img: require("../assets/images/adviser-img.jpg")
  },
  {
    name: "Online Consulting Platform",
    icon: active => (
      <RiUser2Line
        className={`text-4xl md:text-2xl ${
          active ? "text-theme-orange" : "text-white"
        }`}
      />
    ),
    img: require("../assets/images/new-table.jpg")
  },
  {
    name: "Relationship Building",
    icon: active => (
      <HiOutlineLightBulb
        className={`text-4xl md:text-2xl ${
          active ? "text-theme-green" : "text-white"
        }`}
      />
    ),
    img: require("../assets/images/relationship.jpg")
  }
];

const HowDoesIAgilityBoxes = [
  {
    name: "Learning",
    theme: "theme-yellow",
    image: require("../assets/images/icon-1.png"),
    arrowImg: require("../assets/images/gradient-arrow-1.png"),
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at aperiam, reprehenderit ut exercitationem nemo praesentium laudantium aut."
  },
  {
    name: "Machine",
    theme: "theme-orange",
    image: require("../assets/images/icon-2.png"),
    arrowImg: require("../assets/images/gradient-arrow-2.png"),
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

const WhyChooseIAgilityBoxes = [
  {
    name: "Ringorous",
    coloredText: "Vetting Process",
    theme: "yellow",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, adipisci reiciendis. Earum alias voluptatibus."
  },
  {
    name: "Best",
    coloredText: "Support",
    theme: "green",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, adipisci reiciendis. Earum alias voluptatibus."
  },
  {
    name: "Online",
    coloredText: "Dashboard",
    theme: "orange",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, adipisci reiciendis. Earum alias voluptatibus."
  },
  {
    name: "Highest",
    coloredText: "Qualified Consultant",
    theme: "skyblue",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, adipisci reiciendis.Earum alias voluptatibus harum iusto eius consequatur delectus aliquid totam."
  },
  {
    name: "Personalized",
    coloredText: "Care",
    theme: "purple",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, adipisci reiciendis.Earum alias voluptatibus harum iusto eius consequatur delectus aliquid totam."
  }
];

const WhatCanDoBoxes = [
  {
    name: "Business Intelligence & Analytics",
    theme: "green",
    img: require("../assets/images/money-finance.svg")
  },
  {
    name: "Digital Transformation",
    theme: "yellow",
    img: require("../assets/images/digital-transformation.svg")
  },
  {
    name: "Program Managemnet Office (PMO)",
    theme: "orange",
    img: require("../assets/images/project-management.svg")
  },
  {
    name: "Program Management",
    theme: "purple",
    img: require("../assets/images/artificial-intelligence.svg")
  }
];

const BlogBoxes = [
  {
    name: "Lorem ipsum dolor sit amet dolor sit amet",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis dolores libero nulla culpa enim totam officia placeat Nobis facilis dolores libero nulla culpa enim totam officia placeat",
    date: "10",
    month: "Nov",
    year: "2020",
    img: require("../assets/images/blog.jpg")
  },
  {
    name: "Lorem ipsum dolor sit amet dolor sit amet",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis dolores libero nulla culpa enim totam officia placeat Nobis facilis dolores libero nulla culpa enim totam officia placeat",
    date: "10",
    month: "Nov",
    year: "2020",
    img: require("../assets/images/blog.jpg")
  },
  {
    name: "Lorem ipsum dolor sit amet dolor sit amet",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis dolores libero nulla culpa enim totam officia placeat Nobis facilis dolores libero nulla culpa enim totam officia placeat",
    date: "10",
    month: "Nov",
    year: "2020",
    img: require("../assets/images/blog.jpg")
  }
];

const BannerSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-16">
      <div className="flex justify-center lg:justify-end pt-10 lg:pt-32 pb-3">
        <section>
          {/* Text Section */}
          <div className="text-theme-navyblue text-center lg:text-left">
            <p className="text-2xl font-semibold">Hire an iAgilian</p>
            <p className="text-2xl font-light pt-0.5 pb-1">
              &amp; Transform the way you work with an
            </p>
            <p className="text-5xl font-bold pt-1">
              Independent <span className="text-theme-skyblue">Consultant</span>
            </p>
            <p className="text-sm font-light py-5">
              For Sophisticated Clients and Consultants
            </p>
            <div className="flex justify-center lg:justify-start mt-2">
              <Button text="Hire A Talent" />
            </div>
          </div>

          {/* Quote Slider, only show when device width will be greater than 1023 */}
          <div className="hidden lg:flex py-10">
            <BannerQuote />
          </div>
        </section>
      </div>

      {/* Card section */}
      <div className="flex justify-center py-1 lg:pt-32 banner-dotted-design">
        <section>
          <UserCard name="Mohammad Adnan" expertise="Finance Expert" />
          <UserCard name="Mohammad Adnan" expertise="Finance Expert" />
        </section>
        <section className="mt-12 lg:mt-32">
          <UserCard name="Mohammad Adnan" expertise="Finance Expert" />
          <UserCard name="Mohammad Adnan" expertise="Finance Expert" />
        </section>
      </div>

      {/* Quote Slider, only show when device width will be less than 1024 */}
      <div className="lg:hidden py-3">
        <BannerQuote />
      </div>
    </div>
  );
};

const WhatIsiAgility = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleActions = action => {
    if (action === "+") {
      activeIndex === iAgilityBoxes.length - 1
        ? setActiveIndex(0)
        : setActiveIndex(activeIndex + 1);
    } else {
      activeIndex === 0
        ? setActiveIndex(iAgilityBoxes.length - 1)
        : setActiveIndex(activeIndex - 1);
    }
  };

  const iAgilityText = () => {
    return (
      <section>
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
            <a href="#" className="text-theme-skyblue font-semibold">
              your own personalized dashboard with ease!
            </a>
          </span>
        </p>
        <div className="flex flex-col xl:flex-row items-center pt-5">
          <Button text="Contact iAgility Today" />
          <span className="ml-2 mt-3 xl:mt-0">
            <Button text="Read More" transparent noBorder />
          </span>
        </div>
      </section>
    );
  };

  const iAgilityActions = (arrow, handler) => {
    return (
      <div
        onClick={handler}
        className="flex flex-row justify-content items-center md:hidden cursor-pointer"
      >
        <div
          style={{ minWidth: "3.5rem" }}
          className="w-16 h-16 bg-theme-skyblue border border-theme shadow-theme border-opacity-75 rounded-full flex items-center justify-center"
        >
          {arrow}
        </div>
      </div>
    );
  };

  return (
    <div className="what-is-dotted-design">
      <div className="grid grid-cols-12 gap-4 px-5 lg:px-16 py-10">
        <div className="col-start-1 lg:col-start-3 col-span-12 lg:col-span-8 flex flex-col items-center">
          <img
            alt="logo-upper"
            src={require("../assets/images/logo-upperside-light.svg")}
          />
          <p className="text-4xl text-theme-navyblue text-center font-bold py-3">
            What Is <span className="text-theme-skyblue">iAgility?</span>
          </p>
          <p className="text-center font-light max-w-2xl lg:max-w-4xl py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            et facilis, vel quos pariatur eius amet rerum! Quas eveniet eius
            recusandae aspernatur sunt, at pariatur? Earum dolor eaque debitis?
            Porro commodi labore at? Saepe itaque ipsa nobis natus,
            necessitatibus architecto dolor, dignissimos, eius voluptate error
            perspiciatis. Aperiam ipsa totam minus?
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 px-5 lg:px-16">
        <div className="w-full col-start-1 xl:col-start-3 col-span-12 xl:col-span-8 flex items-center justify-between pt-1">
          {/* Left arrow, only show when device width will be less than 768 */}
          {iAgilityActions(
            <FiArrowLeft className="text-white text-2xl" />,
            () => handleActions("-")
          )}

          {/* Dotted line, only show when device width will be less than 768 */}
          <div className="flex flex-1 md:hidden border-t-2 border-theme border-opacity-50 border-dotted"></div>

          {/* Tab section */}
          {iAgilityBoxes.map((v, i) => {
            return (
              <AgilityBox
                key={i}
                {...v}
                index={i}
                active={activeIndex === i}
                handleActiveIndex={index => setActiveIndex(index)}
              />
            );
          })}

          {/* Dotted line, only show when device width will be less than 768  */}
          <div className="flex flex-1 md:hidden border-t-2 border-theme border-opacity-50 border-dotted"></div>

          {/* Right arrow, only show when device width will be less than 768 */}
          {iAgilityActions(
            <FiArrowRight className="text-white text-2xl" />,
            () => handleActions("+")
          )}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 px-5 lg:px-16 py-10">
        <div className="col-start-1 lg:col-start-3 col-span-12 lg:col-span-8 flex flex-col xl:flex-row items-center">
          <div className="flex flex-1 flex-col">
            <h3 className="font-bold text-3xl text-center xl:text-left py-2">
              {iAgilityBoxes[activeIndex].name}
            </h3>
            <div className="hidden xl:block">{iAgilityText()}</div>
          </div>
          <div className="flex flex-1 flex-col">
            <img
              alt=""
              className="w-full max-h-100"
              src={iAgilityBoxes[activeIndex].img}
            />
            <div className="block xl:hidden">{iAgilityText()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowDoesIAgility = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="py-16 px-5 lg:px-16 grid grid-cols-12 gap-4 bg-theme-skyblue bg-opacity-5 how-does-dotted-design">
      <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 flex flex-col items-center">
        <img
          src={require("../assets/images/logo-upperside.svg")}
          alt="logo-upper"
        />
        <p className="text-theme-navyblue font-bold text-4xl text-center py-3">
          How Does <span className="text-theme-skyblue">iAgility?</span> Work
        </p>
        <p className="py-3 font-light text-center max-w-2xl lg:max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. dolorem
          architecto quasi sed ratione consequatur porro? Sit ipsum illum
          dolorem similique voluptate magni{" "}
          <a href="#" className="text-theme-skyblue font-semibold">
            your own personalized dashboard with ease!
          </a>
        </p>
      </div>
      <div className="col-start-1 col-span-12 md:col-start-3 md:col-span-8 flex flex-1 flex-col xl:flex-row items-center justify-between">
        {HowDoesIAgilityBoxes.map((v, i) => (
          <div
            key={i}
            className={`${active !== i &&
              "hidden"} xl:flex flex-1 flex-col items-center justify-between p-3 relative`}
          >
            <IAgilityWorkBox
              {...v}
              index={i}
              active={active === i}
              setActive={index => setActive(index)}
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
      <span className="mt-5 lg:mt-0 ml-0 lg:ml-3">
        <Button text="Learn More" />
      </span>
    </div>
  );
};

const ClientsFeedBack = () => {
  return (
    <div className="py-16 px-5 lg:px-16 grid grid-cols-12 gap-4 bg-theme-lightblue our-client-dotted-design">
      <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8">
        <p className="text-2xl lg:text-3xl text-theme-navyblue font-bold text-center py-3">
          Our Client's Feedback
        </p>
      </div>
      <div className="col-start-1 col-span-12 xl:col-start-3 xl:col-span-8 lg:col-start-2 lg:col-span-10 flex flex-col-reverse lg:flex-row items-center justify-between py-2">
        {[0, 1].map((_, i) => {
          return (
            <div
              key={i}
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
              "url(" + require("../assets/images/tutor1.png") + ")",
            backgroundSize: "cover",
            backgroundOrigin: "border-box",
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
            <span className="w-14 h-14 rounded-full bg-white shadow-lg border-8 border-solid border-red border-opacity-25 flex justify-center items-center cursor-pointer">
              <BiPlay className="text-theme-red text-4xl" />
            </span>
          </div>
        </div>
      </div>
      <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 flex py-2 justify-center items-center">
        <span className="w-2 h-2 mx-1 rounded-full inline-flex bg-theme-skyblue"></span>
        <span className="w-2 h-2 mx-1 rounded-full inline-flex bg-white"></span>
        <span className="w-2 h-2 mx-1 rounded-full inline-flex bg-white"></span>
      </div>
    </div>
  );
};

const WhyChooseIAgility = () => {
  return (
    <div className="py-12 px-5 lg:px-16 grid grid-cols-12 gap-4 why-choose-dotted-design">
      <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 flex flex-col-reverse 2xl:flex-row items-center justify-between">
        <div className="py-10 flex flex-col sm:flex-row justify-center items-center pl-0 lg:pl-xl why-choose-solid-design">
          <div className="flex w-full sm:w-auto flex-col mx-2 justify-center">
            {WhyChooseIAgilityBoxes.slice(0, 3).map((v, i) => (
              <WhyChooseBox key={i} {...v} />
            ))}
          </div>
          <div className="flex w-full sm:w-auto flex-col mx-2 justify-center">
            {WhyChooseIAgilityBoxes.slice(3, 5).map((v, i) => (
              <WhyChooseBox key={i} {...v} />
            ))}
          </div>
        </div>
        <div className="w-full 2xl:w-47 lg:w-6/7 sm:w-5/7 pt-10 pl-0 lg:pl-xl">
          <div className="flex justify-center 2xl:justify-start">
            <img
              src={require("../assets/images/logo-upperside-light.svg")}
              alt="logo-upper"
            />
          </div>
          <p className="text-theme-navyblue font-bold text-4xl xl:text-5xl text-center 2xl:text-left py-3">
            Why Choose <span className="text-theme-skyblue">iAgility</span> Over
            Other Platform?
          </p>
          <p className="py-3 font-light text-center 2xl:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            non nesciunt esse beatae asperiores. Provident eaque dolorem
            architecto quasi sed ratione consequatur porro? Sit ipsum illum
            dolorem similique voluptate magni{" "}
            <a href="#" className="text-theme-skyblue font-semibold">
              your own personalized dashboard with ease!
            </a>
          </p>
          <div className="flex justify-center 2xl:justify-start py-4">
            <Button text="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatCanAnIAgilian = () => {
  return (
    <div className="py-12 px-5 lg:px-16 grid grid-cols-12 gap-4 bg-theme-skyblue what-can-an-dotted-design">
      <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 flex flex-col items-center">
        <img
          src={require("../assets/images/logo-upperside.svg")}
          alt="logo-upper"
        />
        <p className="text-white font-bold max-w-sm text-4xl text-center pt-5 pb-3">
          What Can An iAgilian Do For You?
        </p>
        <p className="text-white py-3 font-light text-center max-w-2xl lg:max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. dolorem
          architecto quasi sed ratione consequatur porro? Sit ipsum illum
          dolorem similique voluptate magni ratione consequatur porro? Sit ipsum
          illum dolorem similique voluptate magni{" "}
          <a href="#" className="text-white font-semibold">
            your own personalized dashboard with ease!
          </a>
        </p>
      </div>
      <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 flex gap-4 mt-5 justify-between overflow-auto hide-scroll py-4 pl-4">
        {WhatCanDoBoxes.map((v, i) => (
          <WhatCanDoBox {...v} index={i} key={i} />
        ))}
        <a href="#" className="hidden md:inline-block">
          <div
            className={`
              p-5 shadow-xl 
              bg-theme-red rounded-3xl
              h-44
              flex
              flex-col
              items-center
              justify-around
              mr-4
              w-190px
            `}
            style={{ minWidth: 190 }}
          >
            <p className="text-center text-lg font-semibold text-white">
              Other Technology Servcies
            </p>
            <HiArrowRight className="text-white text-xl" />
          </div>
        </a>
      </div>
      <div className="col-start-1 col-span-12 flex md:hidden justify-center items-center">
        <Button text="Create Your First Project" />
      </div>
    </div>
  );
};

const CalendarSection = () => {
  return (
    <div className="py-4 px-5 lg:px-16 grid grid-cols-12 gap-4 bg-theme-lightblue">
      <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full 2xl:w-47 lg:w-6/7 sm:w-5/7 pt-10 flex flex-col items-center lg:items-start">
          <p className="text-theme-navyblue font-bold text-4xl xl:text-5xl max-w-lg lg:max-w-md text-center lg:text-left py-3">
            Need a Different Kind of{" "}
            <span className="text-theme-skyblue">Consultant</span>?
          </p>
          <p className="py-3 font-light text-center max-w-lg lg:max-w-md lg:text-left">
            Talk to us, we'll find the perfect consultant for your business
          </p>
          <div className="py-4">
            <Button text="Schedule an Appointment" />
          </div>
        </div>
        <div className="w-full 2xl:w-47 lg:w-6/7 sm:w-5/7 pt-10 pl-lg md:pl-xl calendar-dotted-design">
          <img alt="" src={require("../assets/images/calendar.png")} />
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="py-16 px-5 lg:px-16 grid grid-cols-12 gap-4">
      <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 flex flex-col items-center">
        <img
          src={require("../assets/images/logo-upperside.svg")}
          alt="logo-upper"
        />
        <p className="text-theme-navyblue font-bold text-4xl text-center py-3">
          Recent <span className="text-theme-skyblue">Blog</span> Post
        </p>
      </div>
      <div className="col-start-1 col-span-12 xl:col-start-3 xl:col-span-8 gap-4 2xl:gap-8 flex flex-1 flex-col lg:flex-row items-center justify-between">
        {BlogBoxes.map((v, i) => (
          <BlogBox key={i} {...v} />
        ))}
      </div>
      <div className="col-start-1 col-span-12 md:col-start-3 md:col-span-8 flex items-center justify-center my-4 md:my-7">
        <Button text="More Posts" transparent />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Head>
        <title>Micro Agility</title>
        <link rel="icon" href={require("../assets/images/logo-white.svg")} />
      </Head>
      <Navbar />

      <div className="page-banner">
        {/* Banner Section */}
        <BannerSection />

        {/* What Is iAgility? Section */}
        <WhatIsiAgility />
      </div>

      {/* How Does IAgility? Work Section */}
      <HowDoesIAgility />

      {/* Are you looking? Section */}
      <AreYouLooking />

      {/* Our Clients Feedback Section */}
      <ClientsFeedBack />

      {/* Why Choose iAgility? Section */}
      <WhyChooseIAgility />

      {/* What can an iAgilian? Section  */}
      <WhatCanAnIAgilian />

      {/* Calendar Section */}
      <CalendarSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
