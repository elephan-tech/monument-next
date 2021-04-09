import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    linkBase: {
      fontFamily: "Segoe UI, Roboto, sans-serif",
      fontWeight: "bold",
      fontSize: 18,
      textDecoration: "none",
      minWidth: 100,
      padding: (props) => (props.slim ? "8px 0px" : "8px 16px"),
      margin: (props) => (props.slim ? 0 : 8),
    },
    a: {
      "&:hover , &:active": {
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundImage: (props) =>
          props.component === "a" ? 'url("images/brush2.png")' : "none",
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
      cursor: "pointer",
      display: "inline",
      margin: 8,
    },
  }),
  { name: "link" }
);

export default useStyles;
