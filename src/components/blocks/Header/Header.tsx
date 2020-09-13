import React from 'react';
import {
  PoweroffOutlined,
  HighlightOutlined,
  HomeOutlined
} from '@ant-design/icons';

// Components
import Button from 'components/elements/Button';

// Hooks
import useHeader from 'components/blocks/Header/useHeader';

// Styles
import { Header as StyledHeader } from 'components/blocks/Header/headerStyles';

// Types
import type { ReactElement } from 'react';

const Header = (): ReactElement => {
  const { toggleTheme, logOut, handleRedirectToHomePage } = useHeader();

  return (
    <StyledHeader>
      <Button onClick={handleRedirectToHomePage} icon={<HomeOutlined />} />
      <Button onClick={toggleTheme} icon={<HighlightOutlined />}>
        Change theme
      </Button>
      <Button onClick={logOut} icon={<PoweroffOutlined />}>
        Log out
      </Button>
    </StyledHeader>
  );
};

export default Header;
