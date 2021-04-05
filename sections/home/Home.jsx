import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {BrushStroke} from '../../components'

const Home = () => {
  return (
    <Grid container alignItems="center" justify="center">
    <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
     {/* <Image src="/IMG_1905.png" width="auto" height="auto" layout="responsive"></Image> */}
    </Grid>
    <Grid item container xs={12} sm={12} md={6} lg={4} xl={4} alignItems="center" justify="center" direction="column">
      <Typography variant="h3">More than a just a school,  <BrushStroke>a home</BrushStroke></Typography>
    </Grid>
  </Grid>
  )
}

export default Home
