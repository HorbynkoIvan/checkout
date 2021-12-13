import React, { useEffect } from 'react';
import { any, bool, func, number, string } from 'prop-types';
import {
  ModalBaseSC,
  ModalBaseContentSC,
  ModalBaseFooterSC,
  ModalBaseHeaderSC,
  ModalBaseWrapperSC,
} from './styled';

import { ReactComponent as DeleteIcon } from '../../../assets/img/delete-icon.svg';
import { Portal } from '../../Portal/Portal';

export const ModalBase = ({
  closeModal,
  opened,
  modalWidth = 450,
  children,
  footerContent,
  title,
  subTitle,
  portalClassName,
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
          <ModalBaseSC onClick={closeModal} opened={opened} isShow={opened}>
            <ModalBaseWrapperSC
              onClick={(e) => e.stopPropagation()}
              modalWidth={modalWidth}
            >
              <ModalBaseHeaderSC>
                <div>
                  <span>{title}</span>
                  {subTitle && <span>{subTitle}</span>}
                </div>

                <button onClick={closeModal} type="button" aria-label="close">
                  <DeleteIcon />
                </button>
              </ModalBaseHeaderSC>

              <ModalBaseContentSC
                subTitle={subTitle}
                isFooterContent={footerContent}
              >
                <div>{children}</div>
              </ModalBaseContentSC>

              {footerContent && (
                <ModalBaseFooterSC>
                  <div>{footerContent}</div>
                </ModalBaseFooterSC>
              )}
            </ModalBaseWrapperSC>
          </ModalBaseSC>
        </Portal>
      )}
    </>
  );
};

ModalBase.propTypes = {
  children: any,
  title: string.isRequired,
  subTitle: string,
  portalClassName: string.isRequired,
  footerContent: any,
  opened: bool.isRequired,
  closeModal: func.isRequired,
  modalWidth: number,
};
