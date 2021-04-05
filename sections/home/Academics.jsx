import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import {Heading, Link} from '../../components'
import Image from 'next/image'

const Academics = (props) => {
  console.log('🔥', {props})
  return (
    <Grid container direction="row">
          <Grid item container direction="column" justify="space-evenly" alignItems="flex-start">
            <Grid item container>
            <Heading color="primary" decoration="secondary">{props.title || 'Academics'} </Heading>
              <Typography variant="h5" color="primary">Monument Academy’s academic programs are centered on thematic planning, project-based learning with principles of Webb’s Depth of Knowledge, and higher-order questioning as rooted in Bloom’s Taxonomy.</Typography>
             <Grid item container direction="row">
               <Grid item container direction="column" xs={12} md={6}>
               <Typography variant="body1" color="textPrimary">
              Targeted Learning to Student Needs Each Monument Academy student engages in a targeted learning journey that is rooted in data driven instruction as evidenced by triangulation of MAP data, quarterly assessments, and PARCC data. We seek to develop self-directed learners by engaging students in academic goal setting during student led conferences, and structuring an environment that provides options for how students access content, practice new skills, and demonstrate mastery of the standards using technology and research.
              </Typography>
              <Link>hello</Link>
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
         <Image src="/bg_home_section2.jpeg" width="auto" height="auto" layout="responsive" style={{
           clipPath: 'rect(10px, 20px, 30px, 40px)'
         }}></Image>
        </Grid>
             </Grid>
            </Grid>
            <Grid item>
            <Heading color="primary" decoration="secondary">We change lives</Heading>
              <Typography variant="body1">Lorem Ipsum</Typography>
              <Typography variant="body1">Lorem Ipsum</Typography>
            </Grid>
          </Grid>
        </Grid>
  )
}

export default Academics
