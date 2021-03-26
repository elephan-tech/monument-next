import React from "react";
import Box from "../box";

const Socials = () => {
  const socials = ["facebook", "twitter", "instagram", "linkedin"];
  return (
    <Box direction="row" align="center" justify="space-between" color="primary">
      {socials.map((logo) => {
        return (
          <i style={{ margin: 8, color: "white" }} class={`fab fa-${logo}`}></i>
        );
      })}
    </Box>
  );
};

export default Socials;
