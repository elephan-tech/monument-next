import { makeStyles, styled } from "@material-ui/core/styles";

export const SectionContainer = styled("section")(
  ({ backgroundImage, theme, background, ...bgProps }) => ({
    background: theme.palette[background || "light"].main,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
    ...bgProps,
    height: "80vh",
    display: "flex",
  })
);

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
