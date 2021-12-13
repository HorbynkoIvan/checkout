import React from 'react';
import { RatingStar } from './RatingStar';

export default {
  title: 'Basic/RatingStar',
  component: <RatingStar />,
};

const Template = (args) => <RatingStar {...args} />;

export const Primary = Template.bind({});
