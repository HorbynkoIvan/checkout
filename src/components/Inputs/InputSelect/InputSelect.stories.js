import React from 'react';
import { InputSelect } from './InputSelect';

export default {
  title: 'Inputs/InputSelect',
  component: InputSelect,
};

const Template = (args) => <InputSelect {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: [
    {
      title: 'Неделя',
      value: 'week',
    },
    {
      title: 'Месяц',
      value: 'month',
    },
    {
      title: 'Год',
      value: 'year',
    },
  ],
};
