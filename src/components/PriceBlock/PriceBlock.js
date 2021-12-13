import React from 'react';

import { bool, any, number } from 'prop-types';
import { ScPriceBlock } from './styled';

export const PriceBlock = ({
  price,
  priceOld,
  directionColumn,
  directionRowReverse,
  quantity,
  isQuantityHide,
  isOldPriceProgressive,
}) => (
  <ScPriceBlock
    directionColumn={directionColumn}
    directionRowReverse={directionRowReverse}
    className="price_block"
  >
    <p>{`${quantity * price} грн`}</p>

    {priceOld && priceOld > price ? (
      <div>
        {`${isOldPriceProgressive ? quantity * priceOld : priceOld} грн`}
      </div>
    ) : null}

    {!isQuantityHide && quantity > 1 ? (
      <section>{`${quantity} x ${price}  грн`}</section>
    ) : null}
  </ScPriceBlock>
);

PriceBlock.propTypes = {
  price: any.isRequired,
  priceOld: any,
  quantity: number.isRequired,
  directionColumn: bool,
  directionRowReverse: bool,
  isQuantityHide: bool,
  isOldPriceProgressive: bool,
};
