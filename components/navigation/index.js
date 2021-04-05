import { AppBar, Box, Hidden } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import HideOnScroll from "../../animations/HideOnScroll";
import socials from "../../config/socials";
import Drawer from "../drawer";
import Link from "../link";
import Logo from "../Logo";
import useStyles, { Banner } from "./styles";

const Navbar = ({ pages }) => {
  const classes = useStyles();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <HideOnScroll>
    <AppBar position="fixed" color="default">
      {showAlert && alertMessage && (
        <Banner variant="dense" color="danger">
          {alertMessage}
        </Banner>
      )}
      <Banner variant="dense" color="primary">
        <Typography variant="overline">
          {phoneNumber || "1233131231"}
        </Typography>

        <div>
          {socials.map(({ name, url }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              color="inherit"
              component="span"
            >
              <i className={`fab fa-${name}`} aria-hidden />
            </Link>
          ))}
        </div>
      </Banner>
      <Toolbar>
        <Logo className={classes.title} />
        <Hidden implementation="css" mdDown>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {pages.map((page) => {
              return (
                <Link
                  key={page.name}
                  href={page.url}
                  component={page.component || "a"}
                  bg={page.color || ""}
                >
                 <div style={{ margin: "auto" }}>{page.name}</div>
                </Link>
              );
            })}
          </Box>
        </Hidden>
        <Hidden implementation="css" only={["lg", "xl"]}>
         <Drawer items={pages}></Drawer>
        </Hidden>
      </Toolbar>
    </AppBar>
    </HideOnScroll>
</>

  );
};

export default Navbar;
