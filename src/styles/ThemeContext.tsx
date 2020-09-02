import React, { createContext, useEffect, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Styles
import theme from 'styles/themes/theme';

// Types
import type { Dispatch, SetStateAction, ReactElement } from 'react';

type ThemeContextData = {
  dark: boolean;
  toggle: () => void;
};

type DarkMode = {
  dark: boolean;
  hasThemeMounted: boolean;
};

const defaultContextData: ThemeContextData = {
  dark: false,
  toggle: (): void => {}
};

const ThemeContext = createContext(defaultContextData);
const useTheme = (): ThemeContextData => useContext(ThemeContext);

const useEffectDarkMode = (): [DarkMode, Dispatch<SetStateAction<DarkMode>>] => {
  const [themeState, setThemeState] = useState<DarkMode>({
    dark: false,
    hasThemeMounted: false
  });

  useEffect((): void => {
    const lsDark = localStorage.getItem('dark') === 'true';

    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }: { children: ReactElement }): ReactElement => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = (): void => {
    const dark = !themeState.dark;
    localStorage.setItem('dark', JSON.stringify(dark));

    setThemeState({ ...themeState, dark });
  };

  const computedTheme = themeState.dark ? theme('dark') : theme('light');

  return (
    <StyledThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export { useTheme };

export default ThemeProvider;
