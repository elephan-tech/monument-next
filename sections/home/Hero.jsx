import { BrushStroke } from "@components";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const useStyles = makeStyles(
  (theme) => ({
    parallaxChildren: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    image: {
      position: "relative",
      bottom: 20,
    },
  }),
  { name: "section2" }
);
const Hero = () => {
  const classes = useStyles();

  return (
    <ParallaxBanner
      style={{ height: "initial" }}
      layers={[
        {
          image: "/images/bg_columns.png",
          amount: 0.2,
        },
      ]}
    >
      <Grid
        container
        className={classes.parallaxChildren}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={8}>
          <Image
            src="/images/hero-main.png"
            height={1000}
            width={1000}
            className={classes.image}
          ></Image>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h1" color="primary">
            More than a just a school, <BrushStroke>a home</BrushStroke>
          </Typography>
        </Grid>
      </Grid>
    </ParallaxBanner>
  );
};

export default Hero;
