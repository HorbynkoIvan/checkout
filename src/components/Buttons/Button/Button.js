import React from 'react';
import { node, bool, func, string } from 'prop-types';

import { ScButton } from './styled';

export const Button = ({
  children,
  disabled,
  onClick,
  bgColor,
  textColor,
  borderColor = 'transparent',
  lg,
  md,
  sm,
  className,
}) => (
  <ScButton
    className={className}
    disabled={disabled}
    onClick={onClick}
    bgColor={bgColor}
    textColor={textColor}
    borderColor={borderColor}
    lg={lg}
    md={md}
    sm={sm}
  >
    {children}
  </ScButton>
);

Button.propTypes = {
  children: node.isRequired,
  className: string,
  disabled: bool,
  onClick: func.isRequired,
  bgColor: string,
  textColor: string,
  borderColor: string,
  lg: bool,
  md: bool,
  sm: bool,
};
