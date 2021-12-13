import React, { useContext, useState } from 'react';

import { string, number, array, any, func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  InputBlockSC,
  InputSC,
  InputLabelSC,
  InputErrorSC,
  InputWrapSC,
  InnerInputButtonSC,
} from './styled';
import { ServiceCart } from '../../../services/ServiceCart';
import { CartContext } from '../../../context';

export const InputCoupon = ({
  className,
  id,
  name,
  label,
  error,
  type,
  placeholder,
  value,
  maxLength,
  fetchApplyPromocode,
}) => {
  const cartContext = useContext(CartContext);
  const { t } = useTranslation();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [promocodeValue, setPromocodeValue] = useState('');

  const onChangeHandler = ({ target }) => {
    target.value ? setBtnDisabled(false) : setBtnDisabled(true);
    setPromocodeValue(target.value);
  };

  return (
    <InputBlockSC className={className}>
      {label && (
        <div className="row">
          <InputLabelSC htmlFor={id}>{label}</InputLabelSC>
        </div>
      )}

      <InputWrapSC>
        <InnerInputButtonSC
          onClick={() => fetchApplyPromocode(promocodeValue)}
          disabled={btnDisabled}
          sm
        >
          {t('Применить')}
        </InnerInputButtonSC>
        <InputSC
          id={id}
          name={name}
          maxLength={maxLength}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChangeHandler}
          error={error}
        />
      </InputWrapSC>
      {error && <InputErrorSC>{error[0]}</InputErrorSC>}
    </InputBlockSC>
  );
};

InputCoupon.propTypes = {
  id: string.isRequired,
  className: string,
  name: string.isRequired,
  type: string.isRequired,
  value: any,
  label: string,
  maxLength: number,
  error: array,
  placeholder: string,
  fetchApplyPromocode: func,
};
