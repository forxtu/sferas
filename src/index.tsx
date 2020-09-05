import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from 'core/App';
import StoreProvider from 'core/StoreProvider';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
