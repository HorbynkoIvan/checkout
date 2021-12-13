import React from 'react';
import { any, func, number, oneOfType, string } from 'prop-types';
import { ScTabs } from './styled';

export const Tabs = ({
  data,
  activeName,
  clickHandler,
  cartProductsQuantity,
}) => {
  const items = data.map((item, i) => (
    <button
      type="button"
      key={i}
      className={item.name === activeName ? 'is-active' : ''}
      onClick={() => clickHandler(item.name)}
    >
      {item.title} {cartProductsQuantity || '0'}
    </button>
  ));

  return <ScTabs>{items}</ScTabs>;
};

Tabs.propTypes = {
  data: any,
  clickHandler: func,
  activeName: any,
  cartProductsQuantity: oneOfType([number, string]),
};
