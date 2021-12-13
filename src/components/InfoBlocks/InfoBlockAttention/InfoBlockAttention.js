import React from 'react';
import { any } from 'prop-types';
import { InfoBlockAttentionSC } from './styled';

export const InfoBlockAttention = ({ children }) => (
  <InfoBlockAttentionSC>{children}</InfoBlockAttentionSC>
);

InfoBlockAttention.propTypes = {
  children: any,
};
