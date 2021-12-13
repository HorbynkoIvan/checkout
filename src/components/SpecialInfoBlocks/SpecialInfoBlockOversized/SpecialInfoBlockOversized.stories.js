import React from 'react';

import { SpecialInfoBlockOversized } from './SpecialInfoBlockOversized';

export default {
  title: 'Containers/SpecialInfoBlocks/SpecialInfoBlockOversized',
  component: <SpecialInfoBlockOversized />,
};

const Template = (args) => <SpecialInfoBlockOversized {...args} />;

export const Oversized = Template.bind({});

Oversized.args = {
  labelOptions: {
    delivery: true,
    big: true,
  },
};
