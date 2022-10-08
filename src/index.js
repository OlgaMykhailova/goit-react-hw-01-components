import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import './index.css';

export const theme = {
  colors: {
    black: '#212121',
    white: '#ffffff',
    grey: '#808080',
    lightGrey: '#f4f3f2',
    darkGrey: '#e2e2e2',
    accent: 'darkturquoise',
  },
 };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
