import React from 'react';
import { bool, string } from 'prop-types';
import { PreloaderSC } from './styled';

export const Preloader = ({ fixed, borderRadius = 0 }) => (
  <PreloaderSC fixed={fixed} borderRadius={borderRadius}>
    <div />
  </PreloaderSC>
);

Preloader.propTypes = {
  fixed: bool,
  borderRadius: string,
};
