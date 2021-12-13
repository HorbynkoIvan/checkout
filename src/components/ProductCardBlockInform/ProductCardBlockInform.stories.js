import React from 'react';
import { ProductCardBlockInform } from './ProductCardBlockInform';

export default {
  title: 'Basic/ProductCardBlockInform',
  component: <ProductCardBlockInform />,
};

const Template = (args) => <ProductCardBlockInform {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: {
    type: '',
    text: 'Default',
    tooltipText: '',
  },
};

export const Oversized = Template.bind({});

Oversized.args = {
  data: {
    type: 'oversized',
    text: 'Крупногабаритный товар',
    tooltipText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aut beatae blanditiis cum cupiditate minima, natus omnis placeat possimus quaerat quam rem saepe, similique suscipit temporibus ut. Accusamus at autem consequuntur, dolorem, esse expedita facilis fugit harum illum neque non nostrum nulla omnis pariatur possimus quas recusandae vel veritatis!',
  },
};

export const Warning = Template.bind({});

Warning.args = {
  data: {
    text: 'Добавь еще 2 и получи 1 в подарок',
    type: 'warning',
    tooltipText: '',
  },
};

export const PriceUp = Template.bind({});

PriceUp.args = {
  data: {
    text: 'Цена поднялась',
    type: 'priceUp',
    tooltipText: '',
  },
};

export const PriceDown = Template.bind({});

PriceDown.args = {
  data: {
    text: 'Цена снизилась',
    type: 'priceDown',
    tooltipText: '',
  },
};
