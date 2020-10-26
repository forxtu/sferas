// Styles
import colors from 'styles/partials/colors';

// Types
import type { StyledTheme } from 'styled-theme';

type Dark = StyledTheme;

const { black800, whiteBasic, blackBasic, redBasic } = colors;

const dark: Dark = {
  button: {
    color: whiteBasic,
    borderColor: whiteBasic,
    backgroundColor: black800
  },
  cardWrapper: {
    borderColor: black800
  },
  input: {
    color: whiteBasic,
    borderColor: whiteBasic,
    backgroundColor: blackBasic
  },
  link: {
    color: blackBasic,
    hoverColor: redBasic
  }
};

export type { Dark };

export default dark;
