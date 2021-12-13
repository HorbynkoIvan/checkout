import React from 'react';

import { bool, func, node, number, oneOfType, string } from 'prop-types';
import { BlockRadioSC } from './styled';

export const BlockRadio = ({
  id,
  isActive,
  clickHandler,
  title,
  className,
  children,
}) => (
  <BlockRadioSC
    id={id}
    onClick={clickHandler}
    className={`${isActive && 'active'} ${className}`}
  >
    <p className="title">{title}</p>
    {children}
  </BlockRadioSC>
);

BlockRadio.propTypes = {
  children: oneOfType([string, node]),
  isActive: bool,
  id: oneOfType([number, string]),
  clickHandler: func,
  title: string,
  className: string,
};
