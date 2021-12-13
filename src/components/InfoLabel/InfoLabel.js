import React from 'react';
import { bool, string } from 'prop-types';
import { ScInfoLabel } from './styled';
import { ReactComponent as LabelPresentIcon } from '../../assets/img/present-icon.svg';
import { ReactComponent as DeliveryIcon } from '../../assets/img/delivery-icon.svg';
import { ReactComponent as WarningIcon } from '../../assets/img/warning-icon.svg';
import { ReactComponent as BonusesIcon } from '../../assets/img/bonuses.svg';
import { ReactComponent as ReviewsIcon } from '../../assets/img/reviews.svg';

export const InfoLabel = ({
  className,
  present,
  delivery,
  warning,
  review,
  bonus,
  big,
}) => (
  <ScInfoLabel
    present={present}
    delivery={delivery}
    warning={warning}
    className={className}
    big={big}
  >
    {present && <LabelPresentIcon />}
    {delivery && <DeliveryIcon />}
    {warning && <WarningIcon />}
    {bonus && <BonusesIcon />}
    {review && <ReviewsIcon />}
  </ScInfoLabel>
);

InfoLabel.propTypes = {
  present: bool,
  delivery: bool,
  warning: bool,
  bonus: bool,
  review: bool,
  big: bool,
  className: string,
};
