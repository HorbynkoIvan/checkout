import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { ModalBase } from './ModalBase';

export default {
  title: 'Modals/ModalBase',
  component: ModalBase,
};

const Template = (args) => {
  const [opened, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open
      </button>

      <ModalBase
        {...args}
        modalWidth={704}
        opened={opened}
        closeModal={closeModal}
      />
    </>
  );
};

const FooterContentSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Primary = Template.bind({});
Primary.args = {
  portalClassName: 'modal-base',
  children: (
    <div>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of
    </div>
  ),
  footerContent: (
    <FooterContentSC>
      <div>Footer content</div>
      <button type="button">Click Me</button>
    </FooterContentSC>
  ),
  title: 'Выбрать подарок',
  subTitle: 'Выберите 2 подарка',
};
