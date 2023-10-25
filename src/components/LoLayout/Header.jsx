import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#ffffff", width: "100vw" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            component="button"
            variant="body2"
            className={styles.loButtonAppBarLogo}
          >
            <img
              src="/img/loggi-logo-full.png"
              alt="Página principal"
              style={{ width: "130px", height: "40px", margin: "10px" }}
            />
          </Link>
          <List
            sx={{
              display: "flex",
              gap: "20px",
              marginLeft: "auto",
              alignItems: "center",
            }}
          >
            {isDesktop ? (
              <>
                <MenuItem text="Para Você" />
                <MenuItem text="Para Empresas" />
                <MenuItem text="Para Entregar" />
              </>
            ) : null}
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const MenuItem = ({ text }) => (
  <ListItem button>
    <ListItemText primary={text} className={styles.loButtonAppBarMenuItem} />
  </ListItem>
);

export default Header;
