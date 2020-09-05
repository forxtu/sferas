import { createSelector } from 'reselect';

// Utils
import * as MESSAGES from 'features/main/actions/messages';

// Types
import type { UserDataActions } from 'features/main/actions';
import type { RootState } from 'store/configureStore';

type UserDataState = {
  email: string;
  userId: string;
  accountCreated: string;
};

const initialState: UserDataState = {
  email: '',
  userId: '',
  accountCreated: ''
};

const userDataReducer = (
  state: UserDataState = initialState,
  action: UserDataActions
): UserDataState => {
  switch (action.type) {
    case MESSAGES.SET_USER_DATA:
      return {
        ...state,
        ...action.userData
      };
    default:
      return state;
  }
};

// Selectors
export const getUserDataSelector = createSelector(
  (state: RootState): UserDataState => state.userDataReducer,
  (userDataReducer: UserDataState): UserDataState => userDataReducer
);

export type { UserDataState };

export default userDataReducer;
