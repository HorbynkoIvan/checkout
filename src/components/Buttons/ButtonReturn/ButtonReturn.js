import React from 'react';
import { func, string } from 'prop-types';

import { ButtonReturnStyled, ChevronLeftStyled } from './styled';

export const ButtonReturn = ({ onClick, svgColor, children }) => (
  <ButtonReturnStyled type="button" onClick={onClick}>
    <ChevronLeftStyled color={svgColor} />
    <span>{children}</span>
  </ButtonReturnStyled>
);

ButtonReturn.propTypes = {
  onClick: func.isRequired,
  svgColor: string,
  children: string,
};
