import React from 'react';
import { Provider } from 'react-redux';

// Redux
import configureStore from 'store/configureStore';

// Types
import type { ReactElement } from 'react';

type StoreProvider = {
  children: ReactElement;
};

const StoreProvider = ({ children }: StoreProvider): ReactElement => {
  const store = configureStore();

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
