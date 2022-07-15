import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 100ms ease-in-out;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
  }
`;
