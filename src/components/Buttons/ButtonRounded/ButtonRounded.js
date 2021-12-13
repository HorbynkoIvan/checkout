import React from 'react';
import { func, string } from 'prop-types';

import { ButtonRoundedSC } from './styled';

export const ButtonRounded = ({ onClick, srcImage }) => (
  <ButtonRoundedSC type="button" onClick={onClick} className="social_btn">
    <img src={srcImage} alt="social" />
  </ButtonRoundedSC>
);

ButtonRounded.propTypes = {
  onClick: func.isRequired,
  srcImage: string.isRequired,
};
