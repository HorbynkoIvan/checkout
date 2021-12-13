import React from 'react';
import { PaginationCustom } from './PaginationCustom';

export default {
  title: 'Basic/PaginationCustom',
  component: <PaginationCustom />,
};

const Template = (args) => <PaginationCustom {...args} />;

export const Primary = Template.bind({});
