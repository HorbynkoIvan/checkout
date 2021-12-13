import React from 'react';

import { string, object, func, any, bool, oneOfType } from 'prop-types';
import {
  InputMaskBlockStyled,
  InputMaskStyled,
  InputMaskLabelStyled,
  InputMaskWrapStyled,
  InputMaskErrorSC,
} from './styled';
import { InputErrorCrossStyled } from '../Input/styled';

export const InputMask = ({
  id,
  name,
  type,
  mask,
  label,
  maskChar,
  error,
  errorText,
  placeholder,
  phoneValue,
  onChange,
  onBlur,
}) => (
  <InputMaskBlockStyled>
    <div className="row">
      <InputMaskLabelStyled htmlFor={id}>{label}</InputMaskLabelStyled>
    </div>
    <InputMaskWrapStyled>
      {error && <InputErrorCrossStyled />}
      <InputMaskStyled
        name={name}
        type={type}
        placeholder={placeholder}
        value={phoneValue}
        onChange={onChange}
        onBlur={onBlur}
        mask={mask}
        maskChar={maskChar}
        error={error ? 1 : 0}
      />
    </InputMaskWrapStyled>

    {error && errorText ? (
      <InputMaskErrorSC>{errorText}</InputMaskErrorSC>
    ) : null}
  </InputMaskBlockStyled>
);

InputMask.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  mask: string,
  maskChar: string,
  errorText: string,
  phoneValue: any,
  label: string,
  error: oneOfType([bool, object]),
  placeholder: string,
  onChange: func,
  onBlur: func,
};
