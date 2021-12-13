import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/css/theme';

import '../../locales/i18next';

import { GlobalStyle } from '../../assets/css/GlobalStyle';
import { Cart } from './src/Cart';
import { cartReducer } from '../../state/cart/cartReducer';
import { initialStateCart } from '../../state/cart/initialState';
import { CartContext } from '../../context';
import { cartActionsCreator } from '../../state/cart/actionCreator';
import { getActionWithContext } from '../../state/cart/actionHelpers';

function initState(state) {
  return { ...state };
}

const CartApp = () => {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialStateCart,
    initState
  );
  const actions = getActionWithContext(
    useContext(CartContext),
    dispatch,
    cartActionsCreator
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CartContext.Provider value={{ state, dispatch, ...actions }}>
        <Cart />
      </CartContext.Provider>
    </ThemeProvider>
  );
};
ReactDOM.render(<CartApp />, document.getElementById('root'));
