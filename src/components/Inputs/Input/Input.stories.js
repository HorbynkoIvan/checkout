import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { Input } from './Input';

const Container = styled.div`
  width: 300px;
`;

export default {
  title: 'Inputs/Input',
  component: Input,
  argTypes: { onChange: { action: 'onChangeHandler' } },
};

const Template = (args) => (
  <Container>
    <Input {...args} onChangeHandler={action('input-change')} />
  </Container>
);

export const InputPhone = Template.bind({});

InputPhone.args = {
  id: 'phone',
  label: 'Номер телефона',
  type: 'tel',
  placeholder: '+380_________',
  onChangeHandler: (e) => {
    console.log(e.target.value);
  },
};

export const InputPassword = Template.bind({});

InputPassword.args = {
  id: 'password',
  label: 'Пароль',
  type: 'password',
  isInputButton: true,
  inputButtonText: 'Забыли пароль?',
  isShowedPassword: true,
};

export const InputEmail = Template.bind({});

InputEmail.args = {
  id: 'email',
  label: 'E-mai',
  type: 'email',
  isInputButton: false,
};

export const InputError = Template.bind({});

InputError.args = {
  id: 'email',
  label: 'E-mai',
  type: 'email',
  isInputButton: false,
  error: ['Some error text'],
};
