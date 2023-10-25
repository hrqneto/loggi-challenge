import React from "react";
import { Box, Typography } from "@mui/material";

const footerStyle = {
  margin: 0,
  display: "flex",
  bottom: 0,
  width: "100%",
  background: "white",
};

export default function Footer() {
  return (
    <Box
      sx={footerStyle}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100px"
    >
      <Typography variant="body2" color="textSecondary">
        {new Date().getFullYear()} © Todos os direitos reservados.
      </Typography>
    </Box>
  );
}
