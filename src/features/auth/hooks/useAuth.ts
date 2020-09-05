import { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

// Hooks
import useLocalStorage from 'hooks/useLocalStorage';

// Redux
import fetchInitialData from 'features/main/thunks/fetchInitialData';

// Utils
import authConfig, { db } from 'config/firebase';

// Types
import type { OptionalUser, UserCredential } from 'config/firebase';

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

  const logIn = (e: any): void => {
    e.preventDefault();

    authConfig
      .auth()
      .signInWithEmailAndPassword(userAuthInfo.email, userAuthInfo.password)
      .then((u: UserCredential): void => {})
      .catch((error: string): never => {
        throw new Error(`Log in error: ${error}`);
      });
  };

  const signUp = (e: any): void => {
    e.preventDefault();
    authConfig
      .auth()
      .createUserWithEmailAndPassword(userAuthInfo.email, userAuthInfo.password)
      .then((u: UserCredential): void => {
        const userData = {
          email: userAuthInfo.email,
          userId: u?.user?.uid || '',
          accountCreated: u?.user?.metadata.creationTime || ''
        };

        db.collection('users').add({
          userData,
          appData: {
            globalGoals: []
          }
        });
      })
      .catch((error: string): never => {
        throw new Error(`Sign up error: ${error}`);
      });
  };

  const logOut = (): void => {
    authConfig.auth().signOut();
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
