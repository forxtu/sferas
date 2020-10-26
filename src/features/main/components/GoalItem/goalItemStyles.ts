import styled from 'styled-components';

// Components
import CardWrapper from 'components/elements/CardWrapper';
import { Text } from 'components/elements/Typography';

// Styles
import indents from 'styles/partials/indents';

// Types
import type { StyledThemeProps } from 'styled-theme';

const GoalItemWrapper = styled(CardWrapper)`
  ${({
    theme: {
      input: { color, borderColor, backgroundColor }
    }
  }: StyledThemeProps): string => `
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${indents.large};
    }

    img {
      align-self: flex-start;
    }

    ${Text} {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 0;
    }

    textarea {
      color: ${color};
      border: 2px solid ${borderColor};
      background-color: ${backgroundColor};
      border-radius: 12px;
      margin: 0;
      
      &:hover,
      &:focus {
        border-color: ${borderColor};
        box-shadow: none;
      }
    }
  `}
`;

export { GoalItemWrapper };
