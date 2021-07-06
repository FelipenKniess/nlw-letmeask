import React from 'react';

import { AuthContextProvider } from '../contexts/AuthContext';
import { ToastProvider } from './useToast';

const AppProvider:React.FC = ({children}) => (
    <AuthContextProvider>
        <ToastProvider>
            {children}
        </ToastProvider>
    </AuthContextProvider>
)
export default AppProvider;