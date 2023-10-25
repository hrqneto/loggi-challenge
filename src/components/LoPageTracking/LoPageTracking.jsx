import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { mockOrder } from "../../mock/mockData";
import styles from "./loPageTracking.module.scss"; // Importando as classes de estilo BEM

export default function TrackingInfo({ trackingId }) {
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingStatus, setTrackingStatus] = useState("");
  const [history, setHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setTrackingCode(mockOrder.id);

    const statusMap = {
      "PEDIDO_RECEBIDO": "Recebemos o seu pedido!",
      "EM_ROTA_PARA_COLETA": "Estamos a caminho do seu pacote!",
      "PACOTE_COLETADO": "Coletamos o seu pacote!",
      "EM_ROTA_DE_ENTREGA": "Seu pacote está a caminho!",
      "FINALIZADO": "Seu pacote já foi entregue!",
    };
    setTrackingStatus(statusMap[mockOrder.status]);

    setHistory(mockOrder.historicoStatus);
  }, [trackingId]);

  const formatDate = (dateString) => {
    // Implemente a formatação da data, se necessário
  };

  const handleNewTracking = async () => {
    router.push("/");
  };

  return (
    <Container className={styles["lo-page-tracking"]}>
      <Typography variant="h5" className={styles["lo-page-tracking__title"]}>
        {trackingStatus}
      </Typography>
      <Box className={styles["lo-page-tracking__list"]}>
        <List className={styles["lo-page-tracking__list"]}>
          {history.map((status, index) => (
            <ListItem key={index} className={styles["lo-page-tracking__list-item"]}>
              <ListItemIcon className={styles["lo-page-tracking__list-item__icon"]}>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={status.descricao}
                secondaryTypographyProps={{
                  style: {
                    color: "#ffffff",
                    textAlign: "end",
                  },
                }}
                secondary={formatDate(status.dataStatus)}
                className={styles["lo-page-tracking__list-item__text"]}
              />
            </ListItem>
          ))}
        </List>
        <Button
          onClick={(e) => handleNewTracking(e)}
          variant="contained"
          className={styles["lo-page-tracking__button"]}
        >
          Ver outro pacote
        </Button>
        <Link href="/TrackingHelp" className={styles["lo-page-tracking__link"]}>
          O que significa cada status?
        </Link>
      </Box>
    </Container>
  );
}
