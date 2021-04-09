import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "80vh",
    display: "flex",
    background: ({ background }, props) =>
      theme.palette[background || "light"].main,
    backgroundImage: ({ backgroundImage }) =>
      backgroundImage ? `url(${backgroundImage})` : "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: ({ backgroundSize }) => backgroundSize || "cover",
    backgroundPosition: ({ backgroundPosition }) =>
      backgroundPosition || "center",
    marginTop: ({ topMargin }) => (topMargin ? 100 : "auto"),
    height: ({ height }) => height || "fit-content",
    minHeight: "80vh",
  },
  container: {
    display: "flex",
    alignItems: "flex-end",
  },
  hero: {
    background: (props) => props.backgroundImage,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "4rem 2rem",

    /* Grid styles */
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  },
}));
