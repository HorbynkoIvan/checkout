import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ScTotalBlock, RowStyled, RowBoldStyled, HrStyled } from './styled';
import { CartContext } from '../../context';

export const TotalBlock = () => {
  const { t } = useTranslation();
  const cartContext = useContext(CartContext);
  const {
    quantity,
    subtotalPrice,
    discount,
    discountPromoUah,
    loyaltySpentUah,
    totalPriceWithoutDelivery,
  } = cartContext.state.dataCart;
  return (
    <ScTotalBlock className="total_block">
      <RowStyled>
        <span>
          {`${quantity} ${t('товара на сумму', {
            count: quantity,
          })}`}
        </span>
        <span>{`${subtotalPrice} грн`}</span>
      </RowStyled>

      {discount > 0 && (
        <RowStyled>
          <span>{t('Выгода от скидок')}</span>
          <span>{`- ${discount} грн`}</span>
        </RowStyled>
      )}

      {discountPromoUah > 0 && (
        <RowStyled>
          <span>{t('Промокоды/сертификаты')}</span>
          <span>{`- ${discountPromoUah} грн`}</span>
        </RowStyled>
      )}

      {loyaltySpentUah > 0 && (
        <RowStyled>
          <span>{t('Пампики')}</span>
          <span>{`- ${loyaltySpentUah} грн`}</span>
        </RowStyled>
      )}

      <HrStyled />

      <RowBoldStyled>
        <span>{t('Итого')}</span>
        <span>{`${totalPriceWithoutDelivery} грн`}</span>
      </RowBoldStyled>
    </ScTotalBlock>
  );
};
