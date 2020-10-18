import styled from 'styled-components';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

// Types
import type { StyledThemeProps } from 'styled-theme';

const { Text: AntdText, Title: AntdTitle } = Typography;

type TextFontSize = '14px' | '16px' | '18px';

type TextProps = {
  fontSize?: TextFontSize;
};

type StyledLinkProps = {} & StyledThemeProps;

// Titles
const Title = styled(AntdTitle)``;

// Links
const StyledA = styled.a``;
const StyledLink = styled(Link)`
  ${({
    theme: {
      link: { color, hoverColor }
    }
  }: StyledLinkProps): string => `
    color: ${color};

    &:hover {
      color: ${hoverColor};
    }
  `}
`;

// Text
const Text = styled(AntdText)`
  ${({ fontSize = '14px' }: TextProps): string => `
    font-size: ${fontSize}
  `}
`;

export { Title, StyledA, StyledLink, Text };
