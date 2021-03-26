import React from "react";
import Box from "../box";
import Socials from "../socials";
import Typography from "../typography";

const TopBar = () => {
  return (
    <Box
      color="primary"
      fullWidth
      justify="space-between"
      align="center"
      padding={8}
    >
      <Typography variant="button" color="white">
        (314) 724 0839
      </Typography>
      <Socials />
    </Box>
  );
};

export default TopBar;
