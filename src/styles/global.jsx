import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  body {
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;
