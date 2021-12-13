import React from 'react';

import { SpecialInfoBlockFreeLogistic } from './SpecialInfoBlockFreeLogistic';

export default {
  title: 'Containers/SpecialInfoBlocks/SpecialInfoBlockFreeLogistic',
  component: <SpecialInfoBlockFreeLogistic />,
};

const Template = (args) => <SpecialInfoBlockFreeLogistic {...args} />;

export const FreeLogistic = Template.bind({});

FreeLogistic.args = {
  labelOptions: {
    delivery: true,
    big: true,
  },
};
