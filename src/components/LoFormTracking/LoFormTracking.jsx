import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { setItem } from "../../utils/storage";
import { mockOrder } from "../../mock/mockData";
import styles from "./loFormTracking.module.scss";

export default function Form() {
  const [trackingCode, setTrackingCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleTrackingCode = async (e, code) => {
    e.preventDefault();

    if (!code) {
      setErrorMessage("Por favor, insira o código de rastreio.");
      return;
    } else {
      if (code === mockOrder.id.toString()) {
        setErrorMessage("");
        setTrackingCode("");
        setItem("id", code);
        router.push("/Tracking");
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
        className={`${styles["lo-body__resume"]}`}
      >
        acompanhe a sua entrega inseringo o código abaixo
      </Typography>
      <TextField
        onChange={(e) => setTrackingCode(e.target.value)}
        value={trackingCode}
        id="outlined-basic"
        label="código de rastreio"
        variant="outlined"
        required
        fullWidth
        className={styles.formInput}
      />
      <Typography variant="p" component="p" className={styles.errorMessage}>
        {errorMessage}
      </Typography>
      <Button
        onClick={(e) => handleTrackingCode(e, trackingCode)}
        variant="contained"
        className={`${styles.formButton} ${styles.customFontButton}`}
      >
        Acompanhar pacote
      </Button>

      <Link href="/Help" className={styles.formLink}>
        dúvidas sobre o rastreio
      </Link>
    </Box>
  );
}
