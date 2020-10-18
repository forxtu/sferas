// Styles
import colors from 'styles/partials/colors';

// Types
import type { StyledTheme } from 'styled-theme';

type Dark = StyledTheme;

const { black800, blackBasic, redBasic } = colors;

const dark: Dark = {
  button: {
    color: 'blue'
  },
  cardWrapper: {
    borderColor: black800
  },
  link: {
    color: blackBasic,
    hoverColor: redBasic
  }
};

export type { Dark };

export default dark;
