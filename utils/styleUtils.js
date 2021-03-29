import isObject from "lodash/isObject";
import theme from "../styles/theme";

export const getColor = (color, shade = "main") => {
  const isHex = color && color.includes("#");
  const currentColor = isHex ? color : theme.colors[color];
  return isObject(currentColor)
    ? currentColor[shade]
    : currentColor || theme.colors.medium;
};
