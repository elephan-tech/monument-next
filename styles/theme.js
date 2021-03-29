import {
  baseFontSize,
  breakpoints,
  container,
  gridSize,
  gutterWidth,
  outerMargin,
} from "../config/flexgrid";

export default {
  font: {
    family: "Roboto, sans-serif",
    size: "14px",
    heigth: "20px",
  },
  colors: {
    primary: {
      main: "#042f54",
    },
    secondary: {
      main: "#fed02f",
    },
    accent: {
      main: "#e8e8e8",
    },

    danger: "#d50000",
    success: "#0b9900",
    info: "#008def",
    warning: "#ffe100",

    light: "#fff",
    medium: "#a4a4a4",
    dark: "#242424",
  },
  unit: (x) => 8 * x || 8,
  shadow: (x) => `0px ${5 * x}px 10px -1px #a4a4a4`,
  flexboxgrid: {
    gridSize, // columns
    gutterWidth: gutterWidth / baseFontSize, // rem
    outerMargin: outerMargin / baseFontSize, // rem
    mediaQuery: "only screen",
    container: {
      sm: container.sm / baseFontSize, // rem
      md: container.md / baseFontSize, // rem
      lg: container.lg / baseFontSize, // rem
    },
    breakpoints: {
      xs: breakpoints.xs / baseFontSize, // em
      sm: breakpoints.sm / baseFontSize, // em
      md: breakpoints.md / baseFontSize, // em
      lg: breakpoints.lg / baseFontSize, // em
    },
  },
};
