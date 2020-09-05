import { createSelector } from 'reselect';

// Utils
import * as MESSAGES from 'features/main/actions/messages';

// Types
import type { AppDataActions } from 'features/main/actions';
import type { RootState } from 'store/configureStore';

type AppDataState = {
  globalGoals: string[];
};

const initialState: AppDataState = {
  globalGoals: []
};

const appDataReducer = (
  state: AppDataState = initialState,
  action: any
): AppDataState => {
  switch (action.type) {
    case MESSAGES.SET_APP_DATA:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};

// Selectors
export const getAppDataSelector = createSelector(
  (state: RootState): AppDataState => state.appDataReducer,
  (appDataReducer: AppDataState): AppDataState => appDataReducer
);

export type { AppDataState };

export default appDataReducer;
