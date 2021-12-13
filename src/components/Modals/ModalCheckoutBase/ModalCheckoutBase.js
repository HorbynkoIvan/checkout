import React, { useEffect, useState } from 'react';
import { bool, func, number } from 'prop-types';

import { useTranslation } from 'react-i18next';
import { InputMask } from '../../Inputs/InputMask/InputMask';
import { Input } from '../../Inputs/Input/Input';
import { Button } from '../../Buttons/Button/Button';
import {
  ModalCheckoutBaseBlockSC,
  ModalCheckoutBaseErrorAuthSocialSC,
  ModalCheckoutBaseSC,
} from './styled';
import { ModalBaseAction } from '../ModalBaseAction/ModalBaseAction';
import { ServiceAuth } from '../../../services/ServiceAuth';
import { ServiceCustomer } from '../../../services/ServiceCustomer';
import { SocialButtonsBlock } from '../../SocialButtonsBlock/SocialButtonsBlock';
import { ButtonAsLink } from '../../Buttons/ButtonAsLink/ButtonAsLink';
import { pageLangParamRedesign } from '../../../helpers/helpers';
import { Preloader } from '../../Preloader/Preloader';

export const ModalCheckoutBase = ({ closeModal, opened, modalWidth = 328 }) => {
  const { t } = useTranslation();
  // const cartContext = useContext(CartContext);

  const [inputPhoneValue, setInputPhoneValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [forgotPasswordPhoneValue, setForgotPasswordPhoneValue] = useState('');

  const [isShowedPassword, showPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const [isRecoveryCodeBtnDisabled, setIsRecoveryCodeBtnDisabled] = useState(
    true
  );

  const [error, setError] = useState(false);
  const [errorAuthSocial, setErrorAuthSocial] = useState(null);
  const [errorGetResetPassword, setErrorGetResetPassword] = useState(false);
  const [
    errorGetResetPasswordMessage,
    setErrorGetResetPasswordMessage,
  ] = useState('');
  const [isShowPreloader, setIsShowPreloader] = useState(false);

  const [timeToSubmit, setTimeToSubmit] = useState(0);

  const togglePassword = () => {
    showPassword(() => !isShowedPassword);
  };

  const unmaskPhoneValue = (phone) =>
    phone.replace(/[^\d]/g, '').replace(/^38/g, '');

  useEffect(() => {
    if (timeToSubmit > 0) {
      setTimeout(() => setTimeToSubmit(timeToSubmit - 1), 1000);
    }
  }, [timeToSubmit]);

  const authSubmitHandler = () => {
    (async () => {
      try {
        setIsShowPreloader(true);
        const res = await ServiceAuth.authUser({
          phone: unmaskPhoneValue(inputPhoneValue),
          password: inputPasswordValue,
        });
        if (res.status === 200) {
          setError(false);
          closeModal();
          // add reload page for add-old-products modal.
          window.location.reload();
          // try {
          //   const resCart = await ServiceCart.getCart();
          //   cartContext.addDataCart(resCart);
          // } catch (e) {
          //   console.log(e);
          // }
          //
          // try {
          //   const resWishlist = await ServiceCustomer.getWishList();
          //   cartContext.addDataToWishList(resWishlist.data);
          // } catch (e) {
          //   console.log(e);
          // }
        }
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setIsShowPreloader(false);
      }
    })();
  };

  const getRecoveryCodeSubmit = () => {
    setIsRecoveryCodeBtnDisabled(true);
    setErrorGetResetPassword(false);
    setErrorGetResetPasswordMessage('');
    setIsShowPreloader(true);

    (async () => {
      try {
        const res = await ServiceCustomer.resetPassword(
          unmaskPhoneValue(forgotPasswordPhoneValue)
        );

        if (res.data.success) {
          setShowForgotPassword(false);
          setInputPhoneValue(unmaskPhoneValue(forgotPasswordPhoneValue));
          setErrorGetResetPassword(false);
        } else {
          setErrorGetResetPassword(true);
          setErrorGetResetPasswordMessage(res.data.msg);
        }
      } catch (e) {
        console.log(e);
        setErrorGetResetPassword(true);
      } finally {
        setIsShowPreloader(false);
        setIsRecoveryCodeBtnDisabled(false);
      }
    })();
  };

  const getRecoveryCodePhoneInputOnChangeHandler = (e) => {
    if (unmaskPhoneValue(e.target.value).length === 10) {
      setIsRecoveryCodeBtnDisabled(false);
    } else {
      setIsRecoveryCodeBtnDisabled(true);
    }

    setForgotPasswordPhoneValue(e.target.value);
  };

  return (
    <ModalBaseAction
      portalClassName="modal-checkout"
      modalWidth={modalWidth}
      opened={opened}
      title={
        !showForgotPassword ? t('Войти в аккаунт') : t('Получить новый пароль')
      }
      closeModal={closeModal}
      buttonReturnHandler={
        showForgotPassword ? () => setShowForgotPassword(false) : null
      }
      buttonReturnText={showForgotPassword ? t('Назад') : null}
    >
      {isShowPreloader && <Preloader borderRadius="20px" />}

      <ModalCheckoutBaseSC>
        {errorAuthSocial && (
          <ModalCheckoutBaseErrorAuthSocialSC>
            Не можем авторизовать с помощью {errorAuthSocial}. Авторизуйтесь
            другим способом
          </ModalCheckoutBaseErrorAuthSocialSC>
        )}

        {!showForgotPassword ? (
          <>
            <form onSubmit={(e) => e.preventDefault()}>
              <InputMask
                name="phone-input"
                label={t('Номер телефона')}
                type="tel"
                id="phone"
                placeholder="+38__________"
                mask="+38 (099) 999-99-99"
                maskChar={null}
                phoneValue={inputPhoneValue}
                onChange={(e) => setInputPhoneValue(e.target.value)}
                error={error}
              />

              <Input
                name="password-input"
                id="password"
                label={t('Пароль')}
                type={isShowedPassword ? 'text' : 'password'}
                inputButtonText={t('Забыли пароль?')}
                inputButtonTextOnClick={() => setShowForgotPassword(true)}
                togglePassword={togglePassword}
                isShowedPassword={isShowedPassword}
                value={inputPasswordValue}
                onChange={(e) => setInputPasswordValue(e.target.value)}
                error={error}
                errorText={t('Неверный логин или пароль')}
              />

              <Button
                onClick={authSubmitHandler}
                className="btn_enter"
                bgColor="#FF7F00"
                textColor="#ffffff"
                disabled={false}
              >
                {t('Войти')}
              </Button>
            </form>

            <SocialButtonsBlock
              closeModal={closeModal}
              setErrorAuthSocial={setErrorAuthSocial}
              preloaderHandler={setIsShowPreloader}
            />

            <ModalCheckoutBaseBlockSC>
              <ButtonAsLink
                onClick={() => {
                  window.location.href = `${pageLangParamRedesign}account/register`;
                }}
              >
                {t('Зарегистрироваться')}
              </ButtonAsLink>
            </ModalCheckoutBaseBlockSC>
          </>
        ) : (
          <>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <InputMask
                  name="phone-input"
                  label={t('Номер телефона')}
                  type="tel"
                  id="phone"
                  placeholder="+38__________"
                  mask="+38 (099) 999-99-99"
                  maskChar={null}
                  phoneValue={forgotPasswordPhoneValue}
                  onChange={getRecoveryCodePhoneInputOnChangeHandler}
                  error={errorGetResetPassword}
                  errorText={errorGetResetPasswordMessage}
                />
              </div>

              <Button
                className="btn"
                bgColor="#ffffff"
                textColor="#807C77"
                disabled={isRecoveryCodeBtnDisabled}
                onClick={getRecoveryCodeSubmit}
              >
                {t('Получить новый пароль')}
              </Button>
            </form>
          </>
        )}
      </ModalCheckoutBaseSC>
    </ModalBaseAction>
  );
};

ModalCheckoutBase.propTypes = {
  opened: bool.isRequired,
  closeModal: func.isRequired,
  modalWidth: number,
};
