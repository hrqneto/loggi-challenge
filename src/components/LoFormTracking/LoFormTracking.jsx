import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./loFormTracking.module.scss";

export default function LoFormTracking() {
  const [trackingCode, setTrackingCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleTrackingCode = async (e) => {
    e.preventDefault();

    if (!trackingCode) {
      setErrorMessage("Por favor, insira o código de rastreio.");
      return;
    } else {
      // Simulando validação para os códigos 100, 200 e 300
      if (
        trackingCode === "100" ||
        trackingCode === "200" ||
        trackingCode === "300"
      ) {
        setErrorMessage("");
        setTrackingCode("");
        router.push({
          pathname: "/Tracking",
          query: { trackingId: trackingCode },
        });
      } else {
        setErrorMessage("Código inválido.");
      }
    }
  };

  return (
    <Box className={styles.formContainer}>
      <Typography
        variant="h5"
        component="h3"
        className={styles["lo-body__resume"]}
      >
        Acompanhe a sua entrega inserindo o código abaixo
      </Typography>
      <TextField
        onChange={(e) => setTrackingCode(e.target.value)}
        value={trackingCode}
        id="outlined-basic"
        label="Código de rastreio"
        variant="outlined"
        required
        fullWidth
        className={styles.formInput}
      />
      <Typography variant="p" component="p" className={styles.errorMessage}>
        {errorMessage}
      </Typography>
      <Button
        onClick={(e) => handleTrackingCode(e)}
        variant="contained"
        className={`${styles.formButton} ${styles.customFontButton}`}
      >
        Acompanhar pacote
      </Button>
      <Link href="/Help" className={styles.formLink}>
        Dúvidas sobre o rastreio
      </Link>
    </Box>
  );
}
