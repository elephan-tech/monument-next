import { Button, makeStyles, Typography } from "@material-ui/core";
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
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    brushSection: {
      backgroundImage: "url('images/brush1.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "120% 110%",
      backgroundPosition: "right center",
      color: "white",
    },
    grid: {
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      padding: 32,
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  }),
  { name: "section2" }
);

const LearnMore = () => {
  const classes = useStyles();
  return (
    <ParallaxBanner
      style={{ height: "initial" }}
      layers={[
        {
          image: "/images/bg_home_section2.jpeg",
          amount: 0.2,
        },
      ]}
    >
      <div className={classes.parallaxChildren}>
        <div className={classes.grid}>
          <div className={classes.brushSection}>
            <Typography variant="h3">
              Monument Academy Public Charter School is one-of-a-kind Boarding
              School located in the nation's Capital.{" "}
            </Typography>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ margin: 32 }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default LearnMore;
