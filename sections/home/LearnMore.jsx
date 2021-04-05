import React from 'react'
import {Grid, Typography, Button} from '@material-ui/core'

const LearnMore = () => {
  return (
    <Grid container alignItems="flex-end" justify='space-between'>
    <Grid item xs={12} sm={12} md={7} style={{
       background: "url('/brush1.png')",
       backgroundRepeat: 'no-repeat',
       backgroundSize: '120% 110%',
       backgroundPosition: 'right center',
    }}>
      <Typography variant="h3" style={{color: 'white'}}>
      Monument Academy Public Charter School is one-of-a-kind Boarding
       School located in the nation's Capital.
      </Typography>
  
    </Grid>
    <Grid item container xs={12} sm={12} md={2} alignItems="flex-end" justify="flex-end">
   <Button variant="contained" color="primary" fullWidth>Learn More</Button>
    </Grid>
   </Grid>
  )
}

export default LearnMore
