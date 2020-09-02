import styled from 'styled-components';

// Types
import type { Theme } from 'styles/themes/theme';

type ButtonTheme = {
  theme: Theme;
};

const Button = styled.button`
  ${({ theme }: ButtonTheme): string => {
    const {
      button: { color }
    } = theme;

    return `
      color: ${color};

      &:focus {
        outline: none;
      }
    `;
  }}
`;

export default Button;
