import React, { useState } from 'react';
import { bool, func, number, string } from 'prop-types';
import { action } from '@storybook/addon-actions';
import {
  ModalOverlayStyled,
  ModalStyled,
  ModalTopStyled,
  ModalBodyStyled,
  ChevronIconStyled,
} from './styled';
import { ReactComponent as LinkIcon } from '../../../assets/img/social/link.svg';
import { ReactComponent as ViberIcon } from '../../../assets/img/social/share-viber.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/img/social/share-telegram.svg';
import { ReactComponent as EmailIcon } from '../../../assets/img/social/share-email.svg';
import ButtonAsLink from '../../Buttons/ButtonAsLink';
import { Input } from '../../Inputs/Input/Input';
import Button from '../../Buttons/Button';
import SuccessBlock from '../../SucessBlock';

export const ModalShareCart = ({
  closeModal,
  opened,
  modalWidth = 328,
  title,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [isLinkCopied, copyLink] = useState(false);
  const [isLinkSend, sentLink] = useState(false);
  const handleClickOutside = (e) => {
    if (
      e.target.classList.contains('is_visible') ||
      e.target.classList.contains('popup_close')
    ) {
      closeModal();
    }
  };
  return (
    <ModalOverlayStyled
      onClick={handleClickOutside}
      opened={opened}
      className={`${opened && 'is_visible'}`}
    >
      <ModalStyled className="popup_container" modalWidth={modalWidth}>
        <ModalTopStyled>
          <button type="button" className="popup_close" aria-label="close" />
        </ModalTopStyled>
        <ModalBodyStyled>
          <h2>{title}</h2>
          <div className="row">
            <ButtonAsLink
              onClick={() => copyLink(true)}
              className="share_link"
              icon={<LinkIcon />}
            >
              Скопировать ссылку
            </ButtonAsLink>
          </div>
          <div className="row">
            <ButtonAsLink className="share_link" icon={<ViberIcon />}>
              Отправить в Viber
            </ButtonAsLink>
          </div>
          <div className="row">
            <ButtonAsLink className="share_link" icon={<TelegramIcon />}>
              Отправить в Telegram
            </ButtonAsLink>
          </div>
          <div className="row">
            <ButtonAsLink
              onClick={() => setOpen(!isOpen)}
              className="share_link"
              icon={<EmailIcon />}
            >
              Скопировать ссылку <ChevronIconStyled open={isOpen} />
            </ButtonAsLink>
          </div>
          {isLinkCopied && (
            <SuccessBlock>Ссылка успешно скопирована</SuccessBlock>
          )}
          {isLinkSend && (
            <SuccessBlock>
              <p className="info_text">Ссылка успешно отправлена на</p>
              <p className="info_email">gjhhgsjh@gmail.com</p>
            </SuccessBlock>
          )}
          {isOpen && (
            <form onSubmit={(e) => e.preventDefault()}>
              <Input
                id="email"
                label="E-mai"
                type="email"
                onChangeHandler={action('input-change')}
              />

              <Button
                className="btn"
                bgColor="#ffffff"
                textColor="#807C77"
                disable={false}
                onClick={() => sentLink(true)}
              >
                Отправить
              </Button>
            </form>
          )}
        </ModalBodyStyled>
      </ModalStyled>
    </ModalOverlayStyled>
  );
};

ModalShareCart.propTypes = {
  opened: bool.isRequired,
  closeModal: func.isRequired,
  modalWidth: number.isRequired,
  title: string.isRequired,
};
