import { Banner, Drawer, Dropdown, Link, Logo } from "@components";
import { AppBar, Box, Hidden, Toolbar, Typography } from "@material-ui/core";
import React, { useState } from "react";
import HideOnScroll from "../../animations/HideOnScroll";
import socials from "../../config/socials";
import useStyles from "./styles";

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
              {phoneNumber || "(202) 545-3180"}
            </Typography>

            <div className={classes.socials}>
              {socials.map(({ name, url }) => (
                <Link
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  key={name}
                  color="inherit"
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
                // justifyContent="space-around"
                alignItems="center"
              >
                {pages.map((page) => {
                  const hasItems = page.items && !!page.items.length;
                  console.log({ hasItems });
                  return (
                    <div
                      className={`${classes.menuButton} ${
                        !hasItems && classes[page.as || "a"]
                      }`}
                    >
                      <Link
                        variant="h6"
                        underline="none"
                        key={page.name}
                        href={page.url}
                        as={page.as}
                      >
                        {console.log({ items: page.items })}
                        {hasItems ? (
                          <Dropdown name={page.name} items={page.items} />
                        ) : (
                          page.name
                        )}
                      </Link>
                    </div>
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
