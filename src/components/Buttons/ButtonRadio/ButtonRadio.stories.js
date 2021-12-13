import React from 'react';
import { ButtonRadio } from './ButtonRadio';

export default {
  title: 'Buttons/ButtonRadio',
  component: ButtonRadio,
};

const Template = (args) => <ButtonRadio {...args} />;

export const NotSelected = Template.bind({});

NotSelected.args = {
  children: 'Наличные',
  isActive: false,
  clickHandler() {
    console.log('click');
  },
};

export const Selected = Template.bind({});

Selected.args = {
  children: 'Наличные',
  isActive: true,
};

export const NotSelectedDisabled = Template.bind({});

NotSelectedDisabled.args = {
  children: 'Наличные',
  isActive: false,
  disabled: true,
};

export const SelectedDisabled = Template.bind({});

SelectedDisabled.args = {
  children: 'Наличные',
  isActive: true,
  disabled: true,
};

export const WithDescription = Template.bind({});

WithDescription.args = {
  children: 'Наличные',
  description: 'Наличные',
  isActive: true,
  disabled: false,
};
