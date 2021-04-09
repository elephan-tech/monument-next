import { Heading, Link } from "@components";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";

const Academics = (props) => {
  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="flex-start"
    >
      <Grid item xs={12}>
        <Heading decoration="secondary" color="primary" variant="h4">
          Academics
        </Heading>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" color="primary">
          Monument Academy’s academic programs are centered on thematic
          planning, project-based learning with principles of Webb’s Depth of
          Knowledge, and higher-order questioning as rooted in Bloom’s Taxonomy.
        </Typography>
      </Grid>
      <Grid
        xs={12}
        md={6}
        item
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item container direction="column">
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="textPrimary">
              Targeted Learning to Student Needs Each Monument Academy student
              engages in a targeted learning journey that is rooted in data
              driven instruction as evidenced by triangulation of MAP data,
              quarterly assessments, and PARCC data. We seek to develop
              self-directed learners by engaging students in academic goal
              setting during student led conferences, and structuring an
              environment that provides options for how students access content,
              practice new skills, and demonstrate mastery of the standards
              using technology and research.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Link>hello</Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Image
          src="/images/academics-image.png"
          width={500}
          height={700}
          layout="responsive"
          style={{
            clipPath: "rect(10px, 20px, 30px, 40px)",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Academics;
