import { createSelector } from 'reselect';

// Utils
import * as MESSAGES from 'features/main/actions/messages';

// Types
import type { UserDataActions } from 'features/main/actions';
import type { RootState } from 'store/configureStore';

type UserDataState = {
  email: string;
  userId: string;
  accountCreationTime: string;
  docId: string;
};

type UserDataStateDb = Omit<UserDataState, 'docId'>;

const initialState: UserDataState = {
  email: '',
  userId: '',
  accountCreationTime: '',
  docId: ''
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

export type { UserDataState, UserDataStateDb };

export default userDataReducer;
