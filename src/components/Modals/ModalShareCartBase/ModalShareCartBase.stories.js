import React, { useState } from 'react';
import { ModalShareCartBase } from './ModalShareCartBase';

export default {
  title: 'Modals/ModalShareCartBase',
  component: ModalShareCartBase,
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

      <ModalShareCartBase
        opened={opened}
        closeModal={closeModal}
        modalWidth={328}
      />
    </>
  );
};

export const Primary = Template.bind({});
