import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { ThankYouPage } from './pages/thanks/ThankYouPage';
import { theme } from './theme/theme';
// import { GlobalStyle } from '/assets/css/GlobalStyle';

import './locales/i18next';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          {/*<GlobalStyle />*/}
          <ThankYouPage />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
