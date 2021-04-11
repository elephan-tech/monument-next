import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import useStyles, { Divider } from "./styles";

const Profile = ({ name, title, description, image }) => {
  const { imageContainer, img, profileContent } = useStyles();
  return (
    <>
      <Grid
        item
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <div className={imageContainer}>
          <Image
            src={image}
            alt={`Photo of ${name}`}
            width={280}
            height={280}
            position="relative"
            className={img}
          />
        </div>
        <div className={profileContent}>
          <Typography variant="h4" color="primary">
            {name}
          </Typography>
          <Typography variant="h5" color="inherit">
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </div>
      </Grid>
      <Divider />
    </>
  );
};

export default Profile;
