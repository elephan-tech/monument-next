import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import {Heading, Link} from '../../components'
import Image from 'next/image'

const Boarding = ({title}) => {
  return (
    <Grid container direction="row">
            <Heading color="primary" decoration="secondary"> {title}</Heading>
             
        </Grid>
  )
}

export default Boarding
