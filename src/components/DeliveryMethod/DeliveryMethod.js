import React, { useContext, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { ru, uk } from 'date-fns/locale';
import { DeliveryMethodStyled, RowStyled } from './styled';
import DeliveryAddress from '../DeliveryAddress';
import RegionSelector from '../Selectors/RegionSelector';
import DeliverySelector from '../Selectors/DeliverySelector';
import DeliveryTime from '../DeliveryTime';
import DeliveryDepartment from '../DeliveryDepartment';
import { CheckoutContext } from '../../context';
import SpecialInfoBlockShipping from '../SpecialInfoBlocks/SpecialInfoBlockShipping';
import { COURIER_SERVICE_ID, IPOST_ID } from '../../constants';

export const DeliveryMethod = () => {
  const { i18n } = useTranslation();
  const {
    checkoutData: {
      hasPreorderedProducts,
      deliveryMethodType,
      amountForFreeShipping,
      deliveryMethodsAPI,
    },
    formData: { deliveryMethod },
  } = useContext(CheckoutContext);
  const [isDeliveryInterval, showDeliveryInterval] = useState(false);

  useEffect(() => {
    // check if not курьерскакя доставка dont show intervals
    if (deliveryMethod === COURIER_SERVICE_ID) {
      const courierServiceMethod = deliveryMethodsAPI.find(
        (item) => item.id === COURIER_SERVICE_ID
      );
      if (
        courierServiceMethod &&
        Object.keys(courierServiceMethod.deliveryDates).length > 0 &&
        Object.keys(courierServiceMethod?.deliveryDates?.dateList).length > 0
      ) {
        return showDeliveryInterval(true);
      }
    }
    return showDeliveryInterval(false);
  }, [deliveryMethod, deliveryMethodsAPI]);

  return (
    <DeliveryMethodStyled>
      <RowStyled>
        <RegionSelector />
      </RowStyled>
      <RowStyled>
        <DeliverySelector />
      </RowStyled>

      {amountForFreeShipping > 0 && deliveryMethod !== IPOST_ID && (
        <SpecialInfoBlockShipping
          amountForFreeShipping={amountForFreeShipping}
          linkUrl={i18n.language === 'ru-RU' ? '/' : '/ua'}
          simpleBlock // remove delete button and add some additional style, using on checkout
        />
      )}

      {deliveryMethodType !== 'department' ? (
        <>
          <DeliveryAddress />
          {/* show DeliveryTime if there is no "ЗТ" in cart */}
          {!hasPreorderedProducts && isDeliveryInterval && <DeliveryTime />}
        </>
      ) : (
        <DeliveryDepartment />
      )}
    </DeliveryMethodStyled>
  );
};
