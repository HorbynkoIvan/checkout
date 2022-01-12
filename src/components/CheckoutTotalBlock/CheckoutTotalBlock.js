import React, { useContext } from 'react';
import { string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ScTotalBlock, RowStyled, RowBoldStyled, HrStyled } from './styled';
import { CheckoutContext } from '../../context';

export const CheckoutTotalBlock = ({ className }) => {
  const { t } = useTranslation();
  const {
    checkoutData: { totalPriceWithoutDelivery, shippingAmount, totalPrice },
  } = useContext(CheckoutContext);

  return (
    <ScTotalBlock className={className}>
      <RowStyled>
        <span>{t('Сумма заказа')}</span>
          {totalPriceWithoutDelivery && <span>{`${totalPriceWithoutDelivery} грн`}</span>}
      </RowStyled>
      <RowStyled>
        <span>{t('Доставка')}</span>
        {shippingAmount ? (
          <span>{`${shippingAmount} грн`}</span>
        ) : (
            totalPrice && <span>{t('Бесплатно')}</span>
        )}
      </RowStyled>
      <HrStyled />
      <RowBoldStyled>
        <span>{t('Итого к оплате')}</span>
          {totalPrice && <span>{`${totalPrice} грн`}</span>}
      </RowBoldStyled>
    </ScTotalBlock>
  );
};

CheckoutTotalBlock.propTypes = {
  className: string,
};
