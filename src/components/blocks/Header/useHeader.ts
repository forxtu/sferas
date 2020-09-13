import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

// Hooks
import useAuth from 'features/auth/hooks/useAuth';

// Utils
import { RouteUrl } from 'routes';

// Styles
import { useTheme } from 'styles/ThemeContext';

type UseHeader = {
  toggleTheme: () => void;
  logOut: () => void;
  handleRedirectToHomePage: () => void;
};

const useHeader = (): UseHeader => {
  const { toggle } = useTheme();
  const { logOut } = useAuth();
  const history = useHistory();

  const handleRedirectToHomePage = useCallback((): void => {
    history.push(RouteUrl.HomePagePath);
  }, []);

  return {
    toggleTheme: toggle,
    logOut,
    handleRedirectToHomePage
  };
};

export default useHeader;
