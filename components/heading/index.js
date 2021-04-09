import { UnderlineStroke } from "@components";
import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Heading = ({
  children,
  decoration = "",
  variant = "h3",
  color = "primary",
}) => {
  const classes = useStyles({ decoration });
  return (
    <div className={classes.heading}>
      <Typography variant={variant} color={color}>
        {children}
      </Typography>
      {decoration ? <UnderlineStroke fill={decoration} /> : null}
    </div>
  );
};

export default Heading;
