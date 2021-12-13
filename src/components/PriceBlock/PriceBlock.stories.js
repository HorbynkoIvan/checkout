import React from 'react';
import PriceBlock from './index';

export default {
  title: 'Basic/PriceBlock',
  component: PriceBlock,
};

const Template = (args) => <PriceBlock {...args} />;

export const PriceBlockRow = Template.bind({});

PriceBlockRow.args = {
  price: '34 999',
  priceOld: '35 179',
  priceForOne: '3,84',
};

export const PriceBlockRowReverse = Template.bind({});

PriceBlockRowReverse.args = {
  price: '34 999',
  priceOld: '35 179',
  priceForOne: '3,84',
  directionRowReverse: true,
};

export const PriceForOneBlockColumn = Template.bind({});

PriceForOneBlockColumn.args = {
  price: '34 999',
  priceOld: '35 179',
  priceForOne: '3,84',
  directionColumn: true,
};
