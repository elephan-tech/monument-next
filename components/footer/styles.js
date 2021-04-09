import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "16px",
    background: `radial-gradient(closest-side at 50% 50%, #1F2F5BE0 0%, #1F2F5B 100%) 0% 0% no-repeat padding-box`,
    color: "#fff",
    fontFamily: "Montserrat",
    padding: 32,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gridGap: "1rem",
  },
  column: {
    minHeight: 250,
    display: "grid",
    padding: theme.spacing(4),
  },
  child: {
    rowGap: "3rem",
  },
  noPadding: {
    padding: 0,
  },
}));

export default useStyles;
