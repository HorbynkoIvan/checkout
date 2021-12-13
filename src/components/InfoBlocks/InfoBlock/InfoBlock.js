import React from 'react';
import { string, oneOfType, node, arrayOf } from 'prop-types';
import { InfoBlockSC } from './styled';

export const InfoBlock = ({ children, className }) => (
  <InfoBlockSC className={className}>{children}</InfoBlockSC>
);

InfoBlock.propTypes = {
  children: oneOfType([string, node, arrayOf(node)]).isRequired,
  className: string,
};
