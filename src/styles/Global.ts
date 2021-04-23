import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  :root {
    --background: #121212;
    --purple: #bb86fc;
    --white: #fff;
    --gray: #202024;
    --black: #000;
    --red: #C93011;
    --cyan: #03DAC5;
  }


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--white);
  }

  html, body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;