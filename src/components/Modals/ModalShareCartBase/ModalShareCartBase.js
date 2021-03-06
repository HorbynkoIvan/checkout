import React, { useEffect, useState } from 'react';
import { bool, func, number } from 'prop-types';

import { useTranslation } from 'react-i18next';
import { Input } from '../../Inputs/Input/Input';
import { Button } from '../../Buttons/Button/Button';
import { ModalShareCartBaseSC, ChevronIconStyled } from './styled';
import { ModalBaseAction } from '../ModalBaseAction/ModalBaseAction';
import { ButtonAsLink } from '../../Buttons/ButtonAsLink/ButtonAsLink';
import { ReactComponent as LinkIcon } from '../../assets/img/social/link.svg';
import { ReactComponent as ViberIcon } from '../../assets/img/social/share-viber.svg';
import { ReactComponent as TelegramIcon } from '../../assets/img/social/share-telegram.svg';
import { ReactComponent as EmailIcon } from '../../assets/img/social/share-email.svg';

import { SuccessBlock } from '../../SucessBlock/SuccessBlock';

import useCopyToClipboard from '../../../hooks/useCopyToClipboard';
import { InputErrorSC } from '../../../pages/checkout/styled';
import { validationCheckout } from '../../../validation/validationCheckout';

const validation = (values) => {
  const regExpEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const errors = {};

  if (values.email === '') {
    errors.email = { empty: true };
  } else if (values.email && !regExpEmail.test(values.email)) {
    errors.email = { incorrectEmail: true };
  }

  return errors;
};

export const ModalShareCartBase = ({
  closeModal,
  opened,
  modalWidth = 328,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [isEmailSend, setEmailSend] = useState(false);
  const { t } = useTranslation();

  // here should be passed url cart
  const [copied, copy] = useCopyToClipboard(window.location.href);

  const [data, setData] = useState({ email: '' });
  const [errors, setErrors] = useState('');
  const [dataHasError, setDataHasError] = useState(false);

  useEffect(() => {
    if (!errors) return;
    const isError = Object.keys(errors).some((item) => errors[item]);
    setDataHasError(isError);
  }, [errors]);

  const shareCartViaViber = (url) => {
    window.location.href = `viber://forward?text=${url}`;
  };

  const shareCartViaTelegram = (url, text) => {
    window.location.href = `https://t.me/share/url?url=${url}&text=${text}`;
  };

  const onChange = ({ target }) => {
    setData({ [target.name]: target.value });
  };

  const onBlur = ({ target }) => {
    setErrors(validation({ [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(data));

    // error checking before submitting form
    const errorsObject = validationCheckout(data);
    const isError = Object.keys(errorsObject).some(
      (item) => errorsObject[item]
    );
    if (isError) return;
    setEmailSend(true);
    console.log('sent email');
  };

  return (
    <ModalBaseAction
      portalClassName="modal-share-cart"
      modalWidth={modalWidth}
      opened={opened}
      title={t('???????????????????? ????????????????')}
      closeModal={closeModal}
    >
      <ModalShareCartBaseSC>
        <ButtonAsLink
          onClick={() => copy('hjfjkacfkbaqckjckqw')}
          icon={<LinkIcon />}
        >
          {t('?????????????????????? ????????????')}
        </ButtonAsLink>

        <ButtonAsLink
          icon={<ViberIcon />}
          onClick={() =>
            shareCartViaViber(
              'https://developers.viber.com/docs/tools/share-button/'
            )}
        >
          {t('?????????????????? ?? Viber')}
        </ButtonAsLink>

        <ButtonAsLink
          icon={<TelegramIcon />}
          onClick={() =>
            shareCartViaTelegram(
              'https://core.telegram.org/widgets/share',
              'some text'
            )}
        >
          {t('?????????????????? ?? Telegram')}
        </ButtonAsLink>

        <ButtonAsLink onClick={() => setOpen(!isOpen)} icon={<EmailIcon />}>
          {t('?????????????????? ???? E-mail')} <ChevronIconStyled open={isOpen} />
        </ButtonAsLink>

        {copied && (
          <SuccessBlock>{t('???????????? ?????????????? ??????????????????????')}</SuccessBlock>
        )}

        {isEmailSend && (
          <SuccessBlock>
            <p>{t('???????????? ?????????????? ???????????????????? ????')}</p>
            <p className="modal-share-cart__email">{data.email}</p>
          </SuccessBlock>
        )}

        {isOpen && !isEmailSend && (
          <form onSubmit={handleSubmit}>
            <Input
              label="E-mail"
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.email}
            />
            {errors.email && (
              <InputErrorSC>
                {errors.email.empty && t('?????????????????? ????????')}
                {errors.email.incorrectEmail && t('?????????????? ???????????????????? email')}
              </InputErrorSC>
            )}
            <Button
              bgColor="#ffffff"
              textColor="#807C77"
              disabled={dataHasError}
              onClick={handleSubmit}
            >
              {t('??????????????????')}
            </Button>
          </form>
        )}
      </ModalShareCartBaseSC>
    </ModalBaseAction>
  );
};

ModalShareCartBase.propTypes = {
  opened: bool.isRequired,
  closeModal: func.isRequired,
  modalWidth: number,
};
