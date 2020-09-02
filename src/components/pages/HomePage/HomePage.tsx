import React from 'react';

// Components
import Button from 'components/elements/Button';

// Styles
import { useTheme } from 'styles/ThemeContext';

// Types
import type { ReactElement } from 'react';

const HomePage = (): ReactElement => {
  const { toggle } = useTheme();

  return (
    <div>
      <h1>Home page</h1>
      <Button onClick={toggle}>Change theme placeholder</Button>
    </div>
  );
};

export default HomePage;
