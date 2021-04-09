import { IconButton, SwipeableDrawer } from "@material-ui/core";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import Item from "./Item";
import useStyles from "./styles";

const Drawer = ({ items }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        className={classes.appMenu}
        width="100%"
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <List component="nav" className={classes.appMenu} disablePadding>
          {items.map((item, index) => (
            <Item {...item} key={index} />
          ))}
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
