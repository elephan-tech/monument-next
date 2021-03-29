import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Box from "./Box";
import Button from "./Button";

const FloatingButton = styled(Box)`
  position: absolute;
  bottom: 50px;
  right: ${(props) =>
    props.position === "right"
      ? props.type === "tab"
        ? "-10px"
        : "10px"
      : "null"};
  left: ${(props) =>
    props.position === "left"
      ? props.type === "tab"
        ? "-10px"
        : "10px"
      : "null"};
  border-radius: ${(props) =>
    props.type === "tab" ? "10px 0px 0px 10px" : 50};
  border-color: ${(props) => `3px solid ${props.theme.colors.primary.main}`};
  height: 75px;
  width: 100px;
  color: white;
  font-size: 35px;
  padding: 8px;
  box-shadow: ${(props) => props.theme.shadow(1) || "none"};
`;

const Fab = ({ icon, color, type, onClick, position }) => {
  return (
    <FloatingButton
      onClick={onClick}
      color={color}
      as={Button}
      type={type}
      size="large"
      position={position}
    >
      <i
        className={icon}
        style={{
          color: "white",
          fontSize: 35,
        }}
      ></i>
    </FloatingButton>
  );
};

Fab.defaultProps = {
  type: "fab",
  icon: "triangle",
  color: "primary",
  onClick: () => {},
  position: "right",
};
Fab.propTypes = {
  type: PropTypes.oneOf(["tab", "fab"]),
  icon: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.string,
};
export default Fab;
