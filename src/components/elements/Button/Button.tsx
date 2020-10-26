import React from 'react';
import styled from 'styled-components';

// Styles
import indents from 'styles/partials/indents';
import colors from 'styles/partials/colors';

// Types
import type { ReactElement } from 'react';
import type { StyledThemeProps } from 'styled-theme';
import type { Children } from 'react-typings';

type ButtonTheme = {
  isFlat: boolean;
  buttonType: 'primary' | 'secondary' | 'colour';
} & StyledThemeProps;

type Props = {
  icon?: Children;
  children?: Children;
  isFlat?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  buttonType?: 'primary' | 'secondary' | 'colour';
  disabled?: boolean;
  onClick: () => void;
};

const StyledButton = styled.button`
  ${({
    theme: {
      button: { color, borderColor, backgroundColor }
    },
    isFlat,
    buttonType
  }: ButtonTheme): string => `
    font-family: 'montserrat--extra-bold';
    border: 2px solid;
    border-radius: 12px;
    ${isFlat ? 'box-shadow: none' : `box-shadow: 0px 2px 0 ${colors.black800}`};
    cursor: pointer;
    padding: ${indents.micro} ${indents.medium};

    background: ${
      buttonType === 'primary'
        ? colors.whiteBasic
        : buttonType === 'secondary'
        ? colors.blackBasic
        : colors.blueBasic
    };

    border-color: ${
      buttonType === 'primary'
        ? colors.blackBasic
        : buttonType === 'secondary'
        ? colors.blackBasic
        : colors.blueBasic
    };

    color: ${
      buttonType === 'primary'
        ? colors.blackBasic
        : buttonType === 'secondary'
        ? colors.whiteBasic
        : colors.whiteBasic
    };

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
  buttonType = 'primary',
  onClick
}: Props): ReactElement => (
  <StyledButton
    onClick={onClick}
    type={htmlType}
    disabled={disabled}
    isFlat={isFlat}
    buttonType={buttonType}
  >
    {icon}
    {children}
  </StyledButton>
);

export default Button;
