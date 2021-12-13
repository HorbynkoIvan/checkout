import React from 'react';
import { arrayOf, node, oneOfType, string, func, bool } from 'prop-types';
import { CheckboxStyled } from './styled';

export const Checkbox = ({ children, name, onChange, checked, className }) => (
  <CheckboxStyled className={className}>
    <input
      id={name}
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
    />

    <label htmlFor={name}>{children}</label>
  </CheckboxStyled>
);

Checkbox.propTypes = {
  children: oneOfType([node, arrayOf(node)], string).isRequired,
  name: string,
  className: string,
  onChange: func.isRequired,
  checked: bool.isRequired,
};
