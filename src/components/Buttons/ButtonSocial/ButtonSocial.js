import React from 'react';
import { func, string } from 'prop-types';

import { ButtonSocialStyled } from './styled';

export const ButtonSocial = ({ onClick, nameSocial, srcImage }) => (
  <ButtonSocialStyled type="button" onClick={onClick} className="social_btn">
    <img src={srcImage} alt={nameSocial} />
    <span>{nameSocial}</span>
  </ButtonSocialStyled>
);

ButtonSocial.propTypes = {
  onClick: func.isRequired,
  nameSocial: string.isRequired,
  srcImage: string.isRequired,
};
