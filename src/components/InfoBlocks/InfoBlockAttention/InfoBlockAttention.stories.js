import React from 'react';

import { InfoBlockAttention } from './InfoBlockAttention';

export default {
  title: 'Basic/InfoBlock',
  component: InfoBlockAttention,
};

const Template = (args) => <InfoBlockAttention {...args} />;

export const Basic = Template.bind({});

Basic.args = {};
