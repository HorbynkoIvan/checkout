import React from 'react';
import { bool, func, node, number, oneOfType, string } from 'prop-types';
import { ScButtonRadio } from './styled';

export const ButtonRadio = ({
  children,
  id,
  isActive,
  clickHandler,
  description,
  disabled,
  className,
}) => (
  <ScButtonRadio
    id={id}
    onClick={clickHandler}
    isActive={isActive}
    disabled={disabled}
    className={className}
  >
    <div className="children">{children}</div>
    {description && <span className="description">{description}</span>}
  </ScButtonRadio>
);

ButtonRadio.propTypes = {
  children: oneOfType([string, node]),
  isActive: bool,
  disabled: bool,
  id: oneOfType([number, string]),
  clickHandler: func,
  description: string,
  className: string,
};
