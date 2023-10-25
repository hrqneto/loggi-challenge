import * as React from "react";
import { useMediaQuery } from "@mui/material";
import Header from "../src/components/LoLayout/Header";
import Head from "../src/components/LoLayout/Head";
import Body from "../src/components/LoBody/LoBody";
import Footer from "../src/components/LoLayout/Footer";
import styles from "./index.module.scss";

function DesktopLayout({ children }) {
  return <div className={styles.desktop}>{children}</div>;
}

function MobileLayout({ children }) {
  return <>{children}</>;
}

export default function Home() {
  const isMinWidth960 = useMediaQuery("(min-width: 960px)");

  return (
    <div className={styles.home}>
      <Header />
      {isMinWidth960 ? (
        <DesktopLayout>
          <Body desktop />
          <Head home />
        </DesktopLayout>
      ) : (
        <MobileLayout>
          <Head home />
          <Body mobile />
        </MobileLayout>
      )}
      <Footer />
    </div>
  );
}
