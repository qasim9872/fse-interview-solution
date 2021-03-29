import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  ${css`
    @font-face {
      font-family: sans-serif;
      font-weight: 100 500;
      font-style: normal;
      font-display: fallback;
    }
  `}
`;
