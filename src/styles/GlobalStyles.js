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
    color: ${props => props.theme.colorGreyDark};
    background-color: ${props => props.theme.colorWhiteBg};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    padding: 0;
    border: none;
    border-radius: 3px;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

`;

export default GlobalStyles;
