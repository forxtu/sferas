import styled from 'styled-components';

// Styles
import colors from 'styles/partials/colors';

// Types
import type { StyledThemeProps } from 'styled-theme';
import type { Children } from 'react-typings';

type CardWrapperProps = {
  children: Children;
  bg?: string;
} & StyledThemeProps;

const CardWrapper = styled.div`
  ${({
    theme: {
      cardWrapper: { borderColor }
    },
    bg = colors.pink100
  }: CardWrapperProps): string => `
      border: 2px solid ${borderColor};
      border-radius: 16px;
      background-color: ${bg};
      box-shadow: 0px 5px 0 ${colors.black800};
    `}
`;

export default CardWrapper;
