import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

export const Banner = styled(Toolbar)((props) => ({
  background: props.theme.palette[props.color].main,
  color: "white",
  height: 30,
  padding: "0 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
