import React from 'react';

// Routes
import RoutesWrapper from 'routes/RoutesWrapper';

// Hooks
import useAuth from 'features/auth/hooks/useAuth';

// Styles
import ThemeProvider from 'styles/ThemeContext';
import GlobalStyle from 'styles/globalStyles';
import 'antd/dist/antd.css';

// Types
import type { ReactElement } from 'react';

const App = (): ReactElement => {
  const { authUser } = useAuth();

  return (
    <ThemeProvider>
      <>
        <GlobalStyle />
        <RoutesWrapper user={authUser} />
      </>
    </ThemeProvider>
  );
};

export default App;
