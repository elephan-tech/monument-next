import { Button, MenuItem, Typography } from "@material-ui/core";
import {
  bindHover,
  bindMenu,
  usePopupState,
} from "material-ui-popup-state/hooks";
import Menu from "material-ui-popup-state/HoverMenu";
import { useRouter } from "next/router";
import React from "react";
import useStyles from "./styles";

const Dropdown = ({ name, items }) => {
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState();

  function handleClose() {
    popupState.close;
  }

  function handleNavigation(url) {
    router.push(url);
    handleClose();
  }

  console.log("HOVER", { ...bindHover(popupState) });
  console.log("MENU", { ...bindMenu(popupState) });
  console.log("STATE", { popupState });

  return (
    <Button
      color="primary"
      disableRipple
      {...bindHover(popupState)}
      variant="text"
      classes={{
        root: popupState.isOpen && classes.hoveredLink,
      }}
    >
      <Typography variant="h6" color="inherit">
        {name}
      </Typography>
      <Menu
        {...bindMenu(popupState)}
        disableAutoFocus
        classes={{
          paper: classes.paper,
        }}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {items.map((item) => {
          return (
            <MenuItem
              divider
              className={classes.menuItem}
              href={item.url}
              key={item.name}
              onClick={() => handleNavigation(item.url)}
            >
              <Typography variant="h6" gutterBottom>
                {item.name}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Button>
  );
};

export default Dropdown;
