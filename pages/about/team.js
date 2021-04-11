import { Page, Profile, Section } from "@components";
import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { monumentData } from "../../config";

const Team = () => {
  return (
    <Page title="Our Team | Monuent Academy" description="">
      <Section topMargin dense>
        <Grid container xs={12} direction="column" justify="space-between">
          <Grid item xs={12}>
            <Typography variant="h2" color="primary" gutterBottom>
              Monument Academy Team
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: 32 }}>
            <Typography variant="body2" gutterBottom>
              The Monument Academy team is led by an experienced and diverse
              group of leaders with deep expertise in education, organizational
              development, psychology, child development, and more. To learn
              about Monument Academy’s Board of Directors, please visit our
              Board of Directors page.
            </Typography>
          </Grid>
          {monumentData.team.map((person) => {
            return (
              <Profile
                key={person.name}
                name={person.name}
                image={person.image}
                description={person.description}
                title={person.title}
              />
            );
          })}
        </Grid>
      </Section>
    </Page>
  );
};

export default Team;
