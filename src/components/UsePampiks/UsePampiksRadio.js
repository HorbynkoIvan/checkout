import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UsePampiksRadioStyled, InputStyled } from './styled';
import ButtonRadio from '../Buttons/ButtonRadio';
import { CartContext } from '../../context';

export const UsePampiksRadio = () => {
  const [checked, setChecked] = useState('input-all');
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);
  const { t } = useTranslation();
  const cartContext = useContext(CartContext);
  const cartState = cartContext.state.dataCart;

  useEffect(() => {
    if (checked === 'input-all') {
      cartContext.applyLoyaltyPoints(cartState.loyaltyPointsSumUah);

      setInputValue('');
    } else {
      cartContext.applyLoyaltyPoints(0);
    }
  }, [checked]);

  const clickHandler = (target) => {
    setChecked(target);
  };

  const validationHandler = (e) => {
    const value = e.target.value.replace(/^0/g, '');
    if (!/\D/g.test(value)) {
      setInputError(false);
      if (+value > cartState.loyaltyPointsSumUah) {
        setInputValue(cartState.loyaltyPointsSumUah);

        cartContext.applyLoyaltyPoints(cartState.loyaltyPointsSumUah);
      } else {
        setInputValue(+value);

        cartContext.applyLoyaltyPoints(+value);
      }
    } else {
      setInputError(true);
    }
  };

  return (
    <UsePampiksRadioStyled>
      <ButtonRadio
        clickHandler={(e) => clickHandler(e.currentTarget.id)}
        isActive={checked === 'input-all'}
        id="input-all"
      >
        {t('Использовать все')} ({cartState.loyaltyPointsSumUah} грн)
      </ButtonRadio>

      <ButtonRadio
        id="input-count"
        clickHandler={(e) => clickHandler(e.currentTarget.id)}
        isActive={checked === 'input-count'}
      >
        {t('Использовать')}{' '}
        <InputStyled
          value={inputValue}
          onChange={validationHandler}
          type="number"
          id="pampiks"
          name="pampiks"
          error={inputError}
          errorCrossDisabled
        />{' '}
        грн
      </ButtonRadio>

      {inputError && <span>{t('Ввести можно только цифры')}</span>}
    </UsePampiksRadioStyled>
  );
};
