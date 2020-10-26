import { Input } from 'antd';
import styled from 'styled-components';

// Types
import type { StyledThemeProps } from 'styled-theme';

type InputProps = {} & StyledThemeProps;

const StyledInput = styled(Input)`
  ${({
    theme: {
      input: { color, borderColor, backgroundColor }
    }
  }: InputProps): string => `
    color: ${color};
    border: 2px solid ${borderColor};
    background-color: ${backgroundColor};
    border-radius: 12px;
    
    &:hover,
    &:focus {
      border-color: ${borderColor};
      box-shadow: none;
    }
  `}
`;

export default StyledInput;
