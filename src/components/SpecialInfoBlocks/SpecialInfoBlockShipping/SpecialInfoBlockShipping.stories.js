import React from 'react';

import { SpecialInfoBlockShipping } from './SpecialInfoBlockShipping';

export default {
  title: 'Containers/SpecialInfoBlocks/SpecialInfoBlockShipping',
  component: <SpecialInfoBlockShipping />,
};

const Template = (args) => <SpecialInfoBlockShipping {...args} />;

export const AddProductFreeLogistic = Template.bind({});

AddProductFreeLogistic.args = {
  labelOptions: {
    delivery: true,
    big: true,
  },
};
