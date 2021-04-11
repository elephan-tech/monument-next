import { createMuiTheme } from "@material-ui/core/styles";
import base from "./base";
import colors from "./colors";
import typography from "./typography";

const mainStyles = {
  ...typography,
  palette: {
    type: "light",
    ...colors,
  },
};
const theme = createMuiTheme({
  ...mainStyles,
  overrides: {
    MuiButton: {
      root: { borderRadius: 7 },
      containedSizeLarge: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "bold",
        fontSize: 18,
        width: "auto",
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
    MuiTypography: {},
  },
});

export default theme;
