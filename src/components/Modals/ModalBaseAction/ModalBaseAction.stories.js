import React, { useState } from 'react';
import { ModalBaseAction } from './ModalBaseAction';

export default {
  title: 'Modals/ModalBaseAction',
  component: ModalBaseAction,
};

const Template = (args) => {
  const [opened, setOpen] = useState(true);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open
      </button>

      <ModalBaseAction
        {...args}
        modalWidth={328}
        opened={opened}
        closeModal={closeModal}
      />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  buttonReturnHandler: () => console.log('click'),
  portalClassName: 'modal-base',
  children: (
    <div>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of
    </div>
  ),
  title: 'Восстановление пароля',
};
