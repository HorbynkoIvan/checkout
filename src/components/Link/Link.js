import React from 'react';
import { string, node } from 'prop-types';
import { ScLink } from './styled';

export const Link = ({ children, url, icon, className }) => (
  <ScLink as="a" href={url} className={className}>
    {icon && icon}
    <span>{children}</span>
  </ScLink>
);

Link.propTypes = {
  children: node.isRequired,
  url: string.isRequired,
  icon: node,
  className: string,
};
