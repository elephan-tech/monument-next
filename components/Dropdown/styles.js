import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  popover: {
    background: "red",
  },
  paper: {
    padding: 0,
    background: theme.palette.secondary.main,
    // marginRight: theme.spacing(2),
  },
  menuItem: {
    background: theme.palette.secondary.main,
    padding: theme.spacing(2),
    "&:focus": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.primary.contrastText,
    },
  },
  hoveredLink: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(1, 2),
      borderRadius: theme.spacing(1, 1, 0, 0),
    },
  },
  root: {
    display: "flex",
  },
}));

export default useStyles;
