import React from 'react';
import { InfoLabel } from './InfoLabel';

export default {
  title: 'Basic/InfoLabel',
  component: <InfoLabel />,
};

const Template = (args) => <InfoLabel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  present: true,
};

export const Big = Template.bind({});

Big.args = {
  warning: true,
  big: true,
};
