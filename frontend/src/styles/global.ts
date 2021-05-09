import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before  {
    box-sizing: border-box;    
    padding: 0;
    margin: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1, h2, h3, h4, h5 {
    font-weight: normal;
  }

`;

export default GlobalStyles;
