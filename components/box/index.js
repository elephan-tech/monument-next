import PropTypes from "prop-types";
import styled from "styled-components";

const getColor = (color, theme) => {
  const isHex = color.includes("#");
  return isHex ? color : theme.colors[color].main;
};

const Box = styled.div((props) => ({
  display: "flex",
  backgroundColor: props.color
    ? getColor(props.color, props.theme)
    : props.theme.colors.light,
  width: props.fullWidth ? "100%" : "fit-content",
  padding: props.padding || 0,
  margin: props.margin || 0,
  flexDirection: props.direction || "row",
  justifyContent: props.justify || "space-evenly",
  alignItems: props.align || "start",
  borderRadius: props.borderRadius || 0,
  flexGrow: props.grow,
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
};

Box.propTypes = {
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  padding: PropTypes.number,
  margin: PropTypes.number,
  direction: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  borderRadius: PropTypes.number,
  grow: PropTypes.number,
};

export default Box;
