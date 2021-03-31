import { css } from "styled-components";
import theme from "../theme";

export default css`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
    font-family: ${theme.fonts.body};
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  }
`;
