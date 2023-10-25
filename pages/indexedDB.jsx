import * as React from "react";
import { useMediaQuery } from "@mui/material";
import Header from "../src/components/LoLayout/Header";
import Head from "../src/components/LoLayout/Head";
import Body from "../src/components/LoBody/LoBody";
import Footer from "../src/components/LoLayout/Footer";
import styles from "./index.module.scss";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <div className={styles.home}>
      <Header />
      {isDesktop ? (
        <div className={styles.desktop}>
          <Body desktop />
          <Head home />
        </div>
      ) : (
        <>
          <Head home />
          <Body mobile />
        </>
      )}
      <Footer />
    </div>
  );
}
