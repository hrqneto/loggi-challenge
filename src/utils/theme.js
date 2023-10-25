import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#00baff",
      dark: "#006aff",
    },
    secondary: {
      dark: "#000000",
      main: "#002766",
      light:
        "linear-gradient(90deg, rgba(0,186,255,1) 0%, rgba(0,106,255,1) 75%)",
    },
    warning: {
      light: "#008449",
      dark: "#ffdc52",
      main: "#cc0014",
    },
  },

  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#f0f0f0",
      },
    },
  },
});

export default theme;
