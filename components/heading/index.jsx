import { Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import UnderlineStroke from '../UnderlineStroke'

const Heading = ({children, decoration='', variant='h3', color ='primary'}) => {
  const classes = useStyles({decoration})
  return (
    <>
    <Typography variant={variant}  color={color}>
      {children}
    </Typography>
    {decoration ? <UnderlineStroke fill={decoration}/> : null}
    </>
  )
}

export default Heading
