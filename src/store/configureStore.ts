import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

// Redux
import appDataReducer from 'features/main/reducers/appDataReducer';
import userDataReducer from 'features/main/reducers/userDataReducer';

// Types
import type { Store } from 'redux';
import type { AppDataState } from 'features/main/reducers/appDataReducer';
import type { UserDataState } from 'features/main/reducers/userDataReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type RootState = {
  appDataReducer: AppDataState;
  userDataReducer: UserDataState;
};

const configureStore = (): Store => {
  const rootReducer = combineReducers({
    appDataReducer,
    userDataReducer
  });

  const initialState = {};

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware, thunk];

  // To use Redux extension in browser
  // https://github.com/zalmoxisus/redux-devtools-extension#usage
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
};

export type { RootState };

export default configureStore;
