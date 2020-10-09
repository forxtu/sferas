import styled from 'styled-components';
import { Typography } from 'antd';

const { Text: AntdText, Title: AntdTitle } = Typography;

type TextFontSize = '14px' | '16px' | '18px';

type TextProps = {
  fontSize?: TextFontSize;
};

// Titles
const Title = styled(AntdTitle)``;

// Links
const StyledA = styled.a``;

// Text
const Text = styled(AntdText)`
  ${({ fontSize = '14px' }: TextProps): string => `
    font-size: ${fontSize}
  `}
`;

export { Title, StyledA, Text };
