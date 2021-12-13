import React, { useContext, useState } from 'react';
import { func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  CartOrderEnterBlockSC,
  CartOrderPampiksBlockSC,
  CartOrderStyled,
  CartOrderTooltipBlockSC,
} from './styled';
import Tooltip from '../Tooltip';
import TotalBlock from '../TotalBlock';
import Button from '../Buttons/Button';
import UseCoupon from '../UseCoupon';
import UsePampiks from '../UsePampiks';
import ButtonAsLink from '../Buttons/ButtonAsLink';
import { CartContext } from '../../context';
import { pageLangParamRedesign } from '../../helpers/helpers';

export const CartOrder = ({ modalClickhandler }) => {
  const { t } = useTranslation();
  const [isOpenBlockPampiks, setIsOpenBlockPampiks] = useState(false);
  const cartContext = useContext(CartContext);
  const cartState = cartContext.state.dataCart;
  return (
    <CartOrderStyled>
      <UseCoupon className="use_coupon" />

      <UsePampiks setIsOpenBlockPampiks={setIsOpenBlockPampiks} />

      {!cartState.customer && (
        <CartOrderEnterBlockSC>
          <ButtonAsLink className="link" onClick={modalClickhandler}>
            {t('Войдите в аккаунт')}
          </ButtonAsLink>
          , {t('чтобы воспользоваться')}
        </CartOrderEnterBlockSC>
      )}

      {!!cartState.customer &&
      !isOpenBlockPampiks &&
      cartState.loyaltySpentUah === 0 ? (
        <CartOrderPampiksBlockSC>
          {t('На счету')}{' '}
          <span>
            <span>{cartState.loyaltyPointsSumUah} грн</span> (
            {cartState.loyaltyPointsSum} {t('пампиков')} )
          </span>
        </CartOrderPampiksBlockSC>
      ) : null}

      <TotalBlock />

      <CartOrderTooltipBlockSC>
        <span>
          {t('Начислим')}
          <span>{` ${cartState.loyaltyTotal} ${t('пампиков')}`}</span>{' '}
          {t('за покупку')}
        </span>

        <Tooltip
          rightTooltip
          tooltipText={t(
            'Бонусная программа Pampik Family. Пампики можно будет использовать как скидку при следующей покупке из расчета 100 пампиков = 1 грн.'
          )}
        />
      </CartOrderTooltipBlockSC>

      <Button
        className="btn"
        onClick={() => {
          window.location.href = `${pageLangParamRedesign}cart/checkout`;
        }}
      >
        {t('Оформить заказ')}
      </Button>
    </CartOrderStyled>
  );
};

CartOrder.propTypes = {
  modalClickhandler: func,
};
