import React from 'react';

import { AuthContextProvider } from '../contexts/AuthContext';
import { ToastProvider } from './useToast';
import ThemeProvider from './themeAppProvider';

const AppProvider:React.FC = ({children}) => (
    <AuthContextProvider>
        <ThemeProvider>
            <ToastProvider>
                {children}
            </ToastProvider>
        </ThemeProvider>
    </AuthContextProvider>
)
export default AppProvider;