import { BrushStroke } from "@components";
import { Typography } from "@material-ui/core";
import React from "react";

const Hero = () => {
  return (
    <>
      <div style={{ flexGrow: 1 }}></div>
      <Typography variant="h1" color="primary">
        More than a just a school, <BrushStroke>a home</BrushStroke>
      </Typography>
    </>
  );
};

export default Hero;
