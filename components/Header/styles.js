import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(),
    alignItems: "center",
    display: "flex",
    height: "100%",
    padding: theme.spacing(1, 2),
  },
  title: {
    flexGrow: 1,
  },
  socials: {
    display: "flex",
    justifyContent: "space-evenly",
    minWidth: 100,
  },
  a: {
    "&:hover , &:active": {
      backgroundPosition: "bottom center",
      backgroundRepeat: "no-repeat",
      backgroundImage: 'url("images/brush2.png")',
      backgroundSize: "100px",
    },
  },
  button: {
    boxShadow: theme.shadows[1],
    padding: theme.spacing(1, 2),
    borderRadius: 9,
    background: theme.palette.secondary.main,
    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },
}));
