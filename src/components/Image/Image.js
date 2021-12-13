import React from 'react';
import { string } from 'prop-types';
import { ImageContainer, Img } from './styled';

export const Image = ({ imageSrc, alt }) => (
  <ImageContainer>
    <Img src={imageSrc} alt={alt} />
  </ImageContainer>
);

Image.propTypes = {
  imageSrc: string,
  alt: string,
};
