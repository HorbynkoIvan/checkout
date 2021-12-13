import React, { useContext, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { DeliverySelectorStyled, SelectStyled } from './styled';
import { TitleLabel } from '../../Title';
import { CheckoutContext } from '../../../context';
import { COURIER_SERVICE_ID } from '../../../constants';
import { updateCartOnCheckout } from '../../../helpers/helpersApi';
import { ServiceDict } from '../../../services/ServiceDict';

export const DeliverySelector = () => {
  const { t } = useTranslation();
  const {
    checkoutData: { deliveryMethodsAPI, hasPreorderedProducts },
    setFormData,
    setCheckoutData,
    formData,
  } = useContext(CheckoutContext);
  const [deliveriesPrepared, setDeliveriesPrepared] = useState([]);
  const [deliveryMethod, selectDeliveryMethod] = useState();

  useEffect(() => {
    // prepare array of options and set initial
    const prepared = deliveryMethodsAPI.map((item, i) => ({
      id: item.id,
      value: item.title,
      label: (
        <div className="select_label" key={i}>
          <div className="select_label_top">
            <img src={item.logoUrl} alt={item.title} />
            {item.title}
          </div>
          <div className="select_label_bottom">{item.description}</div>
        </div>
      ),
      description: item.description,
      deliveryMethodType: item.deliveryMethodType,
    }));

    const initialSelectedOption = prepared.find(
      (item) => item.id === COURIER_SERVICE_ID
    );

    setDeliveriesPrepared(prepared);
    selectDeliveryMethod(initialSelectedOption); // set initial selected option
    setFormData({ deliveryMethod: initialSelectedOption?.id });
    setCheckoutData({
      deliveryMethodType: initialSelectedOption?.deliveryMethodType,
    });
  }, [deliveryMethodsAPI]);

  const handleChange = async (option) => {
    setFormData({ deliveryMethod: option.id, street: '' });
    setCheckoutData({ deliveryMethodType: option.deliveryMethodType });

    // set selected option after onchange
    const deliveryMethodSelected = deliveriesPrepared.find(
      (item) => item.id === option.id
    );
    selectDeliveryMethod(deliveryMethodSelected);

    // update cart
    const data = await updateCartOnCheckout({
      responsible_delivery: option.id,
    });

    try {
      const response = await ServiceDict.getPaymentMethods();
      setCheckoutData({ paymentMethods: response });
    } catch (e) {
      console.log(e);
    }
    return data && setCheckoutData(data);
  };

  return (
    <DeliverySelectorStyled>
      <TitleLabel>{t('Способ доставки')}</TitleLabel>
      <SelectStyled
        // defaultMenuIsOpen
        className="select_delivery"
        classNamePrefix="select"
        isDisabled={false}
        isLoading={false}
        isSearchable={false}
        options={deliveriesPrepared}
        value={deliveryMethod}
        onChange={handleChange}
      />
      {deliveryMethod?.description && (
        <div className="description">{deliveryMethod.description}</div>
      )}
    </DeliverySelectorStyled>
  );
};
