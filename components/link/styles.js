import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    linkBase: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      textAlign: "center",
      fontFamily: "Segoe UI, Roboto, sans-serif",
      fontWeight: "bold",
      fontSize: 18,
      textDecoration: "none",
      margin: 8,
      padding: "8px 16px",
      minWidth: 100,
    },
    a: {
      minHeight: 60,

      "&:hover , &:active": {
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundImage: (props) =>
          props.component === "a" ? 'url("/brush2.png")' : "none",
        backgroundSize: "80% auto",
      },
    },
    button: {
      textAlign: "center",
      borderRadius: 8,
      background: (props) => theme.palette[props.bg || "primary"].main,
      "&:hover": {
        background: (props) => theme.palette[props.bg || "primary"].light,
      },
    },
    div: {
      cursor: "pointer",
    },
    span: {
      display: "inline",
      margin: 8,
    },
  }),
  { name: "link" }
);

export default useStyles;
