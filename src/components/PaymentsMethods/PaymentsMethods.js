import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ScPaymentsMethods } from './styled';
import { ButtonRadio } from '../Buttons/ButtonRadio/ButtonRadio';
import { TitleBlock } from '../Title';
import { CheckoutContext } from '../../context';
import { ServiceDict } from '../../services/ServiceDict';
import { updateCartOnCheckout } from '../../helpers/helpersApi';
import { Preloader } from '../Preloader/Preloader';

// const paymentsDataMock = [
//   { id: 0, title: 'Наличными', disabled: false, description: '' },
//   {
//     id: 10,
//     title: 'Картой “Пакунок Малюка”',
//     disabled: true,
//     description:
//       'Упс, нельзя оплатить заказ, так так в корзине есть товары не из раздела «Пакунок малюка»',
//   },
//   {
//     id: 17,
//     title: 'Visa/Mastercard',
//     disabled: false,
//     description: '',
//   },
//   {
//     id: 3,
//     title: 'Перевод на расчетный счет',
//     disabled: false,
//     description: 'Оплата после подтверждение заказа оператором',
//   },
// ];

export const PaymentsMethods = () => {
  const { t } = useTranslation();
  const { formData, checkoutData, setFormData, setCheckoutData } = useContext(
    CheckoutContext
  );
  const [checked, setChecked] = useState(0);
  const [isShowPreloader, setIsShowPreloader] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await ServiceDict.getPaymentMethods();
        setCheckoutData({ paymentMethods: response });
      } catch (e) {
        console.log('ServiceDict.getPaymentMethods ', e);
      }
    })();
  }, []);

  useEffect(() => {
    if (
      (formData.paymentMethod || formData.paymentMethod === 0) &&
      checkoutData.paymentMethods.length > 0
    ) {
      const paymentMethodLoaded = checkoutData.paymentMethods.find(
        (item) => item.id === checkoutData.paymentMethod
      );

      if (paymentMethodLoaded === undefined) {
        return setChecked(checkoutData.paymentMethods[0].id);
      }

      if (paymentMethodLoaded.enabled) {
        setChecked(paymentMethodLoaded.id);
        return setFormData({ paymentMethod: paymentMethodLoaded.id });
      }

      return setChecked(checkoutData.paymentMethods[0].id);
    }
  }, [
    checkoutData.paymentMethod,
    checkoutData.paymentMethods,
    formData.paymentMethod,
  ]);

  const clickHandler = async (method) => {
    if (!method.enabled) return;
    setIsShowPreloader(true);
    setFormData({ paymentMethod: method.id });

    // update cart
    const data = await updateCartOnCheckout({ payment_method: method.id });
    setChecked(data.paymentMethod);
    setIsShowPreloader(false);
    return data && setCheckoutData(data);
  };

  const renderItems = () =>
    checkoutData.paymentMethods.map((method) => (
      <ButtonRadio
        key={method.id}
        id={method.id}
        isActive={checked === method.id}
        clickHandler={() => clickHandler(method)}
        description={method.description}
        disabled={!method.enabled}
      >
        {method.title}
      </ButtonRadio>
    ));

  return (
    <ScPaymentsMethods>
      {isShowPreloader && <Preloader />}

      <TitleBlock>{t('Способы оплаты')}</TitleBlock>

      <section>{checkoutData.paymentMethods ? renderItems() : null}</section>
    </ScPaymentsMethods>
  );
};
