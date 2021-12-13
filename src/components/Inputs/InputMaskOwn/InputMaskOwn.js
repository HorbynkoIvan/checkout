import React from 'react';

import { string, object, func, any, bool, oneOfType } from 'prop-types';
import {
  InputMaskBlockStyled,
  InputMaskStyled,
  InputMaskLabelStyled,
  InputMaskWrapStyled,
  InputMaskErrorSC,
  InputCodeSC,
} from './styled';
import { InputErrorCrossStyled } from '../Input/styled';

export const InputMaskOwn = ({
  id,
  name,
  type,
  label,
  error,
  errorText,
  placeholder,
  phoneValue,
  onChange,
  onBlur,
  onFocus,
  autoComplete,
  isPhoneActivated,
}) => (
  <InputMaskBlockStyled>
    <div className="row">
      <InputMaskLabelStyled htmlFor={id}>{label}</InputMaskLabelStyled>
    </div>
    <InputMaskWrapStyled>
      <InputCodeSC isPhoneActivated={isPhoneActivated}>+380</InputCodeSC>
      {error && <InputErrorCrossStyled />}
      <InputMaskStyled
        autoComplete={autoComplete || 'off'}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={phoneValue}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        isPhoneActivated={isPhoneActivated}
        error={error ? 1 : 0}
      />
    </InputMaskWrapStyled>

    {error && errorText ? (
      <InputMaskErrorSC>{errorText}</InputMaskErrorSC>
    ) : null}
  </InputMaskBlockStyled>
);

InputMaskOwn.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  errorText: string,
  phoneValue: any,
  label: string,
  error: oneOfType([bool, object]),
  placeholder: string,
  onChange: func,
  onBlur: func,
  onFocus: func,
  autoComplete: any,
  isPhoneActivated: bool,
};
