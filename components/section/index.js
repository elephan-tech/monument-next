import React from "react";
import useStyles from "./styles";

const Section = ({ children, id, type, ...props }) => {
  const classes = useStyles(props);
  return (
    <section id={id} className={`${classes.root} ${classes[type]}`}>
      {children}
    </section>
  );
};

export default Section;
