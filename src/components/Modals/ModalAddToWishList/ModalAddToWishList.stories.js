import React, { useState } from 'react';
import { ModalAddToWishList } from './ModalAddToWishList';

export default {
  title: 'Modals/ModalAddToWishList',
  component: <ModalAddToWishList />,
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

      <ModalAddToWishList
        opened={opened}
        closeModal={closeModal}
        modalWidth={510}
      />
    </>
  );
};

export const Primary = Template.bind({});
