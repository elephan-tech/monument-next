import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import base from "./base";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Helvetica", "Open Sans", Roboto, sans-serif',
    fontStyle: "normal",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightBold: 700,
    fontSize: 16,
  },
  palette: {
    type: "light",
    primary: {
      main: "#042f54",
    },
    secondary: {
      main: "#fed02f",
    },
    accent: {
      main: "#e8e8e8",
    },
    danger: { main: "#d50000" },
    success: { main: "#0b9900" },
    info: { main: "#008def" },
    warning: { main: "#ffe100" },
    light: { main: "#fff" },
  },
  overrides: {
    MuiButton: {
      root: { borderRadius: 7 },
      containedSizeLarge: {
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: "bold",
        fontSize: 18,
        width: "20%",
        padding: 16,
      },
    },
    MuiCssBaseline: {
      "@global": {
        ...base,
      },
    },
    MuiToolbar: {
      dense: {
        minHeight: 30,
      },
    },
    MuiLink: {
      underlineNone: true,
    },
    MuiTypography: {
      h1: {
        color: "primary",
        fontFamily: '"Oswald", sans-serif',
        fontWeight: "bold",
        textAlign: "right",
        fontSize: "64px",
        letterSpacing: 0,
        opacity: 1,
      },
      h2: {
        textAlign: "left",
        fontFamily: '"Oswald", sans-serif',
        fontWeight: "bold",
        fontSize: 48,
        letterSpacing: 0,
        opacity: 1,
      },
      h3: {
        color: "primary",
        fontFamily: '"Segoe UI", sans-serif',
        fontWeight: "normal",
        fontSize: 32,
      },
      h4: {
        color: "primary",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "24px",
      },
      h5: {
        textAlign: "left",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "bold",
        fontSize: 32,
        letterSpacing: 0,
        opacity: 1,
        lineHeight: 1.48,
      },
      button: {
        textAlign: "left",
        fontFamily: '"Montserrat"',
        fontWeight: "bold",
        fontSize: "18px",
        letterSpacing: 0,
        opacity: 1,
        textTransform: "capitalize",
      },
      subtitle1: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "lighter",
        fontSize: 11,
        textTransform: "capitalize",
      },
      body1: {
        textAlign: "left",
        fontFamily: '"Montserrat", sans-serif',
        fontSize: 16,
        fontWeight: "normal",
        letterSpacing: 0,
        opacity: 1,
      },
      body2: {
        fontWeight: "bold",
      },
    },
  },
});

export default responsiveFontSizes(theme);
