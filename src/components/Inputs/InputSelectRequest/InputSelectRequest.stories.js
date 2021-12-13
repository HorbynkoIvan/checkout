import React from 'react';
import { InputSelectRequest } from './InputSelectRequest';

export default {
  title: 'Inputs/InputSelectRequest',
  component: <InputSelectRequest />,
};

const Template = (args) => <InputSelectRequest {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: {
    title: 'Киев',
    id: '12',
  },
};
