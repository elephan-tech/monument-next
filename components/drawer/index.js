import React, { useState } from 'react';
import clsx from 'clsx';
import MuiDrawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, SwipeableDrawer } from '@material-ui/core';
import useStyles from './styles';
import Item from './Item'


const Drawer = ({ items }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => setOpen(!open)




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
      <SwipeableDrawer className={classes.appMenu}
      width="100%"
        anchor='right'
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
}

export default Drawer