import React from 'react';
import Tabs from './index';

export default {
  title: 'Basic/Tabs',
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: [
    { title: 'Корзина (7)' },
    { title: 'Корзина (7)' },
    { title: 'Корзина (7)' },
    { title: 'Корзина (7)' },
    { title: 'Корзина (7)' },
  ],
};
