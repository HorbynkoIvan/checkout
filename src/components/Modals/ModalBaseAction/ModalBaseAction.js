import React, { useEffect } from 'react';
import { any, bool, func, number, string } from 'prop-types';
import {
  ModalBaseActionSC,
  ModalBaseActionContentSC,
  ModalBaseActionHeaderSC,
  ModalBaseActionWrapperSC,
} from './styled';

import { ReactComponent as DeleteIcon } from '../../assets/img/delete-icon.svg';
import { Portal } from '../../Portal/Portal';
import ButtonReturn from '../../Buttons/ButtonReturn';

export const ModalBaseAction = ({
  closeModal,
  opened,
  modalWidth = 328,
  children,
  title,
  portalClassName,
  buttonReturnHandler,
  buttonReturnText,
}) => {
  const htmlScroll = () => {
    const htmlTag = document.querySelector('html');
    if (opened) {
      htmlTag.classList.add('is-hide-scroll');
    } else {
      htmlTag.classList.remove('is-hide-scroll');
    }
  };

  useEffect(htmlScroll, [opened]);

  return (
    <>
      {opened && (
        <Portal className={portalClassName}>
          <ModalBaseActionSC onClick={closeModal} opened={opened}>
            <ModalBaseActionWrapperSC
              onClick={(e) => e.stopPropagation()}
              modalWidth={modalWidth}
            >
              <ModalBaseActionHeaderSC>
                {buttonReturnHandler && (
                  <ButtonReturn onClick={buttonReturnHandler}>
                    {buttonReturnText && buttonReturnText}
                  </ButtonReturn>
                )}

                <button onClick={closeModal} type="button" aria-label="close">
                  <DeleteIcon />
                </button>
              </ModalBaseActionHeaderSC>

              <ModalBaseActionContentSC>
                <h2>{title}</h2>
                <div>{children}</div>
              </ModalBaseActionContentSC>
            </ModalBaseActionWrapperSC>
          </ModalBaseActionSC>
        </Portal>
      )}
    </>
  );
};

ModalBaseAction.propTypes = {
  children: any,
  title: string.isRequired,
  portalClassName: string.isRequired,
  opened: bool.isRequired,
  closeModal: func.isRequired,
  modalWidth: number.isRequired,
  buttonReturnHandler: func,
  buttonReturnText: string,
};
