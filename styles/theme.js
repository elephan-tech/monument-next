import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import base from "./base";

console.log({ base });

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Cabin", "Open Sans", Roboto, sans-serif',
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
  },
});

export default responsiveFontSizes(theme);
