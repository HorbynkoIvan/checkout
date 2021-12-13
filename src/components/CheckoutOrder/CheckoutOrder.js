import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CheckoutOrderCallMeWrapperSC,
  CheckoutOrderStyled,
  RowTitleStyled,
} from './styled';
import Button from '../Buttons/Button';
import ButtonAsLink from '../Buttons/ButtonAsLink';
import { TitleSub } from '../Title';
import { ImagesGallery } from '../ImagesGallery';
import CheckoutTotalBlock from '../CheckoutTotalBlock';
import { tabletDesktop } from '../../assets/css/theme';
import { CheckoutContext } from '../../context';
import { validationCheckout } from '../../validation/validationCheckout';
import { ServiceCart } from '../../services/ServiceCart';
import { pageLangParamRedesign } from '../../helpers/helpers';
import { Checkbox } from '../Checkbox/Checkbox';

export const CheckoutOrder = () => {
  const { t } = useTranslation();
  const {
    formData,
    setFormData,
    checkoutData,
    setErrorsData,
    errorsData,
  } = useContext(CheckoutContext);

  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('checkoutData', JSON.stringify({}));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorsData(validationCheckout(formData));

    // error checking before submitting form
    const errorsObject = validationCheckout(formData);

    const isError = Object.keys(errorsObject).some(
      (item) => errorsObject[item]
    );

    const inputWithError = document.querySelector(
      `input[name=${Object.keys(errorsObject)[0]}]`
    );

    if (inputWithError && inputWithError.parentNode) {
      window.scrollBy({
        top: inputWithError.parentNode.getBoundingClientRect().top - 130,
        behavior: 'smooth',
      });
    }

    if (isError) return;

    (async () => {
      if (pending !== true) {
        try {
          setPending(true);
          const { data, status } = await ServiceCart.sendFormCheckout(formData);

          if (status === 200) {
            window.localStorage.setItem(
              'checkoutData',
              JSON.stringify({
                isNewUser: data.orderInfo.isNewUser,
                mobile: data.orderInfo.phone,
                email: data.orderInfo.email,
                orderNumber: data.orderInfo.id,
                hasPreorderedProducts: data.orderInfo.hasPreorderedProducts,
                imagesGallery: data.orderInfo.products,
              })
            );

            // redirect to payment or thankyoupage, get url from back
            window.location.href = data.redirectUrl;
          }
        } catch (event) {
          console.log('ServiceCart.sendFormCheckout ', event);
        } finally {
          setPending(false);
        }
      }
    })();
  };

  useEffect(() => {
    if (!errorsData) return;
    const isError = Object.keys(errorsData).some((item) => errorsData[item]);
    setDataIsCorrect(isError);
  }, [errorsData]);

  const setBtnText = () => {
    if (formData.paymentMethod === 3 || formData.paymentMethod === 0) {
      return (
        <>
          {t('Жду, везите уже')}
          <span className="smile">:)</span>
          {/* <span className="smile">🙂</span> */}
        </>
      );
    }
    return t('Перейти к оплате');
  };

  return (
    <CheckoutOrderStyled>
      {tabletDesktop && (
        <>
          <RowTitleStyled>
            <TitleSub>{t('Заказ')}</TitleSub>
            <ButtonAsLink
              className="link"
              onClick={() => {
                window.location.href = `${pageLangParamRedesign}cart`;
              }}
            >
              {t('Редактировать')}
            </ButtonAsLink>
          </RowTitleStyled>
          <ImagesGallery data={checkoutData.products || []} />
        </>
      )}

      {!checkoutData.hasPreorderedProducts && (
        <CheckoutOrderCallMeWrapperSC>
          <Checkbox
            name="callMe"
            onChange={() => setFormData({ callMe: !formData.callMe })}
            checked={formData.callMe}
          >
            {t('Перезвоните мне')}
          </Checkbox>
        </CheckoutOrderCallMeWrapperSC>
      )}

      <CheckoutTotalBlock className="total_block" />

      <Button disabled={dataIsCorrect} className="btn" onClick={handleSubmit}>
        {setBtnText()}
      </Button>

      <div className="user_agreement">
        <p>{t('Подтверждая заказ, я принимаю условия')}</p>
        <ButtonAsLink
          className="link"
          onClick={() => {
            window.location.href = `${pageLangParamRedesign}helpcenter/terms-of-use`;
          }}
        >
          {t('Пользовательского соглашения')}
        </ButtonAsLink>
      </div>
    </CheckoutOrderStyled>
  );
};
