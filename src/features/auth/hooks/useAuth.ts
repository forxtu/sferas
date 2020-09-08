import { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

// Hooks
import useLocalStorage from 'hooks/useLocalStorage';

// Redux
import fetchInitialData from 'features/main/thunks/fetchInitialData';
import { initialState as initialAppDataState } from 'features/main/reducers/appDataReducer';

// Utils
import authConfig, { db } from 'config/firebase';

// Types
import type { OptionalUser } from 'config/firebase';
import type { UserDataStateDb } from 'features/main/reducers/userDataReducer';

type UserAuthInfo = {
  email: string;
  password: string;
};

type AuthInfo = {
  userAuthInfo: UserAuthInfo;
  authUser: string;
  handleSetUserAuthInfo: (e: any) => void;
  logIn: (e: any) => void;
  signUp: (e: any) => void;
  logOut: () => void;
};

const useAuth = (): AuthInfo => {
  const dispatch = useDispatch();

  const [storedValue, handleSetStoredValue] = useLocalStorage('authUser', '');

  const [userAuthInfo, setUserAuthInfo] = useState<UserAuthInfo>({
    email: '',
    password: ''
  });

  const handleSetUserAuthInfo = (e: ChangeEvent): void => {
    setUserAuthInfo({
      ...userAuthInfo,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value
    });
  };

  const logIn = async (e: Event): Promise<void> => {
    e.preventDefault();

    try {
      await authConfig
        .auth()
        .signInWithEmailAndPassword(userAuthInfo.email, userAuthInfo.password);
    } catch (error) {
      throw new Error(`Log in error: ${error}`);
    }
  };

  const signUp = async (e: Event): Promise<void> => {
    e.preventDefault();
    const usersCollection = db.collection('users');

    try {
      const newUserData = await authConfig
        .auth()
        .createUserWithEmailAndPassword(
          userAuthInfo.email,
          userAuthInfo.password
        );

      const userId = newUserData?.user?.uid || '';
      const accountCreationTime =
        newUserData?.user?.metadata.creationTime || '';
      const { email } = userAuthInfo;

      const userData: UserDataStateDb = {
        email,
        userId,
        accountCreationTime
      };

      await usersCollection.add({
        userData,
        appData: initialAppDataState
      });
    } catch (error) {
      throw new Error(`Sign up error: ${error}`);
    }
  };

  const logOut = (): void => {
    try {
      authConfig.auth().signOut();
    } catch (error) {
      throw new Error(`Sign up error: ${error}`);
    }
  };

  const authListener = (): void => {
    authConfig.auth().onAuthStateChanged((user: OptionalUser): void => {
      if (user) {
        // Store authUser in localStorage
        handleSetStoredValue(user.uid);

        // Fetch initial data
        dispatch(fetchInitialData(user.uid));
      } else {
        handleSetStoredValue('');
      }
    });
  };

  useEffect((): void => {
    authListener();
  }, []);

  return {
    userAuthInfo,
    handleSetUserAuthInfo,
    logIn,
    signUp,
    logOut,
    authUser: storedValue
  };
};

export default useAuth;
