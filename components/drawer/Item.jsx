import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import useStyles from './styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import Link from 'next/link'
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'


const AppMenuItem = props => {
  console.log({props})
  const { name, Icon, items, url } = props
  console.log({items})
  const classes = useStyles()
  const isExpandable = items && items.length > 0
  const [open, setOpen] = React.useState(false)

  const handleClick= () =>   {
    setOpen(!open)
  }

  const NavLink = () => forwardRef((props, ref) => <Link href={url} {...props} innerRef={ref} passHref/>)


  return (
    <>
     <ListItem button className={classes.menuItem} onClick={handleClick} href={url}>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </ListItem>
    {isExpandable && <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>}
    </>
  )
}


export default AppMenuItem