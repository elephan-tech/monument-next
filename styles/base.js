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
    fontFamily: "Oswald",
    boxSizing: "border-box",
    margin: 0,
    width: "100vw",
    overflowX: "hidden",
  },
  sectionContainer: { width: "90%", margin: "auto" },
  hr: { border: "solid 1px #7D24FF", background: "#7D24FF", margin: "32px" },
};
