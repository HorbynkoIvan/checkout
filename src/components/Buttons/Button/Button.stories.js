import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

export default {
  title: 'Buttons/Button',
  component: Button,
};

const Template = (args) => (
  <Button {...args} onClick={action('button-click')} />
);

export const ButtonLg = Template.bind({});

ButtonLg.args = {
  children: 'Купить',
  lg: true,
};

export const ButtonMd = Template.bind({});

ButtonMd.args = {
  children: 'Купить',
  md: true,
};

export const ButtonSm = Template.bind({});

ButtonSm.args = {
  children: 'Купить',
  sm: true,
};
