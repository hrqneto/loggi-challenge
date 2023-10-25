import * as React from "react";
import { Container, Link, Typography } from "@mui/material";
import Footer from "../src/components/LoLayout/Footer";
import Header from "../src/components/LoLayout/Header";
import styles from "./index.module.scss";

export default function TrackingHelp() {
  return (
    <>
      <Header />
      <Link href="/" className={styles["tracking-help__back-link"]}>
        Voltar
      </Link>

      <Container className={styles["tracking-help"]}>
        <Typography
          variant="h6"
          component="h2"
          className={styles["tracking-help__heading"]}
        >
          O que significa cada status?
        </Typography>

        {[
          "Em rota para coleta",
          "Pedido recebido",
          "Pacote coletado",
          "Em rota de entrega",
          "Finalizado",
        ].map((status, index) => (
          <Typography
            key={index}
            variant="h6"
            component="p"
            className={styles["tracking-help__status-heading"]}
          >
            Status: {status}
          </Typography>
        ))}
      </Container>
      <Footer />
    </>
  );
}
