import styled from "styled-components";

const getFontSize = (variant) => {
  const generateStyles = (
    fontSize,
    fontWeight,
    letterSpacing,
    textTransform = "none"
  ) => {
    return { fontSize, fontWeight, letterSpacing, textTransform };
  };
  const styles = {
    h1: generateStyles(96, "light", -1.5, "capitalize"),
    h2: generateStyles(60, "light", -0.5, "capitalize"),
    h3: generateStyles(48, "normal", 0, "capitalize"),
    h4: generateStyles(34, "normal", 0.25, "capitalize"),
    h5: generateStyles(24, "normal", 0, "capitalize"),
    h6: generateStyles(20, "medium", 0.15, "capitalize"),
    subtitle: generateStyles(16, "normal", 0.15),
    subtitle2: generateStyles(14, "medium", 0.1),
    body: generateStyles(16, "normal", 0.5),
    body2: generateStyles(14, "normal", 0.25),
    button: generateStyles(14, "medium", 1.25, "uppercase"),
    caption: generateStyles(12, "normal", 0.4),
    overline: generateStyles(10, "normal", 1.5, "uppercase"),
  };
  return styles[variant];
};

export default styled.p((props) => ({
  fontFamily: props.theme.font.family,
  color: props.color,
  ...getFontSize(props.variant),
}));
