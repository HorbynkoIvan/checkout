import React from 'react';
import { useTranslation } from 'react-i18next';
import { SpecialInfoBlockOversizedCheckoutSC } from './styled';
import { ReactComponent as WarningIcon } from '../../assets/img/warning-fill-icon.svg';

export const SpecialInfoBlockOversizedCheckout = () => {
  const { t } = useTranslation();

  return (
    <SpecialInfoBlockOversizedCheckoutSC>
      <WarningIcon />

      <span>{t('Дату доставки товаров под заказ сообщит оператор')}</span>
    </SpecialInfoBlockOversizedCheckoutSC>
  );
};
