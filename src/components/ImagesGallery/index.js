import React from 'react';
import { array } from 'prop-types';
import { ImagesGallerySC } from './styled';

export const ImagesGallery = ({ data }) => {
  const _temp = [];

  if (data.length) {
    for (let i = 0; i < data.length; i++) {
      _temp.push(data[i]);

      if (data[i].isProductSet) {
        _temp.push(data[i].secondary);
      }
    }
  }

  const items = _temp.slice(0, 4).map((item, i) => (
    <div key={i}>
      <img src={item.image} alt={`product-${i}`} />

      {_temp.length > 4 && i === 3 && <span>{`+${_temp.length - 4}`}</span>}
    </div>
  ));

  return <ImagesGallerySC>{items}</ImagesGallerySC>;
};

ImagesGallery.propTypes = {
  data: array,
};
