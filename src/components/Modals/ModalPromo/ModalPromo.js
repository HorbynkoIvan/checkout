import React, { useContext } from 'react';
import { bool, func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ModalBase } from '../ModalBase/ModalBase';
import { ModalPromoSC } from './styled';
import { CartContext } from '../../../context';

export const ModalPromo = ({ opened, closeModal }) => {
  const cartContext = useContext(CartContext);
  const cartState = cartContext.state.dataCart;
  const { t } = useTranslation();

  return (
    <ModalBase
      portalClassName="modal-promotion"
      opened={opened}
      title={t('Условия акции')}
      closeModal={closeModal}
    >
      <ModalPromoSC>
        {cartState.freeDeliveryPromoOffers &&
          cartState.freeDeliveryPromoOffers.map((item, i) => (
            <div key={i}>
              <h3>{item.title}</h3>

              <p dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          ))}
      </ModalPromoSC>
    </ModalBase>
  );
};

ModalPromo.propTypes = {
  opened: bool,
  closeModal: func,
};
