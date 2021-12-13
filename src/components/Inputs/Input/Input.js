import React from 'react';

import {
  bool,
  string,
  number,
  // array,
  func,
  any,
  object,
  oneOfType,
} from 'prop-types';
import {
  InputBlockStyled,
  InputStyled,
  InputLabelStyled,
  InputErrorSC,
  InputErrorCrossStyled,
  InputButtonStyled,
  InputWrapStyled,
  InputShowPasswordStyled,
} from './styled';

export const Input = ({
  className,
  id,
  name,
  label,
  error,
  type,
  placeholder,
  value,
  maxLength,
  min,
  max,

  inputButtonText,
  inputButtonTextOnClick,
  onBlur,
  onChange,
  onClick,
  onFocus,

  togglePassword,
  isShowedPassword,
  errorCrossDisabled = false,
  disable,
  errorText,
  autoComplete,
}) => (
  <InputBlockStyled className={className}>
    {label && (
      <div className="row">
        <InputLabelStyled htmlFor={id} disabled={disable}>
          {label}
        </InputLabelStyled>
        {inputButtonText ? (
          <InputButtonStyled
            disable={disable}
            type="button"
            onClick={inputButtonTextOnClick}
          >
            {inputButtonText}
          </InputButtonStyled>
        ) : null}
      </div>
    )}

    <InputWrapStyled>
      {id === 'password' && (
        <InputShowPasswordStyled
          onClick={togglePassword}
          isShowedPassword={isShowedPassword}
        />
      )}
      {error && !errorCrossDisabled && <InputErrorCrossStyled />}
      <InputStyled
        autoComplete={autoComplete || 'off'}
        id={id}
        name={name}
        maxLength={maxLength}
        min={min}
        max={max}
        placeholder={placeholder}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
        error={error}
        disabled={disable}
      />
    </InputWrapStyled>

    {error && errorText ? <InputErrorSC>{errorText}</InputErrorSC> : null}
  </InputBlockStyled>
);

Input.propTypes = {
  id: string.isRequired,
  className: string,
  name: string.isRequired,
  type: string.isRequired,
  value: any,
  label: string,
  errorText: string,
  maxLength: number,
  max: number,
  min: number,
  error: oneOfType([bool, object]),
  placeholder: string,
  onBlur: func,
  onChange: func,
  onClick: func,
  onFocus: func,
  togglePassword: func,
  inputButtonText: string,
  inputButtonTextOnClick: func,
  isShowedPassword: bool,
  errorCrossDisabled: bool,
  disable: bool,
  autoComplete: any,
};
