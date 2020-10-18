// Styles
import colors from 'styles/partials/colors';

// Types
import type { StyledTheme } from 'styled-theme';

type Light = StyledTheme;

const { black800, blackBasic, blueBasic } = colors;

const light: Light = {
  button: {
    color: 'red'
  },
  cardWrapper: {
    borderColor: black800
  },
  link: {
    color: blackBasic,
    hoverColor: blueBasic
  }
};

export type { Light };

export default light;
