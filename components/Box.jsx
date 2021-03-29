import { bool, number, oneOfType, string } from "prop-types";
import styled from "styled-components";
import { getColor } from "../utils/styleUtils";

const Box = styled.div((props) => ({
  position: props.position || "unset",
  display: "flex",
  backgroundColor: props.color
    ? getColor(props.color, props.theme)
    : props.theme.colors.light,
  width: props.fullWidth ? "100%" : "fit-content",
  height: props.height || "auto",
  padding: props.padding || 0,
  margin: props.margin || 0,
  flexDirection: props.direction || "row",
  justifyContent: props.justify || "space-evenly",
  alignItems: props.align || "start",
  borderRadius: props.borderRadius || 0,
  flexGrow: props.grow,
  boxShadow: props.shadow ? props.theme.shadow(props.shadow) : "none",
  ...props.styles,
}));

Box.defaultProps = {
  color: "#fff",
  fullWidth: false,
  padding: 0,
  margin: 0,
  direction: "row",
  justify: "space-evenly",
  align: "start",
  borderRadius: 0,
  grow: 0,
  shadow: 0,
  height: "auto",
  position: "unset",
};

Box.propTypes = {
  color: string,
  fullWidth: bool,
  padding: number,
  margin: oneOfType([number, string]),
  direction: string,
  justify: string,
  align: string,
  borderRadius: number,
  grow: number,
  shadow: number,
  height: oneOfType([number, string]),
  position: string,
};
export default Box;
