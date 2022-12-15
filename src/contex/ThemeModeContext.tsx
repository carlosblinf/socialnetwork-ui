/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { SocialStorage } from '../utils/types';

export type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: string;
  toggle: () => void;
};

const ThemeContext = createContext({} as ThemeContextType);

export function useTheme() {
  return useContext(ThemeContext);
}

// Detecting the default theme
const isBrowserDefaultDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const getDefaultTheme = (): string => {
  const localStorageTheme = localStorage.getItem(SocialStorage.SOCIAL_THEME);
  const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
  return localStorageTheme || browserDefault;
};

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(getDefaultTheme());

  const toggle = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    localStorage.setItem(SocialStorage.SOCIAL_THEME, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
