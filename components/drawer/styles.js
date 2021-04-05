
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    color: theme.palette.primary.main
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuItem: {},
  menuItemIcon: {
      color: '#97c05c',
  },
  appMenu: {
     width: '100%',
  },
    navList: {
      width: 240,
    },
    menuItem: {
      width: 240,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
}));

export default useStyles