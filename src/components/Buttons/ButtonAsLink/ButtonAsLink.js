import React from 'react';
import { element, func, string, node } from 'prop-types';
import { ScButtonAsLink } from './styled';

export const ButtonAsLink = ({ children, icon, onClick, className }) => (
  <ScButtonAsLink onClick={onClick} className={className}>
    {icon && icon}
    <span>{children}</span>
  </ScButtonAsLink>
);
ButtonAsLink.propTypes = {
  className: string,
  children: node,
  icon: element,
  onClick: func,
};
