import { useState, ChangeEvent } from 'react';

// Utils
import authConfig, { db } from 'config/firebase';

type UserAuthInfo = {
  email: string;
  password: string;
};

type AuthInfo = {
  userAuthInfo: UserAuthInfo;
  setUserAuthInfoHandler: (e: any) => void;
  logIn: (e: any) => void;
  signUp: (e: any) => void;
  logOut: () => void;
};

const useAuthInfo = (): AuthInfo => {
  const [userAuthInfo, setUserAuthInfo] = useState<UserAuthInfo>({
    email: '',
    password: ''
  });

  const setUserAuthInfoHandler = (e: ChangeEvent): void => {
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
      .then((u) => {})
      .catch((error: string): never => {
        throw new Error(`Log in error: ${error}`);
      });
  };

  const signUp = (e: any): void => {
    e.preventDefault();
    authConfig
      .auth()
      .createUserWithEmailAndPassword(userAuthInfo.email, userAuthInfo.password)
      .then((u: any): void => {
        db.collection('users').add({
          email: userAuthInfo.email,
          userId: u.user && u.user.uid
        });

        // Set initial data
        // setInitialData(u?.user?.uid);
      })
      .catch((error: string): never => {
        throw new Error(`Sign up error: ${error}`);
      });
  };

  const logOut = (): void => {
    authConfig.auth().signOut();
  };

  return {
    userAuthInfo,
    setUserAuthInfoHandler,
    logIn,
    signUp,
    logOut
  };
};

export default useAuthInfo;
