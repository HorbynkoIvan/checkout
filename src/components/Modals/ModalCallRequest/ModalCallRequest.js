import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';
import { ModalCallRequestSC } from './styled';
import { ModalBase } from '../ModalBase/ModalBase';
import { Button } from '../../Buttons/Button/Button';
import { ServiceCustomer } from '../../../services/ServiceCustomer';
import { ReactComponent as DeleteIcon } from '../../../assets/img/delete-icon.svg';
import { SuccessBlock } from '../../SucessBlock/SuccessBlock';

export const ModalCallRequest = ({ opened, closeModalHandler }) => {
  const { t } = useTranslation();
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorRequest, setErrorRequest] = useState(false);
  const [inputPhoneValue, setInputPhoneValue] = useState('');
  const [successMessageFromRequest, setSuccessMessageFromRequest] = useState(
    ''
  );

  const validateFunction = (value) => {
    const unmaskValue = value.replace(/[^\d]/g, '');
    if (unmaskValue === '' || unmaskValue.length !== 12) {
      setErrorPhone(true);
      return true;
    }
    setErrorPhone(false);
    return false;
  };
  const onBlurHandler = ({ target }) => {
    validateFunction(target.value);
  };

  const buttonSubmitClickHandler = () => {
    if (!validateFunction(inputPhoneValue)) {
      const unmask = inputPhoneValue.replace(/[^\d]/g, '');
      (async () => {
        try {
          const res = await ServiceCustomer.getPhoneCallback(unmask);

          if (res.status === 200) {
            setErrorRequest(false);
            setSuccessMessageFromRequest(res.data.message);

            setTimeout(() => {
              closeModalHandler();
              setSuccessMessageFromRequest('');
              setInputPhoneValue('');
            }, 3000);
          }
        } catch (e) {
          console.log(e);
          setErrorRequest(true);
          setSuccessMessageFromRequest('');
        }
      })();
    }
  };

  return (
    <ModalBase
      portalClassName="modal-call-request"
      opened={opened}
      title={t('Заказать звонок')}
      closeModal={closeModalHandler}
    >
      <ModalCallRequestSC error={errorPhone || errorRequest}>
        {successMessageFromRequest.length ? (
          <SuccessBlock>
            <div>
              <span>{successMessageFromRequest}</span>
            </div>
          </SuccessBlock>
        ) : (
          <>
            <p>{t('Оставьте свой номер телефона, и мы свяжемся с вами')}</p>

            <section>
              <label>
                <InputMask
                  placeholder="+38__________"
                  mask="+38 (099) 999-99-99"
                  maskChar={null}
                  value={inputPhoneValue}
                  onChange={(e) => setInputPhoneValue(e.target.value)}
                  onBlur={onBlurHandler}
                />
                <DeleteIcon />
              </label>

              {errorPhone && <span>{t('Неправильное значение')}</span>}
              {errorRequest && (
                <span>{t('Пожалуйста, повторите действие еще раз')}</span>
              )}
            </section>

            <Button onClick={buttonSubmitClickHandler}>{t('Отправить')}</Button>
          </>
        )}
      </ModalCallRequestSC>
    </ModalBase>
  );
};
ModalCallRequest.propTypes = {
  opened: bool,
  closeModalHandler: func,
};
