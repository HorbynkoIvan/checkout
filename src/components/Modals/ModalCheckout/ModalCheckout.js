import React from 'react';
import {
  bool,
  node,
  arrayOf,
  oneOfType,
  func,
  number,
  string,
} from 'prop-types';
import {
  ModalOverlayStyled,
  ModalStyled,
  ModalTopStyled,
  ModalBodyStyled,
} from './styled';
import ButtonReturn from '../../Buttons/ButtonReturn';
import SocialButtonsBlock from '../../SocialButtonsBlock';

export const ModalCheckout = ({
  children,
  closeModal,
  opened,
  modalWidth = 328,
  title,
  showBtnReturn,
}) => {
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
          {showBtnReturn && <ButtonReturn />}
          <button type="button" className="popup_close" aria-label="close" />
        </ModalTopStyled>
        <ModalBodyStyled>
          <h2>{title}</h2>
          <div>{children}</div>
          <SocialButtonsBlock />
        </ModalBodyStyled>
      </ModalStyled>
    </ModalOverlayStyled>
  );
};

ModalCheckout.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
  opened: bool.isRequired,
  closeModal: func.isRequired,
  modalWidth: number.isRequired,
  title: string.isRequired,
  showBtnReturn: bool,
};
