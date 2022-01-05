import React, { useContext } from 'react';

import { any } from 'prop-types';
import { Header } from '../../components/Header/Header';
import { ModalCheckoutBase } from '../../components/Modals/ModalCheckoutBase/ModalCheckoutBase';
import { CheckoutContext } from '../../context';
import ErrorBoundry from '../../components/ErrorBoundry';

export const CheckoutLayout = ({ children }) => {
  const { checkoutData, setCheckoutData } = useContext(CheckoutContext);
  const closeCheckoutModal = () =>
    setCheckoutData({ openedCheckoutModal: false });
  return (
    <>
      <Header />
      <ModalCheckoutBase
        opened={checkoutData.openedCheckoutModal}
        closeModal={closeCheckoutModal}
      />
      {/* <ErrorBoundry>{children}</ErrorBoundry> */}
      {children}
    </>
  );
};

CheckoutLayout.propTypes = {
  children: any,
};
