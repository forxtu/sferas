import styled from 'styled-components';

// Styles
import colors from 'styles/partials/colors';
import indents from 'styles/partials/indents';

// Types
import type { StyledThemeProps } from 'styled-theme';
import type { Children } from 'react-typings';

type CardWrapperProps = {
  children: Children;
  bg?: string;
  isFlat?: boolean;
} & StyledThemeProps;

const CardWrapper = styled.div`
  ${({
    theme: {
      cardWrapper: { borderColor }
    },
    bg = colors.pink100,
    isFlat = false
  }: CardWrapperProps): string => `
      border: 2px solid ${borderColor};
      border-radius: 16px;
      background-color: ${bg};
      width: 100%;
      padding: ${indents.large};
      ${!isFlat && `box-shadow: 0px 5px 0 ${colors.black800}`};
    `}
`;

export default CardWrapper;
