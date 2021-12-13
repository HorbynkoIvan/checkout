import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonReturn } from './ButtonReturn';

export default {
  title: 'Buttons/ButtonReturn',
  component: ButtonReturn,
  args: {},
};

const Template = (args) => (
  <ButtonReturn {...args} onClick={action('button-click')} />
);

export const ButtonReturnDefault = Template.bind({});

ButtonReturnDefault.args = {
  svgColor: '#807c77',
  children: 'Вернуться к покупкам',
};
