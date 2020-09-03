import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Types
import type { Store } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const configureStore = (): Store => {
  const rootReducer = combineReducers({
    // counterReducer
  });

  const initialState = {};

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];

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

export default configureStore;
