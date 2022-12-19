import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './contex/AuthContext';
import { GlobalContextProvider } from './contex/GlobalContext';
import { ThemeContextProvider } from './contex/ThemeModeContext';
import { Provider } from 'react-redux';
import './global.scss';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <GlobalContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </GlobalContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
