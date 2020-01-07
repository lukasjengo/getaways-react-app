import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: ${props => props.theme.colors.greyDark};
    background-color: ${props => props.theme.colors.whiteBg};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
  }

`;

export default GlobalStyles;
