import React from 'react';
import { ProductCountSelector } from './ProductCountSelector';

export default {
  title: 'Selectors/ProductCountSelector',
  component: ProductCountSelector,
};

const Template = (args) => <ProductCountSelector {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: [
    {
      label: '148',
      value: '148 шт.',
    },
    {
      label: '96',
      value: '96 шт.',
    },
  ],
};
