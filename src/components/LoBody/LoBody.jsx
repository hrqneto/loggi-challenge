import * as React from "react";
import { Container, Typography } from "@mui/material";
import Form from "../LoFormTracking/LoFormTracking";
import styles from "./loBody.module.scss";

export default function Body({ mobile, desktop }) {
  return (
    <>
      {mobile && (
        <Container className={styles["lo-body"]}>
          <Typography
            variant="h5"
            component="h3"
            className={styles["lo-body__title"]}
          >
            Oie!
            <br /> Acompanhe com a Loggi a entrega do seu pedido.
          </Typography>
          <Form />
        </Container>
      )}
      {desktop && (
        <Container className={styles["lo-body"]}>
          <Typography
            variant="h5"
            component="h3"
            className={styles["lo-body__title"]}
          >
            Oie!
            <br /> Acompanhe com a <span style={{ color: "#00baff" }}>Loggi</span> a entrega do seu pedido.
          </Typography>
          <Form />
        </Container>
      )}
    </>
  );
}
