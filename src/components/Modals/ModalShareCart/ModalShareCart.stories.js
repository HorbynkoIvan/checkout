/* eslint-disable react/prop-types */
import React from 'react';
import { ModalShareCart } from './ModalShareCart';

const Test = ({ title }) => (
  <div>
    <ModalShareCart title={title} opened modalWidth={328} />
  </div>
);

export default {
  title: 'Modals/ModalShareCart',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  title: 'Поделиться корзиной',
  showBtnReturn: true,
  showRecoveryCode: false,
  disabled: true,
  phoneValue: '',
  codeValue: '',
  showInputButton: false,
  getPasswordBtn: true,
};
