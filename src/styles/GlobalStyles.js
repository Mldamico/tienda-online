import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    height: 100vh;
    margin:0;
  }


  img {
    max-width: 100%;
  }

  .button {
    padding: 1rem;
    width: 100%;
    border-radius:10px;
    border: 0;
    color: #fff;
    background-color: var(--red);
    font-size: 24px;
  }
 

`;

export default GlobalStyles;
