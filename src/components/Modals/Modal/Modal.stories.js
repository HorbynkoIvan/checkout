import React, { useState } from 'react';
import { Modal } from './Modal';

const Test = () => {
  const [opened, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        test
      </button>
      <Modal opened={opened} closeModal={closeModal} modalWidth={450}>
        <h1>tets</h1>
      </Modal>
    </div>
  );
};

export default {
  title: 'Modals/Modal',
  component: Test,
};

const Template = () => <Test />;

export const BasicModal = Template.bind({});
