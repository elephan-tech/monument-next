import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { upperCase } from "lodash";
import base from "./base";


const theme = createMuiTheme({
  typography: {
    fontFamily: '"Cabin", "Open Sans", Roboto, sans-serif, "Montserrat", "Oswald"',
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
    MuiTypography: {
      h1: {color: 'blue',fontFamily:'"Oswald", sans-serif',fontWeight:'bold'},
      h2: {color: 'blue',fontFamily:'"Montserrat", sans-serif',fontWeight:500,textTransform:'upperCase',},
      h3: {color: 'blue',fontFamily:'"Montserrat", sans-serif',fontWeight:500},
      p: {color: 'blue',fontFamily:'"Montserrat", sans-serif',fontWeight:500},
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'p',
        body2: 'span',
      },

    },
  },
});

export default responsiveFontSizes(theme);
