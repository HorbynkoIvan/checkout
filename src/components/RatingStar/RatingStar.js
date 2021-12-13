import React from 'react';
import { number } from 'prop-types';
import { ScRatingStar } from './styled';

import { ReactComponent as StarIcon } from '../../assets/img/star-icon.svg';
import { ReactComponent as StarActiveIcon } from '../../assets/img/star-active-icon.svg';

export const RatingStar = ({ total = 5, rating = 1 }) => {
  const elements = [];
  (() => {
    for (let i = 0; i < total; i++) {
      if (i < rating) {
        elements.push(<StarActiveIcon key={i} />);
      } else {
        elements.push(<StarIcon key={i} />);
      }
    }
  })();
  return <ScRatingStar>{elements}</ScRatingStar>;
};

RatingStar.propTypes = {
  total: number,
  rating: number,
};
