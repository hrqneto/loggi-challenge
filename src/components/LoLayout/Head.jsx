import React from "react";
import { Container, Typography } from "@mui/material";
import styles from "./styles.module.scss";

export default function Head({ home, tracking }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {home && (
        <>
          <Typography
            variant="h4"
            component="h3"
            className={styles["lo-body__title2"]}
          >
            Acompanhe o seu pedido <br /> agora mesmo!
          </Typography>
          <img
            src="/img/delivery.png"
            alt="Descrição da imagem"
            width="90%"
            style={{ maxWidth: "500px" }}
            className={styles["fade-down"]}
          />
        </>
      )}
      {tracking && (
        <>
          <Typography
            variant="h4"
            component="h3"
            className={styles["lo-body__title"]}
          >
            detalhes do rastreio
          </Typography>
          <img
            src="/img/Location.png"
            alt="Descrição da imagem"
            width="90%"
            style={{ maxWidth: "500px" }}
            className={styles["fade-down"]}
          />
        </>
      )}
    </Container>
  );
}
