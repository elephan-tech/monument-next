import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    linkBase: {
      fontFamily: "Segoe UI, Roboto, sans-serif",
      fontWeight: "bold",
      fontSize: 18,
      textDecoration: "none",
      minWidth: 100,
    },
    active: {
      backgroundPosition: "bottom center",
      backgroundRepeat: "no-repeat",
      backgroundImage: 'url("images/brush2.png")',
    },
  }),
  { name: "link" }
);

export default useStyles;
