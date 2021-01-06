import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FiChevronRight } from "react-icons/fi";
import { BannerQuote, Navbar, UserCard } from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-16">
          <div className="grid justify-center lg:justify-end pt-10 pb-3 lg:py-32">
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
                  <span className="flex flex-1 justify-center">
                    Hire A Talent
                  </span>
                  <FiChevronRight />
                </a>
              </div>
              {/* Quote Slider, only show on large devices */}
              <div className="hidden py-10 lg:flex">
                <BannerQuote />
              </div>
            </div>
          </div>
          <div className="flex justify-center py-1 lg:py-32">
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
      </div>
    </div>
  );
}
