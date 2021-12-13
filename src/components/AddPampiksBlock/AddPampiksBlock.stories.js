import React from 'react';
import AddPampiksBlock from './index';

export default {
  title: 'Basic/AddPampiksBlock',
  component: AddPampiksBlock,
};

const Template = (args) => <AddPampiksBlock {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  count: '49 990',
};
