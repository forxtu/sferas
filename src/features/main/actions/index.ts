import * as TYPES from './types';
import * as MESSAGES from './messages';

// Types
import type { AppDataState } from 'features/main/reducers/appDataReducer';
import type { UserDataState } from 'features/main/reducers/userDataReducer';

// App data types
type SetAppData = {
  type: TYPES.SET_APP_DATA;
  data: AppDataState;
};

type AppDataActions = SetAppData;

// User data types
type SetUserData = {
  type: TYPES.SET_USER_DATA;
  userData: UserDataState;
};

type UserDataActions = SetUserData;

// App data actions
const setAppData = (data: AppDataState): SetAppData => ({
  type: MESSAGES.SET_APP_DATA,
  data
});

// User data actions
const setUserData = (userData: UserDataState): SetUserData => ({
  type: MESSAGES.SET_USER_DATA,
  userData
});

export type { AppDataActions, UserDataActions };

export { setAppData, setUserData };
