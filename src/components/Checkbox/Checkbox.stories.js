import React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Basic/Checkbox',
  components: Checkbox,
};

const Template = (args) => <Checkbox {...args}>{args.children}</Checkbox>;

export const RegularOrder = Template.bind({});

RegularOrder.args = {
  children: 'Сделать заказ регулярным',
  name: 'regularOrder',
};

export const CallMe = Template.bind({});

CallMe.args = {
  children: 'Перезвоните мне',
  name: 'callMe',
};
