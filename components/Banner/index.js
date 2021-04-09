import { Toolbar } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const Banner = styled(Toolbar)((props) => ({
  background: props.theme.palette[props.color].main,
  color: "white",
  height: 30,
  padding: "0 30px",
  display: "flex",
  justifyContent: props.justify || "space-between",
  alignItems: "center",
}));

export default Banner;
