import { Heading } from "@components";
import { Grid } from "@material-ui/core";
import React from "react";

const Boarding = ({ title }) => {
  return (
    <Grid container direction="row">
      <Heading color="primary" decoration="secondary">
        {" "}
        {title}
      </Heading>
    </Grid>
  );
};

export default Boarding;
