// Fonts
import MontserratAlternatesBold from 'assets/fonts/Montserrat_Alternates/MontserratAlternates-Bold.ttf';
import MontserratRegular from 'assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratExtraBold from 'assets/fonts/Montserrat/Montserrat-ExtraBold.ttf';

const fontFaces = `
  @font-face {
    font-family: 'montserrat-alternates--bold';
    src: url(${MontserratAlternatesBold}) format('truetype');
  }
  @font-face {
    font-family: 'montserrat--regular';
    src: url(${MontserratRegular}) format('truetype');
  }
  @font-face {
    font-family: 'montserrat--extra-bold';
    src: url(${MontserratExtraBold}) format('truetype');
  }
`;

export default fontFaces;
