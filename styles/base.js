import theme from "./theme";

export default {
  "*": {
    "::after": {
      boxSizing: "inherit",
    },
    "::before": {
      boxSizing: "inherit",
    },
  },
  html: {
    scrollBehavior: "smooth",
  },

  body: {
    boxSizing: "border-box",
    margin: 0,
    width: "100vw",
    overflowX: "hidden",
  },
};
