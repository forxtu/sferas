import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

// Routes
import RoutesWrapper from 'routes/RoutesWrapper';

// Hooks
import useAuth from 'features/auth/hooks/useAuth';

// Redux
import configureStore from 'store/configureStore';

// Styles
import ThemeProvider from 'styles/ThemeContext';

// Types
import type { ReactElement } from 'react';

const App = (): ReactElement => {
  const store = configureStore();
  const { authUser } = useAuth();

  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <RoutesWrapper user={authUser} />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
