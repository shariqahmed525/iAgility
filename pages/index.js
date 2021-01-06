import Head from "next/head";
import { Navbar } from "../components";
import { FiChevronRight } from "react-icons/fi";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 px-10 lg:px-16">
          <div className="grid justify-center py-10 xl:py-32">
            <p className="text-2xl text-navyblue font-semibold">
              Hire an iAgilian
            </p>
            <p className="text-2xl text-navyblue font-light pt-0.5 pb-1">
              &amp; Transform the way you work with an
            </p>
            <p className="text-5xl text-navyblue font-bold pt-1">
              Independent <span className="text-theme">Consultant</span>
            </p>
            <p className="text-sm text-navyblue font-light py-6">
              For Sophisticated Clients and Consultants
            </p>
            <a
              href="#"
              className="text-sm mt-2 w-40 font-medium text-center text-white bg-red shadow-red rounded-full py-3 px-4 flex justify-between items-center"
            >
              <span className="flex flex-1 justify-center">Hire A Talent</span>
              <FiChevronRight />
            </a>
          </div>
          <div className="grid justify-center py-10 xl:py-32"></div>
        </div>
      </div>
    </div>
  );
}
