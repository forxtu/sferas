import React from 'react';
import styled from 'styled-components';

// Styles
import colors from 'styles/partials/colors';

// Types
import type { ReactElement } from 'react';
import type { StyledThemeProps } from 'styled-theme';
import type { Children } from 'react-typings';

type ButtonTheme = {
  isFlat: boolean;
} & StyledThemeProps;

type Props = {
  icon?: Children;
  children?: Children;
  isFlat?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick: () => void;
};

const StyledButton = styled.button`
  ${({
    theme: {
      button: { color, borderColor, backgroundColor }
    },
    isFlat
  }: ButtonTheme): string => `
    color: ${color};
    border: 2px solid ${borderColor};
    border-radius: 12px;
    background: ${backgroundColor};
    ${!isFlat && `box-shadow: 0px 2px 0 ${colors.black800}`};
    cursor: pointer;

    &:focus {
      outline: none;
    }
  `}
`;

const Button = ({
  children,
  icon,
  isFlat = false,
  htmlType = 'button',
  disabled = false,
  onClick
}: Props): ReactElement => (
  <StyledButton
    onClick={onClick}
    type={htmlType}
    disabled={disabled}
    isFlat={isFlat}
  >
    {icon}
    {children}
  </StyledButton>
);

export default Button;
