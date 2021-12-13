import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { UserDataSC, RowSC, PhoneInfoSC, EmailInfoSC } from './styled';
import { InputErrorSC } from '../../pages/checkout/src/styled';
import InputMask from '../Inputs/InputMask';
import Input from '../Inputs/Input';
import ButtonAsLink from '../Buttons/ButtonAsLink';
import { CheckoutContext } from '../../context';
import { validationCheckout } from '../../validation/validationCheckout';
import { ServiceCustomer } from '../../services/ServiceCustomer';
import ErrorBoundry from '../ErrorBoundry';

export const UserData = () => {
  const { t } = useTranslation();
  const {
    formData,
    setFormData,
    deleteFormData,
    errorsData,
    setErrorsData,
    setCheckoutData,
  } = useContext(CheckoutContext);
  const [isPhoneRegistered, setPhoneRegistered] = useState(false);

  useEffect(() => {
    setFormData({
      phone: '',
      lastname: '',
      firstname: '',
      middlename: '',
      email: '',
    });
    return () => {
      deleteFormData({
        phone: '',
        lastname: '',
        firstname: '',
        middlename: '',
        email: '',
      });
    };
  }, []);

  const onChangeHandler = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setErrorsData({ [target.name]: '' }); // clean error after onchange
    setFormData({ [target.name]: value });
  };

  const onBlurHandler = ({ target }) => {
    setErrorsData(validationCheckout({ [target.name]: target.value }));
  };

  const [isPhoneMaskObj, setPhoneMaskObj] = useState({
    mask: '',
    phoneValue: '',
  });
  const onChangePhoneHandler = (event) => {
    const phoneValue = event.target.value.replace(/[^0-9]/g, '');
    const newState = {
      mask: '+38 (099) 999-99-99',
      phoneValue,
    };
    setErrorsData({ [event.target.name]: '' }); // clean error after onchange
    setFormData({ [event.target.name]: phoneValue });
    setTimeout(() => {
      setPhoneMaskObj(newState);
    });
  };

  const onBlurPhoneHandler = ({ target }) => {
    setErrorsData(validationCheckout({ phone: target.value }));

    const phoneErrorsObject = validationCheckout({
      phone: target.value,
    });

    const isError = Object.keys(phoneErrorsObject).some(
      (item) => phoneErrorsObject[item]
    );

    const fetchCheckPhone = async () => {
      try {
        const response = await ServiceCustomer.checkPhoneIsRegistered(
          target.value
        );
        setPhoneRegistered(response.isPhoneRegistered);
      } catch (e) {
        console.log('ServiceCustomer.checkPhoneIsRegistered ', e);
      }
    };

    if (!isError) {
      fetchCheckPhone();
    }
  };
  return (
    <UserDataSC>
      <RowSC>
        <ErrorBoundry>
          <InputMask
            {...isPhoneMaskObj}
            autoComplete="tel"
            alwaysShowMask={false}
            label={t('Номер телефона')}
            type="tel"
            id="phone"
            name="phone"
            placeholder="+380_________"
            onChange={onChangePhoneHandler}
            onBlur={onBlurPhoneHandler}
            // phoneValue={formData.phone}
            // mask="+38 (099) 999-99-99"
            maskChar=" "
            error={errorsData.phone || null}
          />
        </ErrorBoundry>

        {!isPhoneRegistered ? (
          <PhoneInfoSC>
            <p>{t('Для доставки и отслеживания заказа')}</p>
          </PhoneInfoSC>
        ) : (
          <PhoneInfoSC>
            <p>{t('Этот номер уже зарегистрирован.')}</p>
            <p>
              <ButtonAsLink
                className="link"
                onClick={() => {
                  setCheckoutData({
                    openedCheckoutModal: true,
                  });
                }}
              >
                {t('Войдите в аккаунт')}
              </ButtonAsLink>
              ,{t('чтобы ускорить оформление')}
            </p>
          </PhoneInfoSC>
        )}
        {errorsData.phone && (
          <InputErrorSC>
            {errorsData.phone.empty && t('Заполните поле')}
            {errorsData.phone.incorrectPhone && t('Введите правильный телефон')}
          </InputErrorSC>
        )}
      </RowSC>
      <RowSC>
        <ErrorBoundry>
          <Input
            autoComplete="lastname"
            label={t('Фамилия')}
            type="text"
            id="lastname"
            name="lastname"
            placeholder=""
            value={formData.lastname}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            error={errorsData.lastname || null}
          />
        </ErrorBoundry>
        {errorsData.lastname && (
          <InputErrorSC>
            {errorsData.lastname.empty && t('Заполните поле')}
            {errorsData.lastname.incorrect && t('Заполните поле кириллицей')}
          </InputErrorSC>
        )}
      </RowSC>
      <RowSC>
        <ErrorBoundry>
          <Input
            autoComplete="firstname"
            label={t('Имя')}
            type="text"
            id="firstname"
            name="firstname"
            placeholder=""
            value={formData.firstname}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            error={errorsData.firstname || null}
          />
        </ErrorBoundry>

        {errorsData.firstname && (
          <InputErrorSC>
            {errorsData.firstname.empty && t('Заполните поле')}
            {errorsData.firstname.incorrect && t('Заполните поле кириллицей')}
          </InputErrorSC>
        )}
      </RowSC>
      <RowSC>
        <ErrorBoundry>
          <Input
            autoComplete="middlename"
            label={t('Отчество')}
            type="text"
            id="middlename"
            name="middlename"
            placeholder=""
            value={formData.middlename}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            error={errorsData.middlename || null}
          />
        </ErrorBoundry>

        {errorsData.middlename && (
          <InputErrorSC>
            {errorsData.middlename.empty && t('Заполните поле')}
            {errorsData.middlename.incorrect && t('Заполните поле кириллицей')}
          </InputErrorSC>
        )}
      </RowSC>
      <RowSC>
        <ErrorBoundry>
          <Input
            autoComplete="email"
            label="E-mail"
            type="email"
            id="email"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            error={errorsData.email || null}
          />
        </ErrorBoundry>

        {errorsData.email && (
          <InputErrorSC>
            {errorsData.email.empty && t('Заполните поле')}
            {errorsData.email.incorrectEmail && t('Введите правильный email')}
          </InputErrorSC>
        )}
        <EmailInfoSC>
          <p>
            {t('Будем держать в курсе акций, скидок и специальных предложений')}
          </p>
        </EmailInfoSC>
      </RowSC>
    </UserDataSC>
  );
};
