import React from 'react';
import { bool, string, oneOfType, node, arrayOf } from 'prop-types';
import { SuccessBlockSC } from './styled';
import { ReactComponent as DoneIcon } from '../../assets/img/done.svg';
import { ReactComponent as NotDoneIcon } from '../../assets/img/not-done.svg';

export const SuccessBlock = ({ className, children, error }) => (
  <SuccessBlockSC className={className} error={error}>
    {!error ? <DoneIcon /> : <NotDoneIcon />}
    <div>{children}</div>
  </SuccessBlockSC>
);

SuccessBlock.propTypes = {
  children: oneOfType([string, node, arrayOf(node)]).isRequired,
  className: string,
  error: bool,
};
