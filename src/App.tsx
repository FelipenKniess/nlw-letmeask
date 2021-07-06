import React from 'react';
import Routes from './routes';
import GlobalStyles from './styles/global';
import {BrowserRouter} from 'react-router-dom';
import AppProvider from './hooks/appProvider';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <GlobalStyles />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
