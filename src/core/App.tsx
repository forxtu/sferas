import React from 'react';

// Routes
import RoutesWrapper from 'routes/RoutesWrapper';

// Styles
import ThemeProvider from 'styles/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <RoutesWrapper />
    </ThemeProvider>
  );
};

export default App;
