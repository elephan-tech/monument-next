import { any, string } from "prop-types";
import React from "react";
import useStyles from "./styles";

const Section = ({ children, ...props }) => {
  console.log(props)
  const classes = useStyles(props)
  return (
    <section className={classes.root}>
      {children}
    </section>
  );
};

export default Section;
