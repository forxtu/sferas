import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

// Types
import type { Theme } from 'styles/themes/theme';

type ButtonTheme = {
  theme: Theme;
};

const Button = styled(AntdButton)`
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
