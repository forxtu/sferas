import { createGlobalStyle } from 'styled-components';

// Fonts
import fontFaces from 'styles/fonts';

const GlobalStyle = createGlobalStyle`
  ${fontFaces}

  body {
    font-family: montserrat--regular, sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: montserrat-alternates--bold, sans-serif;
  }
`;

export default GlobalStyle;
