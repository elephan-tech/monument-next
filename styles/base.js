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
    height: "100%",
  },

  body: {
    height: "100vh",
    fontFamily: "Oswald",
    boxSizing: "border-box",
    margin: 0,
    width: "100vw",
    overflowX: "hidden",
  },
  sectionContainer: { width: "90%", margin: "auto" },
};
