import { useEffect } from 'react';

// hooks
import useLocalStorage from 'hooks/useLocalStorage';

// utils
import authConfig from 'config/firebase';

type User = {
  uid: string;
};

type Auth = {
  authUser: string;
};

const useAuth = (): Auth => {
  const [storedValue, handleSetStoredValue] = useLocalStorage('authUser', '');

  const authListener = (): void => {
    authConfig.auth().onAuthStateChanged((user: User | null): void => {
      if (user) {
        handleSetStoredValue(user.uid);
      } else {
        handleSetStoredValue('');
      }
    });
  };

  useEffect((): void => {
    authListener();
  }, []);

  return {
    authUser: storedValue
  };
};

export type { User };

export default useAuth;
