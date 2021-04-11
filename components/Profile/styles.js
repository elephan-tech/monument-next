import { makeStyles, styled } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    imageContainer: { width: "auto", minWidth: "200px", maxWidth: "300px" },
    img: {
      maxWidth: "300px",
      minWidth: "150px",
    },
    profileContent: {
      paddingLeft: "32px",
      width: "75%",
      minWidth: "370px",
    },
  }),
  {
    name: "profile",
  }
);

export const Divider = styled("hr")({
  border: "solid 1px #7d24ff",
  background: "#7d24ff",
  margin: "32px",
});

export default useStyles;
