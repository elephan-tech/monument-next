import React from "react";
import useStyles from "./styles";

const Section = ({ children, id, ...props }) => {
  const classes = useStyles(props);
  return (
    <section id={id} className={classes.root}>
      {children}
    </section>
  );
};

export default Section;
