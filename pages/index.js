import  Grid  from "@material-ui/core/Grid";
import BrushStroke from "../components/BrushStroke";
import Page from "../components/Page";
import Section from "../components/section";
import Image from 'next/image'
import { Button, Typography } from "@material-ui/core";
import Heading from "../components/heading";

export default function Home() {
  return (
    <Page title="Home">
      <Section
        backgroundImage="/bg_columns.png"
        backgroundPosition="center"
        backgroundSize="cover"
        topMargin
      >
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
         {/* <Image src="/IMG_1905.png" width="auto" height="auto" layout="responsive"></Image> */}
        </Grid>
        <Grid item container xs={12} sm={12} md={6} lg={4} xl={4} alignItems="center" justify="center" direction="column">
          <Typography variant="h3">More than a just a school,  <span style={{
           
              background: "url('/brush1.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '50% 110%',
              backgroundPosition:'center',
              padding: '8px 0'
          }}> a home</span></Typography>
        </Grid>
      </Grid>
      </Section>
      {/* {/* <Section
        backgroundImage="/bg_home_section2.jpeg"
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <Grid container alignItems="flex-end" justify='space-between'>
         <Grid item   xs={12} sm={12} md={6} lg={6} xl={6}>
        <Typography color="light" variant='h5'> Monument Academy Public Charter School is one-of-a-kind Boarding
            School located in the nation's Capital.</Typography>
         </Grid>
         <Grid item xs={12} sm={12} md={6} lg={6} xl={6} alignItems="flex-end">
        <Button variant="contained" color="primary">Learn More</Button>
         </Grid>
        </Grid>
      </Section> */}
      <Section background="secondary">
        <Grid container direction="row">
          <Grid item container direction="column" justify="space-evenly" alignItems="flex-start">
            <Grid item>
            <Heading color="primary" decoration="accent"> Our Mission </Heading>
              <Typography variant="body1">Lorem Ipsum</Typography>
            </Grid>
            <Grid item>
            <Heading color="primary" decoration="accent">We change lives</Heading>
              <Typography variant="body1">Lorem Ipsum</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container direction="row">
          <Grid item container direction="column" justify="space-evenly" alignItems="flex-start">
            <Grid item>
            <Heading color="primary" decoration="secondary"> Our Mission </Heading>
              <Typography variant="body1">Lorem Ipsum</Typography>
            </Grid>
            <Grid item>
            <Heading color="primary" decoration="secondary">We change lives</Heading>
              <Typography variant="body1">Lorem Ipsum</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Section>
    </Page>
  );
}
