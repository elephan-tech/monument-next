import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "80vh",
    display: "flex",
    background: ({ background }) => theme.palette[background || "light"].main,
    backgroundImage: ({ backgroundImage }) =>
      backgroundImage ? `url(${backgroundImage})` : "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: ({ backgroundSize }) => backgroundSize || "cover",
    backgroundPosition: ({ backgroundPosition }) =>
      backgroundPosition || "center",
    marginTop: ({ topMargin }) => (topMargin ? 110 : "auto"),
    margin: "auto",
    height: ({ height }) => height || "fit-content",
    minHeight: "80vh",
    padding: ({ dense }) => (dense ? theme.spacing(1, 2) : theme.spacing(0)),
    width: ({ dense }) => (dense ? "90%" : "100%"),
  },
  container: {
    display: "flex",
    alignItems: "flex-end",
  },
  hero: {
    /* Grid styles */
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  },
}));
