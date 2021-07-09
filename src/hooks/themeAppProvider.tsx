import React, {createContext} from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';

import usePersistedState from '../utils/usePersistedState';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type ThemeContextType = {
    toggleTheme(): void;
  }

export const ThemeContextAll = createContext({} as ThemeContextType);

const ThemeAppProvider:React.FC = ({ children }) => {

    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };

    return (
        <ThemeContextAll.Provider value={{toggleTheme}}>
            <ThemeProvider theme={theme} >
                {children}
            </ThemeProvider>
        </ThemeContextAll.Provider>
    )
}

export default ThemeAppProvider;
