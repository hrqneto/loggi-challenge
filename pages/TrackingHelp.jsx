import * as React from "react";
import { Link, Container, Typography } from "@mui/material";
import Footer from "../src/components/LoLayout/Footer";
import Header from "../src/components/LoLayout/Header";
import styles from "./index.module.scss"; // Importando as classes de estilo BEM

export default function TrackingHelp() {
  return (
    <>
      <Header />
      <Link href="/" className={styles["tracking-help__back-link"]}>
        Voltar
      </Link>

      <Container className={styles["tracking-help"]}>
        <Typography
          variant="p"
          component="h2"
          className={styles["tracking-help__heading"]}
        >
          O que significa cada status?
        </Typography>
        <Typography
          variant="h6"
          component="p"
          className={styles["tracking-help__status-heading"]}
        >
          Status: Em rota para coleta
        </Typography>

        <Typography
          variant="h6"
          component="p"
          className={styles["tracking-help__status-heading"]}
        >
          Status: Pedido recebido
        </Typography>

        <Typography
          variant="h6"
          component="p"
          className={styles["tracking-help__status-heading"]}
        >
          Status: Pacote coletado
        </Typography>

        <Typography
          variant="h6"
          component="p"
          className={styles["tracking-help__status-heading"]}
        >
          Status: Em rota de entrega
        </Typography>

        <Typography
          variant="h6"
          component="p"
          className={styles["tracking-help__status-heading"]}
        >
          Status: Finalizado
        </Typography>
      </Container>
      <Footer />
    </>
  );
}
