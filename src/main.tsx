import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalContextProvider } from './contex/GlobalContext';
import { ThemeContextProvider } from './contex/ThemeModeContext';
import './global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
