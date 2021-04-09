import { Heading, Slider } from "@components";
import { Grid, Typography } from "@material-ui/core";
import React from "react";

const Moments = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <Grid container direction="row" justify="space-evenly" align="center">
        <Grid item container justify="center">
          <Heading decoration="light">Monumental Moments</Heading>
        </Grid>
        <Grid item container direction="row" xs={12} md={6}>
          <Grid item>
            <Typography variant="h4">Teacher of the month</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis q
            </Typography>
          </Grid>
          <Grid item>
            <Slider items={["hello", "there"]}></Slider>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Moments;
