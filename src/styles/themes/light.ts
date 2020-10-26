// Styles
import colors from 'styles/partials/colors';

// Types
import type { StyledTheme } from 'styled-theme';

type Light = StyledTheme;

const { black800, whiteBasic, blackBasic, blueBasic } = colors;

const light: Light = {
  button: {
    color: black800,
    borderColor: black800,
    backgroundColor: whiteBasic
  },
  cardWrapper: {
    borderColor: black800
  },
  input: {
    color: blackBasic,
    borderColor: blackBasic,
    backgroundColor: whiteBasic
  },
  link: {
    color: blackBasic,
    hoverColor: blueBasic
  }
};

export type { Light };

export default light;
