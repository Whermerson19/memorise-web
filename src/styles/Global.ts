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

  .Modal {
    width: 100%;
    max-width: 650px;
    padding: 3rem;
    background: var(--gray);
    color: var(--white);
    border: 2px solid var(--purple);
    position: relative;

  }

  .Overlay {
    position: fixed;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, .8);

    display: flex;

    align-items: center;
    justify-content: center;
  }

  .close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    transition: .2s;
  }

  .close-modal:hover {
    filter: brightness(.8);
  }
`;

export default GlobalStyle;