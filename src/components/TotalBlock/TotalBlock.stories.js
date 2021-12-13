import React from 'react';
import { TotalBlock } from './TotalBlock';

export default {
  title: 'Basic/TotalBlock',
  component: TotalBlock,
};

const Template = (args) => <TotalBlock {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  count: 7,
  cartAmount: 4424,
  total: 4396,
  discountBenefit: 228,
};
