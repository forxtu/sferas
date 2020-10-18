import React from 'react';
import { Layout } from 'antd';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

// Components
import Header from 'components/blocks/Header';
import CardWrapper from 'components/elements/CardWrapper';
import { StyledLink } from 'components/elements/Typography';

// Hooks
import useAppData from 'features/main/hooks/useAppData';

// Styles
import colors from 'styles/partials/colors';
import indents from 'styles/partials/indents';

// Types
import type { ReactElement } from 'react';
import type { Children } from 'react-typings';

const { Content } = Layout;

type Props = {
  children: Children;
};

const Wrapper = styled.div`
  display: flex;
  padding: ${indents.large};

  ${CardWrapper} {
    height: 100%;
    width: 250px;
    padding: ${indents.large};

    ${StyledLink} {
      display: block;

      &:not(last-child) {
        margin-bottom: ${indents.small};
      }
    }
  }
`;

const MainLayout = ({ children }: Props): ReactElement => {
  const { spheres } = useAppData();

  return (
    <>
      <Header />
      <Wrapper>
        <CardWrapper bg={colors.pink100}>
          {spheres.map(({ sphereId, title }: any) => (
            <StyledLink
              key={sphereId}
              to={{
                pathname: `/sphere/${kebabCase(title)}`,
                state: { sphereId }
              }}
            >
              {title}
            </StyledLink>
          ))}
        </CardWrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
};

export default MainLayout;
