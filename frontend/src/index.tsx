import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import GlobalStyles from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <>
      <ThemeProvider theme={GlobalStyles}>
        <App />
      </ThemeProvider>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
