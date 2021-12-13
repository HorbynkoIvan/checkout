import React, { useState } from 'react';
import { ModalCheckoutBase } from './ModalCheckoutBase';

export default {
  title: 'Modals/ModalCheckoutBase',
  component: ModalCheckoutBase,
};

const Template = () => {
  const [opened, setOpen] = useState(true);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        click to open modal
      </button>

      <ModalCheckoutBase
        opened={opened}
        closeModal={closeModal}
        modalWidth={328}
      />
    </>
  );
};

export const ModalAuth = Template.bind({});
