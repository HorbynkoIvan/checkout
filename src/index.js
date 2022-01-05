import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { CheckoutPage } from './pages/checkout';
import { ThankYouPage } from './pages/thanks/ThankYouPage';
import { theme } from './theme/theme';
import { GlobalStyle } from './theme/GlobalStyle';

import './locales/i18next';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CheckoutPage />
          {/*<ThankYouPage />*/}
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
