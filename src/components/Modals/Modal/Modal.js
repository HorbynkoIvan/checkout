import React from 'react';
import { bool, node, arrayOf, oneOfType, func, number } from 'prop-types';
import { ModalOverlayStyled, ModalStyled } from './styled';

export const Modal = ({ children, closeModal, opened, modalWidth = 450 }) => {
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
        <button type="button" className="popup_close" aria-label="close" />
        {children}
      </ModalStyled>
    </ModalOverlayStyled>
  );
};

Modal.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
  opened: bool.isRequired,
  closeModal: func.isRequired,
  modalWidth: number.isRequired,
};
