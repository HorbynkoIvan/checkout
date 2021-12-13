import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmptyCartSC } from './styled';

import { ReactComponent as EmptyCartIcon } from '../../assets/img/cart-empty.svg';

export const EmptyCart = () => {
  const { t, i18n } = useTranslation();
  return (
    <EmptyCartSC>
      <EmptyCartIcon />

      <p>{t('Ваша корзина пуста')}</p>

      <a href={i18n.language === 'uk-UA' ? '/ua' : '/'}>
        {t('Добавить товары в корзину')}
      </a>
    </EmptyCartSC>
  );
};
