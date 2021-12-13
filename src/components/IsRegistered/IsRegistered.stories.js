import React from 'react';
import { IsRegistered } from './IsRegistered';

export default {
  title: 'Containers/IsRegistered',
  component: IsRegistered,
};

const Template = (args) => <IsRegistered {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  clickHandler: () => console.log('click'),
};
export const Registred = Template.bind();

Registred.args = {
  name: 'Анна',
};
