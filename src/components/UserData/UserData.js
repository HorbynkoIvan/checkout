import React, {useState, useContext, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {UserDataSC, RowSC, PhoneInfoSC, EmailInfoSC} from './styled';
import {InputErrorSC} from '../../pages/checkout/styled';
import InputMask from '../Inputs/InputMask';
import Input from '../Inputs/Input';
import ButtonAsLink from '../Buttons/ButtonAsLink';
import {CheckoutContext} from '../../context';
import {validationCheckout} from '../../validation/validationCheckout';
import {ServiceCustomer} from '../../services/ServiceCustomer';
import ErrorBoundry from '../ErrorBoundry';

export const UserData = () => {
    const {t} = useTranslation();
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

    const onChangeHandler = ({target}) => {
        const value = target.type === 'checkbox' ? target.checked : target.value.trim();
        setErrorsData({[target.name]: ''}); // clean error after onchange
        setFormData({[target.name]: value});
    };

    const onBlurHandler = ({target}) => {
        setErrorsData(validationCheckout({[target.name]: target.value}));
    };

    const onChangePhoneHandler = (event) => {
        const phoneValue = event.target.value.replace(/[^0-9]/g, '');
        setErrorsData({[event.target.name]: ''}); // clean error after onchange
        setFormData({[event.target.name]: phoneValue});
    };

    const onBlurPhoneHandler = ({target}) => {
        setErrorsData(validationCheckout({phone: target.value}));

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

    const onPastePhoneHandler = (e) => {
        const phone = e.target.value.slice(-9)
        console.log("onPastePhoneHandler ", e.currentTarget.value)
        console.log("onPastePhoneHandler ", e.target.value)
    }

    return (
        <UserDataSC>
            <RowSC>
                <ErrorBoundry>
                    <InputMask
                        autoComplete="tel"
                        alwaysShowMask={true}
                        label={t('?????????? ????????????????')}
                        type="tel"
                        id="phone"
                        name="phone"
                        // placeholder="+380_________"
                        onChange={onChangePhoneHandler}
                        onBlur={onBlurPhoneHandler}
                        onPaste={onPastePhoneHandler}
                        // phoneValue={formData.phone}
                        mask="+38 (099) 999 99 99"
                        maskChar="_"
                        error={errorsData.phone || null}
                    />
                </ErrorBoundry>

                {!isPhoneRegistered ? (
                    <PhoneInfoSC>
                        <p>{t('?????? ???????????????? ?? ???????????????????????? ????????????')}</p>
                    </PhoneInfoSC>
                ) : (
                    <PhoneInfoSC>
                        <p>{t('???????? ?????????? ?????? ??????????????????????????????.')}</p>
                        <p>
                            <ButtonAsLink
                                className="link"
                                onClick={() => {
                                    setCheckoutData({
                                        openedCheckoutModal: true,
                                    });
                                }}
                            >
                                {t('?????????????? ?? ??????????????')}
                            </ButtonAsLink>
                            ,{t('?????????? ???????????????? ????????????????????')}
                        </p>
                    </PhoneInfoSC>
                )}
                {errorsData.phone && (
                    <InputErrorSC>
                        {errorsData.phone.empty && t('?????????????????? ????????')}
                        {errorsData.phone.incorrectPhone && t('?????????????? ???????????????????? ??????????????')}
                    </InputErrorSC>
                )}
            </RowSC>
            <RowSC>
                <ErrorBoundry>
                    <Input
                        autoComplete="lastname"
                        label={t('??????????????')}
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
                        {errorsData.lastname.empty && t('?????????????????? ????????')}
                        {errorsData.lastname.incorrect && t('?????????????????? ???????? ????????????????????')}
                    </InputErrorSC>
                )}
            </RowSC>
            <RowSC>
                <ErrorBoundry>
                    <Input
                        autoComplete="firstname"
                        label={t('??????')}
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
                        {errorsData.firstname.empty && t('?????????????????? ????????')}
                        {errorsData.firstname.incorrect && t('?????????????????? ???????? ????????????????????')}
                    </InputErrorSC>
                )}
            </RowSC>
            <RowSC>
                <ErrorBoundry>
                    <Input
                        autoComplete="middlename"
                        label={t('????????????????')}
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
                        {errorsData.middlename.empty && t('?????????????????? ????????')}
                        {errorsData.middlename.incorrect && t('?????????????????? ???????? ????????????????????')}
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
                        {errorsData.email.empty && t('?????????????????? ????????')}
                        {errorsData.email.incorrectEmail && t('?????????????? ???????????????????? email')}
                    </InputErrorSC>
                )}
                <EmailInfoSC>
                    <p>
                        {t('?????????? ?????????????? ?? ?????????? ??????????, ???????????? ?? ?????????????????????? ??????????????????????')}
                    </p>
                </EmailInfoSC>
            </RowSC>
        </UserDataSC>
    );
};
