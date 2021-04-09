import { Heading } from "@components";
import { Grid, Typography } from "@material-ui/core";
import React from "react";

const Mission = () => {
  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
        xs={12}
        sm={12}
        md={6}
      >
        <Grid item>
          <Heading color="primary" decoration="accent" variant="h2">
            Our Mission
          </Heading>
          <Typography variant="body1">
            To provide students, particularly those who have had or might have
            contact with the foster care system, with the requisite academic,
            social, emotional, and life skills to be successful in college,
            career, and community, and to create an outstanding school that
            attracts, supports, and retains exceptional and caring people.
          </Typography>
        </Grid>
        <Grid item>
          <Heading color="primary" decoration="accent" variant="h2">
            We change lives
          </Heading>
          <Typography variant="body1">
            We believe all students have the capacity to succeed at high
            academic levels and experience positive life outcomes.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Mission;
