import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { IconExpandLess, IconExpandMore } from "@material-ui/icons/ExpandLess";
import React, { useState } from "react";
import useStyles from "./styles";

const AppMenuItem = (props) => {
  const { name, Icon, items, url } = props;
  const classes = useStyles();
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  // const NavLink = () =>
  //   forwardRef((props, ref) => (
  //     <Link href={url} {...props} innerRef={ref} passHref />
  //   ));

  return (
    <>
      <ListItem
        button
        className={classes.menuItem}
        onClick={handleClick}
        href={url}
      >
        {/* Display an icon if any */}
        {!!Icon && (
          <ListItemIcon className={classes.menuItemIcon}>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={name} inset={!Icon} />
        {/* Display the expand menu if the item has children */}
        {isExpandable && !open && <IconExpandMore />}
        {isExpandable && open && <IconExpandLess />}
      </ListItem>
      {isExpandable && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            {items.map((item, index) => (
              <AppMenuItem {...item} key={index} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default AppMenuItem;
