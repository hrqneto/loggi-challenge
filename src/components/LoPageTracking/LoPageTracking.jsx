import React, { useState, useEffect } from "react";
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
import { mockOrders } from "../../mock/mockData";
import styles from "./loPageTracking.module.scss";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";

export default function LoPageTracking() {
  const [trackingStatus, setTrackingStatus] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { trackingId } = router.query;

  const theme = useTheme();

  useEffect(() => {
    if (trackingId) {
      const numericTrackingId = parseInt(trackingId);
      const order = mockOrders.find((order) => order.id === numericTrackingId);

      if (order) {
        setCustomerName(order.cliente);

        const statusMap = {
          PEDIDO_RECEBIDO: "Recebemos o seu pedido!",
          EM_ROTA_PARA_COLETA: "Estamos a caminho do seu pacote!",
          PACOTE_COLETADO: "Pacote coletado!",
          EM_ROTA_DE_ENTREGA: "Seu pacote está a caminho!",
          FINALIZADO: "Seu pacote já foi entregue!",
        };

        setTrackingStatus(statusMap[order.historicoStatus[0].status]);
        setHistory(order.historicoStatus);
        setLoading(false);
      }
    }
  }, [trackingId]);

  const formatDate = (dateString) => {};

  const handleNewTracking = async () => {
    router.push("/");
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <Container className={styles["lo-page-tracking"]}>
      <Typography variant="h5" className={styles["lo-page-tracking__title"]}>
        Olá, {customerName}
      </Typography>
      <Box className={styles["lo-page-tracking__list"]}>
        <List className={styles["lo-page-tracking__list"]}>
          {history.map((status, index) => (
            <ListItem
              key={index}
              className={styles["lo-page-tracking__list-item"]}
            >
              <ListItemIcon
                className={`${styles["lo-page-tracking__list-item__icon"]} ${
                  status.isDisabled
                    ? styles["lo-page-tracking__list-item__icon--disabled"]
                    : ""
                }`}
              >
                <CheckCircleIcon
                  color={status.isDisabled ? "primary" : "disabled"}
                  style={{
                    color: status.isDisabled
                      ? "#ccc"
                      : theme.palette.primary.main,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={status.descricao}
                secondaryTypographyProps={{
                  style: {
                    fontFamily:
                      "Open Sans, Tahoma, Helvetica, Arial, sans-serif",
                    color: "#757d8c",
                    textAlign: "end",
                  },
                }}
                secondary={formatDate(status.dataStatus)}
                className={`${styles["lo-page-tracking__list-item__text"]} ${
                  status.isDisabled
                    ? styles["lo-page-tracking__list-item__text-gray"]
                    : ""
                }`}
              />
            </ListItem>
          ))}
          {history.length < 5 && (
            <ListItem className={styles["lo-page-tracking__list-item"]}>
              <ListItemIcon
                className={styles["lo-page-tracking__list-item__icon"]}
              >
                <CheckCircleIcon color="disabled" />
              </ListItemIcon>
              <ListItemText
                primary="AGUARDANDO..."
                secondary=""
                className={styles["lo-page-tracking__list-item__text-gray"]}
              />
            </ListItem>
          )}
        </List>
        <Button
          onClick={handleNewTracking}
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
