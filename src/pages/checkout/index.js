import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { CheckoutPage } from './src/CheckoutPage';

import { theme } from '../../theme/theme';

import '../../locales/i18next';

import { GlobalStyle } from '/assets/css/GlobalStyle';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <CheckoutPage />
  </ThemeProvider>,
  document.getElementById('root')
);
