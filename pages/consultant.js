import Head from "next/head";
import { Navbar } from "../components";
import styles from "../styles/Home.module.css";

export default function Consultant() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>
    </div>
  );
}