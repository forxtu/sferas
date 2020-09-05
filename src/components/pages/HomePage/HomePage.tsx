import React from 'react';

// Components
import Button from 'components/elements/Button';

// Hooks
import useAuth from 'features/auth/hooks/useAuth';

// Styles
import { useTheme } from 'styles/ThemeContext';

// Types
import type { ReactElement } from 'react';

const HomePage = (): ReactElement => {
  const { toggle } = useTheme();
  const { logOut } = useAuth();

  return (
    <div>
      <h1>Home page</h1>
      <Button onClick={toggle}>Change theme placeholder</Button>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
};

export default HomePage;
