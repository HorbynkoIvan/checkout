import React from 'react';
import { InputPromo } from './InputPromo';

export default {
  title: 'Inputs/InputPromo',
  component: InputPromo,
};

const Template = (args) => <InputPromo {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: {
    name: 'promocode',
    type: 'text',
    placeholder: 'Хочу применить Промокод',
    errorText: 'Не верный промокод',
    disabled: false,
    error: false,
    onChangeFunc: (value) => {
      console.log(value);
    },
  },
};
