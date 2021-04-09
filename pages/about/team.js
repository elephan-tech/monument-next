import { Page } from "@components";
import { Typography } from "@material-ui/core";
import React from "react";

const team = () => {
  return (
    <Page title="Our Team | Monuent Academy" description="">
      <div style={{ height: "150px" }}></div>
      <section className={classes.sectionContainer}>
        <Typography variant="h2" color="primary">
          Monument Academy Team
        </Typography>
      </section>
    </Page>
  );
};

export default team;
