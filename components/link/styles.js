const styles = {
  linkContainer: {
    margin: 8,
    padding: 8,
    background: "yellow",
    cursor: "pointer",
    // border: "1px solid black",
    "&:hover": {
      borderBottom: "3px solid blue",
    },
  },
  link: {
    fontFamily: "Segoe UI, Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: 18,
    textDecoration: "none",
    "&:hover": {
      color: "purple",
      fontSize: 1000,
    },
  },
};

export default styles;
